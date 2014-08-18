'use strict';

var Wreck       = require('wreck');
var async       = require('async');


// copy relevant convienient constants
var config                = require('../config');
var API_ENDPOINT          = config.API_ENDPOINT;
var SUPPORTED_CURRENCIES  = config.SUPPORTED_CURRENCIES;


function getTickerUrls(currencies) {
  var suffix = currencies.length === 1 ? '/' + currencies[0] : '';
  var urls = [
    API_ENDPOINT + 'rates' + suffix
  ];

  return urls;
};

function formatResponse(currencies, results, callback) {
  if (currencies.length > 1)
    results = results[0];

  var out = results.reduce(function(prev, current) {
    if (currencies.indexOf(current.code) !== -1) {
      prev[current.code] = {
        currency: current.code,
        rates: {
          ask: current.rate,
          bid: current.rate
        }
      };
    }

    return prev;
  }, {});

  callback(null, out);
};


exports.ticker = function ticker(currencies, callback) {
  if (typeof currencies === 'string')
    currencies = [currencies];

  currencies.sort();

  if(currencies.length === 0)
    return callback(new Error('Currency not specified'));

  for (var i=0; i<currencies.length; i++)
    if (SUPPORTED_CURRENCIES.indexOf(currencies[i]) === -1)
      return callback(new Error('Unsupported currency: ' + currencies[i]));

  var urls = getTickerUrls(currencies);

  // change each url on the list into a download job
  var downloadList = urls.map(function(url) {
    return function(cb) {
      Wreck.get(url, { json:true }, function(err, res, payload) {
        cb(err, payload);
      });
    }
  });

  async.parallel(downloadList, function(err, results) {
    if (err) return callback(err);

    formatResponse(currencies, results, callback);
  });
};

