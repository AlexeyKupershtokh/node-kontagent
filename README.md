node-kontagent
==============

Unofficial Kontagent Node.js SDK

# Installation
```sh
npm install kontagent
```

# Usage
```js
var KontagentApi = require('..');
var ktApi = new KontagentApi('23476987657438245', { useTestServer: true });
ktApi.trackApplicationAdded('123', {uniqueTrackingTag: 111}, function(err, res) {
  if (err) return console.error(err.stack);
  console.log('ok');
});
```

# Notes

Since node-kontagent uses and `http` module you may want to adjust
[http.globalAgent.maxSockets](http://nodejs.org/api/http.html#http_agent_maxsockets).

In this module semantics `successCallback` is not a success callback actually. It's supposed to be a regular callback
with 2 arguments `(err, http.IncomingMessage res)` where either err is an Error or res is an
[http.IncomingMessage](http://nodejs.org/api/http.html#http_http_incomingmessage).
