node-kontagent
==============

Unofficial Kontagent Node.js SDK

# Installation
```sh
npm install kontagent
```

# Usage
```
var KontagentApi = require('kontagent');
var ktApi = new KontagentApi();
```

# Notes

Since node-kontagent uses and `http` module you may want to adjust
[http.globalAgent.maxSockets](http://nodejs.org/api/http.html#http_agent_maxsockets).

In this module semantics `successCallback` is not a success callback actually. It's supposed to be a regular callback
with 2 arguments `(err, http.IncomingMessage res)` where either err is an Error or res is an
[http.IncomingMessage](http://nodejs.org/api/http.html#http_http_incomingmessage).
