'use strict';

module.exports = function deepSeal (o) {

    Object.seal(o);

    Object.getOwnPropertyNames(o).forEach(function (prop) {

        if (o.hasOwnProperty(prop)
        && o[prop] !== null
        && (typeof o[prop] === "object" || typeof o[prop] === "function")
        && !Object.isSealed(o[prop])) {
            deepSeal(o[prop]);
        }
    });

    return o;
};
