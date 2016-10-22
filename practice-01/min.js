'use strict';

var arr = [5, 48, -8, 9, 0, -2, -468, 33, -2],
    i,
    min = 0;

// MIN
for (i = arr.length; i--;) {
    if (min > arr[i]) {
        min = arr[i];
    }
}
console.log(min);