// is@3.3.2 downloaded from https://ga.jspm.io/npm:is@3.3.2/index.js

var n={};
/**!
 * is
 * the definitive JavaScript type testing library
 *
 * @copyright 2013-2014 Enrico Marino / Jordan Harband
 * @license MIT
 */var e=Object.prototype;var t=e.hasOwnProperty;var r=e.toString;var i;typeof Symbol==="function"&&(i=Symbol.prototype.valueOf);var o;typeof BigInt==="function"&&(o=BigInt.prototype.valueOf);var u=function(n){return n!==n};var a={boolean:1,number:1,string:1,undefined:1};var f=/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;var l=/^[A-Fa-f0-9]+$/;var c={};
/**
 * is.type
 * Test if `value` is a type of `type`.
 *
 * @param {*} value value to test
 * @param {String} type type
 * @return {Boolean} true if `value` is a type of `type`, false otherwise
 * @api public
 */c.a=c.type=function(n,e){return typeof n===e};
/**
 * is.defined
 * Test if `value` is defined.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is defined, false otherwise
 * @api public
 */c.defined=function(n){return typeof n!=="undefined"};
/**
 * is.empty
 * Test if `value` is empty.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is empty, false otherwise
 * @api public
 */c.empty=function(n){var e=r.call(n);var i;if(e==="[object Array]"||e==="[object Arguments]"||e==="[object String]")return n.length===0;if(e==="[object Object]"){for(i in n)if(t.call(n,i))return false;return true}return!n};
/**
 * is.equal
 * Test if `value` is equal to `other`.
 *
 * @param {*} value value to test
 * @param {*} other value to compare with
 * @return {Boolean} true if `value` is equal to `other`, false otherwise
 */c.equal=function(n,e){if(n===e)return true;var t=r.call(n);var i;if(t!==r.call(e))return false;if(t==="[object Object]"){for(i in n)if(!c.equal(n[i],e[i])||!(i in e))return false;for(i in e)if(!c.equal(n[i],e[i])||!(i in n))return false;return true}if(t==="[object Array]"){i=n.length;if(i!==e.length)return false;while(i--)if(!c.equal(n[i],e[i]))return false;return true}return t==="[object Function]"?n.prototype===e.prototype:t==="[object Date]"&&n.getTime()===e.getTime()};
/**
 * is.hosted
 * Test if `value` is hosted by `host`.
 *
 * @param {*} value to test
 * @param {*} host host to test with
 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
 * @api public
 */c.hosted=function(n,e){var t=typeof e[n];return t==="object"?!!e[n]:!a[t]};
/**
 * is.instance
 * Test if `value` is an instance of `constructor`.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an instance of `constructor`
 * @api public
 */c.instance=c.instanceof=function(n,e){return n instanceof e};
/**
 * is.nil / is.null
 * Test if `value` is null.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is null, false otherwise
 * @api public
 */c.nil=c.null=function(n){return n===null};
/**
 * is.undef / is.undefined
 * Test if `value` is undefined.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is undefined, false otherwise
 * @api public
 */c.undef=c.undefined=function(n){return typeof n==="undefined"};
/**
 * is.args
 * Test if `value` is an arguments object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */c.args=c.arguments=function(n){var e=r.call(n)==="[object Arguments]";var t=!c.array(n)&&c.arraylike(n)&&c.object(n)&&c.fn(n.callee);return e||t};
/**
 * is.array
 * Test if 'value' is an array.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an array, false otherwise
 * @api public
 */c.array=Array.isArray||function(n){return r.call(n)==="[object Array]"};
/**
 * is.arguments.empty
 * Test if `value` is an empty arguments object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
 * @api public
 */c.args.empty=function(n){return c.args(n)&&n.length===0};
/**
 * is.array.empty
 * Test if `value` is an empty array.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an empty array, false otherwise
 * @api public
 */c.array.empty=function(n){return c.array(n)&&n.length===0};
