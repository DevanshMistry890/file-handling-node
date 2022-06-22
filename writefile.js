// include file system module
 
var fs = require('fs');
 
var data = "Hello ! This is extra data"
 
// write data to file sample.html
fs.writeFile('newfile.txt', data,
    // callback function that is called after writing file is done
    function(err) {     
        if (err) throw err;
        // if no error
        console.log("Data is written to file successfully.")
});