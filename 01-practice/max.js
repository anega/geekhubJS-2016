'use strict';

var arr = [5, 48, -8, 9, 0, -2, -468, 33, -2],
    i,
    max = 0;

// MAX
for (i = arr.length; i--;) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
console.log(max);