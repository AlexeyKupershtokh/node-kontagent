node-kontagent
==============

Kontagent Node.js SDK (Unofficial).
It's based on [JavaScript SDK](http://docs.kontagent.com/docs/technical-leads/api-sdk-spec/).

# Installation
```sh
npm install kontagent
```

# Usage
```js
var KontagentApi = require('kontagent');
var ktApi = new KontagentApi('23476987657438245', { useTestServer: true });
ktApi.trackApplicationAdded('123', {uniqueTrackingTag: 111}, function(err, res) {
  if (err) return console.error(err.stack);
  console.log('ok');
});
```

# Notes

Since node-kontagent uses the `http` module you may want to adjust
[http.globalAgent.maxSockets](http://nodejs.org/api/http.html#http_agent_maxsockets).

In this module semantics `successCallback` is not a success callback actually. It's supposed to be a regular callback
with 2 arguments `(err, res)` where either err is an Error or res is an
[http.IncomingMessage](http://nodejs.org/api/http.html#http_http_incomingmessage).

# Debug

This package provides two [debug](https://github.com/visionmedia/debug) symbols: kontagent and kontagent-http.

You can run
```sh
DEBUG=kontagent,kontagent-http node example.js
```
(or any combination of those) to get debug information like this:
```
wicked@wnote:~/node-kontagent/examples$ DEBUG=kontagent,kontagent-http node example.js
  kontagent apa +0ms { s: '123', u: 111 } function undefined
  kontagent-http http://test-server.kontagent.com/api/v1/23476987657438245/apa/?s=123&u=111&sdk=j02&ts=1365309730 +0ms function
ok
```