"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var ffi = require("ffi-napi");
var ref = require("ref-napi");
var ArrayType = require('ref-array-di')(ref);
var repl = require('repl');
var intArray = ArrayType(ref.types.int);
var addLib = ffi.Library("./src/sort", {
    'bubleSort': [intArray, [intArray, "int"]]
});
var bubbleSort = function (array) {
    var arr = __spreadArray([], array, true);
    var length = arr.length;
    for (var iteration = 0; iteration < length - 1; iteration++) {
        for (var i = length - 1; i > iteration; i--) {
            if (arr[i - 1] > arr[i]) {
                var tmp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    return arr;
};
var array1 = [1, 5, 6, 2, 1, 9, 4, 23, 42, 3, 5, 6, 2, 324, 2, 6434, 5, 34, 43, 46];
var randomArray = function (length, max) { return __spreadArray([], new Array(length), true).map(function () { return Math.round(Math.random() * max); }); };
array1 = randomArray(100000, 10000);
console.time("js bubble sort");
var jsOutput = bubbleSort(array1);
console.timeEnd("js bubble sort");
console.log("js out: ", jsOutput);
var Carray = new intArray(array1);
console.time("C bubble sort");
var output = addLib.bubleSort(Carray, Carray.length);
console.timeEnd("C bubble sort");
var resultCArr = [];
for (var i = 0; i < Carray.length; i++) {
    resultCArr[i] = output[i];
}
console.log("C output ", resultCArr);
