/*written by ajHurliman Nov 2, 2014 for Code Fellows
this takes stdin and tees it into stdout and a file
determined at run time as the third command line argument*/


'use strict';
var fs = require('fs');
var ws = fs.createWriteStream(process.argv[2]);

process.stdin.on('data', function(buf){
  ws.write(buf);
  process.stdout.write(buf);
});
