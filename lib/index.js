var http = require('http');
var querystring = require('querystring');

module.exports.nicify = function(js, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  options = options || {};
  var query = {
    pretty: (options.pretty === undefined)? 1 : (options.pretty)? 1 : 0,
    packers: (options.packers === undefined)? 1 : (options.packers)? 1 : 0,
    transpile: (options.transpile === undefined)? 1 : (options.transpile)? 1 : 0,
    rename: (options.rename === undefined)? 1 : (options.rename)? 1 : 0,
    types: (options.types === undefined)? 1 : (options.types)? 1 : 0,
    suggest: (options.suggest === undefined)? 0 : (options.suggest)? 1 : 0,
  };

  var reqOptions = {
    hostname: 'www.jsnice.org',
    path: '/beautify?' + querystring.stringify(query),
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
