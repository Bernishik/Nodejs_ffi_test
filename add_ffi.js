"use strict";
exports.__esModule = true;
var ffi = require("ffi-napi");
var addLib = ffi.Library("./src/simpleAdd", {
    'add': ['int', ["int", "int"]]
});
var output = addLib.add(1, 2);
console.log(output);
