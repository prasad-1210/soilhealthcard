var fs = require('fs'),
    parser = require('xml2json');

module.exports = {
  upload(req, res) {
    var csvData = [];
    res.setTimeout(0);
    req.file('avatar')
    .upload({
      maxBytes: 100 * 1000000

    }, (err, uploadedFiles) => {
      if (err) return res.serverError(err);
	    console.log(err, uploadedFiles[0].fd);
      fs.readFile(uploadedFiles[0].fd, function(err, data) {
          var json = JSON.parse(parser.toJson(data));
          console.log(JSON.stringify(json));
          res.view('file/layout',{ data : json.Report });
      });
  });
  },
};

