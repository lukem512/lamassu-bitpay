'use strict';

var _ = require('lodash');


exports.NAME = 'Bitpay';
exports.SUPPORTED_MODULES = ['ticker'];

// list of currencies updated on 2014-08-17 00:35
//    from https://bitpay.com/api/rates
exports.SUPPORTED_CURRENCIES = [
  'USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CNY', 'CHF', 'SEK', 'NZD', 'KRW',
  'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AWG', 'AZN', 'BAM', 'BBD',
  'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP',
  'BYR', 'BZD', 'CDF', 'CLF', 'CLP', 'COP', 'CRC', 'CVE', 'CZK', 'DJF', 'DKK',
  'DOP', 'DZD', 'EEK', 'EGP', 'ETB', 'FJD', 'FKP', 'GEL', 'GHS', 'GIP', 'GMD',
  'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR',
  'IQD', 'ISK', 'JEP', 'JMD', 'JOD', 'KES', 'KGS', 'KHR', 'KMF', 'KWD', 'KYD',
  'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTL', 'LVL', 'LYD', 'MAD', 'MDL',
  'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR',
  'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP',
  'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR',
  'SDG', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB',
  'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'UYU',
  'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XAG', 'XAU', 'XCD', 'XOF', 'XPF',
  'YER', 'ZAR', 'ZMW', 'ZWL'];

exports.API_ENDPOINT = 'https://bitpay.com/api/';


exports.SATOSHI_FACTOR = 1e8;
exports.FUDGE_FACTOR = NaN;

exports.config = function config(config) {
  if (config) _.merge(exports, config, true);
};

exports.supports = function supports(moduleName) {
  return exports.SUPPORTED_MODULES.indexOf(moduleName) !== -1;
};
