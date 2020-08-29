import { inRange } from './index.js';
// Test 1
if (inRange([1, 10], 0))
    console.log('test 1 FAILED');
else
    console.log('test 1 passed');
// Test 2
if (inRange([1, 10], 11))
    console.log('test 2 FAILED');
else
    console.log('test 2 passed');
// Test 3
if (inRange([1, 10], 1))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
if (inRange(['-1', '0'], 0))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5
if (inRange([-10, 0], -11))
    console.log('test 5 FAILED');
else
    console.log('test 5 passed');
// Test 6
if (inRange([-20, -10], -10))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7
if (inRange([-10, 0], 1))
    console.log('test 7 FAILED');
else
    console.log('test 7 passed');
// Test 8
if (inRange([-10, 0], '0'))
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9
if (inRange([10, 50], 10))
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 10
if (inRange([10, 50], 50))
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11
if (inRange([9.5, 20.2], 9.49))
    console.log('test 11 FAILED');
else
    console.log('test 11 passed');
// Test 12
let errorTriggered = false;
try {
    inRange([20, 10], 6);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
// Test 13
errorTriggered = false;
try {
    inRange(6, [0, 10]);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 13 passed');
else
    console.log('test 13 FAILED');


// Test 15
errorTriggered = false;
try {
    x = inRange([1], 5);
	console.log(x);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 15 passed');
else
    console.log('test 15 FAILED');


// Test 16
errorTriggered = false;
try {
    var x = inRange();
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 16 passed');
else
    console.log('test 16 FAILED');



// ad-hoc tests:
if (inRange(['20', '100'], 1))
	console.log('test 3 passed');
else
	console.log('test 3 FAILED');
