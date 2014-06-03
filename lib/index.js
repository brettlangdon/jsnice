var http = require('http');

module.exports.nicify = function(js, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  options = options || {};

  var reqOptions = {
    hostname: 'www.jsnice.org',
    path: '/beautify?pretty=1&rename=1&types=1&suggest=0',
    port: 80,
    method: 'POST',
  };
  var req = http.request(reqOptions, function(res) {
    var data = '';
    res.on('data', function(chunk) {
      data += chunk.toString();
    });

    res.on('end', function() {
      data = JSON.parse(data);
      callback(null, data);
    });
  });

  req.on('error', function(err) {
    callback(err, null);
  });

  req.write(js);
  req.end();
};
