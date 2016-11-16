function getAndPrintHTML (options) {
  var allData = "";
  var theWebsite = {
    host: options['host'],
    path: options['path']
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      allData += data;
    });
  });
  console.log(allData);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);