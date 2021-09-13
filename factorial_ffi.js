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
function factorial(max) {
    var i = max;
    var result = 1;
    while (i >= 2) {
        result *= i--;
    }
    return result;
}
console.time("js fact");
var jsOutput = factorial(parseInt(process.argv[2]));
console.log("js out: ", jsOutput);
console.timeEnd("js fact");
console.time("C fact");
var output = libFactorial.factorial(parseInt(process.argv[2]));
console.log("C output ", output);
console.timeEnd("C fact");
