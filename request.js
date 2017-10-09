var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error',function(err){
    throw err;
  })
  .on('response',function(response){
    console.log("Response Status message",response.statusMessage);
    console.log("(response.headers['content-type'])",response.headers['content-type']);
    console.log("Start Download");
  })


  .pipe(fs.createWriteStream('./future.jpg'))

  .on('finish',function(){console.log("Downloading complete")});