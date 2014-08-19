'use strict';

var _ = require('lodash');


exports.NAME = 'Bitpay';
exports.SUPPORTED_MODULES = ['ticker'];
exports.API_ENDPOINT = 'https://bitpay.com/api/';


exports.config = function config(config) {
  if (config) _.merge(exports, config);
};