/**
 * is.arraylike
 * Test if `value` is an arraylike object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */c.arraylike=function(n){return!!n&&!c.bool(n)&&t.call(n,"length")&&isFinite(n.length)&&c.number(n.length)&&n.length>=0};
/**
 * is.bool
 * Test if `value` is a boolean.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a boolean, false otherwise
 * @api public
 */c.bool=c.boolean=function(n){return r.call(n)==="[object Boolean]"};
/**
 * is.false
 * Test if `value` is false.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is false, false otherwise
 * @api public
 */c.false=function(n){return c.bool(n)&&Boolean(Number(n))===false};
/**
 * is.true
 * Test if `value` is true.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is true, false otherwise
 * @api public
 */c.true=function(n){return c.bool(n)&&Boolean(Number(n))===true};
/**
 * is.date
 * Test if `value` is a date.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a date, false otherwise
 * @api public
 */c.date=function(n){return r.call(n)==="[object Date]"};
/**
 * is.date.valid
 * Test if `value` is a valid date.
 *
 * @param {*} value value to test
 * @returns {Boolean} true if `value` is a valid date, false otherwise
 */c.date.valid=function(n){return c.date(n)&&!isNaN(Number(n))};
/**
 * is.element
 * Test if `value` is an html element.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an HTML Element, false otherwise
 * @api public
 */c.element=function(n){return n!==void 0&&typeof HTMLElement!=="undefined"&&n instanceof HTMLElement&&n.nodeType===1};
/**
 * is.error
 * Test if `value` is an error object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an error object, false otherwise
 * @api public
 */c.error=function(n){return r.call(n)==="[object Error]"};
/**
 * is.fn / is.function (deprecated)
 * Test if `value` is a function.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a function, false otherwise
 * @api public
 */c.fn=c.function=function(n){var e=typeof window!=="undefined"&&n===window.alert;if(e)return true;var t=r.call(n);return t==="[object Function]"||t==="[object GeneratorFunction]"||t==="[object AsyncFunction]"};
/**
 * is.number
 * Test if `value` is a number.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a number, false otherwise
 * @api public
 */c.number=function(n){return r.call(n)==="[object Number]"};
/**
 * is.infinite
 * Test if `value` is positive or negative infinity.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
 * @api public
 */c.infinite=function(n){return n===Infinity||n===-Infinity};
/**
 * is.decimal
 * Test if `value` is a decimal number.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a decimal number, false otherwise
 * @api public
 */c.decimal=function(n){return c.number(n)&&!u(n)&&!c.infinite(n)&&n%1!==0};
/**
 * is.divisibleBy
 * Test if `value` is divisible by `n`.
 *
 * @param {Number} value value to test
 * @param {Number} n dividend
 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
 * @api public
 */c.divisibleBy=function(n,e){var t=c.infinite(n);var r=c.infinite(e);var i=c.number(n)&&!u(n)&&c.number(e)&&!u(e)&&e!==0;return t||r||i&&n%e===0};
/**
 * is.integer
 * Test if `value` is an integer.
 *
 * @param value to test
 * @return {Boolean} true if `value` is an integer, false otherwise
 * @api public
 */c.integer=c.int=function(n){return c.number(n)&&!u(n)&&n%1===0};
/**
 * is.maximum
 * Test if `value` is greater than 'others' values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is greater than `others` values
 * @api public
 */c.maximum=function(n,e){if(u(n))throw new TypeError("NaN is not a valid value");if(!c.arraylike(e))throw new TypeError("second argument must be array-like");var t=e.length;while(--t>=0)if(n<e[t])return false;return true};
/**
 * is.minimum
 * Test if `value` is less than `others` values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is less than `others` values
 * @api public
 */c.minimum=function(n,e){if(u(n))throw new TypeError("NaN is not a valid value");if(!c.arraylike(e))throw new TypeError("second argument must be array-like");var t=e.length;while(--t>=0)if(n>e[t])return false;return true};
/**
 * is.nan
 * Test if `value` is not a number.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is not a number, false otherwise
 * @api public
 */c.nan=function(n){return!c.number(n)||n!==n};
