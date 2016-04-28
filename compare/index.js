var fs = require("fs");
var util = require("util");
var mustache = require("mustache");
var _ = require("underscore");
var express = require('express');
var app = express();

// Settings
var appPort = 3000;
var screenshotsFolder = "../screenshots_test";
var fileInfo = 'test';
var osList = ['windows', 'mac', 'chrome'];



var getFileInfo = function (folder) {
  var dir = fs.readdirSync(folder);
  var data = [];
  var browsers = [];
  var operatingSystems = [];

  dir.forEach(function(os) {
    var folderOS = folder + '/' + os;
    if(fs.statSync(folderOS).isDirectory()) {
      
      //find browsers
      var dirBrowser = fs.readdirSync(folderOS);
      dirBrowser.forEach(function(browser) {
        var folderBrowser = folderOS + '/' + browser;
        if(fs.statSync(folderBrowser).isDirectory()) {

          //find screenshots
          var dirFile = fs.readdirSync(folderBrowser);
          dirFile.forEach(function(file) {
            var fileScreenshot = fs.statSync(folderBrowser + '/' + file);
            if(!fileScreenshot.isDirectory()) {
              var info = util.inspect(fileScreenshot);

              if(!data[file]) { data[file] = []; }
              data[file].push({
                name: file,
                browser: browser,
                os: os
              });

              browsers.push(browser);
              operatingSystems.push(os);
            }
          });
        }
      });
    }
  });

  var info = {
    files: data,
    browsers: _.uniq(browsers),
    operatingSystems: _.uniq(operatingSystems)
  };

  return info;
}

app.get('/data', function(req, res) {
  res.json(getFileInfo(screenshotsFolder));
});

app.get('/', function(req, res) {
  var info = getFileInfo(screenshotsFolder);

  fs.readFile('www/index.html', 'utf8', function(err, html) {
    if(err) {
      res.send('Error');
    }

    var fileInfo = info.files;
    var data = {
      screenshots: [],
      browser: info.browsers,
      os: info.operatingSystems
    };

    // make template useable data
    for (var key in fileInfo) {
      if (fileInfo.hasOwnProperty(key)) {
        data.screenshots.push({
          name: key,
          info: fileInfo[key]
        });
      }
    }

    var template = mustache.render(html, data);
    res.send(template);
  })
});

app.use(express.static(__dirname + '/www'));
app.use('/screenshots', express.static(__dirname + '/../screenshots_test'));

app.listen(appPort, function(){
  console.log('started listening on ' + appPort);
});
