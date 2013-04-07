var vm = require('vm');
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');

var js_sdk = __dirname + '/js-sdk/kontagent_api.js';
var sandbox = {};

// load original Kontagent SDK into module.exports
vm.runInNewContext(fs.readFileSync(js_sdk), sandbox, fs.realpathSync(js_sdk));

// Inject methods adapted for Node.js

var KontagentApi = module.exports = sandbox.KontagentApi;

/*
 * Sends an HTTP request by creating an <img> tag given a URL.
 *
 * @param {string} url The request URL
 * @param {function} [successCallback] The callback function
 */
KontagentApi.prototype._sendHttpRequestViaImgTag = function(url, successCallback)
{
  http
    .get(url, function(res) {
      if (successCallback) successCallback(null, res);
    })
    .on('error', function(err) {
      if (successCallback) successCallback(err);
    });
};

/*
 * Generate URL-encoded query string (same as PHP's http_build_query())
 *
 * @param {object} data The object containing key, value data to encode
 *
 * @return {string) A URL-encoded string
 */
KontagentApi.prototype._httpBuildQuery = querystring.stringify;

/*
 * Converts a string to the base-64 encoded version of the string.
 *
 * @param {string} data The data string to be encoded
 *
 * @return {string} The base64 encoded string
 */
KontagentApi.prototype._base64Encode = function(data) {
  return new Buffer(data).toString('base64');
};

/*
 * Inject custom urls
 *
 * @param {object} urls
 * @param {string} urls.baseApiUrl
 * @param {string} urls.baseTestServerUrl
 *
 * @return {string}
 */
KontagentApi.prototype.setUrls = function (urls) {
  urls = urls || {};
  this._baseApiUrl = urls.hasOwnProperty('baseApiUrl') ? urls['baseApiUrl'] : "api.geo.kontagent.net/api/v1/";
  this._baseTestServerUrl = urls.hasOwnProperty('baseTestServerUrl') ? urls['baseTestServerUrl'] : "test-server.kontagent.com/api/v1/";
};
