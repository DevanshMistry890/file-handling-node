// include file system module
var fs = require('fs');
fs.readFile('main.txt',
    // callback function that is called when reading file is done
    function(err, data) {       
        if (err) throw err;
        // data is a buffer containing file content
        console.log(data.toString('utf8'))
});