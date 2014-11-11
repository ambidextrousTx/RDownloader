// testing if Node actually does work asynchronously
//
fs = require('fs')
console.log('first');
fs.readFile('test.js', function(error, data) {
    console.log(data);
});
console.log('second');
console.log('third');
