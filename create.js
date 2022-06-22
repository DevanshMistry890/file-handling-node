// include node fs module
var fs = require('fs');
 
// writeFile function with filename, content and callback function
fs.writeFile('newfile.txt', 'This is new file created from node js', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});