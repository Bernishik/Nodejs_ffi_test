"use strict";
exports.__esModule = true;
var ffi = require("ffi-napi");
var libFactorial = ffi.Library("./src/factorial", {
    'factorial': ['uint64', ['int']]
});
if (process.argv.length < 3) {
    console.log('Arguments: ' + process.argv[0] + ' ' + process.argv[1] + ' <max>');
    process.exit();
}
var output = libFactorial.factorial(parseInt(process.argv[2]));
console.log("your output ", output);
