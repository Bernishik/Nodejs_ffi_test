"use strict";
exports.__esModule = true;
var ffi = require("ffi-napi");
var libHelloWorld = ffi.Library("./src/helloWorld", {
    'HelloWorld': ['int', []]
});
libHelloWorld.HelloWorld();
