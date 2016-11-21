Array.prototype.myMap = function (cb, passedThis) {

    var T, k, newArr = [];

    if (this === null) {
        throw new TypeError('this is null or not defined.');
    }

    var Obj = Object(this);

    var len = Obj.length >>> 0;

    if (typeof cb !== 'function') {
        throw new TypeError(cb + ' is not a function.');
    }

    if (arguments.length > 1) {
        T = passedThis;
    }

    k = 0;

    while (k < len) {
        var kValue;

        if (k in Obj) {
            kValue = Obj[k];

            newArr.push(cb.call(T, kValue, k, Obj));
        }

        k++;
    }

    return newArr;

};