Array.prototype.myForEach = function (cb, passedThis) {

    var T, k;

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

            cb.call(T, kValue, k, Obj);
        }

        k++;
    }

};