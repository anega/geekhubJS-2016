Array.prototype.mySort = function (compareFunction) {
    var arr = Object(this),
    len = arr.length - 1,
        i, swapped;

    do {
        swapped = false;
        for (i = 0; i < len; i++) {
            if (typeof compareFunction == 'function') {
                if (compareFunction(arr[i], arr[i + 1]) > 0) {
                    console.log('arr[i]' + arr[i]);
                    console.log('arr[i + 1]' + arr[i + 1]);
                    var temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }   
            } else if (String(arr[i]) > String(arr[i + 1])) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
};