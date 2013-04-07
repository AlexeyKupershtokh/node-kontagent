var KontagentApi = require('..');
var ktApi = new KontagentApi('23476987657438245', { useTestServer: true });
ktApi.trackApplicationAdded('123', {uniqueTrackingTag: 111}, function(err, res) {
  if (err) return console.error(err.stack);
  console.log('ok');
});