/**
 * is.even
 * Test if `value` is an even number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an even number, false otherwise
 * @api public
 */c.even=function(n){return c.infinite(n)||c.number(n)&&n===n&&n%2===0};
/**
 * is.odd
 * Test if `value` is an odd number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an odd number, false otherwise
 * @api public
 */c.odd=function(n){return c.infinite(n)||c.number(n)&&n===n&&n%2!==0};
/**
 * is.ge
 * Test if `value` is greater than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */c.ge=function(n,e){if(u(n)||u(e))throw new TypeError("NaN is not a valid value");return!c.infinite(n)&&!c.infinite(e)&&n>=e};
/**
 * is.gt
 * Test if `value` is greater than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */c.gt=function(n,e){if(u(n)||u(e))throw new TypeError("NaN is not a valid value");return!c.infinite(n)&&!c.infinite(e)&&n>e};
/**
 * is.le
 * Test if `value` is less than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if 'value' is less than or equal to 'other'
 * @api public
 */c.le=function(n,e){if(u(n)||u(e))throw new TypeError("NaN is not a valid value");return!c.infinite(n)&&!c.infinite(e)&&n<=e};
/**
 * is.lt
 * Test if `value` is less than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if `value` is less than `other`
 * @api public
 */c.lt=function(n,e){if(u(n)||u(e))throw new TypeError("NaN is not a valid value");return!c.infinite(n)&&!c.infinite(e)&&n<e};
/**
 * is.within
 * Test if `value` is within `start` and `finish`.
 *
 * @param {Number} value value to test
 * @param {Number} start lower bound
 * @param {Number} finish upper bound
 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
 * @api public
 */c.within=function(n,e,t){if(u(n)||u(e)||u(t))throw new TypeError("NaN is not a valid value");if(!c.number(n)||!c.number(e)||!c.number(t))throw new TypeError("all arguments must be numbers");var r=c.infinite(n)||c.infinite(e)||c.infinite(t);return r||n>=e&&n<=t};
/**
 * is.object
 * Test if `value` is an object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an object, false otherwise
 * @api public
 */c.object=function(n){return r.call(n)==="[object Object]"};
/**
 * is.primitive
 * Test if `value` is a primitive.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a primitive, false otherwise
 * @api public
 */c.primitive=function(n){return!n||!(typeof n==="object"||c.object(n)||c.fn(n)||c.array(n))};
/**
 * is.hash
 * Test if `value` is a hash - a plain object literal.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a hash, false otherwise
 * @api public
 */c.hash=function(n){return c.object(n)&&n.constructor===Object&&!n.nodeType&&!n.setInterval};
/**
 * is.regexp
 * Test if `value` is a regular expression.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a regexp, false otherwise
 * @api public
 */c.regexp=function(n){return r.call(n)==="[object RegExp]"};
/**
 * is.string
 * Test if `value` is a string.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is a string, false otherwise
 * @api public
 */c.string=function(n){return r.call(n)==="[object String]"};
/**
 * is.base64
 * Test if `value` is a valid base64 encoded string.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
 * @api public
 */c.base64=function(n){return c.string(n)&&(!n.length||f.test(n))};
/**
 * is.hex
 * Test if `value` is a valid hex encoded string.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
 * @api public
 */c.hex=function(n){return c.string(n)&&(!n.length||l.test(n))};
/**
 * is.symbol
 * Test if `value` is an ES6 Symbol
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a Symbol, false otherise
 * @api public
 */c.symbol=function(n){return typeof Symbol==="function"&&r.call(n)==="[object Symbol]"&&typeof i.call(n)==="symbol"};
/**
 * is.bigint
 * Test if `value` is an ES-proposed BigInt
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a BigInt, false otherise
 * @api public
 */c.bigint=function(n){return typeof BigInt==="function"&&r.call(n)==="[object BigInt]"&&typeof o.call(n)==="bigint"};n=c;var b=n;export{b as default};

