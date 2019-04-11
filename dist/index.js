"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_finite_number_1 = require("error-if-not-finite-number");
function inRange(range, num) {
    if (range.length !== 2) {
        throw new Error("The range array must have exactly 2 numbers");
    }
    errorIfAnyArgumentIsNotNumber();
    if (range[0] > range[1]) {
        throw new Error('In the range array, the first number must be less than or' +
            ' equal to the second number');
    }
    return (num >= range[0] && num <= range[1]);
    function errorIfAnyArgumentIsNotNumber() {
        var args = range.concat([num]);
        var i = -1;
        while (++i < args.length)
            error_if_not_finite_number_1.errorIfNotFiniteNumber(args[i]);
    }
}
exports.inRange = inRange;
