'use strict';

var arr = [5, 48, -8, 9, 0, -2, -468, 33, -2],
    i = arr.length,
    sum = 0;

// SUM
while (i--) {
    if (typeof arr[i] === 'number') {
        sum += arr[i];
    }
}
console.log(sum);