(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.analytics = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
/**
 * Analytics.js
 *
 * (C) 2015 Segment.io Inc.
 */

var analytics = require('@segment/analytics.js-core');
var Integrations = require('./integrations');

/**
 * Expose the `analytics` singleton.
 */

module.exports = exports = analytics;

/**
 * Expose require.
 */

analytics.require = require;

/**
 * Expose `VERSION`.
 */

exports.VERSION = require('../package.json').version;

/**
 * Add integrations.
 */

Object.keys(Integrations).forEach(function(name) {
  analytics.use(Integrations[name]);
});

},{"../package.json":676,"./integrations":2,"@segment/analytics.js-core":24}],2:[function(require,module,exports){
/* eslint quote-props: off */
'use strict';

/*
 Add all integrations you want registered here.
 Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
 Make sure the integrations added are also installed and saved in the package.json
 */
module.exports = {
  'adroll': require('@segment/analytics.js-integration-adroll'),
  'adwords': require('@segment/analytics.js-integration-adwords'),
  'alexa': require('@segment/analytics.js-integration-alexa'),
  'amplitude': require('@segment/analytics.js-integration-amplitude'),
  'appcues': require('@segment/analytics.js-integration-appcues'),
  'atatus': require('@segment/analytics.js-integration-atatus'),
  'autosend': require('@segment/analytics.js-integration-autosend'),
  'awesm': require('@segment/analytics.js-integration-awesm'),
  'bing-ads': require('@segment/analytics.js-integration-bing-ads'),
  'blueshift': require('@segment/analytics.js-integration-blueshift'),
  'boomtrain': require('@segment/analytics.js-integration-boomtrain'),
  'bronto': require('@segment/analytics.js-integration-bronto'),
  'bugherd': require('@segment/analytics.js-integration-bugherd'),
  'bugsnag': require('@segment/analytics.js-integration-bugsnag'),
  'chameleon': require('@segment/analytics.js-integration-chameleon'),
  'chartbeat': require('@segment/analytics.js-integration-chartbeat'),
  'clicky': require('@segment/analytics.js-integration-clicky'),
  'comscore': require('@segment/analytics.js-integration-comscore'),
  'crazy-egg': require('@segment/analytics.js-integration-crazy-egg'),
  'curebit': require('@segment/analytics.js-integration-curebit'),
  'customerio': require('@segment/analytics.js-integration-customerio'),
  'drift': require('@segment/analytics.js-integration-drift'),
  'drip': require('@segment/analytics.js-integration-drip'),
  'elevio': require('@segment/analytics.js-integration-elevio'),
  'errorception': require('@segment/analytics.js-integration-errorception'),
  'evergage': require('@segment/analytics.js-integration-evergage'),
  'extole': require('@segment/analytics.js-integration-extole'),
  'facebook-conversion-tracking': require('@segment/analytics.js-integration-facebook-conversion-tracking'),
  'facebook-custom-audiences': require('@segment/analytics.js-integration-facebook-custom-audiences'),
  'facebook-pixel': require('@segment/analytics.js-integration-facebook-pixel'),
  'foxmetrics': require('@segment/analytics.js-integration-foxmetrics'),
  'frontleaf': require('@segment/analytics.js-integration-frontleaf'),
  'gauges': require('@segment/analytics.js-integration-gauges'),
  'get-satisfaction': require('@segment/analytics.js-integration-get-satisfaction'),
  'google-analytics': require('@segment/analytics.js-integration-google-analytics'),
  'google-tag-manager': require('@segment/analytics.js-integration-google-tag-manager'),
  'gosquared': require('@segment/analytics.js-integration-gosquared'),
  'heap': require('@segment/analytics.js-integration-heap'),
  'hellobar': require('@segment/analytics.js-integration-hellobar'),
  'hittail': require('@segment/analytics.js-integration-hittail'),
  'hubspot': require('@segment/analytics.js-integration-hubspot'),
  'improvely': require('@segment/analytics.js-integration-improvely'),
  'inspectlet': require('@segment/analytics.js-integration-inspectlet'),
  'intercom': require('@segment/analytics.js-integration-intercom'),
  'keen-io': require('@segment/analytics.js-integration-keen-io'),
  'kenshoo': require('@segment/analytics.js-integration-kenshoo'),
  'kissmetrics': require('@segment/analytics.js-integration-kissmetrics'),
  'klaviyo': require('@segment/analytics.js-integration-klaviyo'),
  'livechat': require('@segment/analytics.js-integration-livechat'),
  'lucky-orange': require('@segment/analytics.js-integration-lucky-orange'),
  'lytics': require('@segment/analytics.js-integration-lytics'),
  'madkudu': require('@segment/analytics.js-integration-madkudu'),
  'mixpanel': require('@segment/analytics.js-integration-mixpanel'),
  'mojn': require('@segment/analytics.js-integration-mojn'),
  'mouseflow': require('@segment/analytics.js-integration-mouseflow'),
  'mousestats': require('@segment/analytics.js-integration-mousestats'),
  'navilytics': require('@segment/analytics.js-integration-navilytics'),
  'nudgespot': require('@segment/analytics.js-integration-nudgespot'),
  'olark': require('@segment/analytics.js-integration-olark'),
  'optimizely': require('@segment/analytics.js-integration-optimizely'),
  'outbound': require('@segment/analytics.js-integration-outbound'),
  'parsely': require('@segment/analytics.js-integration-parsely'),
  'perfect-audience': require('@segment/analytics.js-integration-perfect-audience'),
  'pingdom': require('@segment/analytics.js-integration-pingdom'),
  'piwik': require('@segment/analytics.js-integration-piwik'),
  'preact': require('@segment/analytics.js-integration-preact'),
  'qualaroo': require('@segment/analytics.js-integration-qualaroo'),
  'quantcast': require('@segment/analytics.js-integration-quantcast'),
  'quanticmind': require('@segment/analytics.js-integration-quanticmind'),
  'ramen': require('@segment/analytics.js-integration-ramen'),
  'rollbar': require('@segment/analytics.js-integration-rollbar'),
  'route': require('@segment/analytics.js-integration-route'),
  'saasquatch': require('@segment/analytics.js-integration-saasquatch'),
  'satismeter': require('@segment/analytics.js-integration-satismeter'),
  'scratch-it': require('@segment/analytics.js-integration-scratch-it'),
  'segmentio': require('@segment/analytics.js-integration-segmentio'),
  'sentry': require('@segment/analytics.js-integration-sentry'),
  'simplereach': require('@segment/analytics.js-integration-simplereach'),
  'snapengage': require('@segment/analytics.js-integration-snapengage'),
  'spinnakr': require('@segment/analytics.js-integration-spinnakr'),
  'supporthero': require('@segment/analytics.js-integration-supporthero'),
  'taplytics': require('@segment/analytics.js-integration-taplytics'),
  'tapstream': require('@segment/analytics.js-integration-tapstream'),
  'trakio': require('@segment/analytics.js-integration-trakio'),
  'twitter-ads': require('@segment/analytics.js-integration-twitter-ads'),
  'userlike': require('@segment/analytics.js-integration-userlike'),
  'uservoice': require('@segment/analytics.js-integration-uservoice'),
  'vero': require('@segment/analytics.js-integration-vero'),
  'visual-website-optimizer': require('@segment/analytics.js-integration-visual-website-optimizer'),
  'webengage': require('@segment/analytics.js-integration-webengage'),
  'woopra': require('@segment/analytics.js-integration-woopra'),
  'wootric': require('@segment/analytics.js-integration-wootric'),
  'yandex-metrica': require('@segment/analytics.js-integration-yandex-metrica')
};

},{"@segment/analytics.js-integration-adroll":35,"@segment/analytics.js-integration-adwords":36,"@segment/analytics.js-integration-alexa":43,"@segment/analytics.js-integration-amplitude":50,"@segment/analytics.js-integration-appcues":57,"@segment/analytics.js-integration-atatus":64,"@segment/analytics.js-integration-autosend":71,"@segment/analytics.js-integration-awesm":78,"@segment/analytics.js-integration-bing-ads":85,"@segment/analytics.js-integration-blueshift":92,"@segment/analytics.js-integration-boomtrain":99,"@segment/analytics.js-integration-bronto":106,"@segment/analytics.js-integration-bugherd":107,"@segment/analytics.js-integration-bugsnag":114,"@segment/analytics.js-integration-chameleon":121,"@segment/analytics.js-integration-chartbeat":128,"@segment/analytics.js-integration-clicky":135,"@segment/analytics.js-integration-comscore":142,"@segment/analytics.js-integration-crazy-egg":149,"@segment/analytics.js-integration-curebit":156,"@segment/analytics.js-integration-customerio":157,"@segment/analytics.js-integration-drift":164,"@segment/analytics.js-integration-drip":171,"@segment/analytics.js-integration-elevio":172,"@segment/analytics.js-integration-errorception":181,"@segment/analytics.js-integration-evergage":189,"@segment/analytics.js-integration-extole":196,"@segment/analytics.js-integration-facebook-conversion-tracking":203,"@segment/analytics.js-integration-facebook-custom-audiences":210,"@segment/analytics.js-integration-facebook-pixel":211,"@segment/analytics.js-integration-foxmetrics":212,"@segment/analytics.js-integration-frontleaf":213,"@segment/analytics.js-integration-gauges":220,"@segment/analytics.js-integration-get-satisfaction":227,"@segment/analytics.js-integration-google-analytics":234,"@segment/analytics.js-integration-google-tag-manager":235,"@segment/analytics.js-integration-gosquared":236,"@segment/analytics.js-integration-heap":237,"@segment/analytics.js-integration-hellobar":238,"@segment/analytics.js-integration-hittail":245,"@segment/analytics.js-integration-hubspot":252,"@segment/analytics.js-integration-improvely":259,"@segment/analytics.js-integration-inspectlet":266,"@segment/analytics.js-integration-intercom":273,"@segment/analytics.js-integration-keen-io":280,"@segment/analytics.js-integration-kenshoo":287,"@segment/analytics.js-integration-kissmetrics":294,"@segment/analytics.js-integration-klaviyo":301,"@segment/analytics.js-integration-livechat":302,"@segment/analytics.js-integration-lucky-orange":309,"@segment/analytics.js-integration-lytics":310,"@segment/analytics.js-integration-madkudu":317,"@segment/analytics.js-integration-mixpanel":324,"@segment/analytics.js-integration-mojn":331,"@segment/analytics.js-integration-mouseflow":338,"@segment/analytics.js-integration-mousestats":345,"@segment/analytics.js-integration-navilytics":352,"@segment/analytics.js-integration-nudgespot":359,"@segment/analytics.js-integration-olark":366,"@segment/analytics.js-integration-optimizely":373,"@segment/analytics.js-integration-outbound":382,"@segment/analytics.js-integration-parsely":390,"@segment/analytics.js-integration-perfect-audience":397,"@segment/analytics.js-integration-pingdom":398,"@segment/analytics.js-integration-piwik":405,"@segment/analytics.js-integration-preact":412,"@segment/analytics.js-integration-qualaroo":419,"@segment/analytics.js-integration-quantcast":426,"@segment/analytics.js-integration-quanticmind":427,"@segment/analytics.js-integration-ramen":434,"@segment/analytics.js-integration-rollbar":441,"@segment/analytics.js-integration-route":448,"@segment/analytics.js-integration-saasquatch":455,"@segment/analytics.js-integration-satismeter":462,"@segment/analytics.js-integration-scratch-it":469,"@segment/analytics.js-integration-segmentio":470,"@segment/analytics.js-integration-sentry":479,"@segment/analytics.js-integration-simplereach":486,"@segment/analytics.js-integration-snapengage":493,"@segment/analytics.js-integration-spinnakr":500,"@segment/analytics.js-integration-supporthero":507,"@segment/analytics.js-integration-taplytics":514,"@segment/analytics.js-integration-tapstream":521,"@segment/analytics.js-integration-trakio":528,"@segment/analytics.js-integration-twitter-ads":535,"@segment/analytics.js-integration-userlike":536,"@segment/analytics.js-integration-uservoice":543,"@segment/analytics.js-integration-vero":550,"@segment/analytics.js-integration-visual-website-optimizer":557,"@segment/analytics.js-integration-webengage":558,"@segment/analytics.js-integration-woopra":565,"@segment/analytics.js-integration-wootric":572,"@segment/analytics.js-integration-yandex-metrica":579}],3:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var arity = require('@ndhoule/arity');

var objToString = Object.prototype.toString;

/**
 * Determine if a value is a function.
 *
 * @param {*} val
 * @return {boolean}
 */
// TODO: Move to lib
var isFunction = function(val) {
  return typeof val === 'function';
};

/**
 * Determine if a value is a number.
 *
 * @param {*} val
 * @return {boolean}
 */
// TODO: Move to lib
var isNumber = function(val) {
  var type = typeof val;
  return type === 'number' || (type === 'object' && objToString.call(val) === '[object Number]');
};

/**
 * Wrap a function `fn` in a function that will invoke `fn` when invoked `n` or
 * more times.
 *
 * @name after
 * @api public
 * @category Function
 * @param {Number} n The number of
 * @param {Function} fn The function to wrap.
 * @return {Function} A function that will call `fn` after `n` or more
 * invocations.
 * @example
 */
var after = function after(n, fn) {
  if (!isNumber(n)) {
    throw new TypeError('Expected a number but received ' + typeof n);
  }

  if (!isFunction(fn)) {
    throw new TypeError('Expected a function but received ' + typeof fn);
  }

  var callCount = 0;

  return arity(fn.length, function() {
    callCount += 1;

    if (callCount < n) {
      return;
    }

    return fn.apply(this, arguments);
  });
};

/*
 * Exports.
 */

module.exports = after;

},{"@ndhoule/arity":4}],4:[function(require,module,exports){
'use strict';

var objToString = Object.prototype.toString;

/**
 * Determine if a value is a function.
 *
 * @param {*} val
 * @return {boolean}
 */
// TODO: Move to lib
var isFunction = function(val) {
  return typeof val === 'function';
};

/**
 * Determine if a value is a number.
 *
 * @param {*} val
 * @return {boolean}
 */
// TODO: Move to lib
var isNumber = function(val) {
  var type = typeof val;
  return type === 'number' || (type === 'object' && objToString.call(val) === '[object Number]');
};

 /**
  * Creates an array of generic, numbered argument names.
  *
  * @name createParams
  * @api private
  * @param {number} n
  * @return {Array}
  * @example
  * argNames(2);
  * //=> ['arg1', 'arg2']
  */
var createParams = function createParams(n) {
  var args = [];

  for (var i = 1; i <= n; i += 1) {
    args.push('arg' + i);
  }

  return args;
};

 /**
  * Dynamically construct a wrapper function of `n` arity that.
  *
  * If at all possible, prefer a function from the arity wrapper cache above to
  * avoid allocating a new function at runtime.
  *
  * @name createArityWrapper
  * @api private
  * @param {number} n
  * @return {Function(Function)}
  */
var createArityWrapper = function createArityWrapper(n) {
  var paramNames = createParams(n).join(', ');
  var wrapperBody = ''.concat(
    '  return function(', paramNames, ') {\n',
    '    return func.apply(this, arguments);\n',
    '  };'
  );

  /* eslint-disable no-new-func */
  return new Function('func', wrapperBody);
  /* eslint-enable no-new-func */
};

// Cache common arity wrappers to avoid constructing them at runtime
var arityWrapperCache = [
  /* eslint-disable no-unused-vars */
  function(fn) {
    return function() {
      return fn.apply(this, arguments);
    };
  },

  function(fn) {
    return function(arg1) {
      return fn.apply(this, arguments);
    };
  },

  function(fn) {
    return function(arg1, arg2) {
      return fn.apply(this, arguments);
    };
  },

  function(fn) {
    return function(arg1, arg2, arg3) {
      return fn.apply(this, arguments);
    };
  },

  function(fn) {
    return function(arg1, arg2, arg3, arg4) {
      return fn.apply(this, arguments);
    };
  },

  function(fn) {
    return function(arg1, arg2, arg3, arg4, arg5) {
      return fn.apply(this, arguments);
    };
  }
  /* eslint-enable no-unused-vars */
];

/**
 * Takes a function and an [arity](https://en.wikipedia.org/wiki/Arity) `n`, and returns a new
 * function that expects `n` arguments.
 *
 * @name arity
 * @api public
 * @category Function
 * @see {@link curry}
 * @param {Number} n The desired arity of the returned function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A function of n arity, wrapping `fn`.
 * @example
 * var add = function(a, b) {
 *   return a + b;
 * };
 *
 * // Check the number of arguments this function expects by accessing `.length`:
 * add.length;
 * //=> 2
 *
 * var unaryAdd = arity(1, add);
 * unaryAdd.length;
 * //=> 1
 */
var arity = function arity(n, func) {
  if (!isFunction(func)) {
    throw new TypeError('Expected a function but got ' + typeof func);
  }

  n = Math.max(isNumber(n) ? n : 0, 0);

  if (!arityWrapperCache[n]) {
    arityWrapperCache[n] = createArityWrapper(n);
  }

  return arityWrapperCache[n](func);
};

/*
 * Exports.
 */

module.exports = arity;

},{}],5:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var type = require('component-type');

/**
 * Deeply clone an object.
 *
 * @param {*} obj Any object.
 */

var clone = function clone(obj) {
  var t = type(obj);

  if (t === 'object') {
    var copy = {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = clone(obj[key]);
      }
    }
    return copy;
  }

  if (t === 'array') {
    var copy = new Array(obj.length);
    for (var i = 0, l = obj.length; i < l; i++) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }

  if (t === 'regexp') {
    // from millermedeiros/amd-utils - MIT
    var flags = '';
    flags += obj.multiline ? 'm' : '';
    flags += obj.global ? 'g' : '';
    flags += obj.ignoreCase ? 'i' : '';
    return new RegExp(obj.source, flags);
  }

  if (t === 'date') {
    return new Date(obj.getTime());
  }

  // string, number, boolean, etc.
  return obj;
};

/*
 * Exports.
 */

module.exports = clone;

},{"component-type":618}],6:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var drop = require('@ndhoule/drop');
var rest = require('@ndhoule/rest');

var has = Object.prototype.hasOwnProperty;
var objToString = Object.prototype.toString;

/**
 * Returns `true` if a value is an object, otherwise `false`.
 *
 * @name isObject
 * @api private
 * @param {*} val The value to test.
 * @return {boolean}
 */
// TODO: Move to a library
var isObject = function isObject(value) {
  return Boolean(value) && typeof value === 'object';
};

/**
 * Returns `true` if a value is a plain object, otherwise `false`.
 *
 * @name isPlainObject
 * @api private
 * @param {*} val The value to test.
 * @return {boolean}
 */
// TODO: Move to a library
var isPlainObject = function isPlainObject(value) {
  return Boolean(value) && objToString.call(value) === '[object Object]';
};

/**
 * Assigns a key-value pair to a target object when the value assigned is owned,
 * and where target[key] is undefined.
 *
 * @name shallowCombiner
 * @api private
 * @param {Object} target
 * @param {Object} source
 * @param {*} value
 * @param {string} key
 */
var shallowCombiner = function shallowCombiner(target, source, value, key) {
  if (has.call(source, key) && target[key] === undefined) {
    target[key] = value;
  }
  return source;
};

/**
 * Assigns a key-value pair to a target object when the value assigned is owned,
 * and where target[key] is undefined; also merges objects recursively.
 *
 * @name deepCombiner
 * @api private
 * @param {Object} target
 * @param {Object} source
 * @param {*} value
 * @param {string} key
 * @return {Object}
 */
var deepCombiner = function(target, source, value, key) {
  if (has.call(source, key)) {
    if (isPlainObject(target[key]) && isPlainObject(value)) {
        target[key] = defaultsDeep(target[key], value);
    } else if (target[key] === undefined) {
        target[key] = value;
    }
  }

  return source;
};

/**
 * TODO: Document
 *
 * @name defaultsWith
 * @api private
 * @param {Function} combiner
 * @param {Object} target
 * @param {...Object} sources
 * @return {Object} Return the input `target`.
 */
var defaultsWith = function(combiner, target /*, ...sources */) {
  if (!isObject(target)) {
    return target;
  }

  combiner = combiner || shallowCombiner;
  var sources = drop(2, arguments);

  for (var i = 0; i < sources.length; i += 1) {
    for (var key in sources[i]) {
      combiner(target, sources[i], sources[i][key], key);
    }
  }

  return target;
};

/**
 * Copies owned, enumerable properties from a source object(s) to a target
 * object when the value of that property on the source object is `undefined`.
 * Recurses on objects.
 *
 * @name defaultsDeep
 * @api public
 * @param {Object} target
 * @param {...Object} sources
 * @return {Object} The input `target`.
 */
var defaultsDeep = function defaultsDeep(target /*, sources */) {
  // TODO: Replace with `partial` call?
  return defaultsWith.apply(null, [deepCombiner, target].concat(rest(arguments)));
};

/**
 * Copies owned, enumerable properties from a source object(s) to a target
 * object when the value of that property on the source object is `undefined`.
 *
 * @name defaults
 * @api public
 * @param {Object} target
 * @param {...Object} sources
 * @return {Object}
 * @example
 * var a = { a: 1 };
 * var b = { a: 2, b: 2 };
 *
 * defaults(a, b);
 * console.log(a); //=> { a: 1, b: 2 }
 */
var defaults = function(target /*, ...sources */) {
  // TODO: Replace with `partial` call?
  return defaultsWith.apply(null, [null, target].concat(rest(arguments)));
};

/*
 * Exports.
 */

module.exports = defaults;
module.exports.deep = defaultsDeep;

},{"@ndhoule/drop":7,"@ndhoule/rest":16}],7:[function(require,module,exports){
'use strict';

var max = Math.max;

/**
 * Produce a new array composed of all but the first `n` elements of an input `collection`.
 *
 * @name drop
 * @api public
 * @param {number} count The number of elements to drop.
 * @param {Array} collection The collection to iterate over.
 * @return {Array} A new array containing all but the first element from `collection`.
 * @example
 * drop(0, [1, 2, 3]); // => [1, 2, 3]
 * drop(1, [1, 2, 3]); // => [2, 3]
 * drop(2, [1, 2, 3]); // => [3]
 * drop(3, [1, 2, 3]); // => []
 * drop(4, [1, 2, 3]); // => []
 */
var drop = function drop(count, collection) {
  var length = collection ? collection.length : 0;

  if (!length) {
    return [];
  }

  // Preallocating an array *significantly* boosts performance when dealing with
  // `arguments` objects on v8. For a summary, see:
  // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
  var toDrop = max(Number(count) || 0, 0);
  var resultsLength = max(length - toDrop, 0);
  var results = new Array(resultsLength);

  for (var i = 0; i < resultsLength; i += 1) {
    results[i] = collection[i + toDrop];
  }

  return results;
};

/*
 * Exports.
 */

module.exports = drop;

},{}],8:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var keys = require('@ndhoule/keys');

var objToString = Object.prototype.toString;

/**
 * Tests if a value is a number.
 *
 * @name isNumber
 * @api private
 * @param {*} val The value to test.
 * @return {boolean} Returns `true` if `val` is a number, otherwise `false`.
 */
// TODO: Move to library
var isNumber = function isNumber(val) {
  var type = typeof val;
  return type === 'number' || (type === 'object' && objToString.call(val) === '[object Number]');
};

/**
 * Tests if a value is an array.
 *
 * @name isArray
 * @api private
 * @param {*} val The value to test.
 * @return {boolean} Returns `true` if the value is an array, otherwise `false`.
 */
// TODO: Move to library
var isArray = typeof Array.isArray === 'function' ? Array.isArray : function isArray(val) {
  return objToString.call(val) === '[object Array]';
};

/**
 * Tests if a value is array-like. Array-like means the value is not a function and has a numeric
 * `.length` property.
 *
 * @name isArrayLike
 * @api private
 * @param {*} val
 * @return {boolean}
 */
// TODO: Move to library
var isArrayLike = function isArrayLike(val) {
  return val != null && (isArray(val) || (val !== 'function' && isNumber(val.length)));
};

/**
 * Internal implementation of `each`. Works on arrays and array-like data structures.
 *
 * @name arrayEach
 * @api private
 * @param {Function(value, key, collection)} iterator The function to invoke per iteration.
 * @param {Array} array The array(-like) structure to iterate over.
 * @return {undefined}
 */
var arrayEach = function arrayEach(iterator, array) {
  for (var i = 0; i < array.length; i += 1) {
    // Break iteration early if `iterator` returns `false`
    if (iterator(array[i], i, array) === false) {
      break;
    }
  }
};

/**
 * Internal implementation of `each`. Works on objects.
 *
 * @name baseEach
 * @api private
 * @param {Function(value, key, collection)} iterator The function to invoke per iteration.
 * @param {Object} object The object to iterate over.
 * @return {undefined}
 */
var baseEach = function baseEach(iterator, object) {
  var ks = keys(object);

  for (var i = 0; i < ks.length; i += 1) {
    // Break iteration early if `iterator` returns `false`
    if (iterator(object[ks[i]], ks[i], object) === false) {
      break;
    }
  }
};

/**
 * Iterate over an input collection, invoking an `iterator` function for each element in the
 * collection and passing to it three arguments: `(value, index, collection)`. The `iterator`
 * function can end iteration early by returning `false`.
 *
 * @name each
 * @api public
 * @param {Function(value, key, collection)} iterator The function to invoke per iteration.
 * @param {Array|Object|string} collection The collection to iterate over.
 * @return {undefined} Because `each` is run only for side effects, always returns `undefined`.
 * @example
 * var log = console.log.bind(console);
 *
 * each(log, ['a', 'b', 'c']);
 * //-> 'a', 0, ['a', 'b', 'c']
 * //-> 'b', 1, ['a', 'b', 'c']
 * //-> 'c', 2, ['a', 'b', 'c']
 * //=> undefined
 *
 * each(log, 'tim');
 * //-> 't', 2, 'tim'
 * //-> 'i', 1, 'tim'
 * //-> 'm', 0, 'tim'
 * //=> undefined
 *
 * // Note: Iteration order not guaranteed across environments
 * each(log, { name: 'tim', occupation: 'enchanter' });
 * //-> 'tim', 'name', { name: 'tim', occupation: 'enchanter' }
 * //-> 'enchanter', 'occupation', { name: 'tim', occupation: 'enchanter' }
 * //=> undefined
 */
var each = function each(iterator, collection) {
  return (isArrayLike(collection) ? arrayEach : baseEach).call(this, iterator, collection);
};

/*
 * Exports.
 */

module.exports = each;

},{"@ndhoule/keys":13}],9:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var each = require('@ndhoule/each');

/**
 * Check if a predicate function returns `true` for all values in a `collection`.
 * Checks owned, enumerable values and exits early when `predicate` returns
 * `false`.
 *
 * @name every
 * @param {Function} predicate The function used to test values.
 * @param {Array|Object|string} collection The collection to search.
 * @return {boolean} True if all values passes the predicate test, otherwise false.
 * @example
 * var isEven = function(num) { return num % 2 === 0; };
 *
 * every(isEven, []); // => true
 * every(isEven, [1, 2]); // => false
 * every(isEven, [2, 4, 6]); // => true
 */
var every = function every(predicate, collection) {
  if (typeof predicate !== 'function') {
    throw new TypeError('`predicate` must be a function but was a ' + typeof predicate);
  }

  var result = true;

  each(function(val, key, collection) {
    result = !!predicate(val, key, collection);

    // Exit early
    if (!result) {
      return false;
    }
  }, collection);

  return result;
};

/*
 * Exports.
 */

module.exports = every;

},{"@ndhoule/each":8}],10:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty;

/**
 * Copy the properties of one or more `objects` onto a destination object. Input objects are iterated over
 * in left-to-right order, so duplicate properties on later objects will overwrite those from
 * erevious ones. Only enumerable and own properties of the input objects are copied onto the
 * resulting object.
 *
 * @name extend
 * @api public
 * @category Object
 * @param {Object} dest The destination object.
 * @param {...Object} sources The source objects.
 * @return {Object} `dest`, extended with the properties of all `sources`.
 * @example
 * var a = { a: 'a' };
 * var b = { b: 'b' };
 * var c = { c: 'c' };
 *
 * extend(a, b, c);
 * //=> { a: 'a', b: 'b', c: 'c' };
 */
var extend = function extend(dest /*, sources */) {
  var sources = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < sources.length; i += 1) {
    for (var key in sources[i]) {
      if (has.call(sources[i], key)) {
        dest[key] = sources[i][key];
      }
    }
  }

  return dest;
};

/*
 * Exports.
 */

module.exports = extend;

},{}],11:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var each = require('@ndhoule/each');

/**
 * Reduces all the values in a collection down into a single value. Does so by iterating through the
 * collection from left to right, repeatedly calling an `iterator` function and passing to it four
 * arguments: `(accumulator, value, index, collection)`.
 *
 * Returns the final return value of the `iterator` function.
 *
 * @name foldl
 * @api public
 * @param {Function} iterator The function to invoke per iteration.
 * @param {*} accumulator The initial accumulator value, passed to the first invocation of `iterator`.
 * @param {Array|Object} collection The collection to iterate over.
 * @return {*} The return value of the final call to `iterator`.
 * @example
 * foldl(function(total, n) {
 *   return total + n;
 * }, 0, [1, 2, 3]);
 * //=> 6
 *
 * var phonebook = { bob: '555-111-2345', tim: '655-222-6789', sheila: '655-333-1298' };
 *
 * foldl(function(results, phoneNumber) {
 *  if (phoneNumber[0] === '6') {
 *    return results.concat(phoneNumber);
 *  }
 *  return results;
 * }, [], phonebook);
 * // => ['655-222-6789', '655-333-1298']
 */
var foldl = function foldl(iterator, accumulator, collection) {
  if (typeof iterator !== 'function') {
    throw new TypeError('Expected a function but received a ' + typeof iterator);
  }

  each(function(val, i, collection) {
    accumulator = iterator(accumulator, val, i, collection);
  }, collection);

  return accumulator;
};

/*
 * Exports.
 */

module.exports = foldl;

},{"@ndhoule/each":8}],12:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var each = require('@ndhoule/each');

var strIndexOf = String.prototype.indexOf;

/**
 * Object.is/sameValueZero polyfill.
 *
 * @api private
 * @param {*} value1
 * @param {*} value2
 * @return {boolean}
 */
// TODO: Move to library
var sameValueZero = function sameValueZero(value1, value2) {
  // Normal values and check for 0 / -0
  if (value1 === value2) {
    return value1 !== 0 || 1 / value1 === 1 / value2;
  }
  // NaN
  return value1 !== value1 && value2 !== value2;
};

/**
 * Searches a given `collection` for a value, returning true if the collection
 * contains the value and false otherwise. Can search strings, arrays, and
 * objects.
 *
 * @name includes
 * @api public
 * @param {*} searchElement The element to search for.
 * @param {Object|Array|string} collection The collection to search.
 * @return {boolean}
 * @example
 * includes(2, [1, 2, 3]);
 * //=> true
 *
 * includes(4, [1, 2, 3]);
 * //=> false
 *
 * includes(2, { a: 1, b: 2, c: 3 });
 * //=> true
 *
 * includes('a', { a: 1, b: 2, c: 3 });
 * //=> false
 *
 * includes('abc', 'xyzabc opq');
 * //=> true
 *
 * includes('nope', 'xyzabc opq');
 * //=> false
 */
var includes = function includes(searchElement, collection) {
  var found = false;

  // Delegate to String.prototype.indexOf when `collection` is a string
  if (typeof collection === 'string') {
    return strIndexOf.call(collection, searchElement) !== -1;
  }

  // Iterate through enumerable/own array elements and object properties.
  each(function(value) {
    if (sameValueZero(value, searchElement)) {
      found = true;
      // Exit iteration early when found
      return false;
    }
  }, collection);

  return found;
};

/*
 * Exports.
 */

module.exports = includes;

},{"@ndhoule/each":8}],13:[function(require,module,exports){
'use strict';

var hop = Object.prototype.hasOwnProperty;
var strCharAt = String.prototype.charAt;
var toStr = Object.prototype.toString;

/**
 * Returns the character at a given index.
 *
 * @param {string} str
 * @param {number} index
 * @return {string|undefined}
 */
// TODO: Move to a library
var charAt = function(str, index) {
  return strCharAt.call(str, index);
};

/**
 * hasOwnProperty, wrapped as a function.
 *
 * @name has
 * @api private
 * @param {*} context
 * @param {string|number} prop
 * @return {boolean}
 */

// TODO: Move to a library
var has = function has(context, prop) {
  return hop.call(context, prop);
};

/**
 * Returns true if a value is a string, otherwise false.
 *
 * @name isString
 * @api private
 * @param {*} val
 * @return {boolean}
 */

// TODO: Move to a library
var isString = function isString(val) {
  return toStr.call(val) === '[object String]';
};

/**
 * Returns true if a value is array-like, otherwise false. Array-like means a
 * value is not null, undefined, or a function, and has a numeric `length`
 * property.
 *
 * @name isArrayLike
 * @api private
 * @param {*} val
 * @return {boolean}
 */
// TODO: Move to a library
var isArrayLike = function isArrayLike(val) {
  return val != null && (typeof val !== 'function' && typeof val.length === 'number');
};


/**
 * indexKeys
 *
 * @name indexKeys
 * @api private
 * @param {} target
 * @param {Function} pred
 * @return {Array}
 */
var indexKeys = function indexKeys(target, pred) {
  pred = pred || has;

  var results = [];

  for (var i = 0, len = target.length; i < len; i += 1) {
    if (pred(target, i)) {
      results.push(String(i));
    }
  }

  return results;
};

/**
 * Returns an array of an object's owned keys.
 *
 * @name objectKeys
 * @api private
 * @param {*} target
 * @param {Function} pred Predicate function used to include/exclude values from
 * the resulting array.
 * @return {Array}
 */
var objectKeys = function objectKeys(target, pred) {
  pred = pred || has;

  var results = [];

  for (var key in target) {
    if (pred(target, key)) {
      results.push(String(key));
    }
  }

  return results;
};

/**
 * Creates an array composed of all keys on the input object. Ignores any non-enumerable properties.
 * More permissive than the native `Object.keys` function (non-objects will not throw errors).
 *
 * @name keys
 * @api public
 * @category Object
 * @param {Object} source The value to retrieve keys from.
 * @return {Array} An array containing all the input `source`'s keys.
 * @example
 * keys({ likes: 'avocado', hates: 'pineapple' });
 * //=> ['likes', 'pineapple'];
 *
 * // Ignores non-enumerable properties
 * var hasHiddenKey = { name: 'Tim' };
 * Object.defineProperty(hasHiddenKey, 'hidden', {
 *   value: 'i am not enumerable!',
 *   enumerable: false
 * })
 * keys(hasHiddenKey);
 * //=> ['name'];
 *
 * // Works on arrays
 * keys(['a', 'b', 'c']);
 * //=> ['0', '1', '2']
 *
 * // Skips unpopulated indices in sparse arrays
 * var arr = [1];
 * arr[4] = 4;
 * keys(arr);
 * //=> ['0', '4']
 */
var keys = function keys(source) {
  if (source == null) {
    return [];
  }

  // IE6-8 compatibility (string)
  if (isString(source)) {
    return indexKeys(source, charAt);
  }

  // IE6-8 compatibility (arguments)
  if (isArrayLike(source)) {
    return indexKeys(source, has);
  }

  return objectKeys(source);
};

/*
 * Exports.
 */

module.exports = keys;

},{}],14:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var each = require('@ndhoule/each');

/**
 * Produce a new array by passing each value in the input `collection` through a transformative
 * `iterator` function. The `iterator` function is passed three arguments:
 * `(value, index, collection)`.
 *
 * @name map
 * @api public
 * @param {Function} iterator The transformer function to invoke per iteration.
 * @param {Array} collection The collection to iterate over.
 * @return {Array} A new array containing the results of each `iterator` invocation.
 * @example
 * var square = function(x) { return x * x; };
 *
 * map(square, [1, 2, 3]);
 * //=> [1, 4, 9]
 */
var map = function map(iterator, collection) {
  if (typeof iterator !== 'function') {
    throw new TypeError('Expected a function but received a ' + typeof iterator);
  }

  var result = [];

  each(function(val, i, collection) {
    result.push(iterator(val, i, collection));
  }, collection);

  return result;
};

/*
 * Exports.
 */

module.exports = map;

},{"@ndhoule/each":8}],15:[function(require,module,exports){
'use strict';

var objToString = Object.prototype.toString;

// TODO: Move to lib
var existy = function(val) {
  return val != null;
};

// TODO: Move to lib
var isArray = function(val) {
  return objToString.call(val) === '[object Array]';
};

// TODO: Move to lib
var isString = function(val) {
   return typeof val === 'string' || objToString.call(val) === '[object String]';
};

// TODO: Move to lib
var isObject = function(val) {
  return val != null && typeof val === 'object';
};

/**
 * Returns a copy of the new `object` containing only the specified properties.
 *
 * @name pick
 * @api public
 * @param {string|string[]} props The property or properties to keep.
 * @param {Object} object The object to iterate over.
 * @return {Object} A new object containing only the specified properties from `object`.
 * @example
 * var person = { name: 'Tim', occupation: 'enchanter', fears: 'rabbits' };
 *
 * pick('name', person);
 * //=> { name: 'Tim' }
 *
 * pick(['name', 'fears'], person);
 * //=> { name: 'Tim', fears: 'rabbits' }
 */
var pick = function pick(props, object) {
  if (!existy(object) || !isObject(object)) {
    return {};
  }

  if (isString(props)) {
    props = [props];
  }

  if (!isArray(props)) {
    props = [];
  }

  var result = {};

  for (var i = 0; i < props.length; i += 1) {
    if (isString(props[i]) && props[i] in object) {
      result[props[i]] = object[props[i]];
    }
  }

  return result;
};

/*
 * Exports.
 */

module.exports = pick;

},{}],16:[function(require,module,exports){
'use strict';

var max = Math.max;

/**
 * Produce a new array by passing each value in the input `collection` through a transformative
 * `iterator` function. The `iterator` function is passed three arguments:
 * `(value, index, collection)`.
 *
 * @name rest
 * @api public
 * @param {Array} collection The collection to iterate over.
 * @return {Array} A new array containing all but the first element from `collection`.
 * @example
 * rest([1, 2, 3]); // => [2, 3]
 */
var rest = function rest(collection) {
  if (collection == null || !collection.length) {
    return [];
  }

  // Preallocating an array *significantly* boosts performance when dealing with
  // `arguments` objects on v8. For a summary, see:
  // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
  var results = new Array(max(collection.length - 2, 0));

  for (var i = 1; i < collection.length; i += 1) {
    results[i - 1] = collection[i];
  }

  return results;
};

/*
 * Exports.
 */

module.exports = rest;

},{}],17:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var keys = require('@ndhoule/keys');

/**
 * Returns an array containing all enumerable values from a `source` object.
 *
 * @name values
 * @api public
 * @category Object
 * @param {Object} source The object to retrieve values from.
 * @return {Array} An array of all the `source` object's values.
 * @example
 * values({ a: 1, b: 2, c: 3 });
 * //=> [1, 2, 3]
 */
var values = function values(source) {
  var ks = keys(source);
  var results = new Array(ks.length);

  for (var i = 0; i < ks.length; i += 1) {
    results[i] = source[ks[i]];
  }

  return results;
};

/*
 * Exports.
 */

module.exports = values;

},{"@ndhoule/keys":13}],18:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var parse = require('component-querystring').parse;

/**
 * All the ad query params we look for.
 */
var QUERYIDS = {
  btid: 'dataxu',
  urid: 'millennial-media'
};

/**
 * Get all ads info from the given `querystring`
 *
 * @param {string} query
 * @return {Object}
 */
function ads(query) {
  var params = parse(query);
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      for (var id in QUERYIDS) {
        if (QUERYIDS.hasOwnProperty(id)) {
          if (key === id) {
            return {
              id : params[key],
              type : QUERYIDS[id]
            };
          }
        }
      }
    }
  }
}

/*
 * Exports.
 */

module.exports = ads;

},{"component-querystring":616}],19:[function(require,module,exports){

var type = require('component-type');
var clone = require('component-clone');


/**
 * Expose `alias`.
 */

module.exports = alias;


/**
 * Alias an `object`.
 *
 * @param {Object} obj
 * @param {Mixed} method
 */

function alias (obj, method) {
  switch (type(method)) {
    case 'object': return aliasByDictionary(clone(obj), method);
    case 'function': return aliasByFunction(clone(obj), method);
  }
}


/**
 * Convert the keys in an `obj` using a dictionary of `aliases`.
 *
 * @param {Object} obj
 * @param {Object} aliases
 */

function aliasByDictionary (obj, aliases) {
  for (var key in aliases) {
    if (undefined === obj[key]) continue;
    obj[aliases[key]] = obj[key];
    delete obj[key];
  }
  return obj;
}


/**
 * Convert the keys in an `obj` using a `convert` function.
 *
 * @param {Object} obj
 * @param {Function} convert
 */

function aliasByFunction (obj, convert) {
  // have to create another object so that ie8 won't infinite loop on keys
  var output = {};
  for (var key in obj) output[convert(key)] = obj[key];
  return output;
}

},{"component-clone":609,"component-type":618}],20:[function(require,module,exports){
(function (global){
'use strict';

var _analytics = global.analytics;

/*
 * Module dependencies.
 */

var Alias = require('segmentio-facade').Alias;
var Emitter = require('component-emitter');
var Group = require('segmentio-facade').Group;
var Identify = require('segmentio-facade').Identify;
var Page = require('segmentio-facade').Page;
var Track = require('segmentio-facade').Track;
var after = require('@ndhoule/after');
var bindAll = require('bind-all');
var clone = require('@ndhoule/clone');
var cookie = require('./cookie');
var debug = require('debug');
var defaults = require('@ndhoule/defaults');
var each = require('@ndhoule/each');
var foldl = require('@ndhoule/foldl');
var group = require('./group');
var is = require('is');
var isMeta = require('@segment/is-meta');
var keys = require('@ndhoule/keys');
var memory = require('./memory');
var nextTick = require('next-tick');
var normalize = require('./normalize');
var on = require('component-event').bind;
var pageDefaults = require('./pageDefaults');
var pick = require('@ndhoule/pick');
var prevent = require('@segment/prevent-default');
var querystring = require('component-querystring');
var store = require('./store');
var user = require('./user');
var type = require('component-type');

/**
 * Initialize a new `Analytics` instance.
 */

function Analytics() {
  this._options({});
  this.Integrations = {};
  this._integrations = {};
  this._readied = false;
  this._timeout = 300;
  // XXX: BACKWARDS COMPATIBILITY
  this._user = user;
  this.log = debug('analytics.js');
  bindAll(this);

  var self = this;
  this.on('initialize', function(settings, options) {
    if (options.initialPageview) self.page();
    self._parseQuery(window.location.search);
  });
}

/**
 * Mix in event emitter.
 */

Emitter(Analytics.prototype);

/**
 * Use a `plugin`.
 *
 * @param {Function} plugin
 * @return {Analytics}
 */

Analytics.prototype.use = function(plugin) {
  plugin(this);
  return this;
};

/**
 * Define a new `Integration`.
 *
 * @param {Function} Integration
 * @return {Analytics}
 */

Analytics.prototype.addIntegration = function(Integration) {
  var name = Integration.prototype.name;
  if (!name) throw new TypeError('attempted to add an invalid integration');
  this.Integrations[name] = Integration;
  return this;
};

/**
 * Initialize with the given integration `settings` and `options`.
 *
 * Aliased to `init` for convenience.
 *
 * @param {Object} [settings={}]
 * @param {Object} [options={}]
 * @return {Analytics}
 */

Analytics.prototype.init = Analytics.prototype.initialize = function(settings, options) {
  settings = settings || {};
  options = options || {};

  this._options(options);
  this._readied = false;

  // clean unknown integrations from settings
  var self = this;
  each(function(opts, name) {
    var Integration = self.Integrations[name];
    if (!Integration) delete settings[name];
  }, settings);

  // add integrations
  each(function(opts, name) {
    var Integration = self.Integrations[name];
    var integration = new Integration(clone(opts));
    self.log('initialize %o - %o', name, opts);
    self.add(integration);
  }, settings);

  var integrations = this._integrations;

  // load user now that options are set
  user.load();
  group.load();

  // make ready callback
  var integrationCount = keys(integrations).length;
  var ready = after(integrationCount, function() {
    self._readied = true;
    self.emit('ready');
  });

  // init if no integrations
  if (integrationCount <= 0) {
    ready();
  }

  // initialize integrations, passing ready
  each(function(integration) {
    if (options.initialPageview && integration.options.initialPageview === false) {
      integration.page = after(2, integration.page);
    }

    integration.analytics = self;
    integration.once('ready', ready);
    integration.initialize();
  }, integrations);

  // backwards compat with angular plugin.
  // TODO: remove
  this.initialized = true;

  this.emit('initialize', settings, options);
  return this;
};

/**
 * Set the user's `id`.
 *
 * @param {Mixed} id
 */

Analytics.prototype.setAnonymousId = function(id) {
  this.user().anonymousId(id);
  return this;
};

/**
 * Add an integration.
 *
 * @param {Integration} integration
 */

Analytics.prototype.add = function(integration) {
  this._integrations[integration.name] = integration;
  return this;
};

/**
 * Identify a user by optional `id` and `traits`.
 *
 * @param {string} [id=user.id()] User ID.
 * @param {Object} [traits=null] User traits.
 * @param {Object} [options=null]
 * @param {Function} [fn]
 * @return {Analytics}
 */

Analytics.prototype.identify = function(id, traits, options, fn) {
  // Argument reshuffling.
  /* eslint-disable no-unused-expressions, no-sequences */
  if (is.fn(options)) fn = options, options = null;
  if (is.fn(traits)) fn = traits, options = null, traits = null;
  if (is.object(id)) options = traits, traits = id, id = user.id();
  /* eslint-enable no-unused-expressions, no-sequences */

  // clone traits before we manipulate so we don't do anything uncouth, and take
  // from `user` so that we carryover anonymous traits
  user.identify(id, traits);

  var msg = this.normalize({
    options: options,
    traits: user.traits(),
    userId: user.id()
  });

  this._invoke('identify', new Identify(msg));

  // emit
  this.emit('identify', id, traits, options);
  this._callback(fn);
  return this;
};

/**
 * Return the current user.
 *
 * @return {Object}
 */

Analytics.prototype.user = function() {
  return user;
};

/**
 * Identify a group by optional `id` and `traits`. Or, if no arguments are
 * supplied, return the current group.
 *
 * @param {string} [id=group.id()] Group ID.
 * @param {Object} [traits=null] Group traits.
 * @param {Object} [options=null]
 * @param {Function} [fn]
 * @return {Analytics|Object}
 */

Analytics.prototype.group = function(id, traits, options, fn) {
  /* eslint-disable no-unused-expressions, no-sequences */
  if (!arguments.length) return group;
  if (is.fn(options)) fn = options, options = null;
  if (is.fn(traits)) fn = traits, options = null, traits = null;
  if (is.object(id)) options = traits, traits = id, id = group.id();
  /* eslint-enable no-unused-expressions, no-sequences */


  // grab from group again to make sure we're taking from the source
  group.identify(id, traits);

  var msg = this.normalize({
    options: options,
    traits: group.traits(),
    groupId: group.id()
  });

  this._invoke('group', new Group(msg));

  this.emit('group', id, traits, options);
  this._callback(fn);
  return this;
};

/**
 * Track an `event` that a user has triggered with optional `properties`.
 *
 * @param {string} event
 * @param {Object} [properties=null]
 * @param {Object} [options=null]
 * @param {Function} [fn]
 * @return {Analytics}
 */

Analytics.prototype.track = function(event, properties, options, fn) {
  // Argument reshuffling.
  /* eslint-disable no-unused-expressions, no-sequences */
  if (is.fn(options)) fn = options, options = null;
  if (is.fn(properties)) fn = properties, options = null, properties = null;
  /* eslint-enable no-unused-expressions, no-sequences */

  // figure out if the event is archived.
  var plan = this.options.plan || {};
  var events = plan.track || {};

  // normalize
  var msg = this.normalize({
    properties: properties,
    options: options,
    event: event
  });

  // plan.
  plan = events[event];
  if (plan) {
    this.log('plan %o - %o', event, plan);
    if (plan.enabled === false) return this._callback(fn);
    defaults(msg.integrations, plan.integrations || {});
  }

  this._invoke('track', new Track(msg));

  this.emit('track', event, properties, options);
  this._callback(fn);
  return this;
};

/**
 * Helper method to track an outbound link that would normally navigate away
 * from the page before the analytics calls were sent.
 *
 * BACKWARDS COMPATIBILITY: aliased to `trackClick`.
 *
 * @param {Element|Array} links
 * @param {string|Function} event
 * @param {Object|Function} properties (optional)
 * @return {Analytics}
 */

Analytics.prototype.trackClick = Analytics.prototype.trackLink = function(links, event, properties) {
  if (!links) return this;
  // always arrays, handles jquery
  if (type(links) === 'element') links = [links];

  var self = this;
  each(function(el) {
    if (type(el) !== 'element') {
      throw new TypeError('Must pass HTMLElement to `analytics.trackLink`.');
    }
    on(el, 'click', function(e) {
      var ev = is.fn(event) ? event(el) : event;
      var props = is.fn(properties) ? properties(el) : properties;
      var href = el.getAttribute('href')
        || el.getAttributeNS('http://www.w3.org/1999/xlink', 'href')
        || el.getAttribute('xlink:href');

      self.track(ev, props);

      if (href && el.target !== '_blank' && !isMeta(e)) {
        prevent(e);
        self._callback(function() {
          window.location.href = href;
        });
      }
    });
  }, links);

  return this;
};

/**
 * Helper method to track an outbound form that would normally navigate away
 * from the page before the analytics calls were sent.
 *
 * BACKWARDS COMPATIBILITY: aliased to `trackSubmit`.
 *
 * @param {Element|Array} forms
 * @param {string|Function} event
 * @param {Object|Function} properties (optional)
 * @return {Analytics}
 */

Analytics.prototype.trackSubmit = Analytics.prototype.trackForm = function(forms, event, properties) {
  if (!forms) return this;
  // always arrays, handles jquery
  if (type(forms) === 'element') forms = [forms];

  var self = this;
  each(function(el) {
    if (type(el) !== 'element') throw new TypeError('Must pass HTMLElement to `analytics.trackForm`.');
    function handler(e) {
      prevent(e);

      var ev = is.fn(event) ? event(el) : event;
      var props = is.fn(properties) ? properties(el) : properties;
      self.track(ev, props);

      self._callback(function() {
        el.submit();
      });
    }

    // Support the events happening through jQuery or Zepto instead of through
    // the normal DOM API, because `el.submit` doesn't bubble up events...
    var $ = window.jQuery || window.Zepto;
    if ($) {
      $(el).submit(handler);
    } else {
      on(el, 'submit', handler);
    }
  }, forms);

  return this;
};

/**
 * Trigger a pageview, labeling the current page with an optional `category`,
 * `name` and `properties`.
 *
 * @param {string} [category]
 * @param {string} [name]
 * @param {Object|string} [properties] (or path)
 * @param {Object} [options]
 * @param {Function} [fn]
 * @return {Analytics}
 */

Analytics.prototype.page = function(category, name, properties, options, fn) {
  // Argument reshuffling.
  /* eslint-disable no-unused-expressions, no-sequences */
  if (is.fn(options)) fn = options, options = null;
  if (is.fn(properties)) fn = properties, options = properties = null;
  if (is.fn(name)) fn = name, options = properties = name = null;
  if (type(category) === 'object') options = name, properties = category, name = category = null;
  if (type(name) === 'object') options = properties, properties = name, name = null;
  if (type(category) === 'string' && type(name) !== 'string') name = category, category = null;
  /* eslint-enable no-unused-expressions, no-sequences */

  properties = clone(properties) || {};
  if (name) properties.name = name;
  if (category) properties.category = category;

  // Ensure properties has baseline spec properties.
  // TODO: Eventually move these entirely to `options.context.page`
  var defs = pageDefaults();
  defaults(properties, defs);

  // Mirror user overrides to `options.context.page` (but exclude custom properties)
  // (Any page defaults get applied in `this.normalize` for consistency.)
  // Weird, yeah--moving special props to `context.page` will fix this in the long term.
  var overrides = pick(keys(defs), properties);
  if (!is.empty(overrides)) {
    options = options || {};
    options.context = options.context || {};
    options.context.page = overrides;
  }

  var msg = this.normalize({
    properties: properties,
    category: category,
    options: options,
    name: name
  });

  this._invoke('page', new Page(msg));

  this.emit('page', category, name, properties, options);
  this._callback(fn);
  return this;
};

/**
 * FIXME: BACKWARDS COMPATIBILITY: convert an old `pageview` to a `page` call.
 *
 * @param {string} [url]
 * @return {Analytics}
 * @api private
 */

Analytics.prototype.pageview = function(url) {
  var properties = {};
  if (url) properties.path = url;
  this.page(properties);
  return this;
};

/**
 * Merge two previously unassociated user identities.
 *
 * @param {string} to
 * @param {string} from (optional)
 * @param {Object} options (optional)
 * @param {Function} fn (optional)
 * @return {Analytics}
 */

Analytics.prototype.alias = function(to, from, options, fn) {
  // Argument reshuffling.
  /* eslint-disable no-unused-expressions, no-sequences */
  if (is.fn(options)) fn = options, options = null;
  if (is.fn(from)) fn = from, options = null, from = null;
  if (is.object(from)) options = from, from = null;
  /* eslint-enable no-unused-expressions, no-sequences */

  var msg = this.normalize({
    options: options,
    previousId: from,
    userId: to
  });

  this._invoke('alias', new Alias(msg));

  this.emit('alias', to, from, options);
  this._callback(fn);
  return this;
};

/**
 * Register a `fn` to be fired when all the analytics services are ready.
 *
 * @param {Function} fn
 * @return {Analytics}
 */

Analytics.prototype.ready = function(fn) {
  if (is.fn(fn)) {
    if (this._readied) {
      nextTick(fn);
    } else {
      this.once('ready', fn);
    }
  }
  return this;
};

/**
 * Set the `timeout` (in milliseconds) used for callbacks.
 *
 * @param {Number} timeout
 */

Analytics.prototype.timeout = function(timeout) {
  this._timeout = timeout;
};

/**
 * Enable or disable debug.
 *
 * @param {string|boolean} str
 */

Analytics.prototype.debug = function(str) {
  if (!arguments.length || str) {
    debug.enable('analytics:' + (str || '*'));
  } else {
    debug.disable();
  }
};

/**
 * Apply options.
 *
 * @param {Object} options
 * @return {Analytics}
 * @api private
 */

Analytics.prototype._options = function(options) {
  options = options || {};
  this.options = options;
  cookie.options(options.cookie);
  store.options(options.localStorage);
  user.options(options.user);
  group.options(options.group);
  return this;
};

/**
 * Callback a `fn` after our defined timeout period.
 *
 * @param {Function} fn
 * @return {Analytics}
 * @api private
 */

Analytics.prototype._callback = function(fn) {
  if (is.fn(fn)) {
    this._timeout ? setTimeout(fn, this._timeout) : nextTick(fn);
  }
  return this;
};

/**
 * Call `method` with `facade` on all enabled integrations.
 *
 * @param {string} method
 * @param {Facade} facade
 * @return {Analytics}
 * @api private
 */

Analytics.prototype._invoke = function(method, facade) {
  this.emit('invoke', facade);

  each(function(integration, name) {
    if (!facade.enabled(name)) return;
    integration.invoke.call(integration, method, facade);
  }, this._integrations);

  return this;
};

/**
 * Push `args`.
 *
 * @param {Array} args
 * @api private
 */

Analytics.prototype.push = function(args) {
  var method = args.shift();
  if (!this[method]) return;
  this[method].apply(this, args);
};

/**
 * Reset group and user traits and id's.
 *
 * @api public
 */

Analytics.prototype.reset = function() {
  this.user().logout();
  this.group().logout();
};

/**
 * Parse the query string for callable methods.
 *
 * @param {String} query
 * @return {Analytics}
 * @api private
 */

Analytics.prototype._parseQuery = function(query) {
  // Parse querystring to an object
  var q = querystring.parse(query);
  // Create traits and properties objects, populate from querysting params
  var traits = pickPrefix('ajs_trait_', q);
  var props = pickPrefix('ajs_prop_', q);
  // Trigger based on callable parameters in the URL
  if (q.ajs_uid) this.identify(q.ajs_uid, traits);
  if (q.ajs_event) this.track(q.ajs_event, props);
  if (q.ajs_aid) user.anonymousId(q.ajs_aid);
  return this;

  /**
   * Create a shallow copy of an input object containing only the properties
   * whose keys are specified by a prefix, stripped of that prefix
   *
   * @param {String} prefix
   * @param {Object} object
   * @return {Object}
   * @api private
   */

  function pickPrefix(prefix, object) {
    var length = prefix.length;
    var sub;
    return foldl(function(acc, val, key) {
      if (key.substr(0, length) === prefix) {
        sub = key.substr(length);
        acc[sub] = val;
      }
      return acc;
    }, {}, object);
  }
};

/**
 * Normalize the given `msg`.
 *
 * @param {Object} msg
 * @return {Object}
 */

Analytics.prototype.normalize = function(msg) {
  msg = normalize(msg, keys(this._integrations));
  if (msg.anonymousId) user.anonymousId(msg.anonymousId);
  msg.anonymousId = user.anonymousId();

  // Ensure all outgoing requests include page data in their contexts.
  msg.context.page = defaults(msg.context.page || {}, pageDefaults());

  return msg;
};

/**
 * No conflict support.
 */

Analytics.prototype.noConflict = function() {
  window.analytics = _analytics;
  return this;
};

/*
 * Exports.
 */

module.exports = Analytics;
module.exports.cookie = cookie;
module.exports.memory = memory;
module.exports.store = store;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./cookie":21,"./group":23,"./memory":25,"./normalize":26,"./pageDefaults":27,"./store":28,"./user":29,"@ndhoule/after":3,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/each":8,"@ndhoule/foldl":11,"@ndhoule/keys":13,"@ndhoule/pick":15,"@segment/is-meta":595,"@segment/prevent-default":599,"bind-all":607,"component-emitter":30,"component-event":613,"component-querystring":616,"component-type":618,"debug":31,"is":629,"next-tick":640,"segmentio-facade":655}],21:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var bindAll = require('bind-all');
var clone = require('@ndhoule/clone');
var cookie = require('component-cookie');
var debug = require('debug')('analytics.js:cookie');
var defaults = require('@ndhoule/defaults');
var json = require('json3');
var topDomain = require('@segment/top-domain');

/**
 * Initialize a new `Cookie` with `options`.
 *
 * @param {Object} options
 */

function Cookie(options) {
  this.options(options);
}


/**
 * Get or set the cookie options.
 *
 * @param {Object} options
 *   @field {Number} maxage (1 year)
 *   @field {String} domain
 *   @field {String} path
 *   @field {Boolean} secure
 */

Cookie.prototype.options = function(options) {
  if (arguments.length === 0) return this._options;

  options = options || {};

  var domain = '.' + topDomain(window.location.href);
  if (domain === '.') domain = null;

  this._options = defaults(options, {
    // default to a year
    maxage: 31536000000,
    path: '/',
    domain: domain
  });

  // http://curl.haxx.se/rfc/cookie_spec.html
  // https://publicsuffix.org/list/effective_tld_names.dat
  //
  // try setting a dummy cookie with the options
  // if the cookie isn't set, it probably means
  // that the domain is on the public suffix list
  // like myapp.herokuapp.com or localhost / ip.
  this.set('ajs:test', true);
  if (!this.get('ajs:test')) {
    debug('fallback to domain=null');
    this._options.domain = null;
  }
  this.remove('ajs:test');
};


/**
 * Set a `key` and `value` in our cookie.
 *
 * @param {String} key
 * @param {Object} value
 * @return {Boolean} saved
 */

Cookie.prototype.set = function(key, value) {
  try {
    value = json.stringify(value);
    cookie(key, value, clone(this._options));
    return true;
  } catch (e) {
    return false;
  }
};


/**
 * Get a value from our cookie by `key`.
 *
 * @param {String} key
 * @return {Object} value
 */

Cookie.prototype.get = function(key) {
  try {
    var value = cookie(key);
    value = value ? json.parse(value) : null;
    return value;
  } catch (e) {
    return null;
  }
};


/**
 * Remove a value from our cookie by `key`.
 *
 * @param {String} key
 * @return {Boolean} removed
 */

Cookie.prototype.remove = function(key) {
  try {
    cookie(key, null, clone(this._options));
    return true;
  } catch (e) {
    return false;
  }
};


/**
 * Expose the cookie singleton.
 */

module.exports = bindAll(new Cookie());


/**
 * Expose the `Cookie` constructor.
 */

module.exports.Cookie = Cookie;

},{"@ndhoule/clone":5,"@ndhoule/defaults":6,"@segment/top-domain":604,"bind-all":607,"component-cookie":610,"debug":31,"json3":633}],22:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var clone = require('@ndhoule/clone');
var cookie = require('./cookie');
var debug = require('debug')('analytics:entity');
var defaults = require('@ndhoule/defaults');
var extend = require('@ndhoule/extend');
var memory = require('./memory');
var store = require('./store');
var isodateTraverse = require('@segment/isodate-traverse');

/**
 * Expose `Entity`
 */

module.exports = Entity;


/**
 * Initialize new `Entity` with `options`.
 *
 * @param {Object} options
 */

function Entity(options) {
  this.options(options);
  this.initialize();
}

/**
 * Initialize picks the storage.
 *
 * Checks to see if cookies can be set
 * otherwise fallsback to localStorage.
 */

Entity.prototype.initialize = function() {
  cookie.set('ajs:cookies', true);

  // cookies are enabled.
  if (cookie.get('ajs:cookies')) {
    cookie.remove('ajs:cookies');
    this._storage = cookie;
    return;
  }

  // localStorage is enabled.
  if (store.enabled) {
    this._storage = store;
    return;
  }

  // fallback to memory storage.
  debug('warning using memory store both cookies and localStorage are disabled');
  this._storage = memory;
};

/**
 * Get the storage.
 */

Entity.prototype.storage = function() {
  return this._storage;
};


/**
 * Get or set storage `options`.
 *
 * @param {Object} options
 *   @property {Object} cookie
 *   @property {Object} localStorage
 *   @property {Boolean} persist (default: `true`)
 */

Entity.prototype.options = function(options) {
  if (arguments.length === 0) return this._options;
  this._options = defaults(options || {}, this.defaults || {});
};


/**
 * Get or set the entity's `id`.
 *
 * @param {String} id
 */

Entity.prototype.id = function(id) {
  switch (arguments.length) {
  case 0: return this._getId();
  case 1: return this._setId(id);
  default:
      // No default case
  }
};


/**
 * Get the entity's id.
 *
 * @return {String}
 */

Entity.prototype._getId = function() {
  var ret = this._options.persist
    ? this.storage().get(this._options.cookie.key)
    : this._id;
  return ret === undefined ? null : ret;
};


/**
 * Set the entity's `id`.
 *
 * @param {String} id
 */

Entity.prototype._setId = function(id) {
  if (this._options.persist) {
    this.storage().set(this._options.cookie.key, id);
  } else {
    this._id = id;
  }
};


/**
 * Get or set the entity's `traits`.
 *
 * BACKWARDS COMPATIBILITY: aliased to `properties`
 *
 * @param {Object} traits
 */

Entity.prototype.properties = Entity.prototype.traits = function(traits) {
  switch (arguments.length) {
  case 0: return this._getTraits();
  case 1: return this._setTraits(traits);
  default:
      // No default case
  }
};


/**
 * Get the entity's traits. Always convert ISO date strings into real dates,
 * since they aren't parsed back from local storage.
 *
 * @return {Object}
 */

Entity.prototype._getTraits = function() {
  var ret = this._options.persist ? store.get(this._options.localStorage.key) : this._traits;
  return ret ? isodateTraverse(clone(ret)) : {};
};


/**
 * Set the entity's `traits`.
 *
 * @param {Object} traits
 */

Entity.prototype._setTraits = function(traits) {
  traits = traits || {};
  if (this._options.persist) {
    store.set(this._options.localStorage.key, traits);
  } else {
    this._traits = traits;
  }
};


/**
 * Identify the entity with an `id` and `traits`. If we it's the same entity,
 * extend the existing `traits` instead of overwriting.
 *
 * @param {String} id
 * @param {Object} traits
 */

Entity.prototype.identify = function(id, traits) {
  traits = traits || {};
  var current = this.id();
  if (current === null || current === id) traits = extend(this.traits(), traits);
  if (id) this.id(id);
  this.debug('identify %o, %o', id, traits);
  this.traits(traits);
  this.save();
};


/**
 * Save the entity to local storage and the cookie.
 *
 * @return {Boolean}
 */

Entity.prototype.save = function() {
  if (!this._options.persist) return false;
  cookie.set(this._options.cookie.key, this.id());
  store.set(this._options.localStorage.key, this.traits());
  return true;
};


/**
 * Log the entity out, reseting `id` and `traits` to defaults.
 */

Entity.prototype.logout = function() {
  this.id(null);
  this.traits({});
  cookie.remove(this._options.cookie.key);
  store.remove(this._options.localStorage.key);
};


/**
 * Reset all entity state, logging out and returning options to defaults.
 */

Entity.prototype.reset = function() {
  this.logout();
  this.options({});
};


/**
 * Load saved entity `id` or `traits` from storage.
 */

Entity.prototype.load = function() {
  this.id(cookie.get(this._options.cookie.key));
  this.traits(store.get(this._options.localStorage.key));
};


},{"./cookie":21,"./memory":25,"./store":28,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"@segment/isodate-traverse":596,"debug":31}],23:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var Entity = require('./entity');
var bindAll = require('bind-all');
var debug = require('debug')('analytics:group');
var inherit = require('inherits');

/**
 * Group defaults
 */

Group.defaults = {
  persist: true,
  cookie: {
    key: 'ajs_group_id'
  },
  localStorage: {
    key: 'ajs_group_properties'
  }
};


/**
 * Initialize a new `Group` with `options`.
 *
 * @param {Object} options
 */

function Group(options) {
  this.defaults = Group.defaults;
  this.debug = debug;
  Entity.call(this, options);
}


/**
 * Inherit `Entity`
 */

inherit(Group, Entity);


/**
 * Expose the group singleton.
 */

module.exports = bindAll(new Group());


/**
 * Expose the `Group` constructor.
 */

module.exports.Group = Group;

},{"./entity":22,"bind-all":607,"debug":31,"inherits":627}],24:[function(require,module,exports){
'use strict';

/**
 * Analytics.js
 *
 * (C) 2013-2016 Segment.io Inc.
 */

var Analytics = require('./analytics');

// Create a new `analytics` singleton.
var analytics = new Analytics();

// Expose `require`.
// TODO(ndhoule): Look into deprecating, we no longer need to expose it in tests
analytics.require = require;

// Expose package version.
analytics.VERSION = require('../package.json').version;

/*
 * Exports.
 */

module.exports = analytics;

},{"../package.json":34,"./analytics":20}],25:[function(require,module,exports){
'use strict';

/*
 * Module Dependencies.
 */

var bindAll = require('bind-all');
var clone = require('@ndhoule/clone');

/**
 * HOP.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Expose `Memory`
 */

module.exports = bindAll(new Memory());

/**
 * Initialize `Memory` store
 */

function Memory() {
  this.store = {};
}

/**
 * Set a `key` and `value`.
 *
 * @param {String} key
 * @param {Mixed} value
 * @return {Boolean}
 */

Memory.prototype.set = function(key, value) {
  this.store[key] = clone(value);
  return true;
};

/**
 * Get a `key`.
 *
 * @param {String} key
 */

Memory.prototype.get = function(key) {
  if (!has.call(this.store, key)) return;
  return clone(this.store[key]);
};

/**
 * Remove a `key`.
 *
 * @param {String} key
 * @return {Boolean}
 */

Memory.prototype.remove = function(key) {
  delete this.store[key];
  return true;
};

},{"@ndhoule/clone":5,"bind-all":607}],26:[function(require,module,exports){
'use strict';

/**
 * Module Dependencies.
 */

var debug = require('debug')('analytics.js:normalize');
var defaults = require('@ndhoule/defaults');
var each = require('@ndhoule/each');
var includes = require('@ndhoule/includes');
var map = require('@ndhoule/map');
var type = require('component-type');

/**
 * HOP.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Expose `normalize`
 */

module.exports = normalize;

/**
 * Toplevel properties.
 */

var toplevel = [
  'integrations',
  'anonymousId',
  'timestamp',
  'context'
];

/**
 * Normalize `msg` based on integrations `list`.
 *
 * @param {Object} msg
 * @param {Array} list
 * @return {Function}
 */

function normalize(msg, list) {
  var lower = map(function(s) { return s.toLowerCase(); }, list);
  var opts = msg.options || {};
  var integrations = opts.integrations || {};
  var providers = opts.providers || {};
  var context = opts.context || {};
  var ret = {};
  debug('<-', msg);

  // integrations.
  each(function(value, key) {
    if (!integration(key)) return;
    if (!has.call(integrations, key)) integrations[key] = value;
    delete opts[key];
  }, opts);

  // providers.
  delete opts.providers;
  each(function(value, key) {
    if (!integration(key)) return;
    if (type(integrations[key]) === 'object') return;
    if (has.call(integrations, key) && typeof providers[key] === 'boolean') return;
    integrations[key] = value;
  }, providers);

  // move all toplevel options to msg
  // and the rest to context.
  each(function(value, key) {
    if (includes(key, toplevel)) {
      ret[key] = opts[key];
    } else {
      context[key] = opts[key];
    }
  }, opts);

  // cleanup
  delete msg.options;
  ret.integrations = integrations;
  ret.context = context;
  ret = defaults(ret, msg);
  debug('->', ret);
  return ret;

  function integration(name) {
    return !!(includes(name, list) || name.toLowerCase() === 'all' || includes(name.toLowerCase(), lower));
  }
}

},{"@ndhoule/defaults":6,"@ndhoule/each":8,"@ndhoule/includes":12,"@ndhoule/map":14,"component-type":618,"debug":31}],27:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var canonical = require('@segment/canonical');
var includes = require('@ndhoule/includes');
var url = require('component-url');

/**
 * Return a default `options.context.page` object.
 *
 * https://segment.com/docs/spec/page/#properties
 *
 * @return {Object}
 */

function pageDefaults() {
  return {
    path: canonicalPath(),
    referrer: document.referrer,
    search: location.search,
    title: document.title,
    url: canonicalUrl(location.search)
  };
}

/**
 * Return the canonical path for the page.
 *
 * @return {string}
 */

function canonicalPath() {
  var canon = canonical();
  if (!canon) return window.location.pathname;
  var parsed = url.parse(canon);
  return parsed.pathname;
}

/**
 * Return the canonical URL for the page concat the given `search`
 * and strip the hash.
 *
 * @param {string} search
 * @return {string}
 */

function canonicalUrl(search) {
  var canon = canonical();
  if (canon) return includes('?', canon) ? canon : canon + search;
  var url = window.location.href;
  var i = url.indexOf('#');
  return i === -1 ? url : url.slice(0, i);
}

/*
 * Exports.
 */

module.exports = pageDefaults;

},{"@ndhoule/includes":12,"@segment/canonical":592,"component-url":619}],28:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var bindAll = require('bind-all');
var defaults = require('@ndhoule/defaults');
var store = require('@segment/store');

/**
 * Initialize a new `Store` with `options`.
 *
 * @param {Object} options
 */

function Store(options) {
  this.options(options);
}

/**
 * Set the `options` for the store.
 *
 * @param {Object} options
 *   @field {Boolean} enabled (true)
 */

Store.prototype.options = function(options) {
  if (arguments.length === 0) return this._options;

  options = options || {};
  defaults(options, { enabled: true });

  this.enabled = options.enabled && store.enabled;
  this._options = options;
};


/**
 * Set a `key` and `value` in local storage.
 *
 * @param {string} key
 * @param {Object} value
 */

Store.prototype.set = function(key, value) {
  if (!this.enabled) return false;
  return store.set(key, value);
};


/**
 * Get a value from local storage by `key`.
 *
 * @param {string} key
 * @return {Object}
 */

Store.prototype.get = function(key) {
  if (!this.enabled) return null;
  return store.get(key);
};


/**
 * Remove a value from local storage by `key`.
 *
 * @param {string} key
 */

Store.prototype.remove = function(key) {
  if (!this.enabled) return false;
  return store.remove(key);
};


/**
 * Expose the store singleton.
 */

module.exports = bindAll(new Store());


/**
 * Expose the `Store` constructor.
 */

module.exports.Store = Store;

},{"@ndhoule/defaults":6,"@segment/store":602,"bind-all":607}],29:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var Entity = require('./entity');
var bindAll = require('bind-all');
var cookie = require('./cookie');
var debug = require('debug')('analytics:user');
var inherit = require('inherits');
var rawCookie = require('component-cookie');
var uuid = require('uuid');

/**
 * User defaults
 */

User.defaults = {
  persist: true,
  cookie: {
    key: 'ajs_user_id',
    oldKey: 'ajs_user'
  },
  localStorage: {
    key: 'ajs_user_traits'
  }
};


/**
 * Initialize a new `User` with `options`.
 *
 * @param {Object} options
 */

function User(options) {
  this.defaults = User.defaults;
  this.debug = debug;
  Entity.call(this, options);
}


/**
 * Inherit `Entity`
 */

inherit(User, Entity);

/**
 * Set/get the user id.
 *
 * When the user id changes, the method will reset his anonymousId to a new one.
 *
 * // FIXME: What are the mixed types?
 * @param {string} id
 * @return {Mixed}
 * @example
 * // didn't change because the user didn't have previous id.
 * anonymousId = user.anonymousId();
 * user.id('foo');
 * assert.equal(anonymousId, user.anonymousId());
 *
 * // didn't change because the user id changed to null.
 * anonymousId = user.anonymousId();
 * user.id('foo');
 * user.id(null);
 * assert.equal(anonymousId, user.anonymousId());
 *
 * // change because the user had previous id.
 * anonymousId = user.anonymousId();
 * user.id('foo');
 * user.id('baz'); // triggers change
 * user.id('baz'); // no change
 * assert.notEqual(anonymousId, user.anonymousId());
 */

User.prototype.id = function(id) {
  var prev = this._getId();
  var ret = Entity.prototype.id.apply(this, arguments);
  if (prev == null) return ret;
  // FIXME: We're relying on coercion here (1 == "1"), but our API treats these
  // two values differently. Figure out what will break if we remove this and
  // change to strict equality
  /* eslint-disable eqeqeq */
  if (prev != id && id) this.anonymousId(null);
  /* eslint-enable eqeqeq */
  return ret;
};

/**
 * Set / get / remove anonymousId.
 *
 * @param {String} anonymousId
 * @return {String|User}
 */

User.prototype.anonymousId = function(anonymousId) {
  var store = this.storage();

  // set / remove
  if (arguments.length) {
    store.set('ajs_anonymous_id', anonymousId);
    return this;
  }

  // new
  anonymousId = store.get('ajs_anonymous_id');
  if (anonymousId) {
    return anonymousId;
  }

  // old - it is not stringified so we use the raw cookie.
  anonymousId = rawCookie('_sio');
  if (anonymousId) {
    anonymousId = anonymousId.split('----')[0];
    store.set('ajs_anonymous_id', anonymousId);
    store.remove('_sio');
    return anonymousId;
  }

  // empty
  anonymousId = uuid.v4();
  store.set('ajs_anonymous_id', anonymousId);
  return store.get('ajs_anonymous_id');
};

/**
 * Remove anonymous id on logout too.
 */

User.prototype.logout = function() {
  Entity.prototype.logout.call(this);
  this.anonymousId(null);
};

/**
 * Load saved user `id` or `traits` from storage.
 */

User.prototype.load = function() {
  if (this._loadOldCookie()) return;
  Entity.prototype.load.call(this);
};


/**
 * BACKWARDS COMPATIBILITY: Load the old user from the cookie.
 *
 * @api private
 * @return {boolean}
 */

User.prototype._loadOldCookie = function() {
  var user = cookie.get(this._options.cookie.oldKey);
  if (!user) return false;

  this.id(user.id);
  this.traits(user.traits);
  cookie.remove(this._options.cookie.oldKey);
  return true;
};


/**
 * Expose the user singleton.
 */

module.exports = bindAll(new User());


/**
 * Expose the `User` constructor.
 */

module.exports.User = User;

},{"./cookie":21,"./entity":22,"bind-all":607,"component-cookie":610,"debug":31,"inherits":627,"uuid":33}],30:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],31:[function(require,module,exports){

/**
 * Expose `debug()` as the module.
 */

module.exports = debug;

/**
 * Create a debugger with the given `name`.
 *
 * @param {String} name
 * @return {Type}
 * @api public
 */

function debug(name) {
  if (!debug.enabled(name)) return function(){};

  return function(fmt){
    fmt = coerce(fmt);

    var curr = new Date;
    var ms = curr - (debug[name] || curr);
    debug[name] = curr;

    fmt = name
      + ' '
      + fmt
      + ' +' + debug.humanize(ms);

    // This hackery is required for IE8
    // where `console.log` doesn't have 'apply'
    window.console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
  }
}

/**
 * The currently active debug mode names.
 */

debug.names = [];
debug.skips = [];

/**
 * Enables a debug mode by name. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} name
 * @api public
 */

debug.enable = function(name) {
  try {
    localStorage.debug = name;
  } catch(e){}

  var split = (name || '').split(/[\s,]+/)
    , len = split.length;

  for (var i = 0; i < len; i++) {
    name = split[i].replace('*', '.*?');
    if (name[0] === '-') {
      debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
    }
    else {
      debug.names.push(new RegExp('^' + name + '$'));
    }
  }
};

/**
 * Disable debug output.
 *
 * @api public
 */

debug.disable = function(){
  debug.enable('');
};

/**
 * Humanize the given `ms`.
 *
 * @param {Number} m
 * @return {String}
 * @api private
 */

debug.humanize = function(ms) {
  var sec = 1000
    , min = 60 * 1000
    , hour = 60 * min;

  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
  if (ms >= min) return (ms / min).toFixed(1) + 'm';
  if (ms >= sec) return (ms / sec | 0) + 's';
  return ms + 'ms';
};

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

debug.enabled = function(name) {
  for (var i = 0, len = debug.skips.length; i < len; i++) {
    if (debug.skips[i].test(name)) {
      return false;
    }
  }
  for (var i = 0, len = debug.names.length; i < len; i++) {
    if (debug.names[i].test(name)) {
      return true;
    }
  }
  return false;
};

/**
 * Coerce `val`.
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

// persist

try {
  if (window.localStorage) debug.enable(localStorage.debug);
} catch(e){}

},{}],32:[function(require,module,exports){
(function (global){

var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
  // Moderately fast, high quality
  var _rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(_rnds8);
    return _rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  _rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return _rnds;
  };
}

module.exports = rng;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],33:[function(require,module,exports){
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var _rng = require('./rng');

// Maps for number <-> hex string conversion
var _byteToHex = [];
var _hexToByte = {};
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
  _hexToByte[_byteToHex[i]] = i;
}

// **`parse()` - Parse a UUID into it's component bytes**
function parse(s, buf, offset) {
  var i = (buf && offset) || 0, ii = 0;

  buf = buf || [];
  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
    if (ii < 16) { // Don't overflow!
      buf[i + ii++] = _hexToByte[oct];
    }
  });

  // Zero out remaining bytes if string was short
  while (ii < 16) {
    buf[i + ii++] = 0;
  }

  return buf;
}

// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function unparse(buf, offset) {
  var i = offset || 0, bth = _byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = _rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; n++) {
    b[i + n] = node[n];
  }

  return buf ? buf : unparse(b);
}

// **`v4()` - Generate random UUID**

// See https://github.com/broofa/node-uuid for API details
function v4(options, buf, offset) {
  // Deprecated - 'format' argument, as supported in v1.2
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || _rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || unparse(rnds);
}

// Export public API
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
uuid.parse = parse;
uuid.unparse = unparse;

module.exports = uuid;

},{"./rng":32}],34:[function(require,module,exports){
module.exports={
  "_args": [
    [
      "@segment/analytics.js-core@^3.0.0",
      "/Users/carlthorner/Projects/skraphaug/develoment/analytics.js"
    ]
  ],
  "_from": "@segment/analytics.js-core@>=3.0.0 <4.0.0",
  "_id": "@segment/analytics.js-core@3.0.0",
  "_inCache": true,
  "_installable": true,
  "_location": "/@segment/analytics.js-core",
  "_nodeVersion": "4.4.5",
  "_npmOperationalInternal": {
    "host": "packages-16-east.internal.npmjs.com",
    "tmp": "tmp/analytics.js-core-3.0.0.tgz_1464222726516_0.005199481267482042"
  },
  "_npmUser": {
    "email": "tools+npm@segment.com",
    "name": "segment"
  },
  "_npmVersion": "2.15.5",
  "_phantomChildren": {},
  "_requested": {
    "name": "@segment/analytics.js-core",
    "raw": "@segment/analytics.js-core@^3.0.0",
    "rawSpec": "^3.0.0",
    "scope": "@segment",
    "spec": ">=3.0.0 <4.0.0",
    "type": "range"
  },
  "_requiredBy": [
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/@segment/analytics.js-core/-/analytics.js-core-3.0.0.tgz",
  "_shasum": "166e682023e6086d41e53abe5cddb23bf02b14ed",
  "_shrinkwrap": null,
  "_spec": "@segment/analytics.js-core@^3.0.0",
  "_where": "/Users/carlthorner/Projects/skraphaug/develoment/analytics.js",
  "author": {
    "email": "friends@segment.com",
    "name": "Segment"
  },
  "bugs": {
    "url": "https://github.com/segmentio/analytics.js-core/issues"
  },
  "dependencies": {
    "@ndhoule/after": "^1.0.0",
    "@ndhoule/clone": "^1.0.0",
    "@ndhoule/defaults": "^2.0.1",
    "@ndhoule/each": "^2.0.1",
    "@ndhoule/extend": "^2.0.0",
    "@ndhoule/foldl": "^2.0.1",
    "@ndhoule/includes": "^2.0.1",
    "@ndhoule/keys": "^2.0.0",
    "@ndhoule/map": "^2.0.1",
    "@ndhoule/pick": "^2.0.0",
    "@segment/canonical": "^1.0.0",
    "@segment/is-meta": "^1.0.0",
    "@segment/isodate": "^1.0.2",
    "@segment/isodate-traverse": "^1.0.1",
    "@segment/prevent-default": "^1.0.0",
    "@segment/store": "^1.3.20",
    "@segment/top-domain": "^3.0.0",
    "bind-all": "^1.0.0",
    "component-cookie": "^1.1.2",
    "component-emitter": "^1.2.1",
    "component-event": "^0.1.4",
    "component-querystring": "^2.0.0",
    "component-type": "^1.2.1",
    "component-url": "^0.2.1",
    "debug": "^0.7.4",
    "inherits": "^2.0.1",
    "install": "^0.7.3",
    "is": "^3.1.0",
    "json3": "^3.3.2",
    "new-date": "^1.0.0",
    "next-tick": "^0.2.2",
    "segmentio-facade": "^3.0.2",
    "uuid": "^2.0.2"
  },
  "description": "The hassle-free way to integrate analytics into any web application.",
  "devDependencies": {
    "@segment/analytics.js-integration": "^2.0.0",
    "@segment/eslint-config": "^3.1.1",
    "browserify": "^13.0.0",
    "browserify-istanbul": "^2.0.0",
    "compat-trigger-event": "^1.0.0",
    "component-each": "^0.2.6",
    "eslint": "^2.9.0",
    "eslint-plugin-mocha": "^2.2.0",
    "eslint-plugin-require-path-exists": "^1.1.5",
    "istanbul": "^0.4.3",
    "jquery": "^1.12.3",
    "karma": "^0.13.22",
    "karma-browserify": "^5.0.4",
    "karma-chrome-launcher": "^1.0.1",
    "karma-coverage": "^1.0.0",
    "karma-junit-reporter": "^1.0.0",
    "karma-mocha": "^1.0.1",
    "karma-phantomjs-launcher": "^1.0.0",
    "karma-sauce-launcher": "^1.0.0",
    "karma-spec-reporter": "0.0.26",
    "mocha": "^2.2.5",
    "phantomjs-prebuilt": "^2.1.7",
    "proclaim": "^3.4.1",
    "sinon": "^1.7.3",
    "watchify": "^3.7.0"
  },
  "directories": {},
  "dist": {
    "shasum": "166e682023e6086d41e53abe5cddb23bf02b14ed",
    "tarball": "https://registry.npmjs.org/@segment/analytics.js-core/-/analytics.js-core-3.0.0.tgz"
  },
  "homepage": "https://github.com/segmentio/analytics.js-core#readme",
  "keywords": [
    "analytics",
    "analytics.js",
    "segment",
    "segment.io"
  ],
  "license": "SEE LICENSE IN LICENSE",
  "main": "lib/index.js",
  "maintainers": [
    {
      "name": "segment",
      "email": "tools+npm@segment.com"
    }
  ],
  "name": "@segment/analytics.js-core",
  "optionalDependencies": {},
  "readme": "ERROR: No README data found!",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/segmentio/analytics.js-core.git"
  },
  "scripts": {
    "test": "make test"
  },
  "version": "3.0.0"
}

},{}],35:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('@ndhoule/each');
var foldl = require('@ndhoule/foldl');
var integration = require('@segment/analytics.js-integration');
var map = require('@ndhoule/map');
var snake = require('to-snake-case');
var useHttps = require('use-https');

/**
 * Expose `AdRoll` integration.
 */

var AdRoll = module.exports = integration('AdRoll')
  .assumesPageview()
  .global('__adroll')
  .global('__adroll_loaded')
  .global('adroll_adv_id')
  .global('adroll_custom_data')
  .global('adroll_email')
  .global('adroll_pix_id')
  .option('advId', '')
  .option('pixId', '')
  .option('_version', 2)
  .tag('http', '<script src="http://a.adroll.com/j/roundtrip.js">')
  .tag('https', '<script src="https://s.adroll.com/j/roundtrip.js">')
  .mapping('events');

/**
 * Initialize.
 *
 * http://support.adroll.com/getting-started-in-4-easy-steps/#step-one
 * http://support.adroll.com/enhanced-conversion-tracking/
 *
 * @api public
 */

AdRoll.prototype.initialize = function() {
  window.adroll_adv_id = this.options.advId;
  window.adroll_pix_id = this.options.pixId;
  window.__adroll_loaded = true;
  var name = useHttps() ? 'https' : 'http';
  this.load(name, this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

AdRoll.prototype.loaded = function() {
  return !!window.__adroll;
};

/**
 * Page.
 *
 * http://support.adroll.com/segmenting-clicks/
 *
 * @api public
 * @param {Page} page
 */

AdRoll.prototype.page = function(page) {
  this.track(page.track(page.fullName()));
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

AdRoll.prototype.identify = function(identify) {
  if (identify.email()) {
    window.adroll_email = identify.email();
    window.__adroll.record_adroll_email('segment');
  }
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

AdRoll.prototype.track = function(track) {
  var events = this.events(track.event());
  var userId = this.analytics.user().id();
  var data = formulateData(track, { revenue: 'adroll_conversion_value' });
  // As of April 2015, Adroll no longer accepts segments by name, instead
  // segmenting exclusively by segment ID, which will be present in events map
  // TODO: Deprecate and remove this behavior
  if (this.options._version === 1) {
    // If this is an unmapped event, fall back on a snakeized event name
    if (!events.length) events = [track.event()];
    // legacy (v1) behavior is to snakeize all mapped `events` values
    events = map(snake, events);
  }

  if (userId) data.user_id = userId;

  sendConversion(events, data);
};

/**
 * Product Viewed/Added
 *
 * @api public
 * @param {Track} track
 */

AdRoll.prototype.productViewed = AdRoll.prototype.productAdded = function(track) {
  var events = this.events(track.event());
  var userId = this.analytics.user().id();
  var data = formulateData(track, {
    id: 'product_id',
    productId: 'product_id',
    price: 'adroll_conversion_value'
  });

  if (this.options._version === 1) {
    // If this is an unmapped event, fall back on a snakeized event name
    if (!events.length) events = [track.event()];
    // legacy (v1) behavior is to snakeize all mapped `events` values
    events = map(snake, events);
  }

  if (userId) data.user_id = userId;

  sendConversion(events, data);
};

/**
 * Order Completed
 *
 * @api public
 * @param {Track} track
 */

AdRoll.prototype.orderCompleted = function(track) {
  var events = this.events(track.event());
  var userId = this.analytics.user().id();
  var data = formulateData(track, {
    orderId: 'order_id',
    revenue: 'adroll_conversion_value'
  });

  if (track.properties().currency) {
    data.adroll_currency = track.properties().currency;
    delete data.currency;
  }

  if (this.options._version === 1) {
    // If this is an unmapped event, fall back on a snakeized event name
    if (!events.length) events = [track.event()];
    // legacy (v1) behavior is to snakeize all mapped `events` values
    events = map(snake, events);
  }

  if (userId) data.user_id = userId;

  sendConversion(events, data);
};

/**
 * Send conversion events
 *
 * @params {Object, Object} events, data
 * @api private
 */

function sendConversion(events, data) {
  each(function(segmentId) {
    data.adroll_segments = segmentId;
    window.__adroll.record_user(data);
  }, events);
}

/**
 * Format data payload
 *
 * @params {Object, Object} track, alias
 * @api private
 */

function formulateData(track, alias) {
  var aliases = alias || {};
  var ret = foldl(function(props, val, key) {
    props[snake(key)] = val;
    return props;
  }, track.properties(aliases));

  return ret;
}

},{"@ndhoule/each":8,"@ndhoule/foldl":11,"@ndhoule/map":14,"@segment/analytics.js-integration":586,"to-snake-case":665,"use-https":672}],36:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('@ndhoule/each');
var integration = require('@segment/analytics.js-integration');
var when = require('do-when');

/**
 * Expose `AdWords`.
 */

var AdWords = module.exports = integration('AdWords')
  .option('conversionId', '')
  .option('remarketing', false)
  .option('whitelist', [])
  .tag('<script src="//www.googleadservices.com/pagead/conversion_async.js">')
  .mapping('events');

/**
 * Initialize.
 *
 * @api public
 */

AdWords.prototype.initialize = function() {
  var loaded = this.loaded;
  var ready = this.ready;
  this.load(function() {
    when(loaded, ready);
  });
};

/**
 * Loaded.
 *
 * @api private
 * @return {boolean}
 */

AdWords.prototype.loaded = function() {
  return !!(document.body && window.google_trackConversion);
};

/**
 * Page.
 *
 * https://support.google.com/adwords/answer/3111920#standard_parameters
 * https://support.google.com/adwords/answer/3103357
 * https://developers.google.com/adwords-remarketing-tag/asynchronous/
 * https://developers.google.com/adwords-remarketing-tag/parameters
 *
 * @api public
 * @param {Page} page
 */

AdWords.prototype.page = function(page) {
  // Remarketing option can support both Adwords' "static" or "dynamic" remarketing tags
  // Difference is static you don't need to send props under `google_custom_params`
  var remarketing = this.options.remarketing;
  var id = this.options.conversionId;
  var props = page.properties();

  // Conversion tag
  window.google_trackConversion({
    google_conversion_id: id,
    google_custom_params: {},
    google_remarketing_only: false // this ensures that this is a conversion tag
  });

  // Remarketing tag (must be sent in _addition_ to any conversion tags)
  // https://developers.google.com/adwords-remarketing-tag/
  if (remarketing) {
    window.google_trackConversion({
      google_conversion_id: id,
      google_custom_params: props,
      google_remarketing_only: true // this ensures that this is a remarketing tag
    });
  }
};

/**
 * Track.
 *
 * @api public
 * @param {Track}
 */

AdWords.prototype.track = function(track) {
  var id = this.options.conversionId;
  var props = track.properties();
  var remarketing = this.options.remarketing;
  var events = this.events(track.event());
  var revenue = track.revenue() || 0;
  // Check if this is a whitelisted event for standalone remarketing tag
  var whitelisted = this.options.whitelist.indexOf(track.event()) > -1;
  var sentAlready = false;

  each(function(label) {
    delete props.revenue;
    // Fire conversion tag
    window.google_trackConversion({
      google_conversion_id: id,
      google_custom_params: props,
      google_conversion_language: 'en',
      google_conversion_format: '3',
      google_conversion_color: 'ffffff',
      google_conversion_label: label,
      google_conversion_value: revenue,
      google_remarketing_only: false // ensure this is a conversion tag
    });
    // Fire remarketing tag
    if (!sentAlready && remarketing) {
      window.google_trackConversion({
        google_conversion_id: id,
        google_custom_params: props, // do not send PII here!
        google_remarketing_only: true // ensure this is a remarketing tag
      });
      sentAlready = true;
    }
  }, events);

  if (!sentAlready && whitelisted) {
    window.google_trackConversion({
      google_conversion_id: id,
      google_custom_params: props, // do not send PII here!
      google_remarketing_only: true // ensure this is a remarketing tag
    });
  }
};

},{"@ndhoule/each":8,"@segment/analytics.js-integration":37,"do-when":623}],37:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var bind = require('component-bind');
var clone = require('@ndhoule/clone');
var debug = require('debug');
var defaults = require('@ndhoule/defaults');
var extend = require('@ndhoule/extend');
var slug = require('slug-component');
var protos = require('./protos');
var statics = require('./statics');

/**
 * Create a new `Integration` constructor.
 *
 * @constructs Integration
 * @param {string} name
 * @return {Function} Integration
 */

function createIntegration(name) {
  /**
   * Initialize a new `Integration`.
   *
   * @class
   * @param {Object} options
   */

  function Integration(options) {
    if (options && options.addIntegration) {
      // plugin
      return options.addIntegration(Integration);
    }
    this.debug = debug('analytics:integration:' + slug(name));
    this.options = defaults(clone(options) || {}, this.defaults);
    this._queue = [];
    this.once('ready', bind(this, this.flush));

    Integration.emit('construct', this);
    this.ready = bind(this, this.ready);
    this._wrapInitialize();
    this._wrapPage();
    this._wrapTrack();
  }

  Integration.prototype.defaults = {};
  Integration.prototype.globals = [];
  Integration.prototype.templates = {};
  Integration.prototype.name = name;
  extend(Integration, statics);
  extend(Integration.prototype, protos);

  return Integration;
}

/**
 * Exports.
 */

module.exports = createIntegration;

},{"./protos":38,"./statics":39,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"slug-component":661}],38:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Emitter = require('component-emitter');
var after = require('@ndhoule/after');
var each = require('@ndhoule/each');
var events = require('analytics-events');
var every = require('@ndhoule/every');
var fmt = require('@segment/fmt');
var foldl = require('@ndhoule/foldl');
var is = require('is');
var loadIframe = require('load-iframe');
var loadScript = require('@segment/load-script');
var nextTick = require('next-tick');
var normalize = require('to-no-case');

/**
 * hasOwnProperty reference.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * No operation.
 */

var noop = function noop() {};

/**
 * Window defaults.
 */

var onerror = window.onerror;
var onload = null;

/**
 * Mixin emitter.
 */

/* eslint-disable new-cap */
Emitter(exports);
/* eslint-enable new-cap */

/**
 * Initialize.
 */

exports.initialize = function() {
  var ready = this.ready;
  nextTick(ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

exports.loaded = function() {
  return false;
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

/* eslint-disable no-unused-vars */
exports.page = function(page) {};
/* eslint-enable no-unused-vars */

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

/* eslint-disable no-unused-vars */
exports.track = function(track) {};
/* eslint-enable no-unused-vars */

/**
 * Get values from items in `options` that are mapped to `key`.
 * `options` is an integration setting which is a collection
 * of type 'map', 'array', or 'mixed'
 *
 * Use cases include mapping events to pixelIds (map), sending generic
 * conversion pixels only for specific events (array), or configuring dynamic
 * mappings of event properties to query string parameters based on event (mixed)
 *
 * @api public
 * @param {Object|Object[]|String[]} options An object, array of objects, or
 * array of strings pulled from settings.mapping.
 * @param {string} key The name of the item in options whose metadata
 * we're looking for.
 * @return {Array} An array of settings that match the input `key` name.
 * @example
 *
 * // 'Map'
 * var events = { my_event: 'a4991b88' };
 * .map(events, 'My Event');
 * // => ["a4991b88"]
 * .map(events, 'whatever');
 * // => []
 *
 * // 'Array'
 * * var events = ['Completed Order', 'My Event'];
 * .map(events, 'My Event');
 * // => ["My Event"]
 * .map(events, 'whatever');
 * // => []
 *
 * // 'Mixed'
 * var events = [{ key: 'my event', value: '9b5eb1fa' }];
 * .map(events, 'my_event');
 * // => ["9b5eb1fa"]
 * .map(events, 'whatever');
 * // => []
 */

exports.map = function(options, key) {
  var normalizedComparator = normalize(key);
  var mappingType = getMappingType(options);

  if (mappingType === 'unknown') {
    return [];
  }

  return foldl(function(matchingValues, val, key) {
    var compare;
    var result;

    if (mappingType === 'map') {
      compare = key;
      result = val;
    }

    if (mappingType === 'array') {
      compare = val;
      result = val;
    }

    if (mappingType === 'mixed') {
      compare = val.key;
      result = val.value;
    }

    if (normalize(compare) === normalizedComparator) {
      matchingValues.push(result);
    }

    return matchingValues;
  }, [], options);
};

/**
 * Invoke a `method` that may or may not exist on the prototype with `args`,
 * queueing or not depending on whether the integration is "ready". Don't
 * trust the method call, since it contains integration party code.
 *
 * @api private
 * @param {string} method
 * @param {...*} args
 */

exports.invoke = function(method) {
  if (!this[method]) return;
  var args = Array.prototype.slice.call(arguments, 1);
  if (!this._ready) return this.queue(method, args);
  var ret;

  try {
    this.debug('%s with %o', method, args);
    ret = this[method].apply(this, args);
  } catch (e) {
    this.debug('error %o calling %s with %o', e, method, args);
  }

  return ret;
};

/**
 * Queue a `method` with `args`. If the integration assumes an initial
 * pageview, then let the first call to `page` pass through.
 *
 * @api private
 * @param {string} method
 * @param {Array} args
 */

exports.queue = function(method, args) {
  if (method === 'page' && this._assumesPageview && !this._initialized) {
    return this.page.apply(this, args);
  }

  this._queue.push({ method: method, args: args });
};

/**
 * Flush the internal queue.
 *
 * @api private
 */

exports.flush = function() {
  this._ready = true;
  var self = this;

  each(function(call) {
    self[call.method].apply(self, call.args);
  }, this._queue);

  // Empty the queue.
  this._queue.length = 0;
};

/**
 * Reset the integration, removing its global variables.
 *
 * @api private
 */

exports.reset = function() {
  for (var i = 0; i < this.globals.length; i++) {
    window[this.globals[i]] = undefined;
  }

  window.onerror = onerror;
  window.onload = onload;
};

/**
 * Load a tag by `name`.
 *
 * @param {string} name The name of the tag.
 * @param {Object} locals Locals used to populate the tag's template variables
 * (e.g. `userId` in '<img src="https://whatever.com/{{ userId }}">').
 * @param {Function} [callback=noop] A callback, invoked when the tag finishes
 * loading.
 */

exports.load = function(name, locals, callback) {
  // Argument shuffling
  if (typeof name === 'function') { callback = name; locals = null; name = null; }
  if (name && typeof name === 'object') { callback = locals; locals = name; name = null; }
  if (typeof locals === 'function') { callback = locals; locals = null; }

  // Default arguments
  name = name || 'library';
  locals = locals || {};

  locals = this.locals(locals);
  var template = this.templates[name];
  if (!template) throw new Error(fmt('template "%s" not defined.', name));
  var attrs = render(template, locals);
  callback = callback || noop;
  var self = this;
  var el;

  switch (template.type) {
  case 'img':
    attrs.width = 1;
    attrs.height = 1;
    el = loadImage(attrs, callback);
    break;
  case 'script':
    el = loadScript(attrs, function(err) {
      if (!err) return callback();
      self.debug('error loading "%s" error="%s"', self.name, err);
    });
      // TODO: hack until refactoring load-script
    delete attrs.src;
    each(function(val, key) {
      el.setAttribute(key, val);
    }, attrs);
    break;
  case 'iframe':
    el = loadIframe(attrs, callback);
    break;
  default:
      // No default case
  }

  return el;
};

/**
 * Locals for tag templates.
 *
 * By default it includes a cache buster and all of the options.
 *
 * @param {Object} [locals]
 * @return {Object}
 */

exports.locals = function(locals) {
  locals = locals || {};
  var cache = Math.floor(new Date().getTime() / 3600000);
  if (!locals.hasOwnProperty('cache')) locals.cache = cache;
  each(function(val, key) {
    if (!locals.hasOwnProperty(key)) locals[key] = val;
  }, this.options);
  return locals;
};

/**
 * Simple way to emit ready.
 *
 * @api public
 */

exports.ready = function() {
  this.emit('ready');
};

/**
 * Wrap the initialize method in an exists check, so we don't have to do it for
 * every single integration.
 *
 * @api private
 */

exports._wrapInitialize = function() {
  var initialize = this.initialize;
  this.initialize = function() {
    this.debug('initialize');
    this._initialized = true;
    var ret = initialize.apply(this, arguments);
    this.emit('initialize');
    return ret;
  };

  if (this._assumesPageview) this.initialize = after(2, this.initialize);
};

/**
 * Wrap the page method to call `initialize` instead if the integration assumes
 * a pageview.
 *
 * @api private
 */

exports._wrapPage = function() {
  var page = this.page;
  this.page = function() {
    if (this._assumesPageview && !this._initialized) {
      return this.initialize.apply(this, arguments);
    }

    return page.apply(this, arguments);
  };
};

/**
 * Wrap the track method to call other ecommerce methods if available depending
 * on the `track.event()`.
 *
 * @api private
 */

exports._wrapTrack = function() {
  var t = this.track;
  this.track = function(track) {
    var event = track.event();
    var called;
    var ret;

    for (var method in events) {
      if (has.call(events, method)) {
        var regexp = events[method];
        if (!this[method]) continue;
        if (!regexp.test(event)) continue;
        ret = this[method].apply(this, arguments);
        called = true;
        break;
      }
    }

    if (!called) ret = t.apply(this, arguments);
    return ret;
  };
};

/**
 * Determine the type of the option passed to `#map`
 *
 * @api private
 * @param {Object|Object[]} mapping
 * @return {String} mappingType
 */

function getMappingType(mapping) {
  if (is.array(mapping)) {
    return every(isMixed, mapping) ? 'mixed' : 'array';
  }
  if (is.object(mapping)) return 'map';
  return 'unknown';
}

/**
 * Determine if item in mapping array is a valid "mixed" type value
 *
 * Must be an object with properties "key" (of type string)
 * and "value" (of any type)
 *
 * @api private
 * @param {*} item
 * @return {Boolean}
 */

function isMixed(item) {
  if (!is.object(item)) return false;
  if (!is.string(item.key)) return false;
  if (!has.call(item, 'value')) return false;
  return true;
}

/**
 * TODO: Document me
 *
 * @api private
 * @param {Object} attrs
 * @param {Function} fn
 * @return {Image}
 */

function loadImage(attrs, fn) {
  fn = fn || function() {};
  var img = new Image();
  img.onerror = error(fn, 'failed to load pixel', img);
  img.onload = function() { fn(); };
  img.src = attrs.src;
  img.width = 1;
  img.height = 1;
  return img;
}

/**
 * TODO: Document me
 *
 * @api private
 * @param {Function} fn
 * @param {string} message
 * @param {Element} img
 * @return {Function}
 */

function error(fn, message, img) {
  return function(e) {
    e = e || window.event;
    var err = new Error(message);
    err.event = e;
    err.source = img;
    fn(err);
  };
}

/**
 * Render template + locals into an `attrs` object.
 *
 * @api private
 * @param {Object} template
 * @param {Object} locals
 * @return {Object}
 */

function render(template, locals) {
  return foldl(function(attrs, val, key) {
    attrs[key] = val.replace(/\{\{\ *(\w+)\ *\}\}/g, function(_, $1) {
      return locals[$1];
    });
    return attrs;
  }, {}, template.attrs);
}

},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":40,"component-emitter":41,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":42}],39:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Emitter = require('component-emitter');
var domify = require('domify');
var each = require('@ndhoule/each');
var includes = require('@ndhoule/includes');

/**
 * Mix in emitter.
 */

/* eslint-disable new-cap */
Emitter(exports);
/* eslint-enable new-cap */

/**
 * Add a new option to the integration by `key` with default `value`.
 *
 * @api public
 * @param {string} key
 * @param {*} value
 * @return {Integration}
 */

exports.option = function(key, value) {
  this.prototype.defaults[key] = value;
  return this;
};

/**
 * Add a new mapping option.
 *
 * This will create a method `name` that will return a mapping for you to use.
 *
 * @api public
 * @param {string} name
 * @return {Integration}
 * @example
 * Integration('My Integration')
 *   .mapping('events');
 *
 * new MyIntegration().track('My Event');
 *
 * .track = function(track){
 *   var events = this.events(track.event());
 *   each(send, events);
 *  };
 */

exports.mapping = function(name) {
  this.option(name, []);
  this.prototype[name] = function(key) {
    return this.map(this.options[name], key);
  };
  return this;
};

/**
 * Register a new global variable `key` owned by the integration, which will be
 * used to test whether the integration is already on the page.
 *
 * @api public
 * @param {string} key
 * @return {Integration}
 */

exports.global = function(key) {
  this.prototype.globals.push(key);
  return this;
};

/**
 * Mark the integration as assuming an initial pageview, so to defer loading
 * the script until the first `page` call, noop the first `initialize`.
 *
 * @api public
 * @return {Integration}
 */

exports.assumesPageview = function() {
  this.prototype._assumesPageview = true;
  return this;
};

/**
 * Mark the integration as being "ready" once `load` is called.
 *
 * @api public
 * @return {Integration}
 */

exports.readyOnLoad = function() {
  this.prototype._readyOnLoad = true;
  return this;
};

/**
 * Mark the integration as being "ready" once `initialize` is called.
 *
 * @api public
 * @return {Integration}
 */

exports.readyOnInitialize = function() {
  this.prototype._readyOnInitialize = true;
  return this;
};

/**
 * Define a tag to be loaded.
 *
 * @api public
 * @param {string} [name='library'] A nicename for the tag, commonly used in
 * #load. Helpful when the integration has multiple tags and you need a way to
 * specify which of the tags you want to load at a given time.
 * @param {String} str DOM tag as string or URL.
 * @return {Integration}
 */

exports.tag = function(name, tag) {
  if (tag == null) {
    tag = name;
    name = 'library';
  }
  this.prototype.templates[name] = objectify(tag);
  return this;
};

/**
 * Given a string, give back DOM attributes.
 *
 * Do it in a way where the browser doesn't load images or iframes. It turns
 * out domify will load images/iframes because whenever you construct those
 * DOM elements, the browser immediately loads them.
 *
 * @api private
 * @param {string} str
 * @return {Object}
 */

function objectify(str) {
  // replace `src` with `data-src` to prevent image loading
  str = str.replace(' src="', ' data-src="');

  var el = domify(str);
  var attrs = {};

  each(function(attr) {
    // then replace it back
    var name = attr.name === 'data-src' ? 'src' : attr.name;
    if (!includes(attr.name + '=', str)) return;
    attrs[name] = attr.value;
  }, el.attributes);

  return {
    type: el.tagName.toLowerCase(),
    attrs: attrs
  };
}

},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":41,"domify":624}],40:[function(require,module,exports){

module.exports = {
  // Promotions
  promotionViewed: /^[ _]?promotion[ _]?viewed?[ _]?$/i,
  viewedPromotion: /^[ _]?viewed[ _]?promotion?[ _]?$/i,
  promotionClicked: /^[ _]?promotion[ _]?clicked?[ _]?$/i,
  clickedPromotion: /^[ _]?clicked[ _]?promotion?[ _]?$/i,
  // Browsing
  productsSearched: /^[ _]?products[ _]?searched[ _]?$/i,
  productListViewed: /^[ _]?product[ _]?list[ _]?viewed[ _]?$/i,
  productListFiltered: /^[ _]?product[ _]?list[ _]?filtered[ _]?$/i,
  viewedProductCategory: /^[ _]?viewed[ _]?product[ _]?category[ _]?$/i,
  viewedProductDetails: /^[ _]?viewed[ _]?product[ _]?details?[ _]?$/i,
  // Core Ordering
  productClicked: /^[ _]?product[ _]?clicked[ _]?$/i,
  clickedProduct: /^[ _]?clicked[ _]?product[ _]?$/i,
  productViewed: /^[ _]?product[ _]?viewed[ _]?$/i,
  viewedProduct: /^[ _]?viewed[ _]?product[ _]?$/i,
  productAdded: /^[ _]?product[ _]?added[ _]?$/i,
  addedProduct: /^[ _]?added[ _]?product[ _]?$/i,
  productRemoved: /^[ _]?product[ _]?removed[ _]?$/i,
  removedProduct: /^[ _]?removed[ _]?product[ _]?$/i,
  cartViewed: /^[ _]?cart[ _]?viewed[ _]?$/i,
  orderStarted: /^[ _]?order[ _]?started[ _]?$/i,
  startedOrder: /^[ _]?started[ _]?order[ _]?$/i,
  orderUpdated: /^[ _]?order[ _]?updated[ _]?$/i,
  updatedOrder: /^[ _]?updated[ _]?order[ _]?$/i,
  orderCompleted: /^[ _]?order[ _]?completed[ _]?$/i,
  completedOrder: /^[ _]?completed[ _]?order[ _]?$/i,
  orderRefunded: /^[ _]?order[ _]?refunded[ _]?$/i,
  refundedOrder: /^[ _]?refunded[ _]?order[ _]?$/i,
  orderCancelled: /^[ _]?order[ _]?cancelled[ _]?$/i,
  paymentInfoAdded: /^[ _]?payment[ _]?info[ _]?added[ _]?$/i,
  checkoutStarted: /^[ _]?checkout[ _]?started[ _]?$/i,
  checkoutStepViewed: /^[ _]?checkout[ _]?step[ _]?viewed[ _]?$/i,
  viewedCheckoutStep: /^[ _]?viewed[ _]?checkout[ _]?step[ _]?$/i,
  checkoutStepCompleted: /^[ _]?checkout[ _]?step[ _]?completed[ _]?$/i,
  completedCheckoutStep: /^[ _]?completed[ _]?checkout[ _]?step[ _]?$/i,
  // Coupons
  couponEntered: /^[ _]?coupon[ _]?entered[ _]?$/i,
  couponApplied: /^[ _]?coupon[ _]?applied[ _]?$/i,
  couponDenied: /^[ _]?coupon[ _]?denied[ _]?$/i,
  couponRemoved: /^[ _]?coupon[ _]?removed[ _]?$/i,
  // Wishlisting
  productAddedToWishlist: /^[ _]?product[ _]?added[ _]?to[ _]?wishlist[ _]?$/i,
  wishlistProductRemoved: /^[ _]?wishlist[ _]?product[ _]?removed[ _]?$/i,
  wishlistProductAddedToCart: /^[ _]?wishlist[ _]?product[ _]?added[ _]?to[ _]?cart[ _]?$/i,
  // Sharing
  productShared: /^[ _]?product[ _]?shared[ _]?$/i,
  cartShared: /^[ _]?cart[ _]?shared[ _]?$/i,
  // Reviewing
  productRemoved: /^[ _]?product[ _]?removed[ _]?$/i,
  // App Lifecycle
  applicationInstalled: /^[ _]?application[ _]?installed[ _]?$/i,
  applicationUpdated: /^[ _]?application[ _]?updated[ _]?$/i,
  applicationOpened: /^[ _]?application[ _]?opened[ _]?$/i,
  applicationBackgrounded: /^[ _]?application[ _]?backgrounded[ _]?$/i,
  applicationUninstalled: /^[ _]?application[ _]?uninstalled[ _]?$/i,
  // App Campaign and Referral Events
  installAttributed: /^[ _]?install[ _]?attributed[ _]?$/i,
  deepLinkOpened: /^[ _]?deep[ _]?link[ _]?opened[ _]?$/i,
  pushNotificationReceived: /^[ _]?push[ _]?notification[ _]?received[ _]?$/i,
  pushNotificationTapped: /^[ _]?push[ _]?notification[ _]?received[ _]?$/i,
  pushNotificationBounced: /^[ _]?push[ _]?notification[ _]?bounced[ _]?$/i
};

},{}],41:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],42:[function(require,module,exports){

/**
 * Expose `toNoCase`.
 */

module.exports = toNoCase;


/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasSeparator = /[\W_]/;


/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase (string) {
  if (hasSpace.test(string)) return string.toLowerCase();
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase();
  return uncamelize(string).toLowerCase();
}


/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;


/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate (string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : '';
  });
}


/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;


/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize (string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ');
  });
}
},{}],43:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose Alexa integration.
 */

var Alexa = module.exports = integration('Alexa')
  .assumesPageview()
  .global('_atrk_opts')
  .option('account', null)
  .option('domain', '')
  .option('dynamic', true)
  .tag('<script src="//d31qbv1cthcecs.cloudfront.net/atrk.js">');

/**
 * Initialize.
 *
 * @api public
 */

Alexa.prototype.initialize = function() {
  var self = this;
  window._atrk_opts = {
    atrk_acct: this.options.account,
    domain: this.options.domain,
    dynamic: this.options.dynamic
  };
  this.load(function() {
    window.atrk();
    self.ready();
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Alexa.prototype.loaded = function() {
  return !!window.atrk;
};

},{"@segment/analytics.js-integration":44}],44:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":45,"./statics":46,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],45:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":47,"component-emitter":48,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":49}],46:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":48,"domify":624,"dup":39}],47:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],48:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],49:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],50:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var bind = require('component-bind');
var integration = require('@segment/analytics.js-integration');
var topDomain = require('@segment/top-domain');
var when = require('do-when');

/**
 * UMD?
 */

var umd = typeof window.define === 'function' && window.define.amd;

/**
 * Source.
 */

var src = '//d24n15hnbwhuhn.cloudfront.net/libs/amplitude-3.4.0-min.gz.js';

/**
 * Expose `Amplitude` integration.
 */

var Amplitude = module.exports = integration('Amplitude')
  .global('amplitude')
  .option('apiKey', '')
  .option('trackAllPages', false)
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true)
  .option('trackUtmProperties', true)
  .option('trackReferrer', false)
  .option('batchEvents', false)
  .option('eventUploadThreshold', 30)
  .option('eventUploadPeriodMillis', 30000)
  .option('useLogRevenueV2', false)
  .option('forceHttps', false)
  .option('trackGclid', false)
  .option('saveParamsReferrerOncePerSession', true)
  .option('deviceIdFromUrlParam', false)
  .tag('<script src="' + src + '">');

/**
 * Initialize.
 *
 * https://github.com/amplitude/Amplitude-Javascript
 *
 * @api public
 */

Amplitude.prototype.initialize = function() {
  /* eslint-disable */
  (function(e,t){var r=e.amplitude||{_q:[]};function n(e,t){e.prototype[t]=function(){this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}var s=function(){this._q=[];return this};var i=["add","append","clearAll","prepend","set","setOnce","unset"];for(var o=0;o<i.length;o++){n(s,i[o])}r.Identify=s;var a=function(){this._q=[];return this;};var u=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];for(var c=0;c<u.length;c++){n(a,u[c])}r.Revenue=a;var p=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId"];function l(e){function t(t){e[t]=function(){e._q.push([t].concat(Array.prototype.slice.call(arguments,0)));}}for(var r=0;r<p.length;r++){t(p[r])}}l(r);e.amplitude=r})(window,document);
  /* eslint-enable */

  this.setDomain(window.location.href);
  window.amplitude.init(this.options.apiKey, null, {
    includeUtm: this.options.trackUtmProperties,
    includeReferrer: this.options.trackReferrer,
    batchEvents: this.options.batchEvents,
    eventUploadThreshold: this.options.eventUploadThreshold,
    eventUploadPeriodMillis: this.options.eventUploadPeriodMillis,
    forceHttps: this.options.forceHttps,
    includeGclid: this.options.trackGclid,
    saveParamsReferrerOncePerSession: this.options.saveParamsReferrerOncePerSession,
    deviceIdFromUrlParam: this.options.deviceIdFromUrlParam
  });

  var loaded = bind(this, this.loaded);
  var ready = this.ready;
  // FIXME (wcjohnson11): Refactor the load method to include this logic
  // to better support if UMD present
  if (umd) {
    window.require([src], function(amplitude) {
      window.amplitude = amplitude;
      when(loaded, function() {
        window.amplitude.runQueuedFunctions();
        ready();
      });
    });
    return;
  }

  this.load(function() {
    when(loaded, function() {
      window.amplitude.runQueuedFunctions();
      ready();
    });
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Amplitude.prototype.loaded = function() {
  return !!(window.amplitude && window.amplitude.options);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Amplitude.prototype.page = function(page) {
  var category = page.category();
  var name = page.fullName();
  var opts = this.options;

  // all pages
  if (opts.trackAllPages) {
    this.track(page.track());
  }

  // categorized pages
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }

  // named pages
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }
};

/**
 * Identify.
 *
 * @api public
 * @param {Facade} identify
 */

Amplitude.prototype.identify = function(identify) {
  var id = identify.userId();
  var traits = identify.traits();
  if (id) window.amplitude.setUserId(id);
  if (traits) window.amplitude.setUserProperties(traits);
};

/**
 * Track.
 *
 * @api public
 * @param {Track} event
 */

Amplitude.prototype.track = function(track) {
  var props = track.properties();
  var event = track.event();

  // track the event
  window.amplitude.logEvent(event, props);

  // also track revenue
  var revenue = track.revenue();
  if (revenue) {
    // use logRevenueV2 with revenue props
    if (this.options.useLogRevenueV2) {
      var price = props.price;
      var quantity = props.quantity;
      if (!price) {
        price = revenue;
        quantity = 1;
      }

      var ampRevenue = new window.amplitude.Revenue().setPrice(price).setQuantity(quantity);
      if (props.productId) {
        ampRevenue.setProductId(props.productId);
      }
      if (props.revenueType) {
        ampRevenue.setRevenueType(props.revenueType);
      }
      ampRevenue.setEventProperties(props);
      window.amplitude.logRevenueV2(ampRevenue);
    } else {
      // fallback to logRevenue v1
      window.amplitude.logRevenue(revenue, props.quantity, props.productId);
    }
  }
};

/**
 * Group.
 *
 * @api public
 * @param {Group} group
 */

Amplitude.prototype.group = function(group) {
  var groupId = group.groupId();
  if (groupId) window.amplitude.setGroup('[Segment] Group', groupId);
};

/**
 * Set domain name to root domain in Amplitude.
 *
 * @api private
 * @param {string} href
 */

Amplitude.prototype.setDomain = function(href) {
  var domain = topDomain(href);
  window.amplitude.setDomain(domain);
};

/**
 * Override device ID in Amplitude.
 *
 * @api private
 * @param {string} deviceId
 */

Amplitude.prototype.setDeviceId = function(deviceId) {
  if (deviceId) window.amplitude.setDeviceId(deviceId);
};

},{"@segment/analytics.js-integration":51,"@segment/top-domain":604,"component-bind":608,"do-when":623}],51:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":52,"./statics":53,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],52:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":54,"component-emitter":55,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":56}],53:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":55,"domify":624,"dup":39}],54:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],55:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],56:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],57:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var isObject = require('isobject');
var load = require('@segment/load-script');

/**
 * Expose `Appcues` integration.
 */

var Appcues = integration('Appcues')
  .global('Appcues')
  .option('appcuesId', '');

/**
 * Initialize.
 *
 * http://appcues.com/docs/
 *
 * @api public
 */

Appcues.prototype.initialize = function() {
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Appcues.prototype.loaded = function() {
  return isObject(window.Appcues);
};

/**
 * Load the Appcues library.
 *
 * @api private
 * @param {Function} callback
 */

Appcues.prototype.load = function(callback) {
  var id = this.options.appcuesId || 'appcues';
  load('//fast.appcues.com/' + id + '.js', callback);
};

/**
 * Page.
 *
 * http://appcues.com/docs#page
 *
 * @api public
 * @param {Page} page
 */

Appcues.prototype.page = function(page) {
  window.Appcues.page(page.name(), page.properties());
};

/**
 * Identify.
 *
 * http://appcues.com/docs#identify
 *
 * @api public
 * @param {Identify} identify
 */

Appcues.prototype.identify = function(identify) {
  window.Appcues.identify(identify.userId(), identify.traits());
};

/**
 * Track.
 *
 * http://appcues.com/docs#track
 *
 * @api public
 * @param {Track} track
 */

Appcues.prototype.track = function(track) {
  window.Appcues.track(track.event(), track.properties());
};

/**
 * Expose plugin.
 */

// FIXME(ndhoule): Is this still necessary? I believe this API was deprecated
module.exports = exports = function(analytics) {
  analytics.addIntegration(Appcues);
};

exports.Integration = Appcues;

},{"@segment/analytics.js-integration":58,"@segment/load-script":598,"isobject":630}],58:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":59,"./statics":60,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],59:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":61,"component-emitter":62,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":63}],60:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":62,"domify":624,"dup":39}],61:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],62:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],63:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],64:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var isObject = require('isobject');

/**
 * Expose `Atatus` integration.
 */

var Atatus = module.exports = integration('Atatus')
  .global('atatus')
  .option('apiKey', '')
  .option('enableSourcemap', false)
  .option('disableAjaxMonitoring', false)
  .tag('<script src="//dmc1acwvwny3.cloudfront.net/atatus.js">');

/**
 * Initialize.
 *
 * https://www.atatus.com/docs.html
 *
 * @api public
 */

Atatus.prototype.initialize = function() {
  var self = this;

  this.load(function() {
    var configOptions = {
      enableSourcemap: self.options.enableSourcemap,
      disableAjaxMonitoring: self.options.disableAjaxMonitoring
    };

    // Configure Atatus and install default handler to capture uncaught
    // exceptions
    window.atatus.config(self.options.apiKey, configOptions).install();
    self.ready();
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Atatus.prototype.loaded = function() {
  return isObject(window.atatus);
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Atatus.prototype.identify = function(identify) {
  window.atatus.setCustomData({ person: identify.traits() });
};

},{"@segment/analytics.js-integration":65,"isobject":630}],65:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":66,"./statics":67,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],66:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":68,"component-emitter":69,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":70}],67:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":69,"domify":624,"dup":39}],68:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],69:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],70:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],71:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Autosend` integration.
 */

var Autosend = module.exports = integration('Autosend')
  .global('_autosend')
  .option('appKey', '')
  .tag('<script id="asnd-tracker" src="https://d2zjxodm1cz8d6.cloudfront.net/js/v1/autosend.js" data-auth-key="{{ appKey }}">');

/**
 * Initialize.
 *
 * http://autosend.io/faq/install-autosend-using-javascript/
 *
 * @api public
 */

Autosend.prototype.initialize = function() {
  window._autosend = window._autosend || [];
  /* eslint-disable */
  (function(){var a,b,c;a=function(f){return function(){window._autosend.push([f].concat(Array.prototype.slice.call(arguments,0))); }; }; b=["identify", "track", "cb"];for (c=0;c<b.length;c++){window._autosend[b[c]]=a(b[c]); } })();
  /* eslint-enable */
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Autosend.prototype.loaded = function() {
  return !!window._autosend;
};

/**
 * Identify.
 *
 * http://autosend.io/faq/install-autosend-using-javascript/
 *
 * @api public
 * @param {Identify} identify
 */

Autosend.prototype.identify = function(identify) {
  var id = identify.userId();
  if (!id) return;

  var traits = identify.traits();
  traits.id = id;
  window._autosend.identify(traits);
};

/**
 * Track.
 *
 * http://autosend.io/faq/install-autosend-using-javascript/
 *
 * @api public
 * @param {Track} track
 */

Autosend.prototype.track = function(track) {
  window._autosend.track(track.event());
};

},{"@segment/analytics.js-integration":72}],72:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":73,"./statics":74,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],73:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":75,"component-emitter":76,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":77}],74:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":76,"domify":624,"dup":39}],75:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],76:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],77:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],78:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('@ndhoule/each');
var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Awesm` integration.
 */

var Awesm = module.exports = integration('awe.sm')
  .assumesPageview()
  .global('AWESM')
  .option('apiKey', '')
  .tag('<script src="//widgets.awe.sm/v3/widgets.js?key={{ apiKey }}&async=true">')
  .mapping('events');

/**
 * Initialize.
 *
 * http://developers.awe.sm/guides/javascript/
 *
 * @api public
 */

Awesm.prototype.initialize = function() {
  window.AWESM = { api_key: this.options.apiKey };
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Awesm.prototype.loaded = function() {
  return !!(window.AWESM && window.AWESM._exists);
};

/**
 * Track.
 *
 * @api private
 * @param {Track} track
 */

Awesm.prototype.track = function(track) {
  var user = this.analytics.user();
  var goals = this.events(track.event());
  each(function(goal) {
    window.AWESM.convert(goal, track.cents(), null, user.id());
  }, goals);
};

},{"@ndhoule/each":8,"@segment/analytics.js-integration":79}],79:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":80,"./statics":81,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],80:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":82,"component-emitter":83,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":84}],81:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":83,"domify":624,"dup":39}],82:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],83:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],84:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],85:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Bing`.
 *
 * https://bingads.microsoft.com/campaign/signup
 */

var Bing = module.exports = integration('Bing Ads')
  .global('UET')
  .global('uetq')
  .option('tagId', '')
  .tag('<script src="//bat.bing.com/bat.js">');

/**
 * Initialize.
 *
 * Inferred from their snippet:
 * https://gist.github.com/sperand-io/8bef4207e9c66e1aa83b
 *
 * @api public
 */

Bing.prototype.initialize = function() {
  window.uetq = window.uetq || [];
  var self = this;

  self.load(function() {
    var setup = {
      ti: self.options.tagId,
      q: window.uetq
    };

    window.uetq = new window.UET(setup);
    self.ready();
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Bing.prototype.loaded = function() {
  return !!(window.uetq && window.uetq.push !== Array.prototype.push);
};

/**
 * Page.
 *
 * @api public
 */

Bing.prototype.page = function() {
  window.uetq.push('pageLoad');
};

/**
 * Track.
 *
 * Send all events then set goals based
 * on them retroactively: http://advertise.bingads.microsoft.com/en-us/uahelp-topic?market=en&project=Bing_Ads&querytype=topic&query=HLP_BA_PROC_UET.htm
 *
 * @api public
 * @param {Track} track
 */

Bing.prototype.track = function(track) {
  var event = {
    ea: 'track',
    el: track.event()
  };

  if (track.category()) event.ec = track.category();
  if (track.revenue()) event.gv = track.revenue();

  window.uetq.push(event);
};

},{"@segment/analytics.js-integration":86}],86:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":87,"./statics":88,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],87:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":89,"component-emitter":90,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":91}],88:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":90,"domify":624,"dup":39}],89:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],90:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],91:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],92:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var foldl = require('@ndhoule/foldl');

/**
 * Expose `Blueshift` integration.
 */

var Blueshift = module.exports = integration('Blueshift')
  .global('blueshift')
  .global('_blueshiftid')
  .option('apiKey', '')
  .option('retarget', false)
  .tag('<script src="https://cdn.getblueshift.com/blueshift.js">');

/**
 * Initialize.
 *
 * Documentation: http://getblueshift.com/documentation
 *
 * @api public
 */

Blueshift.prototype.initialize = function() {
  window.blueshift = window.blueshift || [];
  /* eslint-disable */
  window.blueshift.load=function(a){window._blueshiftid=a;var d=function(a){return function(){blueshift.push([a].concat(Array.prototype.slice.call(arguments,0)))}},e=["identify","track","click", "pageload", "capture", "retarget"];for(var f=0;f<e.length;f++)blueshift[e[f]]=d(e[f])};
  /* eslint-enable */
  window.blueshift.load(this.options.apiKey);

  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Blueshift.prototype.loaded = function() {
  return !!(window.blueshift && window._blueshiftid);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Blueshift.prototype.page = function(page) {
  if (this.options.retarget) window.blueshift.retarget();

  var properties = page.properties();
  properties._bsft_source = 'segment.com';
  properties.customer_id = this.analytics.user().id();
  properties.anonymousId = this.analytics.user().anonymousId();
  properties.category = page.category();
  properties.name = page.name();

  window.blueshift.pageload(removeBlankAttributes(properties));
};

/**
 * Trait Aliases.
 */

var traitAliases = {
  created: 'created_at',
  firstName: 'firstname',
  lastName: 'lastname'
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Blueshift.prototype.identify = function(identify) {
  if (!identify.userId() && !identify.anonymousId()) {
    return this.debug('user id required');
  }
  var traits = identify.traits(traitAliases);
  traits._bsft_source = 'segment.com';
  traits.customer_id = identify.userId();
  traits.anonymousId = identify.anonymousId();

  window.blueshift.identify(removeBlankAttributes(traits));
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Blueshift.prototype.track = function(track) {
  var properties = track.properties();
  properties._bsft_source = 'segment.com';
  properties.customer_id = this.analytics.user().id();
  properties.anonymousId = this.analytics.user().anonymousId();

  window.blueshift.track(track.event(), removeBlankAttributes(properties));
};

/**
 * Alias.
 *
 * @param {Alias} alias
 */

Blueshift.prototype.alias = function(alias) {
  window.blueshift.track('alias', removeBlankAttributes({
    _bsft_source: 'segment.com',
    customer_id: alias.userId(),
    previous_customer_id: alias.previousId(),
    anonymousId: alias.anonymousId()
  }));
};

/**
 * Filters null/undefined values from an object, returning a new object.
 *
 * @api private
 * @param {Object} obj
 * @return {Object}
 */

function removeBlankAttributes(obj) {
  return foldl(function(results, val, key) {
    if (val !== null && val !== undefined) results[key] = val;
    return results;
  }, {}, obj);
}

},{"@ndhoule/foldl":11,"@segment/analytics.js-integration":93}],93:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":94,"./statics":95,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],94:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":96,"component-emitter":97,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":98}],95:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":97,"domify":624,"dup":39}],96:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],97:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],98:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],99:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var convertDates = require('@segment/convert-dates');
var integration = require('@segment/analytics.js-integration');
var md5 = require('spark-md5').hash;

/**
 * Expose `Boomtrain` integration.
 */

var Boomtrain = module.exports = integration('Boomtrain')
  .global('_bt')
  .option('apiKey', '')
  .tag('<script src="https://cdn.boomtrain.com/analyticstrain/{{ apiKey }}/analyticstrain.min.js"></script>');

/**
 * Initialize.
 *
 *
 *
 * @api public
 */

Boomtrain.prototype.initialize = function() {
  window._bt = window._bt || [];
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Boomtrain.prototype.loaded = function() {
  return !!(window._bt && window._bt.push !== Array.prototype.push);
};

/**
 * Identify.
 *
 *
 *
 * @api public
 * @param {Identify} identify
 */

Boomtrain.prototype.identify = function(identify) {
  var userId = identify.userId();
  if (!userId) return this.debug('user id required');
  var traits = identify.traits({ createdAt: 'created_at' });
  traits = convertDates(traits, convertDate);
  traits.email = identify.email();
  window._bt.person.set(traits);
};

/**
 * Page.
 *
 *
 *
 * @api public
 * @param {Page} page
 */

Boomtrain.prototype.page = function(page) {
  var properties = page.properties();
  if (!properties.model) properties.model = getModel() || undefined;
  if (!properties.id) properties.id = md5(page.url());
  window._bt.track('viewed', properties);
};

/**
 * Track.
 *
 *
 *
 * @api public
 * @param {Track} track
 */

Boomtrain.prototype.track = function(track) {
  var properties = track.properties();
  window._bt.track(track.event(), properties);
};

/**
 * Convert a date to the format Boomtrain supports.
 *
 * @api private
 * @param {Date} date
 * @return {number}
 */

function convertDate(date) {
  return Math.floor(date.getTime() / 1000);
}

/**
 * Get model of page, stored under meta-tag with property "og:type"
 *
 * @api private
 * @param
 * @return {string}
 */

function getModel() {
  var elements = window.document.getElementsByTagName('meta');
  var data = {};
  var pattern = 'og:';
  var key = 'property';
  for (var i = elements.length - 1; i >= 0; i--) {
    var property = elements[i].getAttribute && elements[i].getAttribute(key);
    if (property && property.match(pattern)) {
      data[property.replace(pattern, '')] = elements[i].getAttribute('content');
    }
  }
  return data.type;
}

},{"@segment/analytics.js-integration":100,"@segment/convert-dates":593,"spark-md5":662}],100:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":101,"./statics":102,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],101:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":103,"component-emitter":104,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":105}],102:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":104,"domify":624,"dup":39}],103:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],104:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],105:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],106:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Identify = require('segmentio-facade').Identify;
var Track = require('segmentio-facade').Track;
var each = require('@ndhoule/each');
var integration = require('@segment/analytics.js-integration');
var qs = require('component-querystring');

/**
 * Expose `Bronto` integration.
 */

var Bronto = module.exports = integration('Bronto')
  .global('__bta')
  .option('siteId', '')
  .option('host', '')
  .tag('<script src="//p.bm23.com/bta.js">');

/**
 * Initialize.
 *
 * http://app.bronto.com/mail/help/help_view/?k=mail:home:api_tracking:tracking_data_store_js#addingjavascriptconversiontrackingtoyoursite
 * http://bronto.com/product-blog/features/using-conversion-tracking-private-domain#.Ut_Vk2T8KqB
 * http://bronto.com/product-blog/features/javascript-conversion-tracking-setup-and-reporting#.Ut_VhmT8KqB
 *
 * @api public
 */

Bronto.prototype.initialize = function() {
  var self = this;
  var params = qs.parse(window.location.search);
  if (!params._bta_tid && !params._bta_c) {
    this.debug('missing tracking URL parameters `_bta_tid` and `_bta_c`.');
  }
  this.load(function() {
    var opts = self.options;
    self.bta = new window.__bta(opts.siteId);
    if (opts.host) self.bta.setHost(opts.host);
    self.ready();
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Bronto.prototype.loaded = function() {
  return this.bta;
};

/**
 * Order Completed.
 *
 * The cookie is used to link the order being processed back to the delivery,
 * message, and contact which makes it a conversion.
 * Passing in just the email ensures that the order itself
 * gets linked to the contact record in Bronto even if the user
 * does not have a tracking cookie.
 *
 * @api private
 * @param {Track} track
 */

Bronto.prototype.orderCompleted = function(track) {
  var user = this.analytics.user();
  var products = track.products();
  var items = [];
  var identify = new Identify({
    userId: user.id(),
    traits: user.traits()
  });
  var email = identify.email();

  // items
  each(function(product) {
    var track = new Track({ properties: product });
    items.push({
      item_id: track.productId() || track.id() || track.sku(),
      desc: product.description || track.name(),
      quantity: track.quantity(),
      amount: track.price()
    });
  }, products);

  // add conversion
  this.bta.addOrder({
    order_id: track.orderId(),
    email: email,
    // they recommend not putting in a date because it needs to be formatted
    // correctly: YYYY-MM-DDTHH:MM:SS
    items: items
  });
};

},{"@ndhoule/each":8,"@segment/analytics.js-integration":586,"component-querystring":616,"segmentio-facade":655}],107:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var tick = require('next-tick');

/**
 * Expose `BugHerd` integration.
 */

var BugHerd = module.exports = integration('BugHerd')
  .assumesPageview()
  .global('BugHerdConfig')
  .global('_bugHerd')
  .option('apiKey', '')
  .option('showFeedbackTab', true)
  .tag('<script src="//www.bugherd.com/sidebarv2.js?apikey={{ apiKey }}">');

/**
 * Initialize.
 *
 * http://support.bugherd.com/home
 *
 * @api public
 */

BugHerd.prototype.initialize = function() {
  window.BugHerdConfig = { feedback: { hide: !this.options.showFeedbackTab } };
  var ready = this.ready;
  this.load(function() {
    tick(ready);
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

BugHerd.prototype.loaded = function() {
  return !!window._bugHerd;
};

},{"@segment/analytics.js-integration":108,"next-tick":640}],108:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":109,"./statics":110,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],109:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":111,"component-emitter":112,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":113}],110:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":112,"domify":624,"dup":39}],111:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],112:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],113:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],114:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var isObject = require('isobject');
var extend = require('@ndhoule/extend');

/**
 * UMD ?
 */

var umd = typeof window.define === 'function' && window.define.amd;

/**
 * Source.
 */

var src = '//d2wy8f7a9ursnm.cloudfront.net/bugsnag-3.min.js';

/**
 * Expose `Bugsnag` integration.
 */

var Bugsnag = module.exports = integration('Bugsnag')
  .global('Bugsnag')
  .option('apiKey', '')
  .option('releaseStage', null)
  .tag('<script src="' + src + '">');

/**
 * Initialize.
 *
 * https://bugsnag.com/docs/notifiers/js
 *
 * @api public
 */

Bugsnag.prototype.initialize = function() {
  var self = this;

  if (umd) {
    window.require([src], function(bugsnag) {
      bugsnag.apiKey = self.options.apiKey;
      if (self.options.releaseStage) bugsnag.releaseStage = self.options.releaseStage;
      window.Bugsnag = bugsnag;
      self.ready();
    });
    return;
  }

  this.load(function() {
    window.Bugsnag.apiKey = self.options.apiKey;
    if (self.options.releaseStage) window.Bugsnag.releaseStage = self.options.releaseStage;
    self.ready();
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Bugsnag.prototype.loaded = function() {
  return isObject(window.Bugsnag);
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Bugsnag.prototype.identify = function(identify) {
  window.Bugsnag.user = window.Bugsnag.user || {};
  extend(window.Bugsnag.user, identify.traits());
};

},{"@ndhoule/extend":10,"@segment/analytics.js-integration":115,"isobject":630}],115:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":116,"./statics":117,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],116:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":118,"component-emitter":119,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":120}],117:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":119,"domify":624,"dup":39}],118:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],119:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],120:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],121:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var each = require('@ndhoule/each');

/**
 * Expose `Chameleon` integration.
 */

var Chameleon = module.exports = integration('Chameleon')
  .assumesPageview()
  .readyOnInitialize()
  .readyOnLoad()
  .global('chmln')
  .option('apiKey', null)
  .tag('<script src="https://fast.trychameleon.com/messo/{{apiKey}}/messo.min.js"></script>');

/**
 * Initialize Chameleon.
 *
 * @api public
 */

Chameleon.prototype.initialize = function() {
  /* eslint-disable */
  var that=this;!function(){var c=(window.chmln||(window.chmln={}));if(c.root){return;}c.location=window.location.href.toString();c.accountToken=that.options.apiKey;var names='setup identify alias track set show on off custom help _data'.split(' ');for(var i=0;i<names.length;i++){(function(){var t=c[names[i]+'_a']=[];c[names[i]]=function(){t.push(arguments);};})()}}();
  /* eslint-enable */

  this.ready();
  this.load();
};

/**
 * Has the Chameleon library been loaded yet?
 *
 * @api private
 * @return {boolean}
 */

Chameleon.prototype.loaded = function() {
  return !!window.chmln;
};

/**
 * Identify a user.
 *
 * @api public
 * @param {Facade} identify
 */

Chameleon.prototype.identify = function(identify) {
  var options = identify.traits();

  options.uid = options.id || identify.userId() || identify.anonymousId();
  delete options.id;

  window.chmln.identify(options);
};

/**
 * Associate the current user with a group of users.
 *
 * @api public
 * @param {Facade} group
 */

Chameleon.prototype.group = function(group) {
  var options = {};

  each(function(value, key) {
    options['group:' + key] = value;
  }, group.traits());

  options['group:id'] = group.groupId();

  window.chmln.set(options);
};

/**
 * Track an event.
 *
 * @param {Facade} track
 */

Chameleon.prototype.track = function(track) {
  window.chmln.track(track.event(), track.properties());
};

/**
 * Change the user identifier after we know who they are.
 *
 * @param {Facade} alias
 */

Chameleon.prototype.alias = function(alias) {
  var fromId = alias.previousId() || alias.anonymousId();

  window.chmln.alias({ from: fromId, to: alias.userId() });
};

},{"@ndhoule/each":8,"@segment/analytics.js-integration":122}],122:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":123,"./statics":124,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],123:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":125,"component-emitter":126,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":127}],124:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":126,"domify":624,"dup":39}],125:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],126:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],127:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],128:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var defaults = require('@ndhoule/defaults');
var integration = require('@segment/analytics.js-integration');
var onBody = require('on-body');

/**
 * Expose `Chartbeat` integration.
 */

var Chartbeat = module.exports = integration('Chartbeat')
  .assumesPageview()
  .global('_sf_async_config')
  .global('_sf_endpt')
  .global('pSUPERFLY')
  .option('domain', '')
  .option('uid', null)
  .option('video', false)
  .tag('<script src="//static.chartbeat.com/js/{{ script }}">');

/**
 * Initialize.
 *
 * http://chartbeat.com/docs/configuration_variables/
 *
 * @api public
 */

Chartbeat.prototype.initialize = function() {
  var self = this;
  var script = this.options.video ? 'chartbeat_video.js' : 'chartbeat.js';

  window._sf_async_config = window._sf_async_config || {};
  window._sf_async_config.useCanonical = true;
  defaults(window._sf_async_config, {
    domain: this.options.domain,
    uid: this.options.uid
  });

  onBody(function() {
    window._sf_endpt = new Date().getTime();
    // Note: Chartbeat depends on document.body existing so the script does
    // not load until that is confirmed. Otherwise it may trigger errors.
    self.load({ script: script }, self.ready);
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Chartbeat.prototype.loaded = function() {
  return !!window.pSUPERFLY;
};

/**
 * Page.
 *
 * http://chartbeat.com/docs/handling_virtual_page_changes/
 *
 * @api public
 * @param {Page} page
 */

Chartbeat.prototype.page = function(page) {
  var category = page.category();
  if (category) window._sf_async_config.sections = category;
  var author = page.proxy('properties.author');
  if (author) window._sf_async_config.authors = author;
  var props = page.properties();
  var name = page.fullName();
  window.pSUPERFLY.virtualPage(props.path, name || props.title);
};

},{"@ndhoule/defaults":6,"@segment/analytics.js-integration":129,"on-body":645}],129:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":130,"./statics":131,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],130:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":132,"component-emitter":133,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":134}],131:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":133,"domify":624,"dup":39}],132:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],133:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],134:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],135:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Identify = require('segmentio-facade').Identify;
var extend = require('@ndhoule/extend');
var integration = require('@segment/analytics.js-integration');
var isObject = require('isobject');

/**
 * Expose `Clicky` integration.
 */

var Clicky = module.exports = integration('Clicky')
  .assumesPageview()
  .global('clicky')
  .global('clicky_site_ids')
  .global('clicky_custom')
  .option('siteId', null)
  .tag('<script src="//static.getclicky.com/js"></script>');

/**
 * Initialize.
 *
 * http://clicky.com/help/customization
 *
 * @api public
 */

Clicky.prototype.initialize = function() {
  var user = this.analytics.user();
  window.clicky_site_ids = window.clicky_site_ids || [this.options.siteId];
  this.identify(new Identify({
    userId: user.id(),
    traits: user.traits()
  }));
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Clicky.prototype.loaded = function() {
  return isObject(window.clicky);
};

/**
 * Page.
 *
 * http://clicky.com/help/customization#/help/custom/manual
 *
 * @api public
 * @param {Page} page
 */

Clicky.prototype.page = function(page) {
  var properties = page.properties();
  var name = page.fullName();
  window.clicky.log(properties.path, name || properties.title);
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} [id]
 */

Clicky.prototype.identify = function(identify) {
  window.clicky_custom = window.clicky_custom || {};
  window.clicky_custom.session = window.clicky_custom.session || {};
  var traits = identify.traits();

  var username = identify.username();
  var email = identify.email();
  var name = identify.name();

  if (username || email || name) traits.username = username || email || name;

  extend(window.clicky_custom.session, traits);
};

/**
 * Track.
 *
 * http://clicky.com/help/customization#/help/custom/manual
 *
 * @api public
 * @param {Track} event
 */

Clicky.prototype.track = function(track) {
  window.clicky.goal(track.event(), track.revenue());
};

},{"@ndhoule/extend":10,"@segment/analytics.js-integration":136,"isobject":630,"segmentio-facade":655}],136:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":137,"./statics":138,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],137:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":139,"component-emitter":140,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":141}],138:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":140,"domify":624,"dup":39}],139:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],140:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],141:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],142:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var useHttps = require('use-https');

/**
 * Expose `Comscore` integration.
 */

var Comscore = module.exports = integration('comScore')
  .assumesPageview()
  .global('_comscore')
  .global('COMSCORE')
  .option('c1', '2')
  .option('c2', '')
  .tag('http', '<script src="http://b.scorecardresearch.com/beacon.js">')
  .tag('https', '<script src="https://sb.scorecardresearch.com/beacon.js">');

/**
 * Initialize.
 *
 * @api public
 */

Comscore.prototype.initialize = function() {
  var comScoreOptions = { c1: this.options.c1, c2: this.options.c2 };
  window._comscore = window._comscore || [comScoreOptions];
  var tagName = useHttps() ? 'https' : 'http';
  this.load(tagName, this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Comscore.prototype.loaded = function() {
  return !!window.COMSCORE;
};

/**
 * Page.
 *
 * @api public
 * @param {Object} page
 */

Comscore.prototype.page = function() {
  var comScoreOptions = { c1: this.options.c1, c2: this.options.c2 };
  window.COMSCORE.beacon(comScoreOptions);
};

},{"@segment/analytics.js-integration":143,"use-https":672}],143:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":144,"./statics":145,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],144:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":146,"component-emitter":147,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":148}],145:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":147,"domify":624,"dup":39}],146:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],147:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],148:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],149:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `CrazyEgg` integration.
 */

var CrazyEgg = module.exports = integration('Crazy Egg')
  .assumesPageview()
  .global('CE2')
  .option('accountNumber', '')
  .tag('<script src="//script.crazyegg.com/pages/scripts/{{ path }}.js?{{ cacheBuster }}">');

/**
 * Initialize.
 *
 * @api public
 */

CrazyEgg.prototype.initialize = function() {
  var number = this.options.accountNumber;
  var path = number.slice(0, 4) + '/' + number.slice(4);
  var cacheBuster = Math.floor(new Date().getTime() / 3600000);
  this.load({ path: path, cacheBuster: cacheBuster }, this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

CrazyEgg.prototype.loaded = function() {
  return !!window.CE2;
};

},{"@segment/analytics.js-integration":150}],150:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":151,"./statics":152,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],151:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":153,"component-emitter":154,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":155}],152:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":154,"domify":624,"dup":39}],153:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],154:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],155:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],156:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Identify = require('segmentio-facade').Identify;
var Track = require('segmentio-facade').Track;
var bind = require('component-bind');
var each = require('@ndhoule/each');
var integration = require('@segment/analytics.js-integration');
var iso = require('@segment/to-iso-string');
var push = require('global-queue')('_curebitq');
var throttle = require('throttleit');
var when = require('do-when');

/**
 * Expose `Curebit` integration.
 */

var Curebit = module.exports = integration('Curebit')
  .global('_curebitq')
  .global('curebit')
  .option('campaigns', {})
  .option('device', '')
  .option('iframeBorder', 0)
  .option('iframeHeight', '480')
  .option('iframeId', 'curebit_integration')
  .option('iframeWidth', '100%')
  .option('insertIntoId', '')
  .option('responsive', true)
  .option('server', 'https://www.curebit.com')
  .option('siteId', '')
  .option('customUrl', '')
  .tag('<script src="{{ src }}">');

/**
 * Initialize.
 *
 * @api public
 */

Curebit.prototype.initialize = function() {
  var url = this.options.customUrl || '//d2jjzw81hqbuqv.cloudfront.net/integration/curebit-1.0.min.js';

  push('init', { site_id: this.options.siteId, server: this.options.server });

  this.load({ src: url }, this.ready);

  // throttle the call to `page` since curebit needs to append an iframe
  this.page = throttle(bind(this, this.page), 250);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Curebit.prototype.loaded = function() {
  return !!window.curebit;
};

/**
 * Page.
 *
 * Call the `register_affiliate` method of the Curebit API that will load a
 * custom iframe onto the page, only if this page's path is marked as a
 * campaign.
 *
 * http://www.curebit.com/docs/affiliate/registration
 *
 * This is throttled to prevent accidentally drawing the iframe multiple times,
 * from multiple `.page()` calls. The `250` is from the curebit script.
 *
 * @api private
 * @param {String} url
 * @param {String} id
 * @param {Function} fn
 */

// FIXME: Is this deprecated? Seems unused
Curebit.prototype.injectIntoId = function(url, id, fn) {
  when(function() {
    return document.getElementById(id);
  }, function() {
    var script = document.createElement('script');
    script.src = url;
    var parent = document.getElementById(id);
    parent.appendChild(script);
    onload(script, fn);
  });
};

/**
 * Campaign tags.
 *
 * @api public
 * @param {Page} page
 */

Curebit.prototype.page = function() {
  var user = this.analytics.user();
  var campaigns = this.options.campaigns;
  var path = window.location.pathname;
  if (!campaigns[path]) return;

  var tags = (campaigns[path] || '').split(',');
  if (!tags.length) return;

  var settings = {
    responsive: this.options.responsive,
    device: this.options.device,
    campaign_tags: tags,
    iframe: {
      width: this.options.iframeWidth,
      height: this.options.iframeHeight,
      id: this.options.iframeId,
      frameborder: this.options.iframeBorder,
      container: this.options.insertIntoId
    }
  };

  var identify = new Identify({
    userId: user.id(),
    traits: user.traits()
  });

  // if we have an email, add any information about the user
  if (identify.email()) {
    settings.affiliate_member = {
      email: identify.email(),
      first_name: identify.firstName(),
      last_name: identify.lastName(),
      customer_id: identify.userId()
    };
  }

  push('register_affiliate', settings);
};

/**
 * Order completed.
 *
 * Fire the Curebit `register_purchase` with the order details and items.
 *
 * https://www.curebit.com/docs/ecommerce/custom
 *
 * @api public
 * @param {Track} track
 */

Curebit.prototype.orderCompleted = function(track) {
  var user = this.analytics.user();
  var orderId = track.orderId();
  var products = track.products();
  var props = track.properties();
  var items = [];
  var identify = new Identify({
    traits: user.traits(),
    userId: user.id()
  });

  each(function(product) {
    var track = new Track({ properties: product });
    items.push({
      product_id: track.productId() || track.id() || track.sku(),
      quantity: track.quantity(),
      image_url: product.image,
      price: track.price(),
      title: track.name(),
      url: product.url
    });
  }, products);

  push('register_purchase', {
    order_date: iso(props.date || new Date()),
    order_number: orderId,
    coupon_code: track.coupon(),
    subtotal: track.total(),
    customer_id: identify.userId(),
    first_name: identify.firstName(),
    last_name: identify.lastName(),
    email: identify.email(),
    items: items
  });
};

},{"@ndhoule/each":8,"@segment/analytics.js-integration":586,"@segment/to-iso-string":603,"component-bind":608,"do-when":623,"global-queue":625,"segmentio-facade":655,"throttleit":663}],157:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Identify = require('segmentio-facade').Identify;
var alias = require('@segment/alias');
var convertDates = require('@segment/convert-dates');
var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Customerio` integration.
 */

var Customerio = module.exports = integration('Customer.io')
  .global('_cio')
  .option('siteId', '')
  .tag('<script id="cio-tracker" src="https://assets.customer.io/assets/track.js" data-site-id="{{ siteId }}">');

/**
 * Initialize.
 *
 * http://customer.io/docs/api/javascript.html
 *
 * @api public
 */

Customerio.prototype.initialize = function() {
  window._cio = window._cio || [];
  /* eslint-disable */
  (function(){var a,b,c; a = function(f){return function(){window._cio.push([f].concat(Array.prototype.slice.call(arguments,0))); }; }; b = ['identify', 'track']; for (c = 0; c < b.length; c++) {window._cio[b[c]] = a(b[c]); } })();
  /* eslint-enable */
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Customerio.prototype.loaded = function() {
  return !!(window._cio && window._cio.push !== Array.prototype.push);
};

/**
 * Identify.
 *
 * http://customer.io/docs/api/javascript.html#section-Identify_customers
 *
 * @api public
 * @param {Identify} identify
 */

Customerio.prototype.identify = function(identify) {
  if (!identify.userId()) return this.debug('user id required');
  var traits = identify.traits({ createdAt: 'created' });
  traits = alias(traits, { created: 'created_at' });
  traits = convertDates(traits, convertDate);
  window._cio.identify(traits);
};

/**
 * Group.
 *
 * @api public
 * @param {Group} group
 */

Customerio.prototype.group = function(group) {
  var traits = group.traits();
  var user = this.analytics.user();

  traits = alias(traits, function(trait) {
    return 'Group ' + trait;
  });

  this.identify(new Identify({
    userId: user.id(),
    traits: traits
  }));
};

/**
 * Track.
 *
 * http://customer.io/docs/api/javascript.html#section-Track_a_custom_event
 *
 * @api public
 * @param {Track} track
 */

Customerio.prototype.track = function(track) {
  var properties = track.properties();
  properties = convertDates(properties, convertDate);
  window._cio.track(track.event(), properties);
};

/**
 * Convert a date to the format Customer.io supports.
 *
 * @api private
 * @param {Date} date
 * @return {number}
 */

function convertDate(date) {
  return Math.floor(date.getTime() / 1000);
}

},{"@segment/alias":19,"@segment/analytics.js-integration":158,"@segment/convert-dates":593,"segmentio-facade":655}],158:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":159,"./statics":160,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],159:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":161,"component-emitter":162,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":163}],160:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":162,"domify":624,"dup":39}],161:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],162:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],163:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],164:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var convertDates = require('@segment/convert-dates');
var each = require('@ndhoule/each');
var integration = require('@segment/analytics.js-integration');

var REFRESH_RATE = 300000;
var timeHash = Math.ceil(new Date() / REFRESH_RATE) * REFRESH_RATE;

/**
 * Expose `Drift` integration.
 */

var Drift = module.exports = integration('Drift')
  .global('drift')
  .option('embedId', '')
  .tag('<script src="https://js.driftt.com/include/' + timeHash + '/{{ embedId }}.js">');

/**
 * Initialize.
 *
 * @api public
 */

Drift.prototype.initialize = function() {
  var drift;

  drift = window.drift = window.driftt = window.driftt || [];
  drift.methods = ['identify', 'track', 'reset', 'debug', 'show', 'ping', 'page', 'hide', 'off', 'on'];
  drift.factory = function(method) {
    return function() {
      var args;
      args = Array.prototype.slice.call(arguments);
      args.unshift(method);
      drift.push(args);
    };
  };

  each(function(key) {
    drift[key] = drift.factory(key);
  }, drift.methods);

  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Drift.prototype.loaded = function() {
  return window.drift !== undefined;
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Drift.prototype.identify = function(identify) {
  if (!identify.userId()) return this.debug('user id required');
  var traits = identify.traits();
  var id = identify.userId();
  delete traits.id;
  window.drift.identify(id, traits);
  this.identified = true;
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Drift.prototype.track = function(track) {
  var properties = track.properties();
  properties = convertDates(properties, convertDate);
  window.drift.track(track.event(), properties);
};

/**
 * @api private
 * @param {Date} date
 * @return {number}
 */

function convertDate(date) {
  return Math.floor(date.getTime() / 1000);
}

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Drift.prototype.page = function(page) {
  var userId = this.analytics.user().id();
  if (!this.identified && userId) {
    window.drift.identify(userId);
    this.identified = true;
  }

  window.drift.page(page.name());
};

},{"@ndhoule/each":8,"@segment/analytics.js-integration":165,"@segment/convert-dates":593}],165:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":166,"./statics":167,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],166:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":168,"component-emitter":169,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":170}],167:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":169,"domify":624,"dup":39}],168:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],169:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],170:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],171:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var isObject = require('isobject');
var push = require('global-queue')('_dcq');

/**
 * Expose `Drip` integration.
 */

var Drip = module.exports = integration('Drip')
  .global('_dc')
  .global('_dcq')
  .global('_dcqi')
  .global('_dcs')
  .option('account', '')
  .tag('<script src="//tag.getdrip.com/{{ account }}.js">');

/**
 * Initialize.
 *
 * @api public
 */

Drip.prototype.initialize = function() {
  window._dcq = window._dcq || [];
  window._dcs = window._dcs || {};
  window._dcs.account = this.options.account;
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Drip.prototype.loaded = function() {
  return isObject(window._dc);
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Drip.prototype.track = function(track) {
  var props = track.properties();
  var cents = track.cents();
  if (cents) props.value = cents;
  delete props.revenue;
  push('track', track.event(), props);
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Drip.prototype.identify = function(identify) {
  push('identify', identify.traits());
};

},{"@segment/analytics.js-integration":586,"global-queue":625,"isobject":630}],172:[function(require,module,exports){
'use strict';

var integration = require('@segment/analytics.js-integration');
var tick = require('next-tick');
var objCase = require('obj-case');
var each = require('@ndhoule/each');
var objectKeys = require('@ndhoule/keys');

/**
 * Expose `Elevio` integration.
 */

var Elevio = module.exports = integration('Elevio')
  .assumesPageview()
  .option('accountId', '')
  .global('_elev')
  .tag('<script src="//static.elev.io/js/v3.js">');

/**
 * Initialize elevio.
 */

Elevio.prototype.initialize = function() {
  var self = this;
  window._elev = window._elev || {};
  window._elev.account_id = this.options.accountId;
  window._elev.segment = true;
  this.load(function() {
    tick(self.ready);
  });
};

/**
 * Has the elevio library been loaded yet?
 *
 * @return {Boolean}
 */

Elevio.prototype.loaded = function() {
  return !!window._elev;
};

/**
 * Identify a user.
 *
 * @param {Facade} identify
 */

Elevio.prototype.identify = function(identify) {
  var name = identify.name();
  var email = identify.email();
  var plan = identify.proxy('traits.plan');
  var traits = identify.traits();

  var removeTraits = ['id', 'name', 'firstName', 'lastName', 'email'];

  each(function(traitItem) {
    if (traits.hasOwnProperty(traitItem)) {
      objCase.del(traits, traitItem);
    }
  }, removeTraits);

  var user = {};
  user.via = 'segment';
  if (email) user.email = email;
  if (name) user.name = name;
  if (plan) user.plan = [plan];
  if (objectKeys(traits).length > 0) user.traits = traits;
  window._elev.user = user;
};

},{"@ndhoule/each":8,"@ndhoule/keys":13,"@segment/analytics.js-integration":173,"next-tick":179,"obj-case":641}],173:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":174,"./statics":175,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],174:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":177,"component-emitter":178,"dup":38,"is":629,"load-iframe":635,"next-tick":176,"to-no-case":180}],175:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":178,"domify":624,"dup":39}],176:[function(require,module,exports){
(function (process){
'use strict';

var callable, byObserver;

callable = function (fn) {
	if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
	return fn;
};

byObserver = function (Observer) {
	var node = document.createTextNode(''), queue, i = 0;
	new Observer(function () {
		var data;
		if (!queue) return;
		data = queue;
		queue = null;
		if (typeof data === 'function') {
			data();
			return;
		}
		data.forEach(function (fn) { fn(); });
	}).observe(node, { characterData: true });
	return function (fn) {
		callable(fn);
		if (queue) {
			if (typeof queue === 'function') queue = [queue, fn];
			else queue.push(fn);
			return;
		}
		queue = fn;
		node.data = (i = ++i % 2);
	};
};

module.exports = (function () {
	// Node.js
	if ((typeof process !== 'undefined') && process &&
			(typeof process.nextTick === 'function')) {
		return process.nextTick;
	}

	// MutationObserver=
	if ((typeof document === 'object') && document) {
		if (typeof MutationObserver === 'function') {
			return byObserver(MutationObserver);
		}
		if (typeof WebKitMutationObserver === 'function') {
			return byObserver(WebKitMutationObserver);
		}
	}

	// W3C Draft
	// http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html
	if (typeof setImmediate === 'function') {
		return function (cb) { setImmediate(callable(cb)); };
	}

	// Wide available standard
	if (typeof setTimeout === 'function') {
		return function (cb) { setTimeout(callable(cb), 0); };
	}

	return null;
}());

}).call(this,require('_process'))
},{"_process":647}],177:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],178:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],179:[function(require,module,exports){
(function (process){
'use strict';

var callable, byObserver;

callable = function (fn) {
	if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
	return fn;
};

byObserver = function (Observer) {
	var node = document.createTextNode(''), queue, currentQueue, i = 0;
	new Observer(function () {
		var callback;
		if (!queue) {
			if (!currentQueue) return;
			queue = currentQueue;
		} else if (currentQueue) {
			queue = currentQueue.concat(queue);
		}
		currentQueue = queue;
		queue = null;
		if (typeof currentQueue === 'function') {
			callback = currentQueue;
			currentQueue = null;
			callback();
			return;
		}
		node.data = (i = ++i % 2); // Invoke other batch, to handle leftover callbacks in case of crash
		while (currentQueue) {
			callback = currentQueue.shift();
			if (!currentQueue.length) currentQueue = null;
			callback();
		}
	}).observe(node, { characterData: true });
	return function (fn) {
		callable(fn);
		if (queue) {
			if (typeof queue === 'function') queue = [queue, fn];
			else queue.push(fn);
			return;
		}
		queue = fn;
		node.data = (i = ++i % 2);
	};
};

module.exports = (function () {
	// Node.js
	if ((typeof process === 'object') && process && (typeof process.nextTick === 'function')) {
		return process.nextTick;
	}

	// MutationObserver
	if ((typeof document === 'object') && document) {
		if (typeof MutationObserver === 'function') return byObserver(MutationObserver);
		if (typeof WebKitMutationObserver === 'function') return byObserver(WebKitMutationObserver);
	}

	// W3C Draft
	// http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html
	if (typeof setImmediate === 'function') {
		return function (cb) { setImmediate(callable(cb)); };
	}

	// Wide available standard
	if ((typeof setTimeout === 'function') || (typeof setTimeout === 'object')) {
		return function (cb) { setTimeout(callable(cb), 0); };
	}

	return null;
}());

}).call(this,require('_process'))
},{"_process":647}],180:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],181:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var extend = require('@ndhoule/extend');
var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_errs');

/**
 * Expose `Errorception` integration.
 */

var Errorception = module.exports = integration('Errorception')
  .assumesPageview()
  .global('_errs')
  .option('projectId', '')
  .option('meta', true)
  .tag('<script src="//beacon.errorception.com/{{ projectId }}.js">');

/**
 * Initialize.
 *
 * https://github.com/amplitude/Errorception-Javascript
 *
 * @api public
 */

Errorception.prototype.initialize = function() {
  window._errs = window._errs || [this.options.projectId];

  if (typeof window.onerror === 'function' && window.onerror !== push) {
    var oldOnerror = window.onerror;
    window.onerror = function() {
      oldOnerror.apply(window, arguments);
      push.apply(window, arguments);
    };
  } else {
    window.onerror = push;
  }

  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Errorception.prototype.loaded = function() {
  return !!(window._errs && window._errs.push !== Array.prototype.push);
};

/**
 * Identify.
 *
 * http://blog.errorception.com/2012/11/capture-custom-data-with-your-errors.html
 *
 * @api public
 * @param {Object} identify
 */

Errorception.prototype.identify = function(identify) {
  if (!this.options.meta) return;
  var traits = identify.traits();
  window._errs = window._errs || [];
  window._errs.meta = window._errs.meta || {};
  extend(window._errs.meta, traits);
};

},{"@ndhoule/extend":182,"@segment/analytics.js-integration":183,"global-queue":625}],182:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"dup":10}],183:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":184,"./statics":185,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":182,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],184:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":186,"component-emitter":187,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":188}],185:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":187,"domify":624,"dup":39}],186:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],187:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],188:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],189:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('@ndhoule/each');
var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_aaq');

/**
 * Expose `Evergage` integration.
 */

var Evergage = module.exports = integration('Evergage')
  .assumesPageview()
  .global('_aaq')
  .option('account', '')
  .option('dataset', '')
  .tag('<script src="//cdn.evergage.com/beacon/{{ account }}/{{ dataset }}/scripts/evergage.min.js">');

/**
 * Initialize.
 *
 * @api public
 */

Evergage.prototype.initialize = function() {
  var account = this.options.account;
  var dataset = this.options.dataset;

  window._aaq = window._aaq || [];
  push('setEvergageAccount', account);
  push('setDataset', dataset);
  push('setUseSiteConfig', true);

  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Evergage.prototype.loaded = function() {
  return !!window._aaq;
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Evergage.prototype.page = function(page) {
  var props = page.properties();
  var name = page.name();
  if (name) push('namePage', name);

  each(function(value, key) {
    push('setCustomField', key, value, 'page');
  }, props);

  window.Evergage.init(true);
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Evergage.prototype.identify = function(identify) {
  var id = identify.userId();
  if (!id) return;

  push('setUser', id);

  var traits = identify.traits({
    email: 'userEmail',
    name: 'userName'
  });

  each(function(value, key) {
    push('setUserField', key, value, 'page');
  }, traits);
};

/**
 * Group.
 *
 * @api public
 * @param {Group} group
 */

Evergage.prototype.group = function(group) {
  var props = group.traits();
  var id = group.groupId();
  if (!id) return;

  push('setCompany', id);
  each(function(value, key) {
    push('setAccountField', key, value, 'page');
  }, props);
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Evergage.prototype.track = function(track) {
  push('trackAction', track.event(), track.properties());
};

},{"@ndhoule/each":8,"@segment/analytics.js-integration":190,"global-queue":625}],190:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":191,"./statics":192,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],191:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":193,"component-emitter":194,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":195}],192:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":194,"domify":624,"dup":39}],193:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],194:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],195:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],196:[function(require,module,exports){
'use strict';

/**
* Module dependencies.
*/

var domify = require('domify');
var each = require('@ndhoule/each');
var extend = require('@ndhoule/extend');
var integration = require('@segment/analytics.js-integration');
var json = require('json3');

/**
* Expose `Extole` integration.
*/

var Extole = module.exports = integration('Extole')
  .global('extole')
  .option('clientId', '')
  .mapping('events')
  .tag('main', '<script src="//tags.extole.com/{{ clientId }}/core.js">');

/**
* Initialize.
*
* @api public
* @param {Object} page
*/

Extole.prototype.initialize = function() {
  if (this.loaded()) return this.ready();
  this.load('main', this.ready);
};

/**
* Loaded?
*
* @api private
* @return {boolean}
*/

Extole.prototype.loaded = function() {
  return !!window.extole;
};

/**
* Track.
*
* @api public
* @param {Track} track
*/

Extole.prototype.track = function(track) {
  var user = this.analytics.user();
  var traits = user.traits();
  var userId = user.id();
  var email = traits.email;
  var self = this;

  if (!userId && !email) {
    return this.debug('User must be identified before `#track` calls');
  }

  var event = track.event();
  var extoleEvents = this.events(event);

  if (!extoleEvents.length) {
    return this.debug('No events found for %s', event);
  }

  each(function(extoleEvent) {
    self._registerConversion(self._createConversionTag({
      type: extoleEvent,
      params: self._formatConversionParams(event, email, userId, track.properties())
    }));
  }, extoleEvents);
};

/**
 * Register a conversion to Extole.
 *
 * @api private
 * @param {HTMLElement} conversionTag An Extole conversion tag.
 */

// FIXME: If I understand Extole's lib correctly, this is sometimes async,
// sometimes sync. Refactor this into more predictable/sane behavior.
Extole.prototype._registerConversion = function(conversionTag) {
  if (window.extole.main && window.extole.main.fireConversion) {
    return window.extole.main.fireConversion(conversionTag);
  }

  if (window.extole.initializeGo) {
    window.extole.initializeGo().andWhenItsReady(function() {
      window.extole.main.fireConversion(conversionTag);
    });
  }
};

/**
 * Formats details from a Segment track event into a data format Extole can
 * accept.
 *
 * @api private
 * @param {string} event
 * @param {string} email
 * @param {string|number} userId
 * @param {Object} properties track.properties().
 * @return {Object}
 */

Extole.prototype._formatConversionParams = function(event, email, userId, properties) {
  var total;

  if (properties.total) {
    total = properties.total;
    delete properties.total;
    properties['tag:cart_value'] = total;
  }

  return extend({
    'tag:segment_event': event,
    e: email,
    partner_conversion_id: userId
  }, properties);
};

/**
 * Create an Extole conversion tag.
 *
 * @param {Object} conversion An Extole conversion object.
 * @return {HTMLElement}
 */

Extole.prototype._createConversionTag = function(conversion) {
  return domify('<script type="extole/conversion">' + json.stringify(conversion) + '</script>');
};

},{"@ndhoule/each":8,"@ndhoule/extend":10,"@segment/analytics.js-integration":197,"domify":624,"json3":633}],197:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":198,"./statics":199,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],198:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":200,"component-emitter":201,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":202}],199:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":201,"domify":624,"dup":39}],200:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],201:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],202:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],203:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('@ndhoule/each');
var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_fbq');

/**
 * Expose `Facebook`
 */

var Facebook = module.exports = integration('Facebook Conversion Tracking')
  .global('_fbq')
  .option('currency', 'USD')
  .tag('<script src="//connect.facebook.net/en_US/fbds.js">')
  .mapping('events');

/**
 * Initialize Facebook Conversion Tracking
 *
 * https://developers.facebook.com/docs/ads-for-websites/conversion-pixel-code-migration
 *
 * @api public
 */

Facebook.prototype.initialize = function() {
  window._fbq = window._fbq || [];
  this.load(this.ready);
  window._fbq.loaded = true;
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Facebook.prototype.loaded = function() {
  return !!(window._fbq && window._fbq.loaded);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Facebook.prototype.page = function(page) {
  this.track(page.track(page.fullName()));
};

/**
 * Track.
 *
 * https://developers.facebook.com/docs/reference/ads-api/custom-audience-website-faq/#fbpixel
 *
 * @api public
 * @param {Track} track
 */

Facebook.prototype.track = function(track) {
  var event = track.event();
  var events = this.events(event);
  var revenue = track.revenue() || 0;
  var self = this;

  each(function(event) {
    push('track', event, {
      currency: self.options.currency,
      value: revenue.toFixed(2)
    });
  }, events);
};

},{"@ndhoule/each":8,"@segment/analytics.js-integration":204,"global-queue":625}],204:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":205,"./statics":206,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],205:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":207,"component-emitter":208,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":209}],206:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":208,"domify":624,"dup":39}],207:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],208:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],209:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],210:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_fbq');
var foldl = require('@ndhoule/foldl');
var Track = require('segmentio-facade').Track;

/**
 * Expose `FacebookCustomAudiences`.
 */

var FacebookCustomAudiences = module.exports = integration('Facebook Custom Audiences')
  .global('_fbds')
  .global('_fbq')
  .option('pixelId', '')
  .option('currency', 'USD')
  .mapping('events')
  .tag('<script src="//connect.facebook.net/en_US/fbds.js">');

/**
 * Initialize.
 *
 * @api public
 */

FacebookCustomAudiences.prototype.initialize = function() {
  var pixelId = this.options.pixelId;
  window._fbds = window._fbds || {};
  window._fbds.pixelId = pixelId;
  window._fbq = window._fbq || [];
  window._fbq.push(['track', 'PixelInitialized', {}]);
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api public
 * @return {boolean}
 */

FacebookCustomAudiences.prototype.loaded = function() {
  return !!(window._fbq && Array.prototype.push !== window._fbq.push);
};

/**
 * Track.
 *
 * https://developers.facebook.com/docs/reference/ads-api/custom-audience-website#tagapi
 *
 * @api public
 * @param {Track} track
 */

FacebookCustomAudiences.prototype.track = function(track) {
  var event = track.event();
  var properties = track.properties();

  // Track event
  window._fbq.push(['track', event, properties]);
};

/**
 * Product list viewed.
 *
 * @api private
 * @param {Track} track category
 */

FacebookCustomAudiences.prototype.productListViewed = function(track) {
  push('track', 'ViewContent', {
    content_ids: [String(track.category() || '')],
    content_type: 'product_group'
  });
};

/**
 * Product viewed.
 *
 * @api private
 * @param {Track} track
 */

FacebookCustomAudiences.prototype.productViewed = function(track) {
  push('track', 'ViewContent', {
    content_ids: [String(track.productId() || track.id() || track.sku() || '')],
    content_type: 'product',
    content_name: String(track.name()),
    content_category: String(track.category()),
    currency: String(track.currency()),
    value: Number(track.value())
  });
};

/**
 * Product added.
 *
 * @api private
 * @param {Track} track
 */

FacebookCustomAudiences.prototype.productAdded = function(track) {
  push('track', 'AddToCart', {
    content_ids: [String(track.productId() || track.id() || track.sku() || '')],
    content_type: 'product',
    content_name: String(track.name()),
    content_category: String(track.category()),
    currency: String(track.currency()),
    value: Number(track.value())
  });
};

/**
 * Order Completed.
 *
 * @api private
 * @param {Track} track
 */

FacebookCustomAudiences.prototype.orderCompleted = function(track) {
  var content_ids = foldl(function(ret, product) {
    var item = new Track({ properties: product });
    var id = item.productId() || item.id() || item.sku() || '';
    ret.push(id);
    return ret;
  }, [], track.products());

  push('track', 'Purchase', {
    content_ids: content_ids,
    content_type: 'product',
    currency: String(track.currency()),
    value: Number(track.value())
  });
};

},{"@ndhoule/foldl":11,"@segment/analytics.js-integration":586,"global-queue":625,"segmentio-facade":655}],211:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var foldl = require('@ndhoule/foldl');
var each = require('@ndhoule/each');
var reject = require('reject');
var dateformat = require('dateformat');
var Track = require('segmentio-facade').Track;

/**
 * Expose `Facebook Pixel`.
 */

var FacebookPixel = module.exports = integration('Facebook Pixel')
  .global('fbq')
  .option('pixelId', '')
  .option('agent', 'seg')
  .option('valueIdentifier', 'value')
  .option('initWithExistingTraits', false)
  .mapping('standardEvents')
  .mapping('legacyEvents')
  .tag('<script src="//connect.facebook.net/en_US/fbevents.js">');

/**
 * Initialize Facebook Pixel.
 *
 * @param {Facade} page
 */

FacebookPixel.prototype.initialize = function() {
  window._fbq = function() {
    if (window.fbq.callMethod) {
      window.fbq.callMethod.apply(window.fbq, arguments);
    } else {
      window.fbq.queue.push(arguments);
    }
  };

  window.fbq = window.fbq || window._fbq;
  window.fbq.push = window.fbq;
  window.fbq.loaded = true;
  window.fbq.disablePushState = true; // disables automatic pageview tracking
  window.fbq.agent = this.options.agent;
  window.fbq.version = '2.0';
  window.fbq.queue = [];
  this.load(this.ready);
  if (this.options.initWithExistingTraits) {
    var traits = formatTraits(this.analytics);
    window.fbq('init', this.options.pixelId, traits);
  } else {
    window.fbq('init', this.options.pixelId);
  }
};

/**
 * Has the Facebook Pixel library been loaded yet?
 *
 * @return {Boolean}
 */

FacebookPixel.prototype.loaded = function() {
  return !!(window.fbq && window.fbq.callMethod);
};

/**
 * Trigger a page view.
 *
 * @param {Facade} identify
 */

FacebookPixel.prototype.page = function() {
  window.fbq('track', 'PageView');
};

/**
 * Track an event.
 *
 * @param {Facade} track
 */

FacebookPixel.prototype.track = function(track) {
  var event = track.event();
  var revenue = formatRevenue(track.revenue());

  var payload = foldl(function(acc, val, key) {
    if (key === 'revenue') {
      acc.value = revenue;
      return acc;
    }

    acc[key] = val;
    return acc;
  }, {}, track.properties());

  var standard = this.standardEvents(event);
  var legacy = this.legacyEvents(event);

  // non-mapped events get sent as "custom events" with full
  // tranformed payload
  if (![].concat(standard, legacy).length) {
    window.fbq('trackCustom', event, payload);
    return;
  }

  // standard conversion events, mapped to one of 9 standard events
  // "Purchase" requires a currency parameter;
  // send full transformed payload
  each(function(event) {
    if (event === 'Purchase') payload.currency = track.currency(); // defaults to 'USD'
    window.fbq('track', event, payload);
  }, standard);

  // legacy conversion events — mapped to specific "pixelId"s
  // send only currency and value
  each(function(event) {
    window.fbq('track', event, {
      currency: track.currency(),
      value: revenue
    });
  }, legacy);
};

/**
 * Product List Viewed.
 *
 * @api private
 * @param {Track} track category
 */

FacebookPixel.prototype.productListViewed = function(track) {
  window.fbq('track', 'ViewContent', {
    content_ids: [track.category() || ''],
    content_type: 'product_group'
  });

  // fall through for mapped legacy conversions
  each(function(event) {
    window.fbq('track', event, {
      currency: track.currency(),
      value: formatRevenue(track.revenue())
    });
  }, this.legacyEvents(track.event()));
};

/**
 * Product viewed.
 *
 * @api private
 * @param {Track} track
 */

FacebookPixel.prototype.productViewed = function(track) {
  window.fbq('track', 'ViewContent', {
    content_ids: [track.productId() || track.id() || track.sku() || ''],
    content_type: 'product',
    content_name: track.name() || '',
    content_category: track.category() || '',
    currency: track.currency(),
    value: this.options.valueIdentifier === 'value' ? formatRevenue(track.value()) : formatRevenue(track.price())
  });

  // fall through for mapped legacy conversions
  each(function(event) {
    window.fbq('track', event, {
      currency: track.currency(),
      value: formatRevenue(track.revenue())
    });
  }, this.legacyEvents(track.event()));
};

/**
 * Product added.
 *
 * @api private
 * @param {Track} track
 */

FacebookPixel.prototype.productAdded = function(track) {
  window.fbq('track', 'AddToCart', {
    content_ids: [track.productId() || track.id() || track.sku() || ''],
    content_type: 'product',
    content_name: track.name() || '',
    content_category: track.category() || '',
    currency: track.currency(),
    value: this.options.valueIdentifier === 'value' ? formatRevenue(track.value()) : formatRevenue(track.price())
  });

  // fall through for mapped legacy conversions
  each(function(event) {
    window.fbq('track', event, {
      currency: track.currency(),
      value: formatRevenue(track.revenue())
    });
  }, this.legacyEvents(track.event()));
};

/**
 * Order Completed.
 *
 * @api private
 * @param {Track} track
 */

FacebookPixel.prototype.orderCompleted = function(track) {
  var content_ids = foldl(function(acc, product) {
    var item = new Track({ properties: product });
    var key = item.productId() || item.id() || item.sku();
    if (key) acc.push(key);
    return acc;
  }, [], track.products() || []);

  var revenue = formatRevenue(track.revenue());

  window.fbq('track', 'Purchase', {
    content_ids: content_ids,
    content_type: 'product',
    currency: track.currency(),
    value: revenue
  });

  // fall through for mapped legacy conversions
  each(function(event) {
    window.fbq('track', event, {
      currency: track.currency(),
      value: formatRevenue(track.revenue())
    });
  }, this.legacyEvents(track.event()));
};


/**
 * Get Revenue Formatted Correctly for FB.
 *
 * @api private
 * @param {Track} track
 */

function formatRevenue(revenue) {
  return Number(revenue || 0).toFixed(2);
}

/**
 * Get Traits Formatted Correctly for FB.
 *
 * https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
 *
 * @api private
 */

function formatTraits(analytics) {
  var traits = analytics && analytics.user().traits();
  if (!traits) return {};
  var firstName;
  var lastName;
  // Check for firstName property
  // else check for name
  if (traits.firstName) {
    firstName = traits.firstName;
    lastName = traits.lastName;
  } else {
    var nameArray = traits.name && traits.name.toLowerCase().split(' ') || [];
    firstName = nameArray.shift();
    lastName = nameArray.pop();
  }
  var gender = traits.gender && traits.gender.slice(0,1).toLowerCase();
  var birthday = traits.birthday && dateformat(traits.birthday, 'yyyymmdd');
  var address = traits.address || {};
  var city = address.city && address.city.split(' ').join('').toLowerCase();
  var state = address.state && address.state.toLowerCase();
  var postalCode = address.postalCode;
  return reject({
    em: traits.email,
    fn: firstName,
    ln: lastName,
    ph: traits.phone,
    ge: gender,
    db: birthday,
    ct: city,
    st: state,
    zp: postalCode
  });
}

},{"@ndhoule/each":8,"@ndhoule/foldl":11,"@segment/analytics.js-integration":586,"dateformat":620,"reject":648,"segmentio-facade":655}],212:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Track = require('segmentio-facade').Track;
var each = require('component-each');
var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_fxm');

/**
 * Expose `FoxMetrics` integration.
 */

var FoxMetrics = module.exports = integration('FoxMetrics')
  .assumesPageview()
  .global('_fxm')
  .option('appId', '')
  .tag('<script src="//d35tca7vmefkrc.cloudfront.net/scripts/{{ appId }}.js">');

/**
 * Initialize.
 *
 * http://foxmetrics.com/documentation/apijavascript
 *
 * @api public
 */

FoxMetrics.prototype.initialize = function() {
  window._fxm = window._fxm || [];
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

FoxMetrics.prototype.loaded = function() {
  return !!(window._fxm && window._fxm.appId);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

FoxMetrics.prototype.page = function(page) {
  var properties = page.properties();
  var category = page.category();
  var name = page.name();
  // store for later
  // TODO: Why? Document me
  this._category = category;

  push(
    '_fxm.pages.view',
    properties.title,
    name,
    category,
    properties.url,
    properties.referrer
  );
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

FoxMetrics.prototype.identify = function(identify) {
  var id = identify.userId();

  if (!id) return;

  push(
    '_fxm.visitor.profile',
    id,
    identify.firstName(),
    identify.lastName(),
    identify.email(),
    identify.address(),
    // social
    // TODO: Why is this `undefined`? Document
    undefined,
    // partners
    // TODO: Why is this `undefined`? Document
    undefined,
    identify.traits()
  );
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

FoxMetrics.prototype.track = function(track) {
  var props = track.properties();
  var category = this._category || props.category;
  push(track.event(), category, props);
};

/**
 * Product viewed.
 *
 * @api private
 * @param {Track} track
 */

FoxMetrics.prototype.productViewed = function(track) {
  ecommerce('productview', track);
};

/**
 * Product Removed.
 *
 * @api private
 * @param {Track} track
 */

FoxMetrics.prototype.productRemoved = function(track) {
  ecommerce('removecartitem', track);
};

/**
 * Product Added.
 *
 * @api private
 * @param {Track} track
 */

FoxMetrics.prototype.productAdded = function(track) {
  ecommerce('cartitem', track);
};

/**
 * Order Completed.
 *
 * @api private
 * @param {Track} track
 */

FoxMetrics.prototype.orderCompleted = function(track) {
  var orderId = track.orderId();

  // transaction
  push(
    '_fxm.ecommerce.order',
    orderId,
    track.subtotal(),
    track.shipping(),
    track.tax(),
    track.city(),
    track.state(),
    track.zip(),
    track.quantity()
  );

  // items
  each(track.products(), function(product) {
    var track = new Track({ properties: product });
    ecommerce('purchaseitem', track, [
      track.quantity(),
      track.price(),
      orderId
    ]);
  });
};

/**
 * Track ecommerce `event` with `track`
 * with optional `arr` to append.
 *
 * @api private
 * @param {string} event
 * @param {Track} track
 * @param {Array} arr
 */

function ecommerce(event, track, arr) {
  push.apply(null, [
    '_fxm.ecommerce.' + event,
    track.productId() || track.id() || track.sku(),
    track.name(),
    track.category()
  ].concat(arr || []));
}

},{"@segment/analytics.js-integration":586,"component-each":611,"global-queue":625,"segmentio-facade":655}],213:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('@ndhoule/each');
var integration = require('@segment/analytics.js-integration');
var is = require('is');

/**
 * hasOwnProperty reference.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Expose `Frontleaf` integration.
 */

var Frontleaf = module.exports = integration('Frontleaf')
  .global('_fl')
  .global('_flBaseUrl')
  .option('baseUrl', 'https://api.frontleaf.com')
  .option('stream', '')
  .option('token', '')
  .option('trackCategorizedPages', false)
  .option('trackNamedPages', false)
  .tag('<script id="_fl" src="{{ baseUrl }}/lib/tracker.js">');

/**
 * Initialize.
 *
 * http://docs.frontleaf.com/#/technical-implementation/tracking-customers/tracking-beacon
 *
 * @api public
 */

Frontleaf.prototype.initialize = function() {
  window._fl = window._fl || [];
  window._flBaseUrl = window._flBaseUrl || this.options.baseUrl;
  this._push('setApiToken', this.options.token);
  this._push('setStream', this.options.stream);
  this.load({ baseUrl: window._flBaseUrl }, this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Frontleaf.prototype.loaded = function() {
  return is.array(window._fl) && window._fl.ready === true;
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Frontleaf.prototype.identify = function(identify) {
  var userId = identify.userId();
  if (userId) {
    this._push('setUser', {
      id: userId,
      name: identify.name() || identify.username(),
      data: clean(identify.traits())
    });
  }
};

/**
 * Group.
 *
 * @api public
 * @param {Group} group
 */

Frontleaf.prototype.group = function(group) {
  var groupId = group.groupId();
  if (groupId) {
    this._push('setAccount', {
      id: groupId,
      name: group.proxy('traits.name'),
      data: clean(group.traits())
    });
  }
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Frontleaf.prototype.page = function(page) {
  var category = page.category();
  var name = page.fullName();
  var opts = this.options;

  // categorized pages
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }

  // named pages
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Frontleaf.prototype.track = function(track) {
  var event = track.event();
  this._push('event', event, clean(track.properties()));
};

/**
 * Push a command onto the global Frontleaf queue.
 *
 * @api private
 * @param {String} command
 * @return {Object} args
 */

Frontleaf.prototype._push = function(command) {
  var args = [].slice.call(arguments, 1);
  window._fl.push(function(t) { t[command].apply(command, args); });
};

/**
 * Clean all nested objects and arrays.
 *
 * @api private
 * @param {Object} obj
 * @return {Object}
 */

function clean(obj) {
  var ret = {};

  // Remove traits/properties that are already represented
  // outside of the data container
  // TODO: Refactor into `omit` call
  var excludeKeys = ['id', 'name', 'firstName', 'lastName'];
  each(function(omitKey) {
    clear(obj, omitKey);
  }, excludeKeys);

  // Flatten nested hierarchy, preserving arrays
  obj = flatten(obj);

  // Discard nulls, represent arrays as comma-separated strings
  // FIXME: This also discards `undefined`s. Is that OK?
  for (var key in obj) {
    if (has.call(obj, key)) {
      var val = obj[key];
      if (val == null) {
        continue;
      }

      if (is.array(val)) {
        ret[key] = val.toString();
        continue;
      }

      ret[key] = val;
    }
  }

  return ret;
}

/**
 * Remove a property from an object if set.
 *
 * @api private
 * @param {Object} obj
 * @param {String} key
 */

function clear(obj, key) {
  if (obj.hasOwnProperty(key)) {
    delete obj[key];
  }
}

/**
 * Flatten a nested object into a single level space-delimited
 * hierarchy.
 *
 * Based on https://github.com/hughsk/flat
 *
 * @api private
 * @param {Object} source
 * @return {Object}
 */

function flatten(source) {
  var output = {};

  function step(object, prev) {
    for (var key in object) {
      if (has.call(object, key)) {
        var value = object[key];
        var newKey = prev ? prev + ' ' + key : key;

        if (!is.array(value) && is.object(value)) {
          return step(value, newKey);
        }

        output[newKey] = value;
      }
    }
  }

  step(source);

  return output;
}

},{"@ndhoule/each":8,"@segment/analytics.js-integration":214,"is":629}],214:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":215,"./statics":216,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],215:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":217,"component-emitter":218,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":219}],216:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":218,"domify":624,"dup":39}],217:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],218:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],219:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],220:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_gauges');

/**
 * Expose `Gauges` integration.
 */

var Gauges = module.exports = integration('Gauges')
  .assumesPageview()
  .global('_gauges')
  .option('siteId', '')
  .tag('<script id="gauges-tracker" src="//secure.gaug.es/track.js" data-site-id="{{ siteId }}">');

/**
 * Initialize Gauges.
 *
 * http://get.gaug.es/documentation/tracking/
 *
 * @api public
 */

Gauges.prototype.initialize = function() {
  window._gauges = window._gauges || [];
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Gauges.prototype.loaded = function() {
  return !!(window._gauges && window._gauges.push !== Array.prototype.push);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Gauges.prototype.page = function() {
  push('track');
};

},{"@segment/analytics.js-integration":221,"global-queue":625}],221:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":222,"./statics":223,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],222:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":224,"component-emitter":225,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":226}],223:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":225,"domify":624,"dup":39}],224:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],225:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],226:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],227:[function(require,module,exports){
'use strict';
/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var onBody = require('on-body-ready');

/**
 * Expose `GetSatisfaction` integration.
 */

var GetSatisfaction = module.exports = integration('Get Satisfaction')
  .assumesPageview()
  .global('GSFN')
  .option('widgetId', '')
  .tag('<script src="https://loader.engage.gsfn.us/loader.js">');

/**
 * Initialize.
 *
 * https://console.getsatisfaction.com/start/101022?signup=true#engage
 *
 * @api public
 */

GetSatisfaction.prototype.initialize = function() {
  var self = this;
  var widget = this.options.widgetId;
  var div = document.createElement('div');
  var id = div.id = 'getsat-widget-' + widget;
  onBody(function(body) { body.appendChild(div); });

  // usually the snippet is sync, so wait for it before initializing the tab
  this.load(function() {
    window.GSFN.loadWidget(widget, { containerId: id });
    self.ready();
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

GetSatisfaction.prototype.loaded = function() {
  return !!window.GSFN;
};

},{"@segment/analytics.js-integration":228,"on-body-ready":644}],228:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":229,"./statics":230,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],229:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":231,"component-emitter":232,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":233}],230:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":232,"domify":624,"dup":39}],231:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],232:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],233:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],234:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Track = require('segmentio-facade').Track;
var defaults = require('@ndhoule/defaults');
var dot = require('obj-case');
var each = require('component-each');
var integration = require('@segment/analytics.js-integration');
var is = require('is');
var len = require('object-component').length;
var push = require('global-queue')('_gaq');
var reject = require('reject');
var useHttps = require('use-https');
var user;

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics) {
  // eslint-disable-next-line no-use-before-define
  analytics.addIntegration(GA);
  user = analytics.user();
};

/**
 * Expose `GA` integration.
 *
 * http://support.google.com/analytics/bin/answer.py?hl=en&answer=2558867
 * https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration#_gat.GA_Tracker_._setSiteSpeedSampleRate
 */

var GA = exports.Integration = integration('Google Analytics')
  .readyOnLoad()
  .global('ga')
  .global('gaplugins')
  .global('_gaq')
  .global('GoogleAnalyticsObject')
  .option('anonymizeIp', false)
  .option('classic', false)
  .option('contentGroupings', {})
  .option('dimensions', {})
  .option('domain', 'auto')
  .option('doubleClick', false)
  .option('enhancedEcommerce', false)
  .option('enhancedLinkAttribution', false)
  .option('ignoredReferrers', null)
  .option('includeSearch', false)
  .option('metrics', {})
  .option('nonInteraction', false)
  .option('sendUserId', false)
  .option('siteSpeedSampleRate', 1)
  .option('sampleRate', 100)
  .option('trackCategorizedPages', true)
  .option('trackNamedPages', true)
  .option('trackingId', '')
  .option('optimize', '')
  .tag('library', '<script src="//www.google-analytics.com/analytics.js">')
  .tag('double click', '<script src="//stats.g.doubleclick.net/dc.js">')
  .tag('http', '<script src="http://www.google-analytics.com/ga.js">')
  .tag('https', '<script src="https://ssl.google-analytics.com/ga.js">');

/**
 * On `construct` swap any config-based methods to the proper implementation.
 */

GA.on('construct', function(integration) {
  if (integration.options.classic) {
    integration.initialize = integration.initializeClassic;
    integration.loaded = integration.loadedClassic;
    integration.page = integration.pageClassic;
    integration.track = integration.trackClassic;
    integration.orderCompleted = integration.completedOrderClassic;
  } else if (integration.options.enhancedEcommerce) {
    integration.productViewed = integration.productViewedEnhanced;
    integration.productClicked = integration.productClickedEnhanced;
    integration.productAdded = integration.productAddedEnhanced;
    integration.productRemoved = integration.productRemovedEnhanced;
    integration.checkoutStarted = integration.checkoutStartedEnhanced;
    integration.checkoutStepViewed = integration.checkoutStepViewedEnhanced;
    integration.checkoutStepCompleted = integration.checkoutStepCompletedEnhanced;
    integration.orderUpdated = integration.orderUpdatedEnhanced;
    integration.orderCompleted = integration.orderCompletedEnhanced;
    integration.orderRefunded = integration.orderRefundedEnhanced;
    integration.promotionViewed = integration.promotionViewedEnhanced;
    integration.promotionClicked = integration.promotionClickedEnhanced;
  }
});

/**
 * Initialize.
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/advanced
 */

GA.prototype.initialize = function() {
  this.pageCalled = false;
  var opts = this.options;

  // setup the tracker globals
  window.GoogleAnalyticsObject = 'ga';
  window.ga = window.ga || function() {
    window.ga.q = window.ga.q || [];
    window.ga.q.push(arguments);
  };
  window.ga.l = new Date().getTime();

  if (window.location.hostname === 'localhost') opts.domain = 'none';

  window.ga('create', opts.trackingId, {
    // Fall back on default to protect against empty string
    cookieDomain: opts.domain || GA.prototype.defaults.domain,
    siteSpeedSampleRate: opts.siteSpeedSampleRate,
    sampleRate: opts.sampleRate,
    allowLinker: true
  });

  if (opts.optimize) window.ga('require', opts.optimize);

  // display advertising
  if (opts.doubleClick) {
    window.ga('require', 'displayfeatures');
  }

  // https://support.google.com/analytics/answer/2558867?hl=en
  if (opts.enhancedLinkAttribution) {
    window.ga('require', 'linkid', 'linkid.js');
  }

  // send global id
  if (opts.sendUserId && user.id()) {
    window.ga('set', 'userId', user.id());
  }

  // anonymize after initializing, otherwise a warning is shown
  // in google analytics debugger
  if (opts.anonymizeIp) window.ga('set', 'anonymizeIp', true);

  // custom dimensions & metrics
  var custom = metrics(user.traits(), opts);
  if (len(custom)) window.ga('set', custom);

  this.load('library', this.ready);
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

GA.prototype.loaded = function() {
  return !!window.gaplugins;
};

/**
 * Page.
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications#multiple-hits
 *
 * @api public
 * @param {Page} page
 */

GA.prototype.page = function(page) {
  var category = page.category();
  var props = page.properties();
  var name = page.fullName();
  var opts = this.options;
  var campaign = page.proxy('context.campaign') || {};
  var pageview = {};
  var pagePath = path(props, this.options);
  var pageTitle = name || props.title;
  var pageReferrer = page.referrer() || '';
  var track;

  // store for later
  // TODO: Why? Document this better
  this._category = category;

  pageview.page = pagePath;
  pageview.title = pageTitle;
  pageview.location = props.url;

  if (campaign.name) pageview.campaignName = campaign.name;
  if (campaign.source) pageview.campaignSource = campaign.source;
  if (campaign.medium) pageview.campaignMedium = campaign.medium;
  if (campaign.content) pageview.campaignContent = campaign.content;
  if (campaign.term) pageview.campaignKeyword = campaign.term;

  // custom dimensions, metrics and content groupings
  var custom = metrics(props, opts);
  if (len(custom)) window.ga('set', custom);

  // set
  var payload = {
    page: pagePath,
    title: pageTitle
  };
  if (pageReferrer !== document.referrer) payload.referrer = pageReferrer; // allow referrer override if referrer was manually set
  window.ga('set', payload);

  if (this.pageCalled) delete pageview.location;

  // send
  window.ga('send', 'pageview', pageview);

  // categorized pages
  if (category && this.options.trackCategorizedPages) {
    track = page.track(category);
    this.track(track, { nonInteraction: 1 });
  }

  // named pages
  if (name && this.options.trackNamedPages) {
    track = page.track(name);
    this.track(track, { nonInteraction: 1 });
  }

  this.pageCalled = true;
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} event
 */

GA.prototype.identify = function(identify) {
  var opts = this.options;

  if (opts.sendUserId && identify.userId()) {
    window.ga('set', 'userId', identify.userId());
  }

  // Set dimensions
  var custom = metrics(user.traits(), opts);
  if (len(custom)) window.ga('set', custom);
};

/**
 * Track.
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference
 *
 * @param {Track} event
 */

GA.prototype.track = function(track, options) {
  var contextOpts = track.options(this.name);
  var interfaceOpts = this.options;
  var opts = defaults(options || {}, contextOpts);
  opts = defaults(opts, interfaceOpts);
  var props = track.properties();
  var campaign = track.proxy('context.campaign') || {};

  // custom dimensions & metrics
  var custom = metrics(props, interfaceOpts);
  if (len(custom)) window.ga('set', custom);

  var payload = {
    eventAction: track.event(),
    eventCategory: track.category() || this._category || 'All',
    eventLabel: props.label,
    eventValue: formatValue(props.value || track.revenue()),
    nonInteraction: !!(props.nonInteraction || opts.nonInteraction)
  };

  if (campaign.name) payload.campaignName = campaign.name;
  if (campaign.source) payload.campaignSource = campaign.source;
  if (campaign.medium) payload.campaignMedium = campaign.medium;
  if (campaign.content) payload.campaignContent = campaign.content;
  if (campaign.term) payload.campaignKeyword = campaign.term;

  window.ga('send', 'event', payload);
};

/**
 * Order completed.
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#multicurrency
 *
 * @param {Track} track
 * @api private
 */

GA.prototype.orderCompleted = function(track) {
  var total = track.total() || track.revenue() || 0;
  var orderId = track.orderId();
  var products = track.products();
  var props = track.properties();

  // orderId is required.
  if (!orderId) return;

  // require ecommerce
  if (!this.ecommerce) {
    window.ga('require', 'ecommerce');
    this.ecommerce = true;
  }

  // add transaction
  window.ga('ecommerce:addTransaction', {
    affiliation: props.affiliation,
    shipping: track.shipping(),
    revenue: total,
    tax: track.tax(),
    id: orderId,
    currency: track.currency()
  });

  // add products
  each(products, function(product) {
    var productTrack = createProductTrack(track, product);
    window.ga('ecommerce:addItem', {
      category: productTrack.category(),
      quantity: productTrack.quantity(),
      price: productTrack.price(),
      name: productTrack.name(),
      sku: productTrack.sku(),
      id: orderId,
      currency: productTrack.currency()
    });
  });

  // send
  window.ga('ecommerce:send');
};

/**
 * Initialize (classic).
 *
 * https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration
 */

GA.prototype.initializeClassic = function() {
  var opts = this.options;
  var anonymize = opts.anonymizeIp;
  var domain = opts.domain;
  var enhanced = opts.enhancedLinkAttribution;
  var ignore = opts.ignoredReferrers;
  var sample = opts.siteSpeedSampleRate;

  window._gaq = window._gaq || [];
  push('_setAccount', opts.trackingId);
  push('_setAllowLinker', true);

  if (anonymize) push('_gat._anonymizeIp');
  if (domain) push('_setDomainName', domain);
  if (sample) push('_setSiteSpeedSampleRate', sample);

  if (enhanced) {
    var protocol = document.location.protocol === 'https:' ? 'https:' : 'http:';
    var pluginUrl = protocol + '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
    push('_require', 'inpage_linkid', pluginUrl);
  }

  if (ignore) {
    if (!is.array(ignore)) ignore = [ignore];
    each(ignore, function(domain) {
      push('_addIgnoredRef', domain);
    });
  }

  if (this.options.doubleClick) {
    this.load('double click', this.ready);
  } else {
    var name = useHttps() ? 'https' : 'http';
    this.load(name, this.ready);
  }
};

/**
 * Loaded? (classic)
 *
 * @return {Boolean}
 */

GA.prototype.loadedClassic = function() {
  return !!(window._gaq && window._gaq.push !== Array.prototype.push);
};

/**
 * Page (classic).
 *
 * https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiBasicConfiguration
 *
 * @param {Page} page
 */

GA.prototype.pageClassic = function(page) {
  var category = page.category();
  var props = page.properties();
  var name = page.fullName();
  var track;

  push('_trackPageview', path(props, this.options));

  // categorized pages
  if (category && this.options.trackCategorizedPages) {
    track = page.track(category);
    this.track(track, { nonInteraction: 1 });
  }

  // named pages
  if (name && this.options.trackNamedPages) {
    track = page.track(name);
    this.track(track, { nonInteraction: 1 });
  }
};

/**
 * Track (classic).
 *
 * https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiEventTracking
 *
 * @param {Track} track
 */

GA.prototype.trackClassic = function(track, options) {
  var opts = options || track.options(this.name);
  var props = track.properties();
  var revenue = track.revenue();
  var event = track.event();
  var category = this._category || track.category() || 'All';
  var label = props.label;
  var value = formatValue(revenue || props.value);
  var nonInteraction = !!(props.nonInteraction || opts.nonInteraction);
  push('_trackEvent', category, event, label, value, nonInteraction);
};

/**
 * Completed order.
 *
 * https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingEcommerce
 * https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingEcommerce#localcurrencies
 *
 * @param {Track} track
 * @api private
 */

GA.prototype.completedOrderClassic = function(track) {
  var total = track.total() || track.revenue() || 0;
  var orderId = track.orderId();
  var products = track.products() || [];
  var props = track.properties();
  var currency = track.currency();

  // required
  if (!orderId) return;

  // add transaction
  push('_addTrans',
    orderId,
    props.affiliation,
    total,
    track.tax(),
    track.shipping(),
    track.city(),
    track.state(),
    track.country());

  // add items
  each(products, function(product) {
    var track = new Track({ properties: product });
    push('_addItem',
      orderId,
      track.sku(),
      track.name(),
      track.category(),
      track.price(),
      track.quantity());
  });

  // send
  push('_set', 'currencyCode', currency);
  push('_trackTrans');
};

/**
 * Return the path based on `properties` and `options`.
 *
 * @param {Object} properties
 * @param {Object} options
 * @return {string|undefined}
 */

function path(properties, options) {
  if (!properties) return;
  var str = properties.path;
  if (options.includeSearch && properties.search) str += properties.search;
  return str;
}

/**
 * Format the value property to Google's liking.
 *
 * @param {Number} value
 * @return {Number}
 */

function formatValue(value) {
  if (!value || value < 0) return 0;
  return Math.round(value);
}

/**
 * Map google's custom dimensions, metrics & content groupings with `obj`.
 *
 * Example:
 *
 *      metrics({ revenue: 1.9 }, { { metrics : { revenue: 'metric8' } });
 *      // => { metric8: 1.9 }
 *
 *      metrics({ revenue: 1.9 }, {});
 *      // => {}
 *
 * @param {Object} obj
 * @param {Object} data
 * @return {Object|null}
 * @api private
 */

function metrics(obj, data) {
  var dimensions = data.dimensions;
  var metrics = data.metrics;
  var contentGroupings = data.contentGroupings;

  var ret = {};

  each([metrics, dimensions, contentGroupings], function(group) {
    each(group, function(prop, key) {
      var value = dot(obj, prop) || obj[prop];
      if (is.bool(value)) value = value.toString();
      if (value) ret[key] = value;
    });
  });

  return ret;
}

/**
 * Loads ec.js (unless already loaded)
 *
 * @param {Track} track
 */

GA.prototype.loadEnhancedEcommerce = function(track) {
  if (!this.enhancedEcommerceLoaded) {
    window.ga('require', 'ec');
    this.enhancedEcommerceLoaded = true;
  }

  // Ensure we set currency for every hit
  window.ga('set', '&cu', track.currency());
};

/**
 * Pushes an event and all previously set EE data to GA.
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.pushEnhancedEcommerce = function(track) {
  // Send a custom non-interaction event to ensure all EE data is pushed.
  // Without doing this we'd need to require page display after setting EE data.
  var args = reject([
    'send',
    'event',
    track.category() || 'EnhancedEcommerce',
    track.event() || 'Action not defined',
    track.properties().label,
    { nonInteraction: 1 }
  ]);
  window.ga.apply(window, args);
};

/**
 * Started order - Enhanced Ecommerce
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#checkout-steps
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.checkoutStartedEnhanced = function(track) {
  // same as viewed checkout step #1
  this.checkoutStepViewed(track);
};

/**
 * Updated order - Enhanced Ecommerce
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#checkout-steps
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.orderUpdatedEnhanced = function(track) {
  // Same event as started order - will override
  this.checkoutStartedEnhanced(track);
};

/**
 * Viewed checkout step - Enhanced Ecommerce
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#checkout-steps
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.checkoutStepViewedEnhanced = function(track) {
  var products = track.products();
  var props = track.properties();
  var options = extractCheckoutOptions(props);

  this.loadEnhancedEcommerce(track);

  each(products, function(product) {
    var productTrack = createProductTrack(track, product);
    enhancedEcommerceTrackProduct(productTrack);
  });

  window.ga('ec:setAction', 'checkout', {
    step: props.step || 1,
    option: options || undefined
  });

  this.pushEnhancedEcommerce(track);
};

/**
 * Completed checkout step - Enhanced Ecommerce
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#checkout-options
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.checkoutStepCompletedEnhanced = function(track) {
  var props = track.properties();
  var options = extractCheckoutOptions(props);

  // Only send an event if we have step and options to update
  if (!props.step || !options) return;

  this.loadEnhancedEcommerce(track);

  window.ga('ec:setAction', 'checkout_option', {
    step: props.step || 1,
    option: options
  });

  window.ga('send', 'event', 'Checkout', 'Option');
};

/**
 * Completed order - Enhanced Ecommerce
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#measuring-transactions
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.orderCompletedEnhanced = function(track) {
  var total = track.total() || track.revenue() || 0;
  var orderId = track.orderId();
  var products = track.products();
  var props = track.properties();

  // orderId is required.
  if (!orderId) return;

  this.loadEnhancedEcommerce(track);

  each(products, function(product) {
    var productTrack = createProductTrack(track, product);
    enhancedEcommerceTrackProduct(productTrack);
  });

  window.ga('ec:setAction', 'purchase', {
    id: orderId,
    affiliation: props.affiliation,
    revenue: total,
    tax: track.tax(),
    shipping: track.shipping(),
    coupon: track.coupon()
  });

  this.pushEnhancedEcommerce(track);
};

/**
 * Refunded order - Enhanced Ecommerce
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#measuring-refunds
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.orderRefundedEnhanced = function(track) {
  var orderId = track.orderId();
  var products = track.products();

  // orderId is required.
  if (!orderId) return;

  this.loadEnhancedEcommerce(track);

  // Without any products it's a full refund
  each(products, function(product) {
    var track = new Track({ properties: product });
    window.ga('ec:addProduct', {
      id: track.productId() || track.id() || track.sku(),
      quantity: track.quantity()
    });
  });

  window.ga('ec:setAction', 'refund', {
    id: orderId
  });

  this.pushEnhancedEcommerce(track);
};

/**
 * Added product - Enhanced Ecommerce
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#add-remove-cart
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.productAddedEnhanced = function(track) {
  this.loadEnhancedEcommerce(track);
  enhancedEcommerceProductAction(track, 'add');
  this.pushEnhancedEcommerce(track);
};

/**
 * Removed product - Enhanced Ecommerce
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#add-remove-cart
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.productRemovedEnhanced = function(track) {
  this.loadEnhancedEcommerce(track);
  enhancedEcommerceProductAction(track, 'remove');
  this.pushEnhancedEcommerce(track);
};

/**
 * Viewed product details - Enhanced Ecommerce
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#product-detail-view
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.productViewedEnhanced = function(track) {
  var props = track.properties();
  var data = {};

  this.loadEnhancedEcommerce(track);
  // list property is optional
  if (props.list) data.list = props.list;
  enhancedEcommerceProductAction(track, 'detail', data);
  this.pushEnhancedEcommerce(track);
};

/**
 * Clicked product - Enhanced Ecommerce
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#measuring-actions
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.productClickedEnhanced = function(track) {
  var props = track.properties();
  var data = {};

  this.loadEnhancedEcommerce(track);
  // list property is optional
  if (props.list) data.list = props.list;
  enhancedEcommerceProductAction(track, 'click', data);
  this.pushEnhancedEcommerce(track);
};

/**
 * Viewed promotion - Enhanced Ecommerce
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#measuring-promo-impressions
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.promotionViewedEnhanced = function(track) {
  var props = track.properties();

  this.loadEnhancedEcommerce(track);
  window.ga('ec:addPromo', {
    id: track.promotionId() || track.id(),
    name: track.name(),
    creative: props.creative,
    position: props.position
  });
  this.pushEnhancedEcommerce(track);
};

/**
 * Clicked promotion - Enhanced Ecommerce
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#measuring-promo-clicks
 *
 * @api private
 * @param {Track} track
 */

GA.prototype.promotionClickedEnhanced = function(track) {
  var props = track.properties();

  this.loadEnhancedEcommerce(track);
  window.ga('ec:addPromo', {
    id: track.promotionId() || track.id(),
    name: track.name(),
    creative: props.creative,
    position: props.position
  });
  window.ga('ec:setAction', 'promo_click', {});
  this.pushEnhancedEcommerce(track);
};

/**
 * Enhanced ecommerce track product.
 *
 * Simple helper so that we don't repeat `ec:addProduct` everywhere.
 *
 * @api private
 * @param {Track} track
 */

function enhancedEcommerceTrackProduct(track) {
  var props = track.properties();
  var product = {
    id: track.productId() || track.id() || track.sku(),
    name: track.name(),
    category: track.category(),
    quantity: track.quantity(),
    price: track.price(),
    brand: props.brand,
    variant: props.variant,
    currency: track.currency()
  };

  // append coupon if it set
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#measuring-transactions
  var coupon = track.proxy('properties.coupon');
  if (coupon) product.coupon = coupon;
  window.ga('ec:addProduct', product);
}

/**
 * Set `action` on `track` with `data`.
 *
 * @api private
 * @param {Track} track
 * @param {String} action
 * @param {Object} data
 */

function enhancedEcommerceProductAction(track, action, data) {
  enhancedEcommerceTrackProduct(track);
  window.ga('ec:setAction', action, data || {});
}

/**
 * Extracts checkout options.
 *
 * @api private
 * @param {Object} props
 * @return {string|null}
 */

function extractCheckoutOptions(props) {
  var options = [
    props.paymentMethod,
    props.shippingMethod
  ];

  // Remove all nulls, and join with commas.
  var valid = reject(options);
  return valid.length > 0 ? valid.join(', ') : null;
}

/**
 * Creates a track out of product properties.
 *
 * @api private
 * @param {Track} track
 * @param {Object} properties
 * @return {Track}
 */

function createProductTrack(track, properties) {
  properties.currency = properties.currency || track.currency();
  return new Track({ properties: properties });
}

},{"@ndhoule/defaults":6,"@segment/analytics.js-integration":586,"component-each":611,"global-queue":625,"is":629,"obj-case":641,"object-component":642,"reject":648,"segmentio-facade":655,"use-https":672}],235:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('dataLayer', { wrap: false });

/**
 * Expose `GTM`.
 */

var GTM = module.exports = integration('Google Tag Manager')
  .assumesPageview()
  .global('dataLayer')
  .global('google_tag_manager')
  .option('containerId', '')
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true)
  .tag('<script src="//www.googletagmanager.com/gtm.js?id={{ containerId }}&l=dataLayer">');

/**
 * Initialize.
 *
 * https://developers.google.com/tag-manager
 *
 * @api public
 */

GTM.prototype.initialize = function() {
  push({ 'gtm.start': Number(new Date()), event: 'gtm.js' });
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

GTM.prototype.loaded = function() {
  return !!(window.dataLayer && Array.prototype.push !== window.dataLayer.push);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

GTM.prototype.page = function(page) {
  var category = page.category();
  var name = page.fullName();
  var opts = this.options;

  // all
  if (opts.trackAllPages) {
    this.track(page.track());
  }

  // categorized
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }

  // named
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }
};

/**
 * Track.
 *
 * https://developers.google.com/tag-manager/devguide#events
 *
 * @api public
 * @param {Track} track
 */

GTM.prototype.track = function(track) {
  var props = track.properties();
  var userId = this.analytics.user().id();
  var anonymousId = this.analytics.user().anonymousId();
  if (userId) props.userId = userId;
  if (anonymousId) props.segmentAnonymousId = anonymousId;
  props.event = track.event();

  push(props);
};

},{"@segment/analytics.js-integration":586,"global-queue":625}],236:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Identify = require('segmentio-facade').Identify;
var Track = require('segmentio-facade').Track;
var each = require('component-each');
var integration = require('@segment/analytics.js-integration');
var omit = require('omit');
var pick = require('pick');

/**
 * Expose `GoSquared` integration.
 */

var GoSquared = module.exports = integration('GoSquared')
  .assumesPageview()
  .global('_gs')
  .option('anonymizeIP', false)
  .option('apiSecret', '')
  .option('cookieDomain', null)
  .option('trackHash', false)
  .option('trackLocal', false)
  .option('trackParams', true)
  .option('useCookies', true)
  .tag('<script src="//d1l6p2sc9645hc.cloudfront.net/tracker.js">');

/**
 * Initialize.
 *
 * https://www.gosquared.com/developer/tracker
 * Options: https://www.gosquared.com/developer/tracker/configuration
 *
 * @api public
 */

GoSquared.prototype.initialize = function() {
  var self = this;
  var options = this.options;
  var user = this.analytics.user();
  push(options.apiSecret);

  each(options, function(name, value) {
    if (name === 'apiSecret') return;
    if (value == null) return;
    push('set', name, value);
  });

  self.identify(new Identify({
    traits: user.traits(),
    userId: user.id()
  }));

  self.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

GoSquared.prototype.loaded = function() {
  // If the tracker version is set, the library has loaded
  return !!(window._gs && window._gs.v);
};

/**
 * Page.
 *
 * https://www.gosquared.com/docs/tracking/api/#pageviews
 *
 * @param {Page} page
 */

GoSquared.prototype.page = function(page) {
  var props = page.properties();
  var name = page.fullName();
  push('track', props.path, name || props.title);
};

/**
 * Identify.
 *
 * https://www.gosquared.com/docs/tracking/identify
 *
 * @param {Identify} identify
 */

GoSquared.prototype.identify = function(identify) {
  var traits = identify.traits({
    createdAt: 'created_at',
    firstName: 'first_name',
    lastName: 'last_name',
    title: 'company_position',
    industry: 'company_industry'
  });

  // https://www.gosquared.com/docs/tracking/api/#properties
  var specialKeys = [
    'id',
    'email',
    'name',
    'first_name',
    'last_name',
    'username',
    'description',
    'avatar',
    'phone',
    'created_at',
    'company_name',
    'company_size',
    'company_position',
    'company_industry'
  ];

  // Segment allows traits to all be in a flat object
  // GoSquared requires all custom properties to be in a `custom` object,

  // select all special keys
  var props = pick.apply(null, [traits].concat(specialKeys));
  props.custom = omit(specialKeys, traits);

  var id = identify.userId();

  if (id) {
    push('identify', id, props);
  } else {
    push('properties', props);
  }
};

/**
 * Track.
 *
 * https://www.gosquared.com/docs/tracking/events
 *
 * @param {Track} track
 */

GoSquared.prototype.track = function(track) {
  push('event', track.event(), track.properties());
};

/**
 * Checked out.
 *
 * https://www.gosquared.com/docs/tracking/ecommerce
 *
 * @api private
 * @param {Track} track
 */

GoSquared.prototype.orderCompleted = function(track) {
  var products = track.products();
  var items = [];

  each(products, function(product) {
    var track = new Track({ properties: product });
    items.push({
      category: track.category(),
      quantity: track.quantity(),
      price: track.price(),
      name: track.name()
    });
  });

  push('transaction', track.orderId(), {
    revenue: track.total(),
    track: true
  }, items);
};

/**
 * Push to `_gs.q`.
 *
 * @api private
 * @param {...*} args
 */

function push() {
  window._gs = window._gs || function() {
    window._gs.q.push(arguments);
  };
  window._gs.q = window._gs.q || [];
  window._gs.apply(null, arguments);
}

},{"@segment/analytics.js-integration":586,"component-each":611,"omit":643,"pick":646,"segmentio-facade":655}],237:[function(require,module,exports){
'use strict';
/* global JSON */
/* eslint no-restricted-globals: [0] */

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var each = require('component-each');
var is = require('is');
var extend = require('@ndhoule/extend');
var toISOString = require('@segment/to-iso-string');
var toString = Object.prototype.toString; // in case this method has been overridden by the user

/**
 * Expose `Heap` integration.
 */

var Heap = module.exports = integration('Heap')
  .global('heap')
  .option('appId', '')
  .tag('<script src="//cdn.heapanalytics.com/js/heap-{{ appId }}.js">');

/**
 * Initialize.
 *
 * https://heapanalytics.com/docs/installation#web
 *
 * @api public
 */

Heap.prototype.initialize = function() {
  window.heap = window.heap || [];
  window.heap.load = function(appid, config) {
    window.heap.appid = appid;
    window.heap.config = config;

    var methodFactory = function(type) {
      return function() {
        window.heap.push([type].concat(Array.prototype.slice.call(arguments, 0)));
      };
    };

    var heapMethods = ['addEventProperties', 'addUserProperties', 'clearEventProperties', 'identify', 'removeEventProperty', 'setEventProperties', 'track', 'unsetEventProperty'];
    each(heapMethods, function(method) {
      window.heap[method] = methodFactory(method);
    });
  };

  window.heap.load(this.options.appId);
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Heap.prototype.loaded = function() {
  return !!(window.heap && window.heap.appid);
};

/**
 * Identify.
 *
 * https://heapanalytics.com/docs#identify
 *
 * @api public
 * @param {Identify} identify
 */

Heap.prototype.identify = function(identify) {
  var traits = identify.traits({ email: '_email' });
  var id = identify.userId();
  if (id) window.heap.identify(id);
  window.heap.addUserProperties(clean(traits));
};

/**
 * Track.
 *
 * https://heapanalytics.com/docs#track
 *
 * @api public
 * @param {Track} track
 */

Heap.prototype.track = function(track) {
  window.heap.track(track.event(), clean(track.properties()));
};

/**
 * Clean all nested objects and arrays.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function clean(obj) {
  var ret = {};

  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      var value = obj[k];
      // Heap's natively library will drop null and undefined properties anyway
      // so no need to send these
      // also prevents uncaught errors since we call .toString() on non objects
      if (value === null || value === undefined) continue;

      // date
      if (is.date(value)) {
        ret[k] = toISOString(value);
        continue;
      }

      // leave boolean as is
      if (is.bool(value)) {
        ret[k] = value;
        continue;
      }

      // leave  numbers as is
      if (is.number(value)) {
        ret[k] = value;
        continue;
      }

      // arrays of objects (eg. `products` array)
      if (toString.call(value) === '[object Array]') {
        ret = extend(ret, trample(k, value));
        continue;
      }

      // non objects
      if (toString.call(value) !== '[object Object]') {
        ret[k] = value.toString();
        continue;
      }

      ret = extend(ret, trample(k, value));
    }
  }
  // json
  // must flatten including the name of the original trait/property
  function trample(key, value) {
    var nestedObj = {};
    nestedObj[key] = value;
    var flattenedObj = flatten(nestedObj, { safe: true });

    // stringify arrays inside nested object to be consistent with top level behavior of arrays
    for (var k in flattenedObj) {
      if (is.array(flattenedObj[k])) flattenedObj[k] = JSON.stringify(flattenedObj[k]);
    }

    return flattenedObj;
  }

  return ret;
}

/**
 * Flatten nested objects
 * taken from https://www.npmjs.com/package/flat
 * @param {Object} obj
 * @return {Object} obj
 * @api public
 */

function flatten(target, opts) {
  opts = opts || {};

  var delimiter = opts.delimiter || '.';
  var maxDepth = opts.maxDepth;
  var currentDepth = 1;
  var output = {};

  function step(object, prev) {
    Object.keys(object).forEach(function(key) {
      var value = object[key];
      var isarray = opts.safe && Array.isArray(value);
      var type = Object.prototype.toString.call(value);
      var isobject = type === '[object Object]' || type === '[object Array]';

      var newKey = prev
        ? prev + delimiter + key
        : key;

      if (!opts.maxDepth) {
        maxDepth = currentDepth + 1;
      }

      if (!isarray && isobject && Object.keys(value).length && currentDepth < maxDepth) {
        ++currentDepth;
        return step(value, newKey);
      }

      output[newKey] = value;
    });
  }

  step(target);

  return output;
}

/**
 * Polyfill Object.keys
 * // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 * Note: Had to do this because for some reason, the above will not work properly without using Object.keys
 */

if (!Object.keys) {
  Object.keys = function(o) {
    if (o !== Object(o)) {
      throw new TypeError('Object.keys called on a non-object');
    }
    var k = [];
    var p;
    for (p in o) if (Object.prototype.hasOwnProperty.call(o, p)) k.push(p);
    return k;
  };
}

},{"@ndhoule/extend":10,"@segment/analytics.js-integration":586,"@segment/to-iso-string":603,"component-each":611,"is":629}],238:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `hellobar.com` integration.
 */

var Hellobar = module.exports = integration('Hello Bar')
  .assumesPageview()
  .global('_hbq')
  .option('apiKey', '')
  .tag('<script src="//s3.amazonaws.com/scripts.hellobar.com/{{ apiKey }}.js">');

/**
 * Initialize.
 *
 * https://s3.amazonaws.com/scripts.hellobar.com/bb900665a3090a79ee1db98c3af21ea174bbc09f.js
 *
 * @api public
 */

Hellobar.prototype.initialize = function() {
  window._hbq = window._hbq || [];
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Hellobar.prototype.loaded = function() {
  return !!(window._hbq && window._hbq.push !== Array.prototype.push);
};

},{"@segment/analytics.js-integration":239}],239:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":240,"./statics":241,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],240:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":242,"component-emitter":243,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":244}],241:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":243,"domify":624,"dup":39}],242:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],243:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],244:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],245:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `HitTail` integration.
 */

var HitTail = module.exports = integration('HitTail')
  .assumesPageview()
  .global('htk')
  .option('siteId', '')
  .tag('<script src="//{{ siteId }}.hittail.com/mlt.js">');

/**
 * Initialize.
 *
 * @api public
 */

HitTail.prototype.initialize = function() {
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

HitTail.prototype.loaded = function() {
  return isFunction(window.htk);
};

/**
 * Check if it is a function
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

},{"@segment/analytics.js-integration":246}],246:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":247,"./statics":248,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],247:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":249,"component-emitter":250,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":251}],248:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":250,"domify":624,"dup":39}],249:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],250:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],251:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],252:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var convert = require('@segment/convert-dates');
var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_hsq');
var each = require('@ndhoule/each');

/**
 * Expose `HubSpot` integration.
 */

var HubSpot = module.exports = integration('HubSpot')
  .assumesPageview()
  .global('_hsq')
  .option('portalId', null)
  .tag('<script id="hs-analytics" src="https://js.hs-analytics.net/analytics/{{ cacheBuster }}/{{ portalId }}.js">');

/**
 * Initialize.
 *
 * @api public
 */

HubSpot.prototype.initialize = function() {
  window._hsq = [];
  var cacheBuster = Math.ceil(new Date() / 300000) * 300000;
  this.load({ cacheBuster: cacheBuster }, this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

HubSpot.prototype.loaded = function() {
  return !!(window._hsq && window._hsq.push !== Array.prototype.push);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

HubSpot.prototype.page = function() {
  push('trackPageView');
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

HubSpot.prototype.identify = function(identify) {
  if (!identify.email()) return;
  var traits = identify.traits({ firstName: 'firstname', lastName: 'lastname' });
  traits = convertDates(traits);
  traits = formatTraits(traits);
  push('identify', traits);
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

HubSpot.prototype.track = function(track) {
  // Hubspot expects properties.id to be the name of the .track() event
  // Ref: http://developers.hubspot.com/docs/methods/enterprise_events/javascript_api
  var props = convertDates(track.properties({ id: '_id', revenue: 'value' }));
  props.id = track.event();

  push('trackEvent', track.event(), props);
};

/**
 * Convert all the dates in the HubSpot properties to millisecond times
 *
 * @api private
 * @param {Object} properties
 */

function convertDates(properties) {
  return convert(properties, function(date) { return date.getTime(); });
}

/**
 * lowercase & snakecase any trait with uppercase letters or spaces
 * Hubspot cannot accept uppercases or spaces
 *
 * @api private
 * @param {Object} traits
 * @return {Object} ret
 */

function formatTraits(traits) {
  var ret = {};
  each(function(value, key) {
    var k = key.toLowerCase().replace(/\s/g, '_');
    ret[k] = value;
  }, traits);

  return ret;
}

},{"@ndhoule/each":8,"@segment/analytics.js-integration":253,"@segment/convert-dates":593,"global-queue":625}],253:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":254,"./statics":255,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],254:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":256,"component-emitter":257,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":258}],255:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":257,"domify":624,"dup":39}],256:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],257:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],258:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],259:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Improvely` integration.
 */

var Improvely = module.exports = integration('Improvely')
  .assumesPageview()
  .global('_improvely')
  .global('improvely')
  .option('domain', '')
  .option('projectId', null)
  .tag('<script src="//{{ domain }}.iljmp.com/improvely.js">');

/**
 * Initialize.
 *
 * http://www.improvely.com/docs/landing-page-code
 *
 * @api public
 */

Improvely.prototype.initialize = function() {
  // Shim out the Improvely library/globals.
  window._improvely = [];
  /* eslint-disable */
  window.improvely = { init: function(e, t){ window._improvely.push(["init", e, t]); }, goal: function(e){ window._improvely.push(["goal", e]); }, label: function(e){ window._improvely.push(["label", e]); }};
  /* eslint-enable */

  var domain = this.options.domain;
  var id = this.options.projectId;
  window.improvely.init(domain, id);
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Improvely.prototype.loaded = function() {
  return !!(window.improvely && window.improvely.identify);
};

/**
 * Identify.
 *
 * http://www.improvely.com/docs/labeling-visitors
 *
 * @api public
 * @param {Identify} identify
 */

Improvely.prototype.identify = function(identify) {
  var id = identify.userId();
  if (id) window.improvely.label(id);
};

/**
 * Track.
 *
 * http://www.improvely.com/docs/conversion-code
 *
 * @api public
 * @param {Track} track
 */

Improvely.prototype.track = function(track) {
  var props = track.properties({ revenue: 'amount' });
  props.type = track.event();
  window.improvely.goal(props);
};

},{"@segment/analytics.js-integration":260}],260:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":261,"./statics":262,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],261:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":263,"component-emitter":264,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":265}],262:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":264,"domify":624,"dup":39}],263:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],264:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],265:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],266:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('__insp');

/**
 * Expose `Inspectlet` integration.
 */

var Inspectlet = module.exports = integration('Inspectlet')
  .assumesPageview()
  .global('__insp')
  .global('__insp_')
  .option('wid', '')
  .tag('<script src="//cdn.inspectlet.com/inspectlet.js">');

/**
 * Initialize.
 *
 * https://www.inspectlet.com/dashboard/embedcode/1492461759/initial
 *
 * @api public
 */

Inspectlet.prototype.initialize = function() {
  push('wid', this.options.wid);
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Inspectlet.prototype.loaded = function() {
  return !!(window.__insp_ && window.__insp);
};

/**
 * Identify.
 *
 * http://www.inspectlet.com/docs#tagging
 *
 * @api public
 * @param {Identify} identify
 */

Inspectlet.prototype.identify = function(identify) {
  var traits = identify.traits({ id: 'userid' });
  var email = identify.email();
  if (email) push('identify', email);
  push('tagSession', traits);
};

/**
 * Track.
 *
 * http://www.inspectlet.com/docs/tags
 *
 * @api public
 * @param {Track} track
 */

Inspectlet.prototype.track = function(track) {
  push('tagSession', track.event(), track.properties());
};

/**
 * Page.
 *
 * http://www.inspectlet.com/docs/tags
 *
 * @api public
 * @param {Track} track
 */

Inspectlet.prototype.page = function() {
  push('virtualPage');
};

},{"@segment/analytics.js-integration":267,"global-queue":625}],267:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":268,"./statics":269,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],268:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":270,"component-emitter":271,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":272}],269:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":271,"domify":624,"dup":39}],270:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],271:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],272:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],273:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var convertDates = require('@segment/convert-dates');
var defaults = require('@ndhoule/defaults');
var del = require('obj-case').del;
var integration = require('@segment/analytics.js-integration');
var is = require('is');
var extend = require('@ndhoule/extend');

/**
 * Expose `Intercom` integration.
 */

var Intercom = module.exports = integration('Intercom')
  .global('Intercom')
  .option('activator', '#IntercomDefaultWidget')
  .option('appId', '')
  .tag('<script src="https://widget.intercom.io/widget/{{ appId }}">');

/**
 * Initialize.
 *
 * http://docs.intercom.io/
 * http://docs.intercom.io/#IntercomJS
 *
 * @api public
 */

Intercom.prototype.initialize = function() {
  // Shim out the Intercom library.
  window.Intercom = function() {
    window.Intercom.q.push(arguments);
  };
  window.Intercom.q = [];

  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Intercom.prototype.loaded = function() {
  return typeof window.Intercom === 'function';
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Intercom.prototype.page = function(page) {
  var integrationSettings = page.options(this.name);
  this.bootOrUpdate({}, integrationSettings);
};

/**
 * Identify.
 *
 * http://docs.intercom.io/#IntercomJS
 *
 * @api public
 * @param {Identify} identify
 */

Intercom.prototype.identify = function(identify) {
  var traits = identify.traits({ userId: 'user_id' });
  var integrationSettings = identify.options(this.name);
  var companyCreated = identify.companyCreated();
  var created = identify.created();
  var name = identify.name();
  var id = identify.userId();
  var group = this.analytics.group();

  if (!id && !identify.email()) {
    return;
  }

  // intercom requires `company` to be an object. default it with group traits
  // so that we guarantee an `id` is there, since they require it
  if (traits.company !== null && !is.object(traits.company)) {
    delete traits.company;
  }

  if (traits.company) {
    defaults(traits.company, group.traits());
  }

  // name
  if (name) traits.name = name;

  // handle dates
  if (created) {
    del(traits, 'created');
    del(traits, 'createdAt');
    traits.created_at = created;
  }

  if (companyCreated) {
    del(traits.company, 'created');
    del(traits.company, 'createdAt');
    traits.company.created_at = companyCreated;
  }

  // convert dates
  traits = convertDates(traits, formatDate);

  // handle options
  if (integrationSettings.userHash) traits.user_hash = integrationSettings.userHash;
  if (integrationSettings.user_hash) traits.user_hash = integrationSettings.user_hash;

  this.bootOrUpdate(traits, integrationSettings);
};

/**
 * Group.
 *
 * @api public
 * @param {Group} group
 */

Intercom.prototype.group = function(group) {
  // using .traits here since group.properties() doesn't take alias object
  var props = group.traits({
    createdAt: 'created',
    created: 'created_at'
  });
  props = convertDates(props, formatDate);
  var id = group.groupId();
  if (id) props.id = id;
  var integrationSettings = group.options(this.name);
  var traits = extend({ company: props }, hideDefaultLauncher(integrationSettings));

  api('update', traits);
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Intercom.prototype.track = function(track) {
  api('trackEvent', track.event(), track.properties());
};

/**
 * Boots or updates, as appropriate.
 *
 * @api private
 * @param {Object} options
 */

Intercom.prototype.bootOrUpdate = function(options, integrationSettings) {
  options = options || {};
  var method = this.booted === true ? 'update' : 'boot';
  var activator = this.options.activator;
  options.app_id = this.options.appId;

  // Intercom, will force the widget to appear if the selector is
  // #IntercomDefaultWidget so no need to check inbox, just need to check that
  // the selector isn't #IntercomDefaultWidget.
  if (activator !== '#IntercomDefaultWidget') {
    options.widget = { activator: activator };
  }
  // Check for selective showing of messenger option
  options = extend(options, hideDefaultLauncher(integrationSettings));

  api(method, options);
  this.booted = true;
};

/**
 * Format a date to Intercom's liking.
 *
 * @api private
 * @param {Date} date
 * @return {number}
 */

function formatDate(date) {
  return Math.floor(date / 1000);
}

/**
 * Push a call onto the Intercom queue.
 *
 * @api private
 */

function api() {
  window.Intercom.apply(window.Intercom, arguments);
}

/**
 * Selectively hide messenger
 * https://docs.intercom.io/configure-intercom-for-your-product-or-site/customize-the-intercom-messenger/customize-the-intercom-messenger-technical#show-the-intercom-messenger-to-selected-users-for-web-
 * @param {Object} options
 * @return {Object} ret
 * @api private
 */

function hideDefaultLauncher(options) {
  var ret = {};
  var setting = options.hideDefaultLauncher;
  if (setting === undefined || typeof setting !== 'boolean') return ret;
  ret.hide_default_launcher= setting;
  return ret;
}

},{"@ndhoule/defaults":6,"@ndhoule/extend":10,"@segment/analytics.js-integration":274,"@segment/convert-dates":593,"is":629,"obj-case":641}],274:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":275,"./statics":276,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],275:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":277,"component-emitter":278,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":279}],276:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":278,"domify":624,"dup":39}],277:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],278:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],279:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],280:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var clone = require('@ndhoule/clone');

/**
 * Expose `Keen IO` integration.
 */

var Keen = module.exports = integration('Keen IO')
  .global('KeenSegment')
  .option('ipAddon', false)
  .option('projectId', '')
  .option('readKey', '')
  .option('referrerAddon', false)
  .option('trackAllPages', false)
  .option('trackCategorizedPages', true)
  .option('trackNamedPages', true)
  .option('uaAddon', false)
  .option('urlAddon', false)
  .option('writeKey', '')
  .tag('<script src="//d26b395fwzu5fz.cloudfront.net/3.1.0/{{ lib }}.min.js">');

/**
 * Initialize.
 *
 * https://keen.io/docs/
 *
 * @api public
 */

Keen.prototype.initialize = function() {
  var lib = this.options.readKey ? 'keen' : 'keen-tracker';
  var options = this.options;
  var previousKeen = window.Keen || null;
  var self = this;

  // Skip this step if keen-js@3.1.0 is already available
  if (!window.Keen || window.Keen.version !== '3.1.0') {
    // Force-undefine `Keen` (saved as `previousKeen`)
    window.Keen = undefined;
    /**
      * Shim out the Keen client library.
      *
      * To update the library, grab the most up-to-date embed code from Keen's
      * JS library readme (https://github.com/keen/keen-js) and remove any of the
      * script loading/appending business. Next, update the script tag above with
      * the new client library URL.
    */
    /* eslint-disable */
    !(function(a,b){if(void 0===b[a]){b["_"+a]={},b[a]=function(c){b["_"+a].clients=b["_"+a].clients||{},b["_"+a].clients[c.projectId]=this,this._config=c},b[a].ready=function(c){b["_"+a].ready=b["_"+a].ready||[],b["_"+a].ready.push(c)};for(var c=["addEvent","setGlobalProperties","trackExternalLink","on"],d=0;d<c.length;d++){var e=c[d],f=function(a){return function(){return this["_"+a]=this["_"+a]||[],this["_"+a].push(arguments),this}};b[a].prototype[e]=f(e)}}})("Keen",window);
    /* eslint-enable */
    // keen-js@3.1.0 will be installed once `.load()` is called
  }

  // Define a safe namespace (stub)
  window.KeenSegment = window.Keen;

  // Define client (stub)
  this.client = new window.KeenSegment({
    projectId: options.projectId,
    readKey: options.readKey,
    writeKey: options.writeKey
  });

  this.load({ lib: lib }, function() {
    // Redefine safe namespace with full library
    window.KeenSegment = window.Keen;
    // Restore original `Keen`
    if (previousKeen) {
      window.Keen = previousKeen;
      previousKeen = undefined;
    }
    self.ready();
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Keen.prototype.loaded = function() {
  return !!(window.KeenSegment && window.KeenSegment.prototype.configure);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Keen.prototype.page = function(page) {
  var category = page.category();
  var name = page.fullName();
  var opts = this.options;

  // all pages
  if (opts.trackAllPages) {
    this.track(page.track());
  }

  // named pages
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }

  // categorized pages
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }
};

/**
 * Identify.
 *
 * TODO: migrate from old `userId` to simpler `id`
 * https://keen.io/docs/data-collection/data-enrichment/#add-ons
 *
 * Set up the Keen addons object. These must be specifically
 * enabled by the settings in order to include the plugins, or else
 * Keen will reject the request.
 *
 * @api public
 * @param {Identify} identify
 */

Keen.prototype.identify = function(identify) {
  var traits = identify.traits();
  var id = identify.userId();
  var user = {};
  if (id) user.userId = id;
  if (traits) user.traits = traits;
  var props = { user: user };
  this.addons(props, identify);
  this.client.setGlobalProperties(function() {
    // Clone the props so the Keen Client can't manipulate the ref
    return clone(props);
  });
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Keen.prototype.track = function(track) {
  var props = track.properties();
  this.addons(props, track);
  this.client.addEvent(track.event(), props);
};

/**
 * Attach addons to `obj` with `msg`.
 *
 * @api private
 * @param {Object} obj
 * @param {Facade} msg
 */

Keen.prototype.addons = function(obj, msg) {
  var options = this.options;
  var addons = [];

  if (options.ipAddon) {
    addons.push({
      name: 'keen:ip_to_geo',
      input: { ip: 'ip_address' },
      output: 'ip_geo_info'
    });
    obj.ip_address = '${keen.ip}';
  }

  if (options.uaAddon) {
    addons.push({
      name: 'keen:ua_parser',
      input: { ua_string: 'user_agent' },
      output: 'parsed_user_agent'
    });
    obj.user_agent = '${keen.user_agent}';
  }

  if (options.urlAddon) {
    addons.push({
      name: 'keen:url_parser',
      input: { url: 'page_url' },
      output: 'parsed_page_url'
    });
    obj.page_url = document.location.href;
  }

  if (options.referrerAddon) {
    addons.push({
      name: 'keen:referrer_parser',
      input: {
        referrer_url: 'referrer_url',
        page_url: 'page_url'
      },
      output: 'referrer_info'
    });
    obj.referrer_url = document.referrer;
    obj.page_url = document.location.href;
  }

  obj.keen = {
    timestamp: msg.timestamp(),
    addons: addons
  };
};

},{"@ndhoule/clone":5,"@segment/analytics.js-integration":281}],281:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":282,"./statics":283,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],282:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":284,"component-emitter":285,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":286}],283:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":285,"domify":624,"dup":39}],284:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],285:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],286:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],287:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var includes = require('@ndhoule/includes');
var integration = require('@segment/analytics.js-integration');
var is = require('is');

/**
 * Expose `Kenshoo` integration.
 */

var Kenshoo = module.exports = integration('Kenshoo')
  .global('k_trackevent')
  .option('cid', '')
  .option('events', [])
  .option('subdomain', '')
  .tag('<script src="//{{ subdomain }}.xg4ken.com/media/getpx.php?cid={{ cid }}">');

/**
 * Initialize.
 *
 * See https://gist.github.com/justinboyle/7875832
 *
 * @api public
 */

Kenshoo.prototype.initialize = function() {
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Kenshoo.prototype.loaded = function() {
  return is.fn(window.k_trackevent);
};

/**
 * Track.
 *
 * FIXME: Only tracks events if they are listed in the events array option.
 * We've asked for docs a few times but no go :/
 *
 * https://github.com/jorgegorka/the_tracker/blob/master/lib/the_tracker/trackers/kenshoo.rb
 *
 * @api public
 * @param {Track} event
 */

Kenshoo.prototype.track = function(track) {
  var events = this.options.events;
  var event = track.event();
  var revenue = track.revenue() || 0;
  if (!includes(event, events)) return;

  var params = [
    'id=' + this.options.cid,
    'type=conv',
    'val=' + revenue,
    'orderId=' + track.orderId(),
    'promoCode=' + track.coupon(),
    'valueCurrency=' + track.currency(),

    // Live tracking fields.
    // FIXME: Ignored for now (until we get documentation).
    'GCID=',
    'kw=',
    'product='
  ];

  window.k_trackevent(params, this.options.subdomain);
};

},{"@ndhoule/includes":12,"@segment/analytics.js-integration":288,"is":629}],288:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":289,"./statics":290,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],289:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":291,"component-emitter":292,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":293}],290:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":292,"domify":624,"dup":39}],291:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],292:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],293:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],294:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('component-each');
var integration = require('@segment/analytics.js-integration');
var is = require('is');
var push = require('global-queue')('_kmq');
var extend = require('@ndhoule/extend');
var del = require('obj-case').del;

/**
 * Expose `KISSmetrics` integration.
 */

var KISSmetrics = module.exports = integration('KISSmetrics')
  .global('KM')
  .global('_kmil')
  .global('_kmq')
  .option('apiKey', '')
  .option('prefixProperties', true)
  .option('trackCategorizedPages', true)
  .option('trackNamedPages', true)
  .tag('library', '<script src="//scripts.kissmetrics.com/{{ apiKey }}.2.js">');

/**
 * Check if browser is mobile, for kissmetrics.
 *
 * http://support.kissmetrics.com/how-tos/browser-detection.html#mobile-vs-non-mobile
 */

exports.isMobile = navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/IEMobile/i)
  || navigator.userAgent.match(/Opera Mini/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPhone|iPod/i);

/**
 * Initialize.
 *
 * http://support.kissmetrics.com/apis/javascript
 */

KISSmetrics.prototype.initialize = function() {
  window._kmq = window._kmq || [];
  if (exports.isMobile) push('set', { 'Mobile Session': 'Yes' });
  this.load('library', this.ready);
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

KISSmetrics.prototype.loaded = function() {
  return is.object(window.KM);
};

/**
 * Page.
 *
 * @param {Page} page
 */

KISSmetrics.prototype.page = function(page) {
  if (!window.KM_SKIP_PAGE_VIEW) {
    push('record', 'Page View', {
      'Viewed URL': page.url(),
      Referrer: page.referrer() || 'Direct'
    });
  }
  this.trackPage(page);
};

/**
 * Track page.
 *
 * @param {Page} page
 */

KISSmetrics.prototype.trackPage = function(page) {
  var category = page.category();
  var name = page.fullName();
  var opts = this.options;

  var e;
  // categorized pages
  if (opts.trackCategorizedPages && category) {
    e = page.category();
  }
  // named pages
  if (opts.trackNamedPages && name) {
    e = page.name();
  }
  if (!e) {
    return;
  }


  var event = 'Viewed ' + e + ' Page';
  var properties = prefix('Page', page.properties());
  push('record', event, properties);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

KISSmetrics.prototype.identify = function(identify) {
  var traits = clean(identify.traits());
  var id = identify.userId();
  if (id) push('identify', id);
  if (traits) push('set', traits);
};

/**
 * Track.
 *
 * @param {Track} track
 */

KISSmetrics.prototype.track = function(track) {
  var mapping = { revenue: 'Billing Amount' };
  var event = track.event();
  var properties = clean(track.properties(mapping));
  var revenue = track.revenue();
  if (revenue) {
    // legacy: client side integration used to only send 'Billing Amount', but
    // our server side sent both 'revenue' and 'Billing Amount'. From the docs,
    // http://support.kissmetrics.com/tools/revenue-report.html, ther is no
    // reason to send it as 'Billing Amount', but we don't want to break reports
    // so we send it as 'revenue' and 'Billing Amount' for consistency across
    // platforms.
    properties.revenue = revenue;
  }
  if (this.options.prefixProperties) properties = prefix(event, properties);
  push('record', event, properties);
};

/**
 * Alias.
 *
 * @param {Alias} to
 */

KISSmetrics.prototype.alias = function(alias) {
  push('alias', alias.to(), alias.from());
};

/**
 * Group.
 *
 * @param {Group} to
 */

KISSmetrics.prototype.group = function(group) {
  push('set', prefix('Group', group.traits()));
};

/**
 * Completed order.
 *
 * @param {Track} track
 * @api private
 */

KISSmetrics.prototype.completedOrder = function(track) {
  var opts = this.options;
  var event = track.event();
  var products = track.products();
  var timestamp = toUnixTimestamp(track.timestamp() || new Date());
  var properties = track.properties();
  // since we send product data separately and KM doesn't serialize it anyway (shows up as '[object Object]')
  // we're going to delete the property
  del(properties, 'products');
  if (opts.prefixProperties) properties = prefix(event, properties);

  // transaction
  push('record', event, properties);

  // items
  window._kmq.push(function() {
    each(products, function(product, i) {
      var item = product;
      if (opts) item = prefix(event, item);
      item._t = timestamp + i;
      item._d = 1;
      window.KM.set(item);
    });
  });
};

/**
 * Prefix properties with the event name.
 *
 * @param {String} event
 * @param {Object} properties
 * @return {Object} prefixed
 * @api private
 */

function prefix(event, properties) {
  var prefixed = {};
  each(properties, function(key, val) {
    if (key === 'Billing Amount') {
      prefixed[key] = val;
    } else if (key === 'revenue') {
      prefixed[event + ' - ' + key] = val;
      prefixed['Billing Amount'] = val;
    } else {
      prefixed[event + ' - ' + key] = val;
    }
  });
  return prefixed;
}

function toUnixTimestamp(date) {
  date = new Date(date);
  return Math.floor(date.getTime() / 1000);
}

/**
 * Clean all nested objects and arrays.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function clean(obj) {
  var ret = {};

  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      var value = obj[k];
      if (value === null || typeof value === 'undefined') continue;

      // convert date to unix
      if (is.date(value)) {
        ret[k] = toUnixTimestamp(value);
        continue;
      }

      // leave boolean as is
      if (is.bool(value)) {
        ret[k] = value;
        continue;
      }

      // leave  numbers as is
      if (is.number(value)) {
        ret[k] = value;
        continue;
      }

      // convert non objects to strings
      if (value.toString() !== '[object Object]') {
        ret[k] = value.toString();
        continue;
      }

      // json
      // must flatten including the name of the original trait/property
      var nestedObj = {};
      nestedObj[k] = value;
      var flattenedObj = flatten(nestedObj, { safe: true });

      // stringify arrays inside nested object to be consistent with top level behavior of arrays
      for (var key in flattenedObj) {
        if (is.array(flattenedObj[key])) {
          flattenedObj[key] = flattenedObj[key].toString();
        }
      }

      ret = extend(ret, flattenedObj);
      delete ret[k];
    }
  }
  return ret;
}

/**
 * Flatten nested objects
 * taken from https://www.npmjs.com/package/flat
 * @param {Object} obj
 * @return {Object} obj
 * @api public
 */

function flatten(target, opts) {
  opts = opts || {};

  var delimiter = opts.delimiter || '.';
  var maxDepth = opts.maxDepth;
  var currentDepth = 1;
  var output = {};

//   for (var key in p) {
//   if (p.hasOwnProperty(key)) {
//     alert(key + " -> " + p[key]);
//   }
// }


  function step(object, prev) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        var value = object[key];
        var isarray = opts.safe && is.array(value);
        var type = Object.prototype.toString.call(value);
        var isobject = type === '[object Object]' || type === '[object Array]';
        var arr = [];

        var newKey = prev
          ? prev + delimiter + key
          : key;

        if (!opts.maxDepth) {
          maxDepth = currentDepth + 1;
        }

        for (var keys in value) {
          if (value.hasOwnProperty(keys)) {
            arr.push(keys);
          }
        }

        if (!isarray && isobject && arr.length && currentDepth < maxDepth) {
          ++currentDepth;
          return step(value, newKey);
        }

        output[newKey] = value;
      }
    }
  }

  step(target);

  return output;
}

},{"@ndhoule/extend":10,"@segment/analytics.js-integration":295,"component-each":611,"global-queue":625,"is":629,"obj-case":641}],295:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":296,"./statics":297,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],296:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":298,"component-emitter":299,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":300}],297:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":299,"domify":624,"dup":39}],298:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],299:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],300:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],301:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_learnq');
var tick = require('next-tick');
var Track = require('segmentio-facade').Track;
var foldl = require('@ndhoule/foldl');
var remove = require('obj-case').del;
var extend = require('@ndhoule/extend');

/**
 * Trait aliases.
 */

var traitAliases = {
  id: '$id',
  email: '$email',
  firstName: '$first_name',
  lastName: '$last_name',
  phone: '$phone_number',
  title: '$title'
};

/**
 * Expose `Klaviyo` integration.
 */

var Klaviyo = module.exports = integration('Klaviyo')
  .assumesPageview()
  .global('_learnq')
  .option('apiKey', '')
  .tag('<script src="//a.klaviyo.com/media/js/analytics/analytics.js">');

/**
 * Initialize.
 *
 * https://www.klaviyo.com/docs/getting-started
 *
 * @api public
 */

Klaviyo.prototype.initialize = function() {
  var self = this;
  push('account', this.options.apiKey);
  this.load(function() {
    tick(self.ready);
  });
};

/**
 * Loaded?
 *
 * @api public
 * @return {Boolean}
 */

Klaviyo.prototype.loaded = function() {
  return !!(window._learnq && window._learnq.push !== Array.prototype.push);
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Klaviyo.prototype.identify = function(identify) {
  // TODO: should map/alias the rest of the reserved props
  var traits = identify.traits(traitAliases);
  if (!traits.$id && !traits.$email) return;
  push('identify', traits);
};

/**
 * Group.
 *
 * @param {Group} group
 */

Klaviyo.prototype.group = function(group) {
  var props = group.properties();
  if (!props.name) return;
  push('identify', { $organization: props.name });
};

/**
 * Track.
 *
 * @param {Track} track
 */

Klaviyo.prototype.track = function(track) {
  push('track', track.event(), track.properties({
    revenue: '$value'
  }));
};

/**
 * Completed Order
 *
 * http://learn.klaviyo.com/12887-Ecommerce:-Other-Integrations/product-activity-integrating-a-custom-ecommerce-cart-or-platform
 * @param {Track} track
 */

Klaviyo.prototype.orderCompleted = function(track) {
  var products = formatProducts(track.products());
  // Their docs for client side tells users to send these properties slightly
  // different than server side, although they don't have to be.
  var payload = {
    $event_id: track.orderId(),
    $value: track.revenue(),
    Categories: products.categories,
    ItemNames: products.names,
    Items: products.items
  };

  var whitelist = [
    '$event_id',
    '$value',
    'orderId',
    'order_id',
    'categories',
    'itemNames',
    'items',
    'revenue',
    'total',
    'products'
  ];
  // strip standard props and leave custom props only
  var topLevelCustomProps = filter(track, whitelist);

  payload = extend(payload, topLevelCustomProps);

  push('track', track.event(), payload);

  // Formulate payload per product to send
  var productProperties = formatItems(track);

  // Send a separate event for each product
  for (var x = 0; x < productProperties.length; x++) {
    push('track', 'Ordered Product', productProperties[x]);
  }
};


/**
 * Return only custom properties
 *
 * @param {Object, Array} facade, list
 * @return {Object}
 * @api private
 */

function filter(facade, list) {
  var ret = facade.properties();
  for (var x = 0; x < list.length; x++) {
    remove(ret, list[x]);
  }
  return ret;
}

/**
 * Format payload for each product.
 *
 * @param {Track} track
 * @return {Array}
 * @api private
 */

function formatItems(track) {
  return foldl(function(payloads, props) {
    var product = new Track({ properties: props });
    var itemWhitelist = [
      '$event_id',
      '$value',
      'name',
      'product categories',
      'category',
      'id',
      'productId',
      'product_id',
      'sku',
      'quantity',
      'price',
      'productUrl',
      'imageUrl'
    ];

    // filter standard item props so we can merge custom props later
    var itemCustomProps = filter(product, itemWhitelist);

    var item = reject({
      $value: product.price(),
      Name: product.name(),
      Quantity: product.quantity(),
      ProductCategories: [product.category()],
      ProductURL: product.proxy('properties.productUrl'),
      ImageURL: product.proxy('properties.imageUrl'),
      SKU: product.sku()
    });

    // ensure unique $event_id is associated with each Ordered Product event by combining Order Completed
    //  order_id and product's productId or SKU
    var identifier = product.productId() || product.id() || product.sku();
    item.$event_id = track.orderId() + '_' + identifier;

    item = extend(item, itemCustomProps);
    payloads.push(item);

    return payloads;
  }, [], track.products());
}

/**
 * Format products array.
 *
 * @param {Array} track
 * @return {Array}
 * @api private
 */

function formatProducts(products) {
  return foldl(function(payloads, props) {
    var product = new Track({ properties: props });
    var whitelist = [
      'id',
      'product_id',
      'productId',
      'sku',
      'name',
      'quantity',
      'itemPrice',
      'price',
      'rowTotal',
      'categories',
      'category',
      'productUrl',
      'imageUrl'
    ];
    // filter standard traits to merge custom props later
    var customProps = filter(product, whitelist);

    var item = reject({
      id: product.productId() || product.id(),
      SKU: product.sku(),
      Name: product.name(),
      Quantity: product.quantity(),
      ItemPrice: product.price(),
      RowTotal: product.price(),
      Categories: [product.category()],
      ProductURL: product.proxy('properties.productUrl'),
      ImageURL: product.proxy('properties.imageUrl')
    });
    item = extend(item, customProps);
    payloads.items.push(item);
    payloads.categories.push(product.category());
    payloads.names.push(product.name());

    return payloads;
  }, { categories: [], names: [], items: [] }, products);
}

/**
 * Return a copy of an object, less an  `undefined` values.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function reject(obj) {
  return foldl(function(result, val, key) {
    if (val !== undefined) {
      result[key] = val;
    }
    return result;
  }, {}, obj);
}

},{"@ndhoule/extend":10,"@ndhoule/foldl":11,"@segment/analytics.js-integration":586,"global-queue":625,"next-tick":640,"obj-case":641,"segmentio-facade":655}],302:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Identify = require('segmentio-facade').Identify;
var clone = require('component-clone');
var each = require('component-each');
var integration = require('@segment/analytics.js-integration');
var tick = require('next-tick');
var when = require('do-when');

/**
 * Expose `LiveChat` integration.
 */

var LiveChat = module.exports = integration('LiveChat')
  .assumesPageview()
  .global('LC_API')
  .global('LC_Invite')
  .global('__lc')
  .global('__lc_inited')
  .global('__lc_lang')
  .option('group', 0)
  .option('license', '')
  .option('listen', false)
  .tag('<script src="//cdn.livechatinc.com/tracking.js">');

/**
 * The context for this integration.
 */

var integrationContext = {
  name: 'livechat',
  version: '1.0.0'
};

/**
 * Initialize.
 *
 * http://www.livechatinc.com/api/javascript-api
 *
 * @api public
 */

LiveChat.prototype.initialize = function() {
  var self = this;
  var user = this.analytics.user();
  var identify = new Identify({
    userId: user.id(),
    traits: user.traits()
  });

  window.__lc = clone(this.options);
  window.__lc.visitor = {
    name: identify.name(),
    email: identify.email()
  };
  // listen is not an option we need from clone
  delete window.__lc.listen;

  this.load(function() {
    when(function() {
      return self.loaded();
    }, function() {
      if (self.options.listen) self.attachListeners();
      tick(self.ready);
    });
  });
};

/**
 * Loaded?
 *
 * @api public
 * @return {boolean}
 */

LiveChat.prototype.loaded = function() {
  return !!(window.LC_API && window.LC_Invite);
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

LiveChat.prototype.identify = function(identify) {
  var traits = identify.traits({ userId: 'User ID' });
  window.LC_API.set_custom_variables(convert(traits));
};

/**
 * Listen for chat events.
 *
 * @api private
 */

LiveChat.prototype.attachListeners = function() {
  var self = this;
  window.LC_API = window.LC_API || {};

  window.LC_API.on_chat_started = function(data) {
    self.analytics.track(
      'Live Chat Conversation Started',
      { agentName: data.agent_name },
      { context: { integration: integrationContext }
    });
  };

  window.LC_API.on_message = function(data) {
    if (data.user_type === 'visitor') {
      self.analytics.track(
        'Live Chat Message Sent',
        {},
        { context: { integration: integrationContext }
      });
    } else {
      self.analytics.track(
        'Live Chat Message Received',
        { agentName: data.agent_name, agentUsername: data.agent_login },
        { context: { integration: integrationContext }
      });
    }
  };

  window.LC_API.on_chat_ended = function() {
    self.analytics.track('Live Chat Conversation Ended');
  };
};

/**
 * Convert a traits object into the format LiveChat requires.
 *
 * @param {Object} traits
 * @return {Array}
 */

function convert(traits) {
  var arr = [];
  each(traits, function(key, value) {
    arr.push({ name: key, value: value });
  });
  return arr;
}

},{"@segment/analytics.js-integration":303,"component-clone":609,"component-each":611,"do-when":623,"next-tick":640,"segmentio-facade":655}],303:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":304,"./statics":305,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],304:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":306,"component-emitter":307,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":308}],305:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":307,"domify":624,"dup":39}],306:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],307:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],308:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],309:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Identify = require('segmentio-facade').Identify;
var integration = require('@segment/analytics.js-integration');
var useHttps = require('use-https');

/**
 * Expose `LuckyOrange` integration.
 */

var LuckyOrange = module.exports = integration('Lucky Orange')
  .assumesPageview()
  .global('_loq')
  .global('__lo_cs_added')
  .global('__wtw_lucky_site_id')
  .global('__wtw_lucky_is_segment_io')
  .global('__wtw_custom_user_data')
  .option('siteId', null)
  .tag('http', '<script src="http://www.luckyorange.com/w.js?{{ cacheBuster }}">')
  .tag('https', '<script src="https://ssl.luckyorange.com/w.js?{{ cacheBuster }}">');

/**
 * Initialize.
 *
 * @api public
 */

LuckyOrange.prototype.initialize = function() {
  if (!window._loq) window._loq = [];
  window.__wtw_lucky_site_id = this.options.siteId;

  var user = this.analytics.user();
  this.identify(new Identify({
    traits: user.traits(),
    userId: user.id()
  }));

  var cacheBuster = Math.floor(new Date().getTime() / 60000);
  var tagName = useHttps() ? 'https' : 'http';
  this.load(tagName, { cacheBuster: cacheBuster }, this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

LuckyOrange.prototype.loaded = function() {
  return !!window.__lo_cs_added;
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

LuckyOrange.prototype.identify = function(identify) {
  var traits = identify.traits();
  var email = identify.email();
  if (email) traits.email = email;
  var name = identify.name();
  if (name) traits.name = name;
  window.__wtw_custom_user_data = traits;
};

},{"@segment/analytics.js-integration":586,"segmentio-facade":655,"use-https":672}],310:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var alias = require('@segment/alias');
var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Lytics` integration.
 */

var Lytics = module.exports = integration('Lytics')
  .global('jstag')
  .option('cid', '')
  .option('stream', 'default')
  .option('cookie', 'seerid')
  .option('delay', 2000)
  .option('sessionTimeout', 1800)
  .option('url', '//c.lytics.io')
  .tag('<script src="https://c.lytics.io/api/tag/{{ cid }}/lio.js">');

/**
 * Options aliases.
 */

var aliases = {
  sessionTimeout: 'sessecs'
};

/**
 * Initialize.
 *
 * http://admin.lytics.io/doc#jstag
 *
 * @api public
 */

Lytics.prototype.initialize = function() {
  var options = alias(this.options, aliases);
  /* eslint-disable */
  window.jstag = function() {var t = {_q: [], _c: options, ts: (new Date).getTime() }, e = !1, i = (window, document), n = "/static/io", s = ".min.js", r = Array.prototype.slice, a = "//c.lytics.io", c = "//c.lytics.io", o = "io"; return t.init = function(e) {return c = e.url || c, s = e.min === !1 ? ".js" : s, o = e.tag || o, t._c = e, this }, t.load = function() {var t, r = i.getElementsByTagName("script")[0]; return e = !0, i.getElementById(n) ? this : (t = i.createElement("script"), n = a + "/static/" + o + s, t.id = n, t.src = n, r.parentNode.insertBefore(t, r), this) }, t.bind = function(t) {e || this.load(), this._q.push([t, r.call(arguments, 1)]) }, t.ready = function() {e || this.load(), this._q.push(["ready", r.call(arguments)]) }, t.send = function() {return e || this.load(), this._q.push(["ready", "send", r.call(arguments)]), this }, t }();
  /* eslint-enable */
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Lytics.prototype.loaded = function() {
  return !!(window.jstag && window.jstag.bind);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Lytics.prototype.page = function(page) {
  window.jstag.send(this.options.stream, page.properties({
    name: '_e'
  }));
};

/**
 * Idenfity.
 *
 * @api public
 * @param {Identify} identify
 */

Lytics.prototype.identify = function(identify) {
  window.jstag.send(this.options.stream, identify.traits({
    id: 'user_id'
  }));
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Lytics.prototype.track = function(track) {
  var props = track.properties();
  props._e = track.event();
  window.jstag.send(this.options.stream, props);
};

},{"@segment/alias":19,"@segment/analytics.js-integration":311}],311:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":312,"./statics":313,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],312:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":314,"component-emitter":315,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":316}],313:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":315,"domify":624,"dup":39}],314:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],315:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],316:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],317:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * UMD?
 */

var umd = typeof window.define === 'function' && window.define.amd;

/**
 * Expose `Madkudu` integration.
 */

var MadKudu = module.exports = integration('Madkudu')
  .global('madkudu')
  .option('apiKey', '')
  .readyOnLoad()
  .tag('<script src="//cdn.madkudu.com/madkudu.js/v1/{{ apiKey }}/madkudu.min.js">');

/**
 * Initialize.
 *
 * https://github.com/MadKudu/madkudu.js
 *
 * @api public
 */

MadKudu.prototype.initialize = function() {
  /* eslint-disable */
  !function(){var madkudu=window.madkudu=window.madkudu||[];if(!madkudu.initialize)if(madkudu.invoked)window.console&&console.error&&console.error("MadKudu snippet included twice.");else{madkudu.invoked=!0;madkudu.methods=["identify","reset","group","ready","page","track","once","on"];;madkudu.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);madkudu.push(e);return madkudu}};for(var t=0;t<madkudu.methods.length;t++){var e=madkudu.methods[t];madkudu[e]=madkudu.factory(e)}
    madkudu.SNIPPET_VERSION="0.3.0";
  }}();
  /* eslint-enable */

  var self = this;

  if (umd) {
    window.require(['//cdn.madkudu.com/madkudu.js/v1/' + self.options.apiKey + '/madkudu.min.js'], function(madkudu) {
      window.madkudu = madkudu;
      self.ready();
    });
    return;
  }

  this.load({ apiKey: this.options.apiKey }, function() {
    self.ready();
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

MadKudu.prototype.loaded = function() {
  return !!(window.madkudu && window.madkudu.options);
};

/**
 * {Page}.
 *
 * @api public
 * @param {Facade} page
 */

MadKudu.prototype.page = function() {
  window.madkudu.page();
};

/**
 * Identify.
 *
 * @api public
 * @param {Facade} identify
 */

MadKudu.prototype.identify = function(identify) {
  var id = identify.userId();
  var traits = identify.traits();
  if (id) {
    window.madkudu.identify(id, traits);
  } else {
    window.madkudu.identify(traits);
  }
};

},{"@segment/analytics.js-integration":318}],318:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":319,"./statics":320,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],319:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":321,"component-emitter":322,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":323}],320:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":322,"domify":624,"dup":39}],321:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],322:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],323:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],324:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var alias = require('@segment/alias');
var dates = require('@segment/convert-dates');
var del = require('obj-case').del;
var includes = require('@ndhoule/includes');
var integration = require('@segment/analytics.js-integration');
var iso = require('@segment/to-iso-string');
var pick = require('@ndhoule/pick');
var is = require('is');
var indexOf = require('component-indexof');

/**
 * Expose `Mixpanel` integration.
 */

var Mixpanel = module.exports = integration('Mixpanel')
  .global('mixpanel')
  .option('increments', [])
  .option('peopleProperties', [])
  .option('superProperties', [])
  .option('cookieName', '')
  .option('crossSubdomainCookie', false)
  .option('secureCookie', false)
  .option('persistence', 'cookie')
  .option('nameTag', true)
  .option('pageview', false)
  .option('people', false)
  .option('token', '')
  .option('setAllTraitsByDefault', true)
  .option('consolidatedPageCalls', true)
  .option('trackAllPages', false)
  .option('trackNamedPages', false)
  .option('trackCategorizedPages', false)
  .tag('<script src="//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js">');

/**
 * Options aliases.
 */

var optionsAliases = {
  cookieName: 'cookie_name',
  crossSubdomainCookie: 'cross_subdomain_cookie',
  secureCookie: 'secure_cookie'
};

/**
 * Initialize.
 *
 * https://mixpanel.com/help/reference/javascript#installing
 * https://mixpanel.com/help/reference/javascript-full-api-reference#mixpanel.init
 *
 * @api public
 */

Mixpanel.prototype.initialize = function() {
  /* eslint-disable */
  (function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,
0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;}})(document,window.mixpanel||[]);
  /* eslint-enable */
  this.options.increments = lowercase(this.options.increments);
  var options = alias(this.options, optionsAliases);
  // tag ajs requests with Segment by request from Mixpanel team for better mutual debugging
  options.loaded = function(mixpanel) {
    mixpanel.register({ mp_lib: 'Segment: web' });
  };
  window.mixpanel.init(options.token, options);
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Mixpanel.prototype.loaded = function() {
  return !!(window.mixpanel && window.mixpanel.config);
};

/**
 * Page.
 *
 * https://mixpanel.com/help/reference/javascript-full-api-reference#mixpanel.track_pageview
 *
 * @api public
 * @param {Page} page
 */

Mixpanel.prototype.page = function(page) {
  var category = page.category();
  var name = page.name();
  var opts = this.options;

  // consolidated Page Calls
  if (opts.consolidatedPageCalls) {
    this.track(page.track());
    return;
  }

  // all pages
  if (opts.trackAllPages) {
    this.track(page.track());
    return;
  }

  // categorized pages
  if (opts.trackCategorizedPages && category) {
    // If this option is checked and name was also passed, used the full name which includes both category & name
    if (name) {
      this.track(page.track(page.fullName()));
      return;
    }
    this.track(page.track(category));
    return;
  }

  // named pages
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }
};

/**
 * Trait aliases.
 */

var traitAliases = {
  created: '$created',
  email: '$email',
  firstName: '$first_name',
  lastName: '$last_name',
  lastSeen: '$last_seen',
  name: '$name',
  username: '$username',
  phone: '$phone'
};

/**
 * Identify.
 *
 * https://mixpanel.com/help/reference/javascript#super-properties
 * https://mixpanel.com/help/reference/javascript#user-identity
 * https://mixpanel.com/help/reference/javascript#storing-user-profiles
 *
 * @api public
 * @param {Identify} identify
 */

Mixpanel.prototype.identify = function(identify) {
  var username = identify.username();
  var email = identify.email();
  var id = identify.userId();
  var setAllTraitsByDefault = this.options.setAllTraitsByDefault;
  var people = this.options.people;
  var peopleProperties = extendTraits(this.options.peopleProperties);
  var superProperties = this.options.superProperties;

  // id
  if (id) window.mixpanel.identify(id);

  // name tag
  var nametag = email || username || id;
  if (nametag) window.mixpanel.name_tag(nametag);

  // default set all traits as super and people properties
  var traits = identify.traits(traitAliases);
  if (traits.$created) del(traits, 'createdAt');
  if (setAllTraitsByDefault) {
    window.mixpanel.register(dates(traits, iso));
    if (this.options.people) window.mixpanel.people.set(traits);
  }

  // explicitly set select traits as people and super properties
  var mappedSuperProps = mapTraits(superProperties);
  var superProps = pick(mappedSuperProps || [], traits);
  if (!is.empty(superProps)) window.mixpanel.register(superProps);
  if (people) {
    var mappedPeopleProps = mapTraits(peopleProperties);
    var peopleProps = pick(mappedPeopleProps || [], traits);
    if (!is.empty(peopleProps)) window.mixpanel.people.set(peopleProps);
  }
};

/**
 * Track.
 *
 * https://mixpanel.com/help/reference/javascript#sending-events
 * https://mixpanel.com/help/reference/javascript#tracking-revenue
 *
 * @api public
 * @param {Track} track
 */

Mixpanel.prototype.track = function(track) {
  var increments = this.options.increments;
  var increment = track.event().toLowerCase();
  var people = this.options.people;
  var props = track.properties();
  var revenue = track.revenue();
  // Don't map traits, clients should use identify instead.
  var superProps = pick(this.options.superProperties, props);

  // delete mixpanel's reserved properties, so they don't conflict
  delete props.distinct_id;
  delete props.ip;
  delete props.mp_name_tag;
  delete props.mp_note;
  delete props.token;

  // increment properties in mixpanel people
  if (people && includes(increment, increments)) {
    window.mixpanel.people.increment(track.event());
    window.mixpanel.people.set('Last ' + track.event(), new Date());
  }

  // track the event
  props = dates(props, iso);
  window.mixpanel.track(track.event(), props);

  // register super properties if present in context.mixpanel.superProperties
  if (!is.empty(superProps)) {
    window.mixpanel.register(superProps);
  }

  // track revenue specifically
  if (revenue && people) {
    window.mixpanel.people.track_charge(revenue);
  }
};

/**
 * Alias.
 *
 * https://mixpanel.com/help/reference/javascript#user-identity
 * https://mixpanel.com/help/reference/javascript-full-api-reference#mixpanel.alias
 *
 * @api public
 * @param {Alias} alias
 */

Mixpanel.prototype.alias = function(alias) {
  var mp = window.mixpanel;
  var to = alias.to();
  if (mp.get_distinct_id && mp.get_distinct_id() === to) return;
  // HACK: internal mixpanel API to ensure we don't overwrite
  if (mp.get_property && mp.get_property('$people_distinct_id') === to) return;
  // although undocumented, mixpanel takes an optional original id
  mp.alias(to, alias.from());
};

/**
 * Lowercase the given `arr`.
 *
 * @api private
 * @param {Array} arr
 * @return {Array}
 */

function lowercase(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < arr.length; ++i) {
    ret[i] = String(arr[i]).toLowerCase();
  }

  return ret;
}

/**
 * Map Special traits in the given `arr`.
 * From the TraitAliases for Mixpanel's special props
 *
 * @api private
 * @param {Array} arr
 * @return {Array}
 */

function mapTraits(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < arr.length; ++i) {
    if (traitAliases.hasOwnProperty(arr[i])) {
      ret.push(traitAliases[arr[i]]);
    } else {
      ret.push(arr[i]);
    }
  }

  return ret;
}

/**
 * extend Mixpanel's special trait keys in the given `arr`.
 *
 * @api private
 * @param {Array} arr
 * @return {Array}
 */

function extendTraits(arr) {
  var keys = [];

  for (var key in traitAliases) {
    if (traitAliases.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  for (var i = 0; i < keys.length; ++i) {
    if (indexOf(arr, keys[i]) < 0) {
      arr.push(keys[i]);
    }
  }

  return arr;
}

},{"@ndhoule/includes":12,"@ndhoule/pick":15,"@segment/alias":19,"@segment/analytics.js-integration":325,"@segment/convert-dates":593,"@segment/to-iso-string":603,"component-indexof":614,"is":629,"obj-case":641}],325:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":326,"./statics":327,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],326:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":328,"component-emitter":329,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":330}],327:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":329,"domify":624,"dup":39}],328:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],329:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],330:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],331:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var bind = require('component-bind');
var integration = require('@segment/analytics.js-integration');
var is = require('is');
var when = require('do-when');

/**
 * Expose `Mojn`
 */

var Mojn = module.exports = integration('Mojn')
  .global('_mojnTrack')
  .option('customerCode', '')
  .option('region', 'eu')
  .option('sync', false)
  .tag('main', '<script src="https://cdn.idtargeting.com/track/{{region}}.js">')
  .tag('custom', '<script src="https://cdn.idtargeting.com/track/{{customerCode}}.js">')
  .tag('identify', '<img width="1" height="1" src="https://matcher.idtargeting.com/identify.gif?cid={{cid}}&_mjnctid={{mjnctid}}">')
  .tag('sync', '<img width="1" height="1" src="http://ho.idtargeting.com/c/{{cid}}?u={{uid}}&_chk">');

/**
 * Initialize.
 *
 * @api public
 * @param {Object} page
 */

Mojn.prototype.initialize = function() {
  window._mojnTrack = window._mojnTrack || [];
  window._mojnTrack.push({ cid: this.options.customerCode });
  var loaded = bind(this, this.loaded);
  var ready = this.ready;
  var self = this;
  this.load('main', function() {
    self.load('custom', function() {
      when(loaded, ready);
    });
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Mojn.prototype.loaded = function() {
  return is.object(window._mojnTrack);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 * @return {Element|undefined}
 */

Mojn.prototype.identify = function(identify) {
  var email = identify.email();
  if (!email) return;

  this.load('identify', { cid: this.options.customerCode, mjnctid: email });
};

/**
 * Track.
 *
 * @api public
 * @param {Track} event
 * @return {string}
 */

Mojn.prototype.track = function(track) {
  var properties = track.properties();
  var revenue = properties.revenue;
  if (!revenue) return;
  var currency = properties.currency || '';
  var conv = currency + revenue;
  window._mojnTrack.push({ conv: conv });
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Mojn.prototype.page = function() {
  if (!this.options.sync) return;
  this.load('sync', { cid: this.options.customerCode, uid: this.analytics.user().anonymousId() });
};

},{"@segment/analytics.js-integration":332,"component-bind":608,"do-when":623,"is":629}],332:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":333,"./statics":334,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],333:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":335,"component-emitter":336,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":337}],334:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":336,"domify":624,"dup":39}],335:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],336:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],337:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],338:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('component-each');
var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_mfq');

/**
 * Expose `Mouseflow`.
 */

var Mouseflow = module.exports = integration('Mouseflow')
  .assumesPageview()
  .global('_mfq')
  .global('mouseflow')
  .global('mouseflowHtmlDelay')
  .option('apiKey', '')
  .option('mouseflowHtmlDelay', 0)
  .tag('<script src="//cdn.mouseflow.com/projects/{{ apiKey }}.js">');

/**
 * Initalize.
 *
 * @api public
 */

Mouseflow.prototype.initialize = function() {
  window.mouseflowHtmlDelay = this.options.mouseflowHtmlDelay;
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Mouseflow.prototype.loaded = function() {
  return !!window.mouseflow;
};

/**
 * Page.
 *
 * http://mouseflow.zendesk.com/entries/22528817-Single-page-websites
 *
 * @api public
 * @param {Page} page
 */

Mouseflow.prototype.page = function() {
  if (!window.mouseflow) return;
  if (typeof window.mouseflow.newPageView !== 'function') return;
  window.mouseflow.newPageView();
};

/**
 * Identify.
 *
 * http://mouseflow.zendesk.com/entries/24643603-Custom-Variables-Tagging
 *
 * @api public
 * @param {Identify} identify
 */

Mouseflow.prototype.identify = function(identify) {
  set(identify.traits());
};

/**
 * Track.
 *
 * http://mouseflow.zendesk.com/entries/24643603-Custom-Variables-Tagging
 *
 * @api public
 * @param {Track} track
 */

Mouseflow.prototype.track = function(track) {
  var props = track.properties();
  props.event = track.event();
  set(props);
};

/**
 * Push each key and value in the given `obj` onto the queue.
 *
 * @api private
 * @param {Object} obj
 */

function set(obj) {
  each(obj, function(key, value) {
    push('setVariable', key, value);
  });
}

},{"@segment/analytics.js-integration":339,"component-each":611,"global-queue":625}],339:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":340,"./statics":341,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],340:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":342,"component-emitter":343,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":344}],341:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":343,"domify":624,"dup":39}],342:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],343:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],344:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],345:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('component-each');
var integration = require('@segment/analytics.js-integration');
var is = require('is');
var useHttps = require('use-https');

/**
 * Expose `MouseStats` integration.
 */

var MouseStats = module.exports = integration('MouseStats')
  .assumesPageview()
  .global('msaa')
  .global('MouseStatsVisitorPlaybacks')
  .option('accountNumber', '')
  .tag('http', '<script src="http://www2.mousestats.com/js/{{ path }}.js?{{ cacheBuster }}">')
  .tag('https', '<script src="https://ssl.mousestats.com/js/{{ path }}.js?{{ cacheBuster }}">');

/**
 * Initialize.
 *
 * http://www.mousestats.com/docs/pages/allpages
 *
 * @api public
 */

MouseStats.prototype.initialize = function() {
  var accountNumber = this.options.accountNumber;
  var path = accountNumber.slice(0, 1) + '/' + accountNumber.slice(1, 2) + '/' + accountNumber;
  var cacheBuster = Math.floor(new Date().getTime() / 60000);
  var tagName = useHttps() ? 'https' : 'http';
  this.load(tagName, { path: path, cacheBuster: cacheBuster }, this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

MouseStats.prototype.loaded = function() {
  return is.array(window.MouseStatsVisitorPlaybacks);
};

/**
 * Identify.
 *
 * http://www.mousestats.com/docs/wiki/7/how-to-add-custom-data-to-visitor-playbacks
 *
 * @api public
 * @param {Identify} identify
 */

MouseStats.prototype.identify = function(identify) {
  each(identify.traits(), function(key, value) {
    window.MouseStatsVisitorPlaybacks.customVariable(key, value);
  });
};

},{"@segment/analytics.js-integration":346,"component-each":611,"is":629,"use-https":672}],346:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":347,"./statics":348,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],347:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":349,"component-emitter":350,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":351}],348:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":350,"domify":624,"dup":39}],349:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],350:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],351:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],352:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('__nls');

/**
 * Expose `Navilytics` integration.
 */

var Navilytics = module.exports = integration('Navilytics')
  .assumesPageview()
  .global('__nls')
  .option('memberId', '')
  .option('projectId', '')
  .tag('<script src="//www.navilytics.com/nls.js?mid={{ memberId }}&pid={{ projectId }}">');

/**
 * Initialize.
 *
 * https://www.navilytics.com/member/code_settings
 *
 * @api public
 */

Navilytics.prototype.initialize = function() {
  window.__nls = window.__nls || [];
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Navilytics.prototype.loaded = function() {
  return !!(window.__nls && Array.prototype.push !== window.__nls.push);
};

/**
 * Track.
 *
 * https://www.navilytics.com/docs#tags
 *
 * @param {Track} track
 */

Navilytics.prototype.track = function(track) {
  push('tagRecording', track.event());
};

},{"@segment/analytics.js-integration":353,"global-queue":625}],353:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":354,"./statics":355,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],354:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":356,"component-emitter":357,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":358}],355:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":357,"domify":624,"dup":39}],356:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],357:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],358:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],359:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var alias = require('@segment/alias');
var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Nudgespot` integration.
 */

var Nudgespot = module.exports = integration('Nudgespot')
  .assumesPageview()
  .global('nudgespot')
  .option('clientApiKey', '')
  .tag('<script id="nudgespot" src="//cdn.nudgespot.com/nudgespot.js">');

/**
 * Initialize Nudgespot.
 *
 * @api public
 */

Nudgespot.prototype.initialize = function() {
  window.nudgespot = window.nudgespot || [];

  // XXX(ndhoule): This script has been modified to:
  //   1) Remove the Nudgespot snippet's script loading logic
  //   2) Fix a global variable leak
  /* eslint-disable */
  !function(e){e.init=function(p){function t(e,p){var t=p.split(".");2==t.length&&(e=e[t[0]],p=t[1]),e[p]=function(){e.push([p].concat(Array.prototype.slice.call(arguments,0)))}}e._version=.1,e._globals=[p],e.people=e.people||[],e.params=e.params||[];for(var o="track register unregister identify set_config people.delete people.create people.update people.create_property people.tag people.remove_Tag".split(" "),r=0;r<o.length;r++)t(e,o[r])}}(window.nudgespot);
  /* eslint-enable */

  window.nudgespot.init(this.options.clientApiKey);
  this.load(this.ready);
};

/**
 * Has the Nudgespot library been loaded yet?
 *
 * @api private
 * @return {boolean}
 */

Nudgespot.prototype.loaded = function() {
  return !!(window.nudgespot && window.nudgespot.push !== Array.prototype.push);
};

/**
 * Identify a user.
 *
 * @api public
 * @param {Identify} identify
 */

Nudgespot.prototype.identify = function(identify) {
  if (!identify.userId()) return this.debug('user id required');
  var traits = identify.traits({ createdAt: 'created' });
  traits = alias(traits, { created: 'created_at' });
  window.nudgespot.identify(identify.userId(), traits);
};

/**
 * Track an event.
 *
 * @api public
 * @param {Track} track
 */

Nudgespot.prototype.track = function(track) {
  window.nudgespot.track(track.event(), track.properties());
};

},{"@segment/alias":19,"@segment/analytics.js-integration":360}],360:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":361,"./statics":362,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],361:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":363,"component-emitter":364,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":365}],362:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":364,"domify":624,"dup":39}],363:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],364:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],365:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],366:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var https = require('use-https');
var integration = require('@segment/analytics.js-integration');
var tick = require('next-tick');

/**
 * Expose `Olark` integration.
 */

var Olark = module.exports = integration('Olark')
  .assumesPageview()
  .global('olark')
  .option('groupId', '')
  .option('identify', true)
  .option('listen', false)
  .option('page', true)
  .option('siteId', '')
  .option('track', false)
  .option('inline', false);

/**
 * The context for this integration.
 */

var integrationContext = {
  name: 'olark',
  version: '1.0.0'
};

/**
 * Initialize.
 *
 * http://www.olark.com/documentation
 * https://www.olark.com/documentation/javascript/api.chat.setOperatorGroup
 *
 * @api public
 */

Olark.prototype.initialize = function() {
  var self = this;
  this.load(function() {
    tick(self.ready);
  });

  // assign chat to a specific site
  var groupId = this.options.groupId;
  if (groupId) api('chat.setOperatorGroup', { group: groupId });

  // keep track of the widget's open state
  api('box.onExpand', function() { self._open = true; });
  api('box.onShrink', function() { self._open = false; });

  // record events
  if (this.options.listen) this.attachListeners();
};

/**
 * Load.
 *
 * @api private
 * @param {Function} callback
 */

Olark.prototype.load = function(callback) {
  /* eslint-disable */
  window.olark||(function(c){var f=window,d=document,l=https()?"https:":"http:",z=c.name,r="load";var nt=function(){f[z]=function(){(a.s=a.s||[]).push(arguments)};var a=f[z]._={},q=c.methods.length;while (q--) {(function(n){f[z][n]=function(){f[z]("call",n,arguments)}})(c.methods[q])}a.l=c.loader;a.i=nt;a.p={ 0:+new Date() };a.P=function(u){a.p[u]=new Date()-a.p[0]};function s(){a.P(r);f[z](r)}f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);var ld=function(){function p(hd){hd="head";return ["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")}var i="body",m=d[i];if (!m) {return setTimeout(ld,100)}a.P(1);var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;n.style.display="none";m.insertBefore(n,m.firstChild).id=z;b.frameBorder="0";b.id=z+"-loader";if (/MSIE[ ]+6/.test(navigator.userAgent)) {b.src="javascript:false"}b.allowTransparency="true";v[j](b);try {b.contentWindow[g].open()}catch (w) {c[e]=d[e];o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";b[k]=o+"void(0);"}try {var t=b.contentWindow[g];t.write(p());t.close()}catch (x) {b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};ld()};nt()})({ loader: "static.olark.com/jsclient/loader0.js", name:"olark", methods:["configure","extend","declare","identify"] });
  /* eslint-enable */

  // check if chat should be loaded as `inline chat`
  if (this.options.inline) configure('box.inline', true);

  window.olark.identify(this.options.siteId);
  callback();
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Olark.prototype.loaded = function() {
  return !!window.olark;
};

/**
 * Page.
 *
 * @param {Facade} page
 */

Olark.prototype.page = function(page) {
  if (!this.options.page) return;
  var props = page.properties();
  var name = page.fullName();
  if (!name && !props.url) return;

  name = name ? name + ' page' : props.url;
  this.notify('looking at ' + name);
};

/**
 * Identify.
 *
 * @param {Facade} identify
 */

Olark.prototype.identify = function(identify) {
  if (!this.options.identify) return;

  var username = identify.username();
  var traits = identify.traits();
  var id = identify.userId();
  var email = identify.email();
  var phone = identify.phone();
  var name = identify.name() || identify.firstName();

  if (traits) api('visitor.updateCustomFields', traits);
  if (email) api('visitor.updateEmailAddress', { emailAddress: email });
  if (phone) api('visitor.updatePhoneNumber', { phoneNumber: phone });
  if (name) api('visitor.updateFullName', { fullName: name });

  // figure out best nickname
  var nickname = name || email || username || id;
  if (name && email) nickname += ' (' + email + ')';
  if (nickname) api('chat.updateVisitorNickname', { snippet: nickname });
};

/**
 * Track.
 *
 * @api public
 * @param {Facade} track
 */

Olark.prototype.track = function(track) {
  if (!this.options.track) return;
  this.notify('visitor triggered "' + track.event() + '"');
};

/**
 * Listen for events.
 */

Olark.prototype.attachListeners = function() {
  var self = this;

  api('chat.onBeginConversation', function() {
    self.analytics.track(
      'Live Chat Conversation Started',
      {},
      {
        context: { integration: integrationContext },
        integrations: { Olark: false }
      }
    );
  });

  // Callback accepts `event`
  // TODO: We might eventually send information about the event through Segment
  api('chat.onMessageToOperator', function() {
    self.analytics.track(
      'Live Chat Message Sent',
      {},
      {
        context: { integration: integrationContext },
        integrations: { Olark: false }
      }
    );
  });

  // Callback accepts `event`
  // TODO: We might eventually send information about the event through Segment
  api('chat.onMessageToVisitor', function() {
    self.analytics.track(
      'Live Chat Message Received',
      {},
      {
        context: { integration: integrationContext },
        integrations: { Olark: false }
      }
    );
  });
};

/**
 * Send a notification `message` to the operator, only when a chat is active and
 * when the chat is open.
 *
 * @api private
 * @param {string} message
 */

Olark.prototype.notify = function(message) {
  if (!this._open) return;

  // lowercase since olark does
  message = message.toLowerCase();

  api('visitor.getDetails', function(data) {
    if (!data || !data.isConversing) return;
    api('chat.sendNotificationToOperator', { body: message });
  });
};

/**
 * Helper for Olark API calls.
 *
 * @api private
 * @param {string} action
 * @param {Object} value
 */

function api(action, value) {
  window.olark('api.' + action, value);
}

function configure(action, value) {
  window.olark.configure(action, value);
}

},{"@segment/analytics.js-integration":367,"next-tick":640,"use-https":672}],367:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":368,"./statics":369,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],368:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":370,"component-emitter":371,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":372}],369:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":371,"domify":624,"dup":39}],370:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],371:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],372:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],373:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var keys = require('@ndhoule/keys');
var values = require('@ndhoule/values');
var foldl = require('@ndhoule/foldl');
var each = require('@ndhoule/each');
var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('optimizely', { wrap: false });
var tick = require('next-tick');

/**
 * Expose `Optimizely` integration.
 */

var Optimizely = module.exports = integration('Optimizely')
  .option('trackCategorizedPages', true)
  .option('trackNamedPages', true)
  .option('variations', false) // send data via `.identify()`
  .option('listen', true) // send data via `.track()`
  .option('nonInteraction', false);

/**
 * The name and version for this integration.
 */

var optimizelyContext = {
  name: 'optimizely',
  version: '2.0.0'
};

/**
 * Initialize.
 *
 * https://www.optimizely.com/docs/api#function-calls
 * https://jsfiddle.net/ushmw723/ <- includes optimizely snippets for capturing campaign and experiment data
 *
 * @api public
 */

Optimizely.prototype.initialize = function() {
  var self = this;
  // Flag source of integration (requested by Optimizely)
  push({
    type: 'integration',
    OAuthClientId: '5360906403'
  });
  // Initialize listeners for both Classic and New Optimizely
  // crazying binding because that's just how javascript works
  // We're caling this on the next tick to be safe so we don't hold up
  // initializing the integration even though the function below is designed to be async,
  // just want to be extra safe
  tick(function() {
    Optimizely.initOptimizelyIntegration({
      referrerOverride: self.setEffectiveReferrer.bind(self),
      sendExperimentData: self.sendClassicDataToSegment.bind(self),
      sendCampaignData: self.sendNewDataToSegment.bind(self)
    });
  });

  this.ready();
};

/**
 * Track. The Optimizely Web trackEvent can only send one property, revenue
 *
 * https://www.optimizely.com/docs/api#track-event
 * http://developers.optimizely.com/javascript/reference/#api-function-calls
 *
 * If the Optimizely X Fullstack JavaScript SDK is being used we should pass along
 * the event to it. Any properties in the track object will be passed along as attributes.
 * If the userId is not passed into the properties object of the track call, we'll
 * attempt to use the userId of the track event, which is set using the analytics.identify call.
 *
 * https://developers.optimizely.com/x/solutions/sdks/reference/?language=javascript#tracking
 *
 * @api public
 * @param {Track} track
 */

Optimizely.prototype.track = function(track) {
  var payload = {};
  var revenue = track.revenue();
  if (revenue) payload.revenue = revenue *= 100;
  push(['trackEvent', track.event(), payload]);

  var optimizelyClientInstance = window.optimizelyClientInstance;
  if (optimizelyClientInstance && optimizelyClientInstance.track) {
    var attributes = track.properties();
    var optimizelyOptions = track.options('Optimizely');
    var userId = optimizelyOptions.userId || track.userId();
    if (userId) {
      optimizelyClientInstance.track(track.event(), userId, attributes, payload.revenue);
    }
  }
};

/**
 * Page.
 *
 * https://www.optimizely.com/docs/api#track-event
 *
 * @api public
 * @param {Page} page
 */

Optimizely.prototype.page = function(page) {
  var category = page.category();
  var name = page.fullName();
  var opts = this.options;

  // categorized pages
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }

  // named pages
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }
};

/**
 * sendClassicDataToSegment (Optimizely Classic)
 *
 * This function is executed for each experiment created in Classic Optimizely that is running on the page.
 * This function will also be executed for any experiments activated at a later stage since initOptimizelyIntegration
 * attached listeners on the page
 *
 * @api private
 * @param {Object} experimentState: contains all information regarding experiments
 * @param {Object} experimentState.experiment: the experiment running on the page
 * @param {String} experimentState.experiment.name: name of the experiment
 * @param {String} experimentState.experiment.id: ID of the experiment
 * @param {String} experimentState.experiment.referrer: available if effective referrer if experiment is a redirect
 * @param {Array} experimentState.variations: the variations the current user on page is seeing
 * @param {String} experimentState.variations[].name: the name of the variation
 * @param {String} experimentState.variations[].id: the ID of the variation
 * @param {Object} experimentState.sections: the sections for the experiment (only defined for multivariate experiments) keyed by sectionId
 * @param {String} experimentState.sections[sectionId].name: the name of section
 * @param {Array} experimentState.sections[sectionId].variation_ids: the IDs of the variations in the section
 *
 */

Optimizely.prototype.sendClassicDataToSegment = function(experimentState) {
  var experiment = experimentState.experiment;
  var variations = experimentState.variations;
  var sections = experimentState.sections;
  var context = { integration: optimizelyContext }; // backward compatibility

  // Reformatting this data structure into hash map so concatenating variation ids and names is easier later
  var variationsMap = foldl(function(results, variation) {
    results[variation.id] = variation.name;
    return results;
  }, {}, variations);

  // Sorting for consistency across browsers
  var variationIds = keys(variationsMap).sort();
  var variationNames = values(variationsMap).sort();

  // Send data via `.track()`
  if (this.options.listen) {
    var props = {
      experimentId: experiment.id,
      experimentName: experiment.name,
      variationId: variationIds.join(), // eg. '123' or '123,455'
      variationName: variationNames.join(', ') // eg. 'Variation X' or 'Variation 1, Variation 2'
    };

    // If this was a redirect experiment and the effective referrer is different from document.referrer,
    // this value is made available. So if a customer came in via google.com/ad -> tb12.com -> redirect experiment -> Belichickgoat.com
    // `experiment.referrer` would be google.com/ad here NOT `tb12.com`.
    if (experiment.referrer) {
      props.referrer = experiment.referrer;
      context.page = { referrer: experiment.referrer };
    }

    // When there is a multivariate experiment
    if (sections) {
      // Since `sections` include all the possible sections on the page, we need to find the names of the sections
      // if any of its variations were used. Experiments could display variations from multiple sections.
      // The global optimizely data object does not expose a mapping between which section(s) were involved within an experiment.
      // So we will build our own mapping to quickly get the section name(s) and id(s) for any displayed variation.
      var activeSections = {};
      var variationIdsToSectionsMap = foldl(function(results, section, sectionId) {
        each(function(variationId) {
          results[variationId] = { id: sectionId, name: section.name };
        }, section.variation_ids);
        return results;
      }, {}, sections);
      for (var j = 0; j < variationIds.length; j++) {
        var activeVariation = variationIds[j];
        var activeSection = variationIdsToSectionsMap[activeVariation];
        if (activeSection) activeSections[activeSection.id] = activeSection.name;
      }

      // Sorting for consistency across browsers
      props.sectionId = keys(activeSections).sort().join(); // Not adding space for backward compat/consistency reasons since all IDs we've never had spaces
      props.sectionName = values(activeSections).sort().join(', ');
    }

    // For Google's nonInteraction flag
    if (this.options.nonInteraction) props.nonInteraction = 1;

    // Send to Segment
    this.analytics.track('Experiment Viewed', props, context);
  }

  // Send data via `.identify()` (not recommended!)
  // TODO: deprecate this feature
  if (this.options.variations) {
    // Note: The only "breaking" behavior is that now there will be an `.identify()` call per active experiment
    // Legacy behavior was that we would look up all active experiments on the page after init and send one `.identify()` call
    // with all experiment/variation data as traits.
    // New behavior will call `.identify()` per active experiment with isolated experiment/variation data for that single experiment
    // However, since traits are cached, subsequent experiments that trigger `.identify()` calls will likely contain previous experiment data
    var traits = {};
    traits['Experiment: ' + experiment.name] = variationNames.join(', '); // eg. 'Variation X' or 'Variation 1, Variation 2'

    // Send to Segment
    this.analytics.identify(traits);
  }
};

/**
 * sendNewDataToSegment (Optimizely X)
 *
 * This function is called for each experiment created in New Optimizely that are running on the page.
 * New Optimizely added a dimension called "Campaigns" that encapsulate over the Experiments. So a campaign can have multiple experiments.
 * Multivariate experiments are no longer supported in New Optimizely.
 * This function will also be executed for any experiments activated at a later stage since initOptimizelyIntegration
 * attached listeners on the page
 *
 * @api private
 * @param {Object} campaignState: contains all information regarding experiments and campaign
 * @param {String} campaignState.id: the ID of the campaign
 * @param {String} campaignState.campaignName: the name of the campaign
 * @param {Array} campaignState.audiences: "Audiences" the visitor is considered part of related to this campaign
 * @param {String} campaignState.audiences[].id: the id of the Audience
 * @param {String} campaignState.audiences[].name: the name of the Audience
 * @param {Object} campaignState.experiment: the experiment the visitor is seeing
 * @param {String} campaignState.experiment.id: the id of the experiment
 * @param {String} campaignState.experiment.name: the name of the experiment
 * @param {String} campaignState.experiment.referrer: the effective referrer of the experiment (only defined for redirect)
 * @param {Object} campaignState.variation: the variation the visitor is seeing
 * @param {String} campaignState.variation.id: the id of the variation
 * @param {String} campaignState.variation.name: the name of the variation
 */

Optimizely.prototype.sendNewDataToSegment = function(campaignState) {
  var experiment = campaignState.experiment;
  var variation = campaignState.variation;
  var context = { integration: optimizelyContext }; // backward compatibility

  // Reformatting this data structure into hash map so concatenating variation ids and names is easier later
  var audiencesMap = foldl(function(results, audience) {
    results[audience.id] = audience.name;
    return results;
  }, {}, campaignState.audiences);

  // Sorting for consistency across browsers
  var audienceIds = keys(audiencesMap).sort().join(); // Not adding space for backward compat/consistency reasons since all IDs we've never had spaces
  var audienceNames = values(audiencesMap).sort().join(', ');

  // Send data via `.track()`
  if (this.options.listen) {
    var props = {
      campaignName: campaignState.campaignName,
      campaignId: campaignState.id,
      experimentId: experiment.id,
      experimentName: experiment.name,
      variationName: variation.name,
      variationId: variation.id,
      audienceId: audienceIds, // eg. '7527562222,7527111138'
      audienceName: audienceNames // eg. 'Peaky Blinders, Trust Tree'
    };

    // If this was a redirect experiment and the effective referrer is different from document.referrer,
    // this value is made available. So if a customer came in via google.com/ad -> tb12.com -> redirect experiment -> Belichickgoat.com
    // `experiment.referrer` would be google.com/ad here NOT `tb12.com`.
    if (experiment.referrer) {
      props.referrer = experiment.referrer;
      context.page = { referrer: experiment.referrer };
    }

    // For Google's nonInteraction flag
    if (this.options.nonInteraction) props.nonInteraction = 1;

    // Send to Segment
    this.analytics.track('Experiment Viewed', props, context);
  }

  // Send data via `.identify()` (not recommended!)
  // TODO: deprecate this feature
  if (this.options.variations) {
    // Legacy: We never sent any experiment Id or variation Id
    // Note: The only "breaking" behavior is that now there will be an `.identify()` per active experiment
    // Legacy behavior was that we would look up all active experiments on the page after init and send one `.identify()` call
    // with all experiment/variation data as traits.
    // New behavior will call `.identify()` per active experiment with isolated experiment/variation data for that single experiment
    var traits = {};
    traits['Experiment: ' + experiment.name] = variation.name;

    // Send to Segment
    this.analytics.identify(traits);
  }
};

/**
 * setEffectiveReferrer
 *
 * This function is called when a redirect experiment changed the effective referrer value where it is different from the `document.referrer`.
 * This is a documented caveat for any mutual customers that are using redirect experiments.
 * We will set this global variable that Segment customers can lookup and pass down in their initial `.page()` call inside
 * their Segment snippet.
 *
 * @apr private
 * @param {string} referrer
 */

Optimizely.prototype.setEffectiveReferrer = function(referrer) {
  if (referrer) return window.optimizelyEffectiveReferrer = referrer;
};

/**
 * initOptimizelyIntegration(handlers)
 *
 * This function was provided by Optimizely's Engineering team. The function below once initialized can detect which version of
 * Optimizely a customer is using and call the appropriate callback functions when an experiment runs on the page.
 * Instead of Segment looking up the experiment data, we can now just bind Segment APIs to their experiment listener/handlers!
 *
 * @api private
 * @param {Object} handlers
 * @param {Function} referrerOverride: called if the effective refferer value differs from the current `document.referrer` due to a
 * invocation of a redirect experiment on the page
 * @param {Function} sendExperimentData: called for every running experiment on the page (Classic)
 * @param {Function} sendCampaignData: called for every running campaign on the page (New)
 */

Optimizely.initOptimizelyIntegration = function(handlers) {
  /**
   * `initClassicOptimizelyIntegration` fetches all the experiment data from the classic Optimizely client
   * and calls the functions provided in the arguments with the data that needs to
   * be used for sending information. It is recommended to leave this function as is
   * and to create your own implementation of the functions referrerOverride and
   * sendExperimentData.
   *
   * @param {Function} referrerOverride - This function is called if the effective referrer value differs from
   *   the current document.referrer value. The only argument provided is the effective referrer value.
   * @param {Function} sendExperimentData - This function is called for every running experiment on the page.
   *   The function is called with all the relevant ids and names.
   */
  var initClassicOptimizelyIntegration = function(referrerOverride, sendExperimentData) {
    var data = window.optimizely && window.optimizely.data;
    var state = data && data.state;
    if (state) {
      var activeExperiments = state.activeExperiments;
      if (state.redirectExperiment) {
        var redirectExperimentId = state.redirectExperiment.experimentId;
        var index = -1;
        for (var i = 0; i < state.activeExperiments.length; i++) {
          if (state.activeExperiments[i] === redirectExperimentId) {
            index = i;
            break;
          }
        }
        if (index === -1) {
          activeExperiments.push(redirectExperimentId);
        }
        referrerOverride(state.redirectExperiment.referrer);
      }

      for (var k = 0; k < activeExperiments.length; k++) {
        var currentExperimentId = activeExperiments[k];
        var activeExperimentState = {
          experiment: {
            id: currentExperimentId,
            name: data.experiments[currentExperimentId].name
          },
          variations: [],
          /** Segment added code */
          // we need to send sectionName for multivariate experiments
          sections: data.sections
          /**/
        };

        /** Segment added code */
        // for backward compatability since we send referrer with the experiment properties
        if (state.redirectExperiment && currentExperimentId === redirectExperimentId && state.redirectExperiment.referrer) {
          activeExperimentState.experiment.referrer = state.redirectExperiment.referrer;
        }
        /**/

        var variationIds = state.variationIdsMap[activeExperimentState.experiment.id];
        for (var j = 0; j < variationIds.length; j++) {
          var id = variationIds[j];
          var name = data.variations[id].name;
          activeExperimentState.variations.push({
            id: id,
            name: name
          });
        }
        sendExperimentData(activeExperimentState);
      }
    }
  };

  /**
   * This function fetches all the campaign data from the new Optimizely client
   * and calls the functions provided in the arguments with the data that needs to
   * be used for sending information. It is recommended to leave this function as is
   * and to create your own implementation of the functions referrerOverride and
   * sendCampaignData.
   *
   * @param {Function} referrerOverride - This function is called if the effective referrer value differs from
   *   the current document.referrer value. The only argument provided is the effective referrer value.
   * @param {Function} sendCampaignData - This function is called for every running campaign on the page.
   *   The function is called with the campaignState for the activated campaign
   */
  var initNewOptimizelyIntegration = function(referrerOverride, sendCampaignData) {
    var newActiveCampaign = function(id, referrer) {
      var state = window.optimizely.get && window.optimizely.get('state');
      if (state) {
        var activeCampaigns = state.getCampaignStates({
          isActive: true
        });
        var campaignState = activeCampaigns[id];
        // Segment added code: in case this is a redirect experiment
        if (referrer) campaignState.experiment.referrer = referrer;
        sendCampaignData(campaignState);
      }
    };

    var checkReferrer = function() {
      var state = window.optimizely.get && window.optimizely.get('state');
      if (state) {
        var referrer = state.getRedirectInfo() && state.getRedirectInfo().referrer;

        if (referrer) {
          referrerOverride(referrer);
          return referrer; // Segment added code: so I can pass this referrer value in cb
        }
      }
    };

    /**
     * At any moment, a new campaign can be activated (manual or conditional activation).
     * This function registers a listener that listens to newly activated campaigns and
     * handles them.
     */
    var registerFutureActiveCampaigns = function() {
      window.optimizely = window.optimizely || [];
      window.optimizely.push({
        type: 'addListener',
        filter: {
          type: 'lifecycle',
          name: 'campaignDecided'
        },
        handler: function(event) {
          var id = event.data.campaign.id;
          newActiveCampaign(id);
        }
      });
    };

    /**
     * If this code is running after Optimizely on the page, there might already be
     * some campaigns active. This function makes sure all those campaigns are
     * handled.
     */
    var registerCurrentlyActiveCampaigns = function() {
      window.optimizely = window.optimizely || [];
      var state = window.optimizely.get && window.optimizely.get('state');
      if (state) {
        var referrer = checkReferrer();
        var activeCampaigns = state.getCampaignStates({
          isActive: true
        });
        for (var id in activeCampaigns) {
          if ({}.hasOwnProperty.call(activeCampaigns, id)) {
            // Segment modified code: need to pass down referrer in the cb for backward compat reasons
            referrer ? newActiveCampaign(id, referrer) : newActiveCampaign(id);
          }
        }
      } else {
        window.optimizely.push({
          type: 'addListener',
          filter: {
            type: 'lifecycle',
            name: 'initialized'
          },
          handler: function() {
            checkReferrer();
          }
        });
      }
    };
    registerCurrentlyActiveCampaigns();
    registerFutureActiveCampaigns();
  };

  initClassicOptimizelyIntegration(handlers.referrerOverride, handlers.sendExperimentData);
  initNewOptimizelyIntegration(handlers.referrerOverride, handlers.sendCampaignData);
};


},{"@ndhoule/each":8,"@ndhoule/foldl":11,"@ndhoule/keys":13,"@ndhoule/values":17,"@segment/analytics.js-integration":374,"global-queue":625,"next-tick":380}],374:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":375,"./statics":376,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],375:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":378,"component-emitter":379,"dup":38,"is":629,"load-iframe":635,"next-tick":377,"to-no-case":381}],376:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":379,"domify":624,"dup":39}],377:[function(require,module,exports){
arguments[4][176][0].apply(exports,arguments)
},{"_process":647,"dup":176}],378:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],379:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],380:[function(require,module,exports){
arguments[4][179][0].apply(exports,arguments)
},{"_process":647,"dup":179}],381:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],382:[function(require,module,exports){

'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var uncase = require('to-no-case');
var foldl = require('@ndhoule/foldl');
var Identify = require('segmentio-facade').Identify;

/**
 * Expose `Outbound` integration.
 */

var Outbound = module.exports = integration('Outbound')
  .global('outbound')
  .option('publicApiKey', '')
  .option('trackReferrer', false)
  .tag('<script src="//cdn.outbound.io/{{ publicApiKey }}.js">');

/**
 * Initialize.
 *
 * @api public
 */

Outbound.prototype.initialize = function() {
  window.outbound = window.outbound || [];
  window.outbound.methods = [
    'identify',
    'track',
    'alias',
    'registerApnsToken',
    'registerGcmToken',
    'disableApnsToken',
    'disableGcmToken',
    'disableAllGcmTokens',
    'disableAllApnsTokens',
    'unsubscribeAll',
    'unsubscribeCampaigns',
    'subscribeAll',
    'subscribeCampaigns',
    'hasIdentified'
  ];

  window.outbound.factory = function(method) {
    return function() {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(method);
      window.outbound.push(args);
      return window.outbound;
    };
  };

  for (var i = 0; i < window.outbound.methods.length; i++) {
    var key = window.outbound.methods[i];
    window.outbound[key] = window.outbound.factory(key);
  }

  this.load(this.ready);
};

/**
* Loaded
*
* @api private
* @return {boolean}
*/

Outbound.prototype.loaded = function() {
  return !!(window.outbound && window.outbound.reset);
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Outbound.prototype.identify = function(identify) {
  var specialTraits = {
    id: true,
    email: true,
    phone: true,
    'user id': true,
    'last name': true,
    'first name': true
  };

  var userId = identify.userId() || identify.anonymousId();

  var attributes = foldl(function(acc, val, key) {
    if (!specialTraits.hasOwnProperty(uncase(key))) acc.attributes[key] = val;
    return acc;
  }, {
    attributes: {},
    email: identify.email(),
    phoneNumber: identify.phone(),
    firstName: identify.firstName(),
    lastName: identify.lastName()
  }, identify.traits());

  window.outbound.identify(userId, attributes);
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Outbound.prototype.track = function(track) {
  if (!window.outbound.hasIdentified()) {
    var user = new Identify({ userId: track.userId() || track.anonymousId() });
    this.identify(user);
  }
  window.outbound.track(track.event(), track.properties(), track.timestamp());
};

/**
 * Alias.
 *
 * @api public
 * @param {Alias} alias
 */

Outbound.prototype.alias = function(alias) {
  window.outbound.identify(alias.userId(), { previousId: alias.previousId() });
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */
Outbound.prototype.page = function(page) {
  var props = page.properties();
  var evtName = '[Segment Page]';

  if (!this.options.trackReferrer) {
    delete props.referrer;
  }

  if (props.name || props.url) {
    evtName += ' ' + props.name || props.url;
  }

  if (!window.outbound.hasIdentified()) {
    var user = new Identify({ userId: page.userId() || page.anonymousId() });
    this.identify(user);
  }

  window.outbound.track(evtName, props, page.timestamp());
};
},{"@ndhoule/foldl":11,"@segment/analytics.js-integration":383,"segmentio-facade":655,"to-no-case":389}],383:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":384,"./statics":385,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],384:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":387,"component-emitter":388,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":386}],385:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":388,"domify":624,"dup":39}],386:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],387:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],388:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],389:[function(require,module,exports){

/**
 * Export.
 */

module.exports = toNoCase

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/
var hasSeparator = /(_|-|\.|:)/
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase()
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
  return string.toLowerCase()
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : ''
  })
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}

},{}],390:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var when = require('do-when');
var reject = require('reject');
var json = require('json3');

/**
 * Expose `Parsely` integration.
 */

var Parsely = module.exports = integration('Parsely')
  .global('PARSELY')
  .option('apiKey', '')
  .option('dynamicTracking', false)
  .option('trackEvents', false)
  .option('inPixelMetadata', false)
  .tag('<script src="//d1z2jf7jlzjs58.cloudfront.net/p.js">');

/**
 * Initialize.
 */

Parsely.prototype.initialize = function() {
  window.PARSELY = window.PARSELY || {};
  // Set autoload to false to trigger pageviews on deliberate `page calls`
  if (this.options.dynamicTracking) window.PARSELY.autotrack = false;
  var self = this;

  // append the meta tag we need first before JS fires
  var meta = document.createElement('meta');
  meta.id = 'parsely-cfg';
  meta.setAttribute('data-parsely-site', this.options.apiKey);
  var head = document.getElementsByTagName('head')[0];
  if (!head) return;
  head.appendChild(meta);

  this.load(function() {
    when(self.loaded, self.ready);
  });
};

Parsely.prototype.loaded = function() {
  return !!window.PARSELY.beacon;
};

/**
 * Page.
 *
 * Only Invoked if dynamicTracking is enabled (otherwise noop)
 */

Parsely.prototype.page = function(page) {
  if (!this.options.dynamicTracking) return;
  var properties = page.properties();
  var data = {
    url: page.url(),
    urlref: page.referrer(),
    data: properties,
    js: 1
  };

  if (this.options.inPixelMetadata) {
    var metadata = {
      articleSection: page.category() || properties.category,
      thumbnailUrl: properties.imageUrl,
      dateCreated: properties.created,
      headline: properties.headline,
      keywords: properties.keywords,
      creator: properties.author,
      url: properties.url
    };

    // strip any undefined or nulls
    data.metadata = json.stringify(reject(metadata));
  }

  window.PARSELY.beacon.trackPageView(data);
};

/**
 * Track.
 *
 * http://www.parsely.com/help/integration/dynamic/
 */

Parsely.prototype.track = function(track) {
  if (this.options.trackEvents) {
    window.PARSELY.beacon.trackPageView({
      data: track.properties(),
      action: track.event(),
      url: track.proxy('context.page.url'),
      urlref: track.proxy('context.page.referrer'),
      js: 1
    });
  }
};

},{"@segment/analytics.js-integration":391,"do-when":623,"json3":633,"reject":648}],391:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":392,"./statics":393,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],392:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":394,"component-emitter":395,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":396}],393:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":395,"domify":624,"dup":39}],394:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],395:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],396:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],397:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_pq');

/**
 * Expose `PerfectAudience` integration.
 */

var PerfectAudience = module.exports = integration('Perfect Audience')
  .assumesPageview()
  .global('_pq')
  .option('siteId', '')
  .tag('<script src="//tag.perfectaudience.com/serve/{{ siteId }}.js">');

/**
 * Initialize.
 *
 * http://support.perfectaudience.com/knowledgebase/articles/212490-visitor-tracking-api
 *
 * @api public
 */

PerfectAudience.prototype.initialize = function() {
  window._pq = window._pq || [];
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

PerfectAudience.prototype.loaded = function() {
  return !!(window._pq && window._pq.push);
};

/**
 * Track.
 *
 * http://support.perfectaudience.com/knowledgebase/articles/212490-visitor-tracking-api
 *
 * @api public
 * @param {Track} event
 */

PerfectAudience.prototype.track = function(track) {
  var total = track.total() || track.revenue();
  var orderId = track.orderId();
  var props = {};
  var sendProps = false;
  if (total) {
    props.revenue = total;
    sendProps = true;
  }
  if (orderId) {
    props.orderId = orderId;
    sendProps = true;
  }

  if (!sendProps) return push('track', track.event());
  return push('track', track.event(), props);
};

/**
 * Product viewed.
 *
 * http://support.perfectaudience.com/knowledgebase/articles/212490-visitor-tracking-api
 *
 * @api private
 * @param {Track} track
 */

PerfectAudience.prototype.productViewed = function(track) {
  var product = track.productId() || track.id() || track.sku();
  push('track', track.event());
  push('trackProduct', product);
};

/**
 * Completed Purchase.
 *
 * http://support.perfectaudience.com/knowledgebase/articles/212490-visitor-tracking-api
 *
 * @api private
 * @param {Track} track
 */

PerfectAudience.prototype.orderCompleted = function(track) {
  var total = track.total() || track.revenue();
  var orderId = track.orderId();
  var props = {};
  if (total) props.revenue = total;
  if (orderId) props.orderId = orderId;
  push('track', track.event(), props);
};

},{"@segment/analytics.js-integration":586,"global-queue":625}],398:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_prum');

/**
 * Expose `Pingdom` integration.
 */

var Pingdom = module.exports = integration('Pingdom')
  .assumesPageview()
  .global('_prum')
  .global('PRUM_EPISODES')
  .option('id', '')
  .tag('<script src="//rum-static.pingdom.net/prum.min.js">');

/**
 * Initialize.
 *
 * @api public
 */

Pingdom.prototype.initialize = function() {
  window._prum = window._prum || [];
  push('id', this.options.id);
  var date = new Date();
  push('mark', 'firstbyte', date.getTime());
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Pingdom.prototype.loaded = function() {
  return !!(window._prum && window._prum.push !== Array.prototype.push);
};

},{"@segment/analytics.js-integration":399,"global-queue":625}],399:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":400,"./statics":401,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],400:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":402,"component-emitter":403,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":404}],401:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":403,"domify":624,"dup":39}],402:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],403:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],404:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],405:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('component-each');
var integration = require('@segment/analytics.js-integration');
var is = require('is');
var push = require('global-queue')('_paq');

/**
 * Expose `Piwik` integration.
 */

var Piwik = module.exports = integration('Piwik')
  .global('_paq')
  .option('url', null)
  .option('siteId', '')
  .option('customVariableLimit', 5)
  .mapping('goals')
  .tag('<script src="{{ url }}/piwik.js">');

/**
 * Initialize.
 *
 * http://piwik.org/docs/javascript-tracking/#toc-asynchronous-tracking
 *
 * @api public
 */

Piwik.prototype.initialize = function() {
  window._paq = window._paq || [];
  push('setSiteId', this.options.siteId);
  push('setTrackerUrl', this.options.url + '/piwik.php');
  push('enableLinkTracking');
  this.load(this.ready);
};

/**
 * Check if Piwik is loaded.
 *
 * @api private
 */

Piwik.prototype.loaded = function() {
  return !!(window._paq && window._paq.push !== Array.prototype.push);
};

/**
 * Page
 *
 * @api public
 * @param {Page} page
 */

Piwik.prototype.page = function() {
  push('trackPageView');
};

/**
 * Identify
 *
 * @api public
 * @param {Identify} identify
 */

Piwik.prototype.identify = function(identify) {
  if (!identify.userId()) return;
  // Ref: http://developer.piwik.org/guides/tracking-javascript-guide#user-id
  push('setUserId', identify.userId().toString());
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Piwik.prototype.track = function(track) {
  var goals = this.goals(track.event());
  var revenue = track.revenue();
  var category = track.category() || 'All';
  var action = track.event();
  var name = track.proxy('properties.name') || track.proxy('properties.label');
  var value = track.value() || track.revenue();

  var options = track.options('Piwik');
  var customVariables = options.customVars || options.cvar;

  if (!is.object(customVariables)) {
    customVariables = {};
  }

  for (var i = 1; i <= this.options.customVariableLimit; i += 1) {
    if (customVariables[i]) {
      push('setCustomVariable', i.toString(), customVariables[i][0], customVariables[i][1], 'page');
    }
  }

  each(goals, function(goal) {
    push('trackGoal', goal, revenue);
  });

  push('trackEvent', category, action, name, value);
};

},{"@segment/analytics.js-integration":406,"component-each":611,"global-queue":625,"is":629}],406:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":407,"./statics":408,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],407:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":409,"component-emitter":410,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":411}],408:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":410,"domify":624,"dup":39}],409:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],410:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],411:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],412:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var convertDates = require('@segment/convert-dates');
var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_preactq');

/**
 * Expose `Preact` integration.
 */

var Preact = module.exports = integration('Preact')
  .assumesPageview()
  .global('_preactq')
  .global('_lnq')
  .option('projectCode', '')
  .tag('<script src="//d2bbvl6dq48fa6.cloudfront.net/js/preact-4.1.min.js">');

/**
 * Initialize.
 *
 * http://www.preact.io/api/javascript
 *
 * @api public
 * @param {Object} page
 */

Preact.prototype.initialize = function() {
  window._preactq = window._preactq || [];
  window._lnq = window._lnq || [];
  push('_setCode', this.options.projectCode);
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Preact.prototype.loaded = function() {
  return !!(window._preactq && window._preactq.push !== Array.prototype.push);
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Preact.prototype.identify = function(identify) {
  if (!identify.userId()) return;
  var traits = identify.traits({ created: 'created_at' });
  traits = convertDates(traits, convertDate);
  push('_setPersonData', {
    name: identify.name(),
    email: identify.email(),
    uid: identify.userId(),
    properties: traits
  });
};

/**
 * Group.
 *
 * @api public
 * @param {Group} group
 */

Preact.prototype.group = function(group) {
  if (!group.groupId()) return;
  push('_setAccount', group.traits());
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Preact.prototype.track = function(track) {
  var props = track.properties();
  var revenue = track.revenue();
  var event = track.event();
  var special = { name: event };

  if (revenue) {
    special.revenue = revenue * 100;
    delete props.revenue;
  }

  if (props.note) {
    special.note = props.note;
    delete props.note;
  }

  push('_logEvent', special, props);
};

/**
 * Convert a `date` to a format Preact supports.
 *
 * @param {Date} date
 * @return {number}
 */

function convertDate(date) {
  return Math.floor(date / 1000);
}

},{"@segment/analytics.js-integration":413,"@segment/convert-dates":593,"global-queue":625}],413:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":414,"./statics":415,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],414:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":416,"component-emitter":417,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":418}],415:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":417,"domify":624,"dup":39}],416:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],417:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],418:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],419:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Identify = require('segmentio-facade').Identify;
var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_kiq');
var when = require('do-when');

/**
 * Expose `Qualaroo` integration.
 */

var Qualaroo = module.exports = integration('Qualaroo')
  .assumesPageview()
  .global('_kiq')
  .option('customerId', '')
  .option('siteToken', '')
  .option('track', false)
  .tag('<script src="//s3.amazonaws.com/ki.js/{{ customerId }}/{{ siteToken }}.js">');

/**
 * Initialize.
 *
 * @api public
 * @param {Object} page
 */

Qualaroo.prototype.initialize = function() {
  window._kiq = window._kiq || [];
  var loaded = this.loaded;
  var ready = this.ready;
  this.load(function() {
    when(loaded, ready);
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Qualaroo.prototype.loaded = function() {
  return !!(window._kiq && window._kiq.push !== Array.prototype.push);
};

/**
 * Identify.
 *
 * http://help.qualaroo.com/customer/portal/articles/731085-identify-survey-nudge-takers
 * http://help.qualaroo.com/customer/portal/articles/731091-set-additional-user-properties
 *
 * @api public
 * @param {Identify} identify
 */

Qualaroo.prototype.identify = function(identify) {
  var traits = identify.traits();
  var id = identify.userId();
  var email = identify.email();
  if (email) id = email;
  if (id) push('identify', id);
  if (traits) push('set', traits);
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Qualaroo.prototype.track = function(track) {
  if (!this.options.track) return;
  var event = track.event();
  var traits = {};
  traits['Triggered: ' + event] = true;
  this.identify(new Identify({ traits: traits }));
};

},{"@segment/analytics.js-integration":420,"do-when":623,"global-queue":625,"segmentio-facade":655}],420:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":421,"./statics":422,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],421:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":423,"component-emitter":424,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":425}],422:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":424,"domify":624,"dup":39}],423:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],424:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],425:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],426:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var push = require('global-queue')('_qevents', { wrap: false });
var integration = require('@segment/analytics.js-integration');
var useHttps = require('use-https');
var is = require('is');

/**
 * Expose `Quantcast` integration.
 */

var Quantcast = module.exports = integration('Quantcast')
  .assumesPageview()
  .global('_qevents')
  .global('__qc')
  .option('pCode', null)
  .option('advertise', false)
  .tag('http', '<script src="http://edge.quantserve.com/quant.js">')
  .tag('https', '<script src="https://secure.quantserve.com/quant.js">');

/**
 * Initialize.
 *
 * https://www.quantcast.com/learning-center/guides/using-the-quantcast-asynchronous-tag/
 * https://www.quantcast.com/help/cross-platform-audience-measurement-guide/
 *
 * @api public
 * @param {Page} page
 */

Quantcast.prototype.initialize = function(page) {
  window._qevents = window._qevents || [];

  var opts = this.options;
  var settings = { qacct: opts.pCode };
  var user = this.analytics.user();
  if (user.id()) settings.uid = user.id().toString();

  if (page) {
    settings.labels = this._labels(page);
  }

  push(settings);

  var name = useHttps() ? 'https' : 'http';
  this.load(name, this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Quantcast.prototype.loaded = function() {
  return !!window.__qc;
};

/**
 * Page.
 *
 * https://cloudup.com/cBRRFAfq6mf
 *
 * @api public
 * @param {Page} page
 */

Quantcast.prototype.page = function(page) {
  var settings = {
    event: 'refresh',
    labels: this._labels(page),
    qacct: this.options.pCode
  };
  var user = this.analytics.user();

  // For non-advertisers, blank labels are okay if no name/category is passed
  if (!this.options.advertise && !page.name() && !page.category()) delete settings.labels;
  if (user.id()) settings.uid = user.id().toString();
  push(settings);
};

/**
 * Identify.
 *
 * https://www.quantcast.com/help/cross-platform-audience-measurement-guide/
 *
 * @api public
 * @param {string} [id]
 */

Quantcast.prototype.identify = function(identify) {
  if (identify.userId()) {
    window._qevents[0] = window._qevents[0] || {};
    window._qevents[0].uid = identify.userId().toString();
  }
};

/**
 * Track.
 *
 * https://cloudup.com/cBRRFAfq6mf
 *
 * @api public
 * @param {Track} track
 */

Quantcast.prototype.track = function(track) {
  var revenue = track.revenue();
  var orderId = track.orderId();
  var user = this.analytics.user();
  var settings = {
    event: 'click',
    labels: this._labels(track),
    qacct: this.options.pCode
  };

  if (revenue) settings.revenue = String(revenue);
  if (orderId) settings.orderid = String(orderId);
  if (user.id()) settings.uid = user.id().toString();

  push(settings);
};

/**
 * Order Completed
 *
 * @api private
 * @param {Track} track
 */

Quantcast.prototype.orderCompleted = function(track) {
  var labels = this._labels(track);

  var category = safe(track.category());
  if (this.options.advertise && category) {
    labels += ',_fp.pcat.' + category;
  }

  var repeat = track.proxy('properties.repeat');
  if (this.options.advertise && typeof repeat === 'boolean') {
    labels += ',_fp.customer.' + (repeat ? 'repeat' : 'new');
  }

  var settings = {
    // the example Quantcast sent has completed order send refresh not click
    event: 'refresh',
    labels: labels,
    revenue: String(track.total()),
    orderid: String(track.orderId()),
    qacct: this.options.pCode
  };

  push(settings);
};

/**
 * Generate quantcast labels.
 *
 * @api private
 * @param {Object} facade
 * @return {string}
 *
 * @example:
 *
 *    options.advertise = false;
 *    labels(track);
 *    // => "my event"
 *    labels(page);
 *    // => "Category.Name"
 *
 *    options.advertise = true;
 *    labels(track);
 *    // => "_fp.event.my event"
 *    labels(page);
 *    // => "_fp.event.Category.Name"
 *
 *  Return a string comprised of:
 *
 *  1) Prefix
 *  2) Default Labels (dot delimited)
 *     - page calls: (Category).(Name || 'Default')
 *     - track calls: (Event Name)
 *  3) Custom Labels (comma delimited)
 *     - [properties.label, ...context.Quantcast.Labels]
 */

Quantcast.prototype._labels = function(facade) {
  var action = facade.action();
  var autoLabels = [];
  var ret;

  if (action === 'page') {
    // There is no default for category
    if (facade.category()) autoLabels.push(safe(facade.category()));
    // Fallback on default label if no page name is given
    autoLabels.push(safe(facade.name() || 'Default'));
    autoLabels = autoLabels.join('.');
  } else if (action === 'track') {
    autoLabels = safe(facade.event());
  }

  var label = safe(facade.proxy('properties.label'));
  var customLabels = facade.options('Quantcast').labels || [];

  if (is.string(customLabels)) customLabels = [customLabels];

  customLabels = customLabels.map(function(label) {
    // strip special characters to prevent invalid labels
    return safe(label);
  });

  if (is.string(label)) customLabels.unshift(label);
  // Multiple labels need to be delimited by commas
  customLabels = customLabels.join(',');

  // Non-advertisers require no prefix
  if (this.options.advertise) {
    ret = '_fp.event.' + autoLabels;
  } else {
    ret = autoLabels;
  }

  if (customLabels) ret += ',' + customLabels;
  return ret;
};

/**
 * Remove special characters so that user can't accidentally mis-delimit labels or create invalid labels
 */

function safe(str) {
  if (str) return str.replace(/[^\w\s]|_/gi, '');
}

},{"@segment/analytics.js-integration":586,"global-queue":625,"is":629,"use-https":672}],427:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('component-each');
var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_iva');

/**
 * Expose `QuanticMind` integration.
 */

var QuanticMind = module.exports = integration('QuanticMind')
  .global('_iva')
  .option('clientId', '')
  .option('domain', '')
  .tag('<script src="//analytics.staticiv.com/iva.js">')
  .mapping('events');

/**
 * Initialize.
 *
 * @api public
 */

QuanticMind.prototype.initialize = function() {
  var domain = this.options.domain;
  window._iva = window._iva || [];
  push('setClientId', this.options.clientId);
  var userId = this.analytics.user().anonymousId();
  if (userId) push('setUserId', userId);
  if (domain) push('setDomain', domain);
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

QuanticMind.prototype.loaded = function() {
  return !!(window._iva && window._iva.push !== Array.prototype.push);
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

QuanticMind.prototype.identify = function(identify) {
  push('setUserId', identify.anonymousId());
};

/**
 * Page.
 *
 * @param {Page} page
 */

QuanticMind.prototype.page = function() {
  // they want every landing page to send a "click" event.
  push('trackEvent', 'click');
};

/**
 * Track.
 *
 * Tracks everything except 'sale' events.
 *
 * @param {Track} track
 */

QuanticMind.prototype.track = function(track) {
  var user = this.analytics.user();
  var events = this.events(track.event());
  var value = track.revenue() || track.value() || 0;
  var eventId = track.orderId() || user.anonymousId() || '';
  each(events, function(event) {
    // 'sale' is a special event that will be routed to a table that is deprecated on QuanticMind's end.
    // They don't want a generic 'sale' event to go to their deprecated table.
    if (event !== 'sale') {
      push('trackEvent', event, value, eventId);
    }
  });
};

},{"@segment/analytics.js-integration":428,"component-each":611,"global-queue":625}],428:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":429,"./statics":430,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],429:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":431,"component-emitter":432,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":433}],430:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":432,"domify":624,"dup":39}],431:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],432:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],433:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],434:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var convertDates = require('@segment/convert-dates');
var del = require('obj-case').del;
var alias = require('@segment/alias');


/**
 * Expose `Ramen` integration.
 */

var Ramen = module.exports = integration('Ramen')
  .global('Ramen')
  .global('_ramen')
  .option('organization_id', '')
  .tag('<script src="//cdn.ramen.is/assets/ramen.js">');

/**
 * Initialize.
 *
 * @api public
 */

Ramen.prototype.initialize = function() {
  window._ramen = window._ramen || [];
  /* eslint-disable */
  (function(){var a,b,c; a = function(f){return function(){window._ramen.push([f].concat(Array.prototype.slice.call(arguments,0))); }; }; b = ["boot","ready","identify","group","track","page","reset","ask"]; for (c = 0; c < b.length; c++) {window._ramen[b[c]] = a(b[c]); } })();
  /* eslint-enable */
  window._ramen.boot(this.options.organization_id, this.options);
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Ramen.prototype.loaded = function() {
  return !!(window._ramen && window._ramen.push !== Array.prototype.push);
};

/**
 * Group.
 *
 * @api public
 * @param {Group} group
 */

Ramen.prototype.group = function(group) {
  if (!this.identified) {
    window._ramen.identify();
    this.identified = true;
  }

  var props = group.traits({ createdAt: 'created', created: 'created_at' });
  if (group.groupId()) props.id = group.groupId();

  window._ramen.group(props);
};

/**
 * Page.
 *
 * @api public
 */

Ramen.prototype.page = function() {
  if (!this.identified) {
    window._ramen.identify();
    this.identified = true;
  }

  window._ramen.page();
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Ramen.prototype.track = function(track) {
  if (!this.identified) {
    window._ramen.identify();
    this.identified = true;
  }

  window._ramen.track(track.event());
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Ramen.prototype.identify = function(identify) {
  // Ramen requires that `identify`'d users have an `id`.
  // For anonymous visitors, simply do not call `analytics.identify`
  // and the rest of the integration will handle it.
  if (!identify.userId()) return;

  var user;
  var traits;
  var opts;

  traits = identify.traits();
  opts = identify.options(this.name);

  // Setup the basic `user` attributes: id, email, created_at, and name
  // `null` values are OK. Ramen will ignore them.

  user = { id: identify.userId() };

  if (traits.email) {
    user.email = traits.email;
  }

  if (identify.created()) {
    user.created_at = identify.created();
  }

  if (identify.name()) {
    user.name = identify.name();
  }

  if (traits.company && traits.company.id) {
    user.company = alias(traits.company, { createdAt: 'created', created: 'created_at' });
  }

  // Clear out Ramen-specific values from traits, set traits to equal
  // `user.traits`
  del(traits, 'email');
  del(traits, 'name');
  del(traits, 'id');
  del(traits, 'created');
  del(traits, 'createdAt');
  del(traits, 'company');
  user.traits = traits;

  // Convert all timestamps to epoch seconds
  user = convertDates(user, function(date) { return Math.floor(date / 1000); });

  user.traits = alias(user.traits, { createdAt: 'created' });
  user.traits = alias(user.traits, { created: 'created_at' });

  // Rename `auth_hash_timestamp` to `timestamp` for secure mode
  opts = alias(opts, { auth_hash_timestamp: 'timestamp' });

  window._ramen.identify(user, opts);
  this.identified = true;
};

},{"@segment/alias":19,"@segment/analytics.js-integration":435,"@segment/convert-dates":593,"obj-case":641}],435:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":436,"./statics":437,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],436:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":438,"component-emitter":439,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":440}],437:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":439,"domify":624,"dup":39}],438:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],439:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],440:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],441:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var extend = require('@ndhoule/extend');
var integration = require('@segment/analytics.js-integration');
var is = require('is');

/**
 * Expose `Rollbar` integration.
 */

var RollbarIntegration = module.exports = integration('Rollbar')
  .global('Rollbar')
  .option('identify', true)
  .option('accessToken', '')
  .option('environment', 'unknown')
  .option('captureUncaught', true)
  .option('captureUnhandledRejections', false)
  .option('ignoredMessages', [])
  .option('loadTimeout', 60000)
  .option('verbose', false);

/**
 * Initialize.
 *
 * @api public
 */

RollbarIntegration.prototype.initialize = function() {
  window._rollbarConfig = this.config = {
    accessToken: this.options.accessToken,
    captureUncaught: this.options.captureUncaught,
    captureUnhandledRejections: this.options.captureUnhandledRejections,
    verbose: this.options.verbose,
    payload: {
      environment: this.options.environment
    }
  };

  var msg = this.options.ignoredMessages;
  if (msg.length > 0) {
    var ret = [];
    // clean out array
    for (var x = 0; x < msg.length; x++) {
      if (msg[x] !== null && msg[x] !== '') ret.push(msg[x]);
    }
    window._rollbarConfig.ignoredMessages = ret;
  }

  /* eslint-disable */
!function(r){function e(t){if(o[t])return o[t].exports;var n=o[t]={exports:{},id:t,loaded:!1};return r[t].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=r,e.c=o,e.p="",e(0)}([function(r,e,o){"use strict";var t=o(1).Rollbar,n=o(2);_rollbarConfig.rollbarJsUrl=_rollbarConfig.rollbarJsUrl||"https://d37gvrvc0wt4s1.cloudfront.net/js/v1.9/rollbar.min.js";var a=t.init(window,_rollbarConfig),i=n(a,_rollbarConfig);a.loadFull(window,document,!_rollbarConfig.async,_rollbarConfig,i)},function(r,e){"use strict";function o(r){return function(){try{return r.apply(this,arguments)}catch(e){try{console.error("[Rollbar]: Internal error",e)}catch(o){}}}}function t(r,e,o){window._rollbarWrappedError&&(o[4]||(o[4]=window._rollbarWrappedError),o[5]||(o[5]=window._rollbarWrappedError._rollbarContext),window._rollbarWrappedError=null),r.uncaughtError.apply(r,o),e&&e.apply(window,o)}function n(r){var e=function(){var e=Array.prototype.slice.call(arguments,0);t(r,r._rollbarOldOnError,e)};return e.belongsToShim=!0,e}function a(r){this.shimId=++c,this.notifier=null,this.parentShim=r,this._rollbarOldOnError=null}function i(r){var e=a;return o(function(){if(this.notifier)return this.notifier[r].apply(this.notifier,arguments);var o=this,t="scope"===r;t&&(o=new e(this));var n=Array.prototype.slice.call(arguments,0),a={shim:o,method:r,args:n,ts:new Date};return window._rollbarShimQueue.push(a),t?o:void 0})}function l(r,e){if(e.hasOwnProperty&&e.hasOwnProperty("addEventListener")){var o=e.addEventListener;e.addEventListener=function(e,t,n){o.call(this,e,r.wrap(t),n)};var t=e.removeEventListener;e.removeEventListener=function(r,e,o){t.call(this,r,e&&e._wrapped?e._wrapped:e,o)}}}var c=0;a.init=function(r,e){var t=e.globalAlias||"Rollbar";if("object"==typeof r[t])return r[t];r._rollbarShimQueue=[],r._rollbarWrappedError=null,e=e||{};var i=new a;return o(function(){if(i.configure(e),e.captureUncaught){i._rollbarOldOnError=r.onerror,r.onerror=n(i);var o,a,c="EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");for(o=0;o<c.length;++o)a=c[o],r[a]&&r[a].prototype&&l(i,r[a].prototype)}return e.captureUnhandledRejections&&(i._unhandledRejectionHandler=function(r){var e=r.reason,o=r.promise,t=r.detail;!e&&t&&(e=t.reason,o=t.promise),i.unhandledRejection(e,o)},r.addEventListener("unhandledrejection",i._unhandledRejectionHandler)),r[t]=i,i})()},a.prototype.loadFull=function(r,e,t,n,a){var i=function(){var e;if(void 0===r._rollbarPayloadQueue){var o,t,n,i;for(e=new Error("rollbar.js did not load");o=r._rollbarShimQueue.shift();)for(n=o.args,i=0;i<n.length;++i)if(t=n[i],"function"==typeof t){t(e);break}}"function"==typeof a&&a(e)},l=!1,c=e.createElement("script"),d=e.getElementsByTagName("script")[0],p=d.parentNode;c.crossOrigin="",c.src=n.rollbarJsUrl,c.async=!t,c.onload=c.onreadystatechange=o(function(){if(!(l||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)){c.onload=c.onreadystatechange=null;try{p.removeChild(c)}catch(r){}l=!0,i()}}),p.insertBefore(c,d)},a.prototype.wrap=function(r,e){try{var o;if(o="function"==typeof e?e:function(){return e||{}},"function"!=typeof r)return r;if(r._isWrap)return r;if(!r._wrapped){r._wrapped=function(){try{return r.apply(this,arguments)}catch(e){throw e._rollbarContext=o()||{},e._rollbarContext._wrappedSource=r.toString(),window._rollbarWrappedError=e,e}},r._wrapped._isWrap=!0;for(var t in r)r.hasOwnProperty(t)&&(r._wrapped[t]=r[t])}return r._wrapped}catch(n){return r}};for(var d="log,debug,info,warn,warning,error,critical,global,configure,scope,uncaughtError,unhandledRejection".split(","),p=0;p<d.length;++p)a.prototype[d[p]]=i(d[p]);r.exports={Rollbar:a,_rollbarWindowOnError:t}},function(r,e){"use strict";r.exports=function(r,e){return function(o){if(!o&&!window._rollbarInitialized){var t=window.RollbarNotifier,n=e||{},a=n.globalAlias||"Rollbar",i=window.Rollbar.init(n,r);i._processShimQueue(window._rollbarShimQueue||[]),window[a]=i,window._rollbarInitialized=!0,t.processPayloads()}}}}]);
  /* eslint-enable */

  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {Boolean}
 */

RollbarIntegration.prototype.loaded = function() {
  return is.object(window.Rollbar) && window.Rollbar.shimId == null;
};

/**
 * Load.
 *
 * @api public
 * @param {Function} callback
 */

RollbarIntegration.prototype.load = function(callback) {
  var loadedCheck = this.loaded;
  var startTime = (new Date()).getTime();
  var timeout = this.options.loadTimeout;

  function timer() {
    if (loadedCheck()) {
      return callback();
    }
    if ((new Date()).getTime() - startTime >= timeout) {
      return callback(new Error('Rollbar timed out while loading'));
    }

    setTimeout(timer, 1);
  }

  timer();
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

RollbarIntegration.prototype.identify = function(identify) {
  // do stuff with `id` or `traits`
  if (!this.options.identify) return;

  // Don't allow identify without a user id
  var uid = identify.userId();
  if (uid === null || uid === undefined) return;

  var rollbar = window.Rollbar;
  var person = { id: uid };
  extend(person, identify.traits());
  rollbar.configure({ payload: { person: person } });
};

},{"@ndhoule/extend":10,"@segment/analytics.js-integration":442,"is":629}],442:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":443,"./statics":444,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],443:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":445,"component-emitter":446,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":447}],444:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":446,"domify":624,"dup":39}],445:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],446:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],447:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],448:[function(require,module,exports){
'use strict';

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Route` integration.
 */

var Route = module.exports = integration('Route')
  .global('_rq')
  .global('_route')
  .option('organizationId', '')
  .tag('<script id="rtracker" data-organization-id="{{ organizationId }}" data-source="segment.com" src="//www.routecdn.com/tracker/route-tracker-min.js">');

/**
 * Initialize Route.
 *
 * @api public
 */

Route.prototype.initialize = function() {
  window._rq = window._rq || [];
  window._route = window._route || [];
  window._route.methods = ['identify', 'track', 'trackById'];
  window._route.factory = function(method) {
    return function() {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(method);
      window._rq.push(args);
      return window._rq;
    };
  };
  for (var i = 0; i < window._route.methods.length; i++) {
    var key = window._route.methods[i];
    window._route[key] = window._route.factory(key);
  }
  this.load(this.ready);
};

/**
 * Has the Route library been loaded yet?
 *
 * @api private
 * @return {Boolean}
 */

Route.prototype.loaded = function() {
  return window._rq && window._rq.push !== Array.prototype.push;
};

/**
 * Identify a user.
 *
 * @api public
 * @param {Track} identify
 */

Route.prototype.identify = function(identify) {
  window._route.identify(identify.traits());
};

/**
 * Track an event.
 *
 * @api public
 * @param {Track} track
 */

Route.prototype.track = function(track) {
  window._route.track(track.event());
};

},{"@segment/analytics.js-integration":449}],449:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":450,"./statics":451,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],450:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":452,"component-emitter":453,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":454}],451:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":453,"domify":624,"dup":39}],452:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],453:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],454:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],455:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var objCase = require('obj-case');

/**
 * Expose `SaaSquatch` integration.
 */

var SaaSquatch = module.exports = integration('SaaSquatch')
  .option('tenantAlias', '')
  .option('referralImage', '')
  .global('_sqh')
  .tag('<script src="//d2rcp9ak152ke1.cloudfront.net/assets/javascripts/squatch.min.js">');

/**
 * Initialize.
 *
 * @api public
 */

SaaSquatch.prototype.initialize = function() {
  window._sqh = window._sqh || [];
  window._sqh.push(['init', {
    tenant_alias: this.options.tenantAlias
  }]);
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

SaaSquatch.prototype.loaded = function() {
  return window._sqh && window._sqh.push !== Array.prototype.push;
};

/**
 * Identify.
 *
 * @api public
 * @param {Facade} identify
 */

SaaSquatch.prototype.identify = function(identify) {
  var sqh = window._sqh;
  var opts = identify.options(this.name);
  var id = identify.userId();
  var email = identify.email();

  if (!(id || email)) return;
  if (this.called) return;


  var init = identify.traits();

  init.email = email;
  init.user_id = id;
  objCase.del(init, 'id');

  init.tenant_alias = this.options.tenantAlias;

  init.first_name = identify.firstName();
  init.last_name = identify.lastName();
  init.user_image = identify.avatar();

  // Pull SaaSquatch specific properties from options, but fallback to traits
  var properties = [
    'account_id',
    'payment_provider_id',
    'account_status',
    'referral_code',
    'user_referral_code',
    'checksum',
    'mode',
    'locale'
  ];
  for (var i = 0; i < properties.length; i++) {
    var prop = properties[i];
    var value = objCase.find(opts, prop) || objCase.find(init, prop);
    objCase.del(init, prop);
    if (value) {
      init[prop] = value;
    }
  }

  if (init.payment_provider_id === 'null') {
    init.payment_provider_id = null;
  }

  var image = objCase.find(opts, 'referralImage') || objCase.find(init, 'referralImage') || this.options.referralImage;
  if (image) {
    objCase.del(init, 'referralImage');
    init.fb_share_image = image;
  }

  sqh.push(['init', init]);
  this.called = true;
  this.load();
};

/**
 * Group.
 *
 * @api public
 * @param {Group} group
 */

SaaSquatch.prototype.group = function(group) {
  var sqh = window._sqh;
  var id = group.groupId();
  var image = group.proxy('traits.referralImage') || this.options.referralImage;
  var opts = group.options(this.name);

  // tenant_alias is required.
  if (this.called) return;

  var init = {
    tenant_alias: this.options.tenantAlias,
    account_id: id
  };

  if (opts.checksum) init.checksum = opts.checksum;
  if (image) init.fb_share_image = image;

  sqh.push(['init', init]);
  this.called = true;
  this.load();
};

},{"@segment/analytics.js-integration":456,"obj-case":641}],456:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":457,"./statics":458,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],457:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":459,"component-emitter":460,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":461}],458:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":460,"domify":624,"dup":39}],459:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],460:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],461:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],462:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var when = require('do-when');

/**
 * Expose `SatisMeter` integration.
 */

var SatisMeter = module.exports = integration('SatisMeter')
  .global('satismeter')
  .option('token', '')
  .option('apiKey', '')
  .tag('<script src="https://app.satismeter.com/satismeter.js">');

/**
 * Initialize.
 *
 * @api public
 */

SatisMeter.prototype.initialize = function() {
  var self = this;
  this.load(function() {
    when(function() { return self.loaded(); }, self.ready);
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

SatisMeter.prototype.loaded = function() {
  return !!window.satismeter;
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

SatisMeter.prototype.identify = function(identify) {
  var traits = identify.traits();
  traits.token = this.options.apiKey || this.options.token;
  traits.user = {
    id: identify.userId()
  };

  if (identify.name()) {
    traits.user.name = identify.name();
  }
  if (identify.email()) {
    traits.user.email = identify.email();
  }
  if (identify.created()) {
    traits.user.signUpDate = identify.created().toISOString();
  }

  // Remove traits that are already passed in user object
  delete traits.id;
  delete traits.email;
  delete traits.name;
  delete traits.created;

  window.satismeter(traits);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

SatisMeter.prototype.page = function() {
  window.satismeter({
    writeKey: this.options.apiKey || this.options.token,
    userId: this.analytics.user().id(),
    type: 'page'
  });
};

},{"@segment/analytics.js-integration":463,"do-when":623}],463:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":464,"./statics":465,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],464:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":466,"component-emitter":467,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":468}],465:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":467,"domify":624,"dup":39}],466:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],467:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],468:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],469:[function(require,module,exports){

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var is = require('is');
var del = require('obj-case').del;

/**
 * Expose `ScratchIt` integration.
 */

var ScratchIt = module.exports = integration('Scratch-it Analytics')
  .global('_ScratchIt')
  .global('ScratchItAnalytics')
  .option('trkId', '')
  .option('url', 'http://trk.scratch-it.com/trk')
  .tag('<script src="//static.scratch-it.com/public/scratch-it-analytics.min.js">');

/**
 * Initialize.
 */
ScratchIt.prototype.initialize = function() {
  var self = this;

  this.load(function() {
    if (!window.ScratchItAnalytics) {
      return null;
    }

    window._ScratchIt = new window.ScratchItAnalytics(self.options.trkId, { url: self.options.url });
    self.ready();
  });
};

/**
 * Loaded?
 *
 * @return {boolean}
 */
ScratchIt.prototype.loaded = function() {
  return is.object(window._ScratchIt);
};

/**
 * Track an event.
 *
 * @api public
 * @param {Track} track
 */

ScratchIt.prototype.track = function(track) {
  var parameters = track.properties();
  var event_type = parameters.event_type || 'track';
  del(parameters, 'event_type');
  window._ScratchIt.track(event_type, track.event(), parameters);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

ScratchIt.prototype.page = function(page) {
  var customProperties = page.properties();
  del(customProperties, 'event_type');
  window._ScratchIt.track('track', 'page_visit', customProperties);
};


/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

ScratchIt.prototype.identify = function(identify) {
  var userProps = {}
  var foundProps = false
  if (identify.email()) {
    foundProps = true
    userProps['email'] = identify.email()
  }
  if (identify.firstName()) {
    foundProps = true
    userProps['first_name'] = identify.firstName()
  }
  if (identify.lastName()) {
    foundProps = true
    userProps['last_name'] = identify.lastName()
  }
  if (foundProps) {
    window._ScratchIt.identify(userProps);
  }
};

},{"@segment/analytics.js-integration":586,"is":629,"obj-case":641}],470:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var ads = require('@segment/ad-params');
var clone = require('component-clone');
var cookie = require('component-cookie');
var extend = require('@ndhoule/extend');
var integration = require('@segment/analytics.js-integration');
var json = require('json3');
var keys = require('@ndhoule/keys');
var localstorage = require('yields-store');
var md5 = require('spark-md5').hash;
var protocol = require('@segment/protocol');
var send = require('@segment/send-json');
var topDomain = require('@segment/top-domain');
var utm = require('@segment/utm-params');
var uuid = require('uuid').v4;

/**
 * Cookie options
 */

var cookieOptions = {
  // 1 year
  maxage: 31536000000,
  secure: false,
  path: '/'
};

/**
 * Expose `Segment` integration.
 */

var Segment = exports = module.exports = integration('Segment.io')
  .option('apiKey', '')
  .option('apiHost', 'api.segment.io/v1')
  .option('beacon', false)
  .option('addBundledMetadata', false)
  .option('unbundledIntegrations', []);

/**
 * Get the store.
 *
 * @return {Function}
 */

exports.storage = function() {
  return protocol() === 'file:' || protocol() === 'chrome-extension:' ? localstorage : cookie;
};

/**
 * Expose global for testing.
 */

exports.global = window;

/**
 * Initialize.
 *
 * https://github.com/segmentio/segmentio/blob/master/modules/segmentjs/segment.js/v1/segment.js
 *
 * @api public
 */

Segment.prototype.initialize = function() {
  var self = this;
  this.ready();
  this.analytics.on('invoke', function(msg) {
    var action = msg.action();
    var listener = 'on' + msg.action();
    self.debug('%s %o', action, msg);
    if (self[listener]) self[listener](msg);
    self.ready();
  });
};

/**
 * Loaded.
 *
 * @api private
 * @return {boolean}
 */

Segment.prototype.loaded = function() {
  return true;
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Segment.prototype.onpage = function(page) {
  this.send('/p', page.json());
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Segment.prototype.onidentify = function(identify) {
  this.send('/i', identify.json());
};

/**
 * Group.
 *
 * @api public
 * @param {Group} group
 */

Segment.prototype.ongroup = function(group) {
  this.send('/g', group.json());
};

/**
 * ontrack.
 *
 * TODO: Document this.
 *
 * @api private
 * @param {Track} track
 */

Segment.prototype.ontrack = function(track) {
  var json = track.json();
  // TODO: figure out why we need traits.
  delete json.traits;
  this.send('/t', json);
};

/**
 * Alias.
 *
 * @api public
 * @param {Alias} alias
 */

Segment.prototype.onalias = function(alias) {
  var json = alias.json();
  var user = this.analytics.user();
  json.previousId = json.previousId || json.from || user.id() || user.anonymousId();
  json.userId = json.userId || json.to;
  delete json.from;
  delete json.to;
  this.send('/a', json);
};

/**
 * Normalize the given `msg`.
 *
 * @api private
 * @param {Object} msg
 */

Segment.prototype.normalize = function(msg) {
  this.debug('normalize %o', msg);
  var user = this.analytics.user();
  var global = exports.global;
  var query = global.location.search;
  var ctx = msg.context = msg.context || msg.options || {};
  delete msg.options;
  msg.writeKey = this.options.apiKey;
  ctx.userAgent = navigator.userAgent;
  if (!ctx.library) ctx.library = { name: 'analytics.js', version: this.analytics.VERSION };
  if (query) ctx.campaign = utm(query);
  this.referrerId(query, ctx);
  msg.userId = msg.userId || user.id();
  msg.anonymousId = user.anonymousId();
  msg.sentAt = new Date();
  if (this.options.addBundledMetadata) {
    var bundled = keys(this.analytics.Integrations);
    msg._metadata = {
      bundled: bundled,
      unbundled: this.options.unbundledIntegrations
    };
  }
  // add some randomness to the messageId checksum
  msg.messageId = 'ajs-' + md5(json.stringify(msg) + uuid());
  this.debug('normalized %o', msg);
  this.ampId(ctx);
  return msg;
};

/**
 * Add amp id if it exists.
 *
 * @param {Object} ctx
 */

Segment.prototype.ampId = function(ctx) {
  var ampId = this.cookie('segment_amp_id');
  if (ampId) ctx.amp = { id: ampId };
};

/**
 * Send `obj` to `path`.
 *
 * @api private
 * @param {string} path
 * @param {Object} obj
 * @param {Function} fn
 */

Segment.prototype.send = function(path, msg, fn) {
  var url = 'https://' + this.options.apiHost + path;
  fn = fn || noop;
  var self = this;

  // msg
  msg = this.normalize(msg);

  // send
  if (this.options.beacon && navigator.sendBeacon) {
    // Beacon returns false if the browser couldn't queue the data for transfer
    // (e.g: the data was too big)
    if (navigator.sendBeacon(url, json.stringify(msg))) {
      self.debug('beacon sent %o', msg);
      fn();
    } else {
      self.debug('beacon failed, falling back to ajax %o', msg);
      sendAjax();
    }
  } else {
    sendAjax();
  }

  function sendAjax() {
    // Beacons are sent as a text/plain POST
    var headers = { 'Content-Type': 'text/plain' };
    send(url, msg, headers, function(err, res) {
      self.debug('ajax sent %o, received %o', msg, arguments);
      if (err) return fn(err);
      res.url = url;
      fn(null, res);
    });
  }
};

/**
 * Gets/sets cookies on the appropriate domain.
 *
 * @api private
 * @param {string} name
 * @param {*} val
 */

Segment.prototype.cookie = function(name, val) {
  var store = Segment.storage();
  if (arguments.length === 1) return store(name);
  var global = exports.global;
  var href = global.location.href;
  var domain = '.' + topDomain(href);
  if (domain === '.') domain = '';
  this.debug('store domain %s -> %s', href, domain);
  var opts = clone(cookieOptions);
  opts.domain = domain;
  this.debug('store %s, %s, %o', name, val, opts);
  store(name, val, opts);
  if (store(name)) return;
  delete opts.domain;
  this.debug('fallback store %s, %s, %o', name, val, opts);
  store(name, val, opts);
};

/**
 * Add referrerId to context.
 *
 * TODO: remove.
 *
 * @api private
 * @param {Object} query
 * @param {Object} ctx
 */

Segment.prototype.referrerId = function(query, ctx) {
  var stored = this.cookie('s:context.referrer');
  var ad;

  if (stored) stored = json.parse(stored);
  if (query) ad = ads(query);

  ad = ad || stored;

  if (!ad) return;
  ctx.referrer = extend(ctx.referrer || {}, ad);
  this.cookie('s:context.referrer', json.stringify(ad));
};

/**
 * Noop.
 */

function noop() {}

},{"@ndhoule/extend":10,"@ndhoule/keys":13,"@segment/ad-params":18,"@segment/analytics.js-integration":471,"@segment/protocol":600,"@segment/send-json":601,"@segment/top-domain":604,"@segment/utm-params":605,"component-clone":609,"component-cookie":610,"json3":633,"spark-md5":662,"uuid":478,"yields-store":674}],471:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":472,"./statics":473,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],472:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":474,"component-emitter":475,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":476}],473:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":475,"domify":624,"dup":39}],474:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],475:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],476:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],477:[function(require,module,exports){
arguments[4][32][0].apply(exports,arguments)
},{"dup":32}],478:[function(require,module,exports){
arguments[4][33][0].apply(exports,arguments)
},{"./rng":477,"dup":33}],479:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var is = require('is');
var foldl = require('@ndhoule/foldl');
/**
 * Expose `Sentry` integration.
 */

var Sentry = module.exports = integration('Sentry')
  .global('Raven')
  .global('RavenConfig')
  .option('config', '')
  .option('serverName', null)
  .option('release', null)
  .option('ignoreErrors', [])
  .option('ignoreUrls', [])
  .option('whitelistUrls', [])
  .option('includePaths', [])
  .option('maxMessageLength', null)
  .option('logger', null)
  .tag('<script src="https://cdn.ravenjs.com/3.8.0/raven.min.js">');

/**
 * Initialize.
 *
 * https://docs.getsentry.com/hosted/clients/javascript/config/
 * https://github.com/getsentry/raven-js/blob/3.8.0/src/raven.js#L597-L600
 * @api public
 */

Sentry.prototype.initialize = function() {
  var dsnPublic = this.options.config;
  var options = {
    logger: this.options.logger,
    release: this.options.release,
    serverName: this.options.serverName,
    whitelistUrls: this.options.whitelistUrls,
    ignoreErrors: this.options.ignoreErrors,
    ignoreUrls: this.options.ignoreUrls,
    includePaths: this.options.includePaths,
    maxMessageLength: this.options.maxMessageLength
  };
  window.RavenConfig = {
    dsn: dsnPublic,
    config: reject(options)
  };

  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Sentry.prototype.loaded = function() {
  return is.object(window.Raven);
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Sentry.prototype.identify = function(identify) {
  window.Raven.setUserContext(identify.traits());
};

/**
 * Clean out null values
 */

function reject(obj) {
  return foldl(function(result, val, key) {
    // strip any null or empty string values
    if (val !== null && val !== '' && !is.array(val)) {
      result[key] = val;
    }
    // strip any empty arrays
    if (is.array(val)) {
      var ret = [];
      // strip if there's only an empty string or null in the array since the settings UI lets you save additional rows even though some may be empty strings
      for (var x = 0; x < val.length; x++) {
        if (val[x] !== null && val[x] !== '') ret.push(val[x]);
      }
      if (!is.empty(ret)) {
        result[key] = ret;
      }
    }
    return result;
  }, {}, obj);
}

},{"@ndhoule/foldl":11,"@segment/analytics.js-integration":480,"is":629}],480:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":481,"./statics":482,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],481:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":483,"component-emitter":484,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":485}],482:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":484,"domify":624,"dup":39}],483:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],484:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],485:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],486:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var defaults = require('@ndhoule/defaults');
var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Simplereach` integration.
 */

var SimpleReach = module.exports = integration('SimpleReach')
  .global('__reach_config')
  .global('SPR')
  .option('pid', '')
  .tag('<script src="//d8rk54i4mohrb.cloudfront.net/js/reach.js">');

/**
 * Initialize.
 * http://www.simplereach.com/docs/#standardImplementation
 * Some adjustments made to standard implementation
 *
 * @api public
 */

SimpleReach.prototype.initialize = function() {
  window.__reach_config = window.__reach_config || {};
  defaults(window.__reach_config, {
    pid: this.options.pid,
    reach_tracking: false
  });
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

SimpleReach.prototype.loaded = function() {
  return !!window.SPR;
};

/**
 * Page.
 *
 * http://www.simplereach.com/docs/ajax/
 *
 * @api public
 */

SimpleReach.prototype.page = function(page) {
  defaults(window.__reach_config, {
    url: page.url(),
    title: page.title()
  });

  if (window.__reach_config.url === false) {
    window.__reach_config.url = page.url();
  }

  window.SPR.collect(window.__reach_config);
};

/**
 * Page.
 *
 * http://www.simplereach.com/docs/ajax/
 *
 * @api public
 */
SimpleReach.prototype.track = function(track) {
  window.SPR.collect({
    pid: this.options.pid,
    reach_tracking: false,
    url: track.proxy('context.page.url'),
    title: track.proxy('context.page.title'),
    ctx_revenue: track.revenue(),
    ctx_order_id: track.orderId(),
    ctx_event_name: track.event()
  });
};

},{"@ndhoule/defaults":6,"@segment/analytics.js-integration":487}],487:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":488,"./statics":489,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],488:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":490,"component-emitter":491,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":492}],489:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":491,"domify":624,"dup":39}],490:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],491:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],492:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],493:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var is = require('is');
var tick = require('next-tick');

/**
 * Expose `SnapEngage` integration.
 */

var SnapEngage = module.exports = integration('SnapEngage')
  .assumesPageview()
  .global('SnapABug')
  .global('SnapEngage')
  .option('apiKey', '')
  .option('listen', false)
  .tag('<script src="//www.snapengage.com/cdn/js/{{ apiKey }}.js">');

/**
 * Integration object for root events.
 */

var integrationContext = {
  name: 'snapengage',
  version: '1.0.0'
};

/**
 * Initialize.
 *
 * http://help.snapengage.com/installation-guide-getting-started-in-a-snap/
 *
 * @api public
 */

SnapEngage.prototype.initialize = function() {
  var self = this;
  this.load(function() {
    if (self.options.listen) self.attachListeners();
    tick(self.ready);
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

SnapEngage.prototype.loaded = function() {
  return is.object(window.SnapABug) && is.object(window.SnapEngage);
};

/**
 * Identify.
 *
 * @api private
 * @param {Identify} identify
 */

SnapEngage.prototype.identify = function(identify) {
  var email = identify.email();
  if (!email) return;
  window.SnapABug.setUserEmail(email);
};

/**
 * Listen for events.
 *
 * https://developer.snapengage.com/javascript-api/setcallback/
 *
 * @api private
 */

SnapEngage.prototype.attachListeners = function() {
  var self = this;

  // Callback is passed `email, message, type`
  // TODO: Eventually this might pass information about the chat to Segment
  window.SnapEngage.setCallback('StartChat', function() {
    self.analytics.track('Live Chat Conversation Started',
      {},
      { context: { integration: integrationContext } });
  });

  // Callback is passed `agent, message`
  // TODO: Eventually this might pass information about the message to Segment
  window.SnapEngage.setCallback('ChatMessageReceived', function(agent) {
    self.analytics.track('Live Chat Message Received',
      { agentUsername: agent },
      { context: { integration: integrationContext } });
  });

  // Callback is passed `message`
  // TODO: Eventually this might pass information about the message to Segment
  window.SnapEngage.setCallback('ChatMessageSent', function() {
    self.analytics.track('Live Chat Message Sent',
      {},
      { context: { integration: integrationContext } });
  });

  // Callback is passed `type, status`
  // TODO: Eventually this might pass information about the status to Segment
  window.SnapEngage.setCallback('Close', function() {
    self.analytics.track('Live Chat Conversation Ended',
      {},
      { context: { integration: integrationContext } });
  });
};

},{"@segment/analytics.js-integration":494,"is":629,"next-tick":640}],494:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":495,"./statics":496,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],495:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":497,"component-emitter":498,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":499}],496:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":498,"domify":624,"dup":39}],497:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],498:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],499:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],500:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var bind = require('component-bind');
var integration = require('@segment/analytics.js-integration');
var when = require('do-when');

/**
 * Expose `Spinnakr` integration.
 */

var Spinnakr = module.exports = integration('Spinnakr')
  .assumesPageview()
  .global('_spinnakr_site_id')
  .global('_spinnakr')
  .option('siteId', '')
  .tag('<script src="//d3ojzyhbolvoi5.cloudfront.net/js/so.js">');

/**
 * Initialize.
 *
 * @api public
 */

Spinnakr.prototype.initialize = function() {
  window._spinnakr_site_id = this.options.siteId;
  var loaded = bind(this, this.loaded);
  var ready = this.ready;
  this.load(function() {
    when(loaded, ready);
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Spinnakr.prototype.loaded = function() {
  return !!window._spinnakr;
};

},{"@segment/analytics.js-integration":501,"component-bind":608,"do-when":623}],501:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":502,"./statics":503,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],502:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":504,"component-emitter":505,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":506}],503:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":505,"domify":624,"dup":39}],504:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],505:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],506:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],507:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `SupportHero` integration.
 */

var SupportHero = module.exports = integration('SupportHero')
  .assumesPageview()
  .global('supportHeroWidget')
  .option('token', '')
  .option('track', false)
  .tag('<script src="https://d29l98y0pmei9d.cloudfront.net/js/widget.min.js?k={{ token }}">');

/**
 * Initialize Support Hero.
 *
 * @api public
 */

SupportHero.prototype.initialize = function() {
  window.supportHeroWidget = {};
  window.supportHeroWidget.setUserId = window.supportHeroWidget.setUserId || function() {};
  window.supportHeroWidget.setUserTraits = window.supportHeroWidget.setUserTraits || function() {};
  this.load(this.ready);
};

/**
 * Has the Support Hero library been loaded yet?
 *
 * @api private
 * @return {boolean}
 */

SupportHero.prototype.loaded = function() {
  return !!window.supportHeroWidget;
};

/**
 * Identify a user.
 *
 * @api public
 * @param {Facade} identify
 */

SupportHero.prototype.identify = function(identify) {
  var id = identify.userId();
  var traits = identify.traits();
  if (id) {
    window.supportHeroWidget.setUserId(id);
  }
  if (traits) {
    window.supportHeroWidget.setUserTraits(traits);
  }
};

},{"@segment/analytics.js-integration":508}],508:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":509,"./statics":510,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],509:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":511,"component-emitter":512,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":513}],510:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":512,"domify":624,"dup":39}],511:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],512:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],513:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],514:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var is = require('is');
var keys = require('@ndhoule/keys');
var push = require('global-queue')('_tlq');

/**
 * Expose `Taplytics` integration.
 */

var Taplytics = module.exports = integration('Taplytics')
  .global('_tlq')
  .global('Taplytics')
  .option('apiKey', '')
  .option('options', {})
  .tag('<script id="taplytics" src="//cdn.taplytics.com/taplytics.min.js">')
  .assumesPageview();

/**
 * Initialize Taplytics.
 *
 * @api public
 */

Taplytics.prototype.initialize = function() {
  var options = this.options.options;
  var apiKey = this.options.apiKey;

  window._tlq = window._tlq || [];

  push('init', apiKey, options);

  this.load(this.ready);
};

/**
 * Has the Taplytics library been loaded yet?
 *
 * @api private
 * @return {boolean}
 */

Taplytics.prototype.loaded = function() {
  return window.Taplytics && is.object(window.Taplytics._in);
};

/**
 * Identify.
 *
 * @api public
 * @param {Facade} identify
 */

Taplytics.prototype.identify = function(identify) {
  var userId = identify.userId();
  var attrs = identify.traits() || {};

  if (userId) attrs.id = userId;

  if (keys(attrs).length) {
    push('identify', attrs);
  }
};

/**
 * Group.
 *
 * @api public
 * @param {Facade} group
 */

Taplytics.prototype.group = function(group) {
  var attrs = {};
  var groupId = group.groupId();
  var traits = group.traits();
  var user = this.analytics.user();
  var userId = user.id();

  if (groupId) attrs.groupId = groupId;
  if (traits) attrs.groupTraits = traits;
  if (userId) attrs.id = userId;

  if (keys(attrs).length) push('identify', attrs);
};

/**
 * Track.
 *
 * @api public
 * @param {Facade} track
 */

Taplytics.prototype.track = function(track) {
  var properties = track.properties() || {};
  var total = track.revenue() || track.total() || 0;

  push('track', track.event(), total, properties);
};

/**
* Page.
*
* @api public
* @param {Facade} page
*/

Taplytics.prototype.page = function(page) {
  var category = page.category() || undefined;
  var name = page.fullName() || undefined;
  var properties = page.properties() || {};

  push('page', category, name, properties);
};

/**
* Reset a user and log them out.
*
* @api private
*/

Taplytics.prototype.reset = function() {
  push('reset');
};

},{"@ndhoule/keys":13,"@segment/analytics.js-integration":515,"global-queue":625,"is":629}],515:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":516,"./statics":517,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],516:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":518,"component-emitter":519,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":520}],517:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":519,"domify":624,"dup":39}],518:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],519:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],520:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],521:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_tsq');
var slug = require('slug-component');

/**
 * Expose `Tapstream` integration.
 */

var Tapstream = module.exports = integration('Tapstream')
  .assumesPageview()
  .global('_tsq')
  .option('accountName', '')
  .option('trackAllPages', true)
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true)
  .tag('<script src="//cdn.tapstream.com/static/js/tapstream.js">');

/**
 * Initialize.
 *
 * @api public
 */

Tapstream.prototype.initialize = function() {
  window._tsq = window._tsq || [];
  push('setAccountName', this.options.accountName);
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Tapstream.prototype.loaded = function() {
  return !!(window._tsq && window._tsq.push !== Array.prototype.push);
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Tapstream.prototype.page = function(page) {
  var category = page.category();
  var opts = this.options;
  var name = page.fullName();

  // all pages
  if (opts.trackAllPages) {
    this.track(page.track());
  }

  // named pages
  if (name && opts.trackNamedPages) {
    this.track(page.track(name));
  }

  // categorized pages
  if (category && opts.trackCategorizedPages) {
    this.track(page.track(category));
  }
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

Tapstream.prototype.track = function(track) {
  var props = track.properties();
  // needs events as slugs
  push('fireHit', slug(track.event()), [props.url]);
};

},{"@segment/analytics.js-integration":522,"global-queue":625,"slug-component":661}],522:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":523,"./statics":524,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],523:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":525,"component-emitter":526,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":527}],524:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":526,"domify":624,"dup":39}],525:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],526:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],527:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],528:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var alias = require('@segment/alias');
var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Trakio` integration.
 */

var Trakio = module.exports = integration('trak.io')
  .assumesPageview()
  .global('trak')
  .option('token', '')
  .option('trackNamedPages', true)
  .option('trackCategorizedPages', true)
  .tag('<script src="//d29p64779x43zo.cloudfront.net/v1/trak.io.min.js">');

/**
 * Options aliases.
 */

var optionsAliases = {
  initialPageview: 'auto_track_page_view'
};

/**
 * Initialize.
 *
 * https://docs.trak.io
 *
 * @api public
 */

Trakio.prototype.initialize = function() {
  var options = this.options;
  window.trak = window.trak || [];
  window.trak.io = window.trak.io || {};
  window.trak.push = window.trak.push || function() {};
  /* eslint-disable */
  window.trak.io.load = window.trak.io.load || function(e){var r = function(e){return function(){window.trak.push([e].concat(Array.prototype.slice.call(arguments,0))); }; } ,i=["initialize","identify","track","alias","channel","source","host","protocol","page_view"]; for (var s=0;s<i.length;s++) window.trak.io[i[s]]=r(i[s]); window.trak.io.initialize.apply(window.trak.io,arguments); };
  /* eslint-enable */
  window.trak.io.load(options.token, alias(options, optionsAliases));
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Trakio.prototype.loaded = function() {
  return !!(window.trak && window.trak.loaded);
};

/**
 * Page.
 *
 * @param {Page} page
 */

Trakio.prototype.page = function(page) {
  var category = page.category();
  var props = page.properties();
  var name = page.fullName();

  window.trak.io.page_view(props.path, name || props.title);

  if (category) window.trak.io.channel(category);

  // named pages
  if (name && this.options.trackNamedPages) {
    this.track(page.track(name));
  }

  // categorized pages
  if (category && this.options.trackCategorizedPages) {
    this.track(page.track(category));
  }
};

/**
 * Trait aliases.
 *
 * http://docs.trak.io/properties.html#special
 */

var traitAliases = {
  avatar: 'avatar_url',
  firstName: 'first_name',
  lastName: 'last_name'
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

Trakio.prototype.identify = function(identify) {
  var traits = identify.traits(traitAliases);
  var id = identify.userId();

  if (id) {
    window.trak.io.identify(id, traits);
  } else {
    window.trak.io.identify(traits);
  }
};

/**
 * Group.
 *
 * @param {String} id (optional)
 * @param {Object} properties (optional)
 * http://docs.trak.io/company.html
 *
 */

Trakio.prototype.group = function(group) {
  var traits = group.traits();
  delete traits.id;
  var id = group.groupId();
  if (id) window.trak.io.company_id(id);
  window.trak.io.company(traits);
};

/**
 * Track.
 *
 * @param {Track} track
 */

Trakio.prototype.track = function(track) {
  var properties = track.properties();
  var channel = track.proxy('properties.channel');
  if (channel) {
    delete properties.channel;
    window.trak.io.track(track.event(), channel, properties);
  } else {
    window.trak.io.track(track.event(), properties);
  }
};

/**
 * Alias.
 *
 * @param {Alias} alias
 */

Trakio.prototype.alias = function(alias) {
  if (!window.trak.io.distinct_id) return;
  var from = alias.from();
  var to = alias.to();

  if (to === window.trak.io.distinct_id()) return;

  if (from) {
    window.trak.io.alias(from, to);
  } else {
    window.trak.io.alias(to);
  }
};

},{"@segment/alias":19,"@segment/analytics.js-integration":529}],529:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":530,"./statics":531,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],530:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":532,"component-emitter":533,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":534}],531:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":533,"domify":624,"dup":39}],532:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],533:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],534:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],535:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var defaults = require('@ndhoule/defaults');
var foldl = require('@ndhoule/foldl');
var each = require('component-each');
var get = require('obj-case');
var Track = require('segmentio-facade').Track;
var extend = require('@ndhoule/extend');

/**
 * Expose `TwitterAds`.
 */

var TwitterAds = module.exports = integration('Twitter Ads')
  .option('page', '')
  .option('universalTagPixelId', '')
  .option('identifier', 'productId')
  .tag('singleTag', '<img src="//analytics.twitter.com/i/adsct?txn_id={{ pixelId }}&p_id=Twitter&tw_sale_amount={{ revenue }}&tw_order_quantity={{ quantity }}"/>')
  .tag('universalTag', '<script src="//static.ads-twitter.com/uwt.js">')
  .mapping('events');

/**
 * Initialize.
 *
 * @api public
 */

TwitterAds.prototype.initialize = function() {
  var self = this;

  // load universal website tag
  if (this.options.universalTagPixelId) {
    /* eslint-disable */
    (function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[])})(window,document,'script');
    /* eslint-disable */

    this.load('universalTag', function() {
      window.twq('init', self.options.universalTagPixelId);
      self.ready();
    });
  } else {
    this.ready();
  }
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

TwitterAds.prototype.page = function(page) {
  if (this.options.universalTagPixelId) {
    window.twq('track', 'PageView');
  } else if (this.options.page) {
    this.load('singleTag', {
      pixelId: this.options.page,
      revenue: 0, // default
      quantity: 0 // default
    });
  }
};

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

TwitterAds.prototype.track = function(track) {
  this.fireLegacyConversionTags(track);
};

/**
 * Products Searched
 *
 * Required params: None
 *
 * @api public
 * @param {Track} track
 */

TwitterAds.prototype.productsSearched = function(track) {
  this.fireLegacyConversionTags(track);

  if (this.options.universalTagPixelId) {
    var payload = setStatus(track.properties());
    window.twq('track', 'Search', payload);
  }
};

/**
 * Product Viewed
 *
 * Required params: `content_ids`, `content_type`
 *
 * @api public
 * @param {Track} product
 */

TwitterAds.prototype.productViewed = function(product) {
  this.fireLegacyConversionTags(product);

  if (this.options.universalTagPixelId) {
    var props = product.properties();
    var identifier = this.options.identifier; // sku or productId
    var payload = {
      content_ids: [product[identifier]()],
      content_type: 'product', // Must be hardcoded
      content_name: product.name(),
      content_category: product.category()
    };

    payload = extend(payload, setStatus(props));

    window.twq('track', 'ViewContent', payload);
  }
};

/**
 * Product Added
 *
 * Required params: `content_ids`, `content_type`
 *
 * @api public
 * @param {Track} product
 */

TwitterAds.prototype.productAdded = function(product) {
  this.fireLegacyConversionTags(product);

  if (this.options.universalTagPixelId) {
    var props = product.properties();
    var identifier = this.options.identifier; // sku or productId
    var payload = {
      content_ids: [product[identifier]()],
      content_type: 'product', // Must be hardcoded
      content_name: product.name()
    };

    payload = extend(payload, setStatus(props));

    window.twq('track', 'AddToCart', payload);
  }
};

/**
 * Order Completed.
 *
 * Required params: `value`, `currency`, `content_type`, `content_ids`
 *
 * @api public
 * @param {Track} track
 */

TwitterAds.prototype.orderCompleted = function(track) {
  var identifier = this.options.identifier; // 'sku' or 'productId'
  // add up all the quantities of each product
  var sumOfQuantities = foldl(function(cartQuantity, product) {
    return cartQuantity + (get(product, 'quantity') || 0);
  }, 0, track.products());

  this.fireLegacyConversionTags(track, { quantity: sumOfQuantities });

  // Advanced Conversion Tracking
  // If you do not predefine these events, Twitter still collects them but you won't be able to
  // attribute this event inside your running campaigns
  if (this.options.universalTagPixelId) {
    var payload = {
      currency: track.currency(), // Defaults to 'USD'
      content_type: 'product', // Must be hardcoded
      order_id: track.orderId(),
      num_items: sumOfQuantities.toString() // Twitter requires string value
    };

    if (track.revenue()) payload.value = track.revenue().toFixed(2);

    payload = extend(payload, setStatus(track.properties()));

    // Content Ids and Name needs some data massaging
    var content = foldl(function(ret, item) {
      var product = new Track({ properties: item });
      var contentId = product[identifier]();
      ret.ids.push(contentId);
      ret.names.push(product.name());

      return ret;
    }, { ids: [], names: [] }, track.products());

    // Sorting for browser consistency
    payload.content_ids = content.ids.sort();
    payload.content_name = content.names.sort().join(', '); // Twitter confirmed this is the recommended way to send multiple product names

    window.twq('track', 'Purchase', payload);
  }
};

/**
 * Product Added To Wishlist
 *
 * Required params: None
 *
 * @api public
 * @param {Track} product
 */

TwitterAds.prototype.productAddedToWishlist = function(product) {
  this.fireLegacyConversionTags(product);

  if (this.options.universalTagPixelId) {
    var props = product.properties();
    var identifier = this.options.identifier; // sku or productId
    var payload = {
      content_name: product.name(),
      content_category: product.category(),
      content_ids: [product[identifier]()]
    };

    payload = extend(payload, setStatus(props));

    window.twq('track', 'AddToWishlist', payload);
  }
};

/**
 * Checkout Started
 *
 * Required params: None
 *
 * @api public
 * @param {Track} track
 */

TwitterAds.prototype.checkoutStarted = function(track) {
  // add up all the quantities of each product
  var sumOfQuantities = foldl(function(cartQuantity, product) {
    return cartQuantity + (get(product, 'quantity') || 0);
  }, 0, track.products());

  this.fireLegacyConversionTags(track, { quantity: sumOfQuantities });

  if (this.options.universalTagPixelId) {
    var identifier = this.options.identifier; // sku or productId

    // Content Ids and Name needs some data massaging
    var content = foldl(function(ret, item) {
      var product = new Track({ properties: item });
      var contentId = product[identifier]();
      ret.ids.push(contentId);
      ret.names.push(product.name());
      ret.categories.push(product.category());

      return ret;
    }, { ids: [], names: [], categories: [] }, track.products());

    // Sorting for browser consistency
    var payload = {
      content_ids: content.ids.sort(),
      content_name: content.names.sort().join(', '), // Twitter confirmed this is the recommended way to send multiple product names
      content_category: content.categories.join(', ')
    };

    payload = extend(payload, setStatus(track.properties()));

    window.twq('track', 'InitiateCheckout', payload);
  }
};

/**
 * Payment Info Entered
 *
 * Required params: None
 *
 * @api public
 * @param {Track} track
 */

TwitterAds.prototype.paymentInfoEntered = function(track) {
  this.fireLegacyConversionTags(track);

  var payload = extend({}, setStatus(track.properties()));

  if (this.options.universalTagPixelId) window.twq('track', 'AddPaymentInfo', payload);
};

/**
 * Track Legacy Conversion Tags
 *
 * @api private
 * @param {Object} track
 * @param {Object} override
 */

TwitterAds.prototype.fireLegacyConversionTags = function(track, override) {
  // Only fire events that are mapped in settings
  var events = this.events(track.event());
  var self = this;

  // Fire conversion tag(s) for each mapped event
  each(events, function(pixelId) {
    var tagParams= {
      pixelId: pixelId,
      quantity: track.proxy('properties.quantity') || 0,
      revenue: track.revenue() || 0
    };

    // Allow for overriding default tag params mapping
    if (override) tagParams = defaults(override, tagParams);

    self.load('singleTag', tagParams);
  });
}

/**
 * Set status
 *
 * @api private
 * @param {Object} properties
 * @return {Object} ret
 */

function setStatus(properties) {
  return properties.status ? { status: properties.status } : {};
}


},{"@ndhoule/defaults":6,"@ndhoule/extend":10,"@ndhoule/foldl":11,"@segment/analytics.js-integration":586,"component-each":611,"obj-case":641,"segmentio-facade":655}],536:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Identify = require('segmentio-facade').Identify;
var clone = require('component-clone');
var integration = require('@segment/analytics.js-integration');

/**
 * Expose Userlike integration.
 */

var Userlike = module.exports = integration('Userlike')
  .assumesPageview()
  .global('userlikeConfig')
  .global('userlikeData')
  .option('secretKey', '')
  .option('listen', false)
  .tag('<script src="//userlike-cdn-widgets.s3-eu-west-1.amazonaws.com/{{ secretKey }}.js">');

/**
 * The context for this integration.
 */

var integrationContext = {
  name: 'userlike',
  version: '1.0.0'
};

/**
 * Initialize.
 *
 * @api public
 */

Userlike.prototype.initialize = function() {
  var self = this;
  var segment_base_info = clone(this.options); 
  var user = this.analytics.user();
  var identify = new Identify({
    userId: user.id(),
    traits: user.traits()
  });

  // FIXME: Should this be a global? Waiting for answer from Userlike folks as
  // of 5/19/2015
  //
  // https://github.com/thomassittig/analytics.js-integrations/commit/e8fb4c067abe7f8549d0e0153504fd24a9aa4b53
  // segment_base_info = clone(this.options);

  segment_base_info.visitor = {
    name: identify.name(),
    email: identify.email()
  };

  if (!window.userlikeData) window.userlikeData = { custom: {} };
  window.userlikeData.custom.segmentio = segment_base_info;

  this.load(function() {
    if (self.options.listen) self.attachListeners();
    self.ready();
  });
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Userlike.prototype.loaded = function() {
  return !!(window.userlikeConfig && window.userlikeData);
};

/**
 * Listen for chat events.
 *
 * TODO: As of 4/17/2015, Userlike doesn't give access to the message body in events.
 * Revisit this/send it when they do.
 */

Userlike.prototype.attachListeners = function() {
  var self = this;
  window.userlikeTrackingEvent = function(eventName, globalCtx, sessionCtx) {
    if (eventName === 'chat_started') {
      self.analytics.track(
        'Live Chat Conversation Started',
        { agentId: sessionCtx.operator_id, agentName: sessionCtx.operator_name },
        { context: { integration: integrationContext }
      });
    }
    if (eventName === 'message_operator_terminating') {
      self.analytics.track(
        'Live Chat Message Sent',
        { agentId: sessionCtx.operator_id, agentName: sessionCtx.operator_name },
        { context: { integration: integrationContext }
      });
    }
    if (eventName === 'message_client_terminating') {
      self.analytics.track(
        'Live Chat Message Received',
        { agentId: sessionCtx.operator_id, agentName: sessionCtx.operator_name },
        { context: { integration: integrationContext }
      });
    }
    if (eventName === 'chat_quit') {
      self.analytics.track(
        'Live Chat Conversation Ended',
        { agentId: sessionCtx.operator_id, agentName: sessionCtx.operator_name },
        { context: { integration: integrationContext }
      });
    }
  };
};

},{"@segment/analytics.js-integration":537,"component-clone":609,"segmentio-facade":655}],537:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":538,"./statics":539,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],538:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":540,"component-emitter":541,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":542}],539:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":541,"domify":624,"dup":39}],540:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],541:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],542:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],543:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var alias = require('@segment/alias');
var convertDates = require('@segment/convert-dates');
var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('UserVoice');
var unix = require('to-unix-timestamp');

/**
 * Expose `UserVoice` integration.
 */

var UserVoice = module.exports = integration('UserVoice')
  .assumesPageview()
  .global('UserVoice')
  .global('showClassicWidget')
  .option('apiKey', '')
  .option('classic', false)
  .option('forumId', null)
  .option('showWidget', true)
  .option('mode', 'contact')
  .option('accentColor', '#448dd6')
  .option('screenshotEnabled', true)
  .option('smartvote', true)
  .option('trigger', null)
  .option('triggerPosition', 'bottom-right')
  .option('triggerColor', '#ffffff')
  .option('triggerBackgroundColor', 'rgba(46, 49, 51, 0.6)')
  // BACKWARD COMPATIBILITY: classic options
  .option('classicMode', 'full')
  .option('primaryColor', '#cc6d00')
  .option('linkColor', '#007dbf')
  .option('defaultMode', 'support')
  .option('tabLabel', 'Feedback & Support')
  .option('tabColor', '#cc6d00')
  .option('tabPosition', 'middle-right')
  .option('tabInverted', false)
  .option('customTicketFields', {})
  .tag('<script src="//widget.uservoice.com/{{ apiKey }}.js">');

/**
 * When in "classic" mode, on `construct` swap all of the method to point to
 * their classic counterparts.
 *
 * @api private
 */

UserVoice.on('construct', function(integration) {
  if (!integration.options.classic) return;
  integration.group = undefined;
  integration.identify = integration.identifyClassic;
  integration.initialize = integration.initializeClassic;
});

/**
 * Initialize.
 *
 * @api public
 */

UserVoice.prototype.initialize = function() {
  var options = this.options;
  var opts = formatOptions(options);
  push('set', opts);
  push('autoprompt', {});

  if (options.showWidget) {
    if (options.trigger) {
      push('addTrigger', options.trigger, opts);
    } else {
      push('addTrigger', opts);
    }
  }

  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

UserVoice.prototype.loaded = function() {
  return !!(window.UserVoice && window.UserVoice.push !== Array.prototype.push);
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

UserVoice.prototype.identify = function(identify) {
  var traits = identify.traits({ created: 'created_at' });
  traits = convertDates(traits, unix);
  push('identify', traits);
};

/**
 * Group.
 *
 * @api public
 * @param {Group} group
 */

UserVoice.prototype.group = function(group) {
  var traits = group.traits({ created: 'created_at' });
  traits = convertDates(traits, unix);
  push('identify', { account: traits });
};

/**
 * Initialize (classic).
 *
 * @api private
 */

UserVoice.prototype.initializeClassic = function() {
  var options = this.options;
  // part of public api
  window.showClassicWidget = showClassicWidget;
  if (options.showWidget) showClassicWidget('showTab', formatClassicOptions(options));
  this.load(this.ready);
};

/**
 * Identify (classic).
 *
 * @api private
 * @param {Identify} identify
 */

UserVoice.prototype.identifyClassic = function(identify) {
  push('setCustomFields', identify.traits());
};

/**
 * Format the options for UserVoice.
 *
 * @api private
 * @param {Object} options
 * @return {Object}
 */

function formatOptions(options) {
  return alias(options, {
    forumId: 'forum_id',
    accentColor: 'accent_color',
    smartvote: 'smartvote_enabled',
    triggerColor: 'trigger_color',
    triggerBackgroundColor: 'trigger_background_color',
    triggerPosition: 'trigger_position',
    screenshotEnabled: 'screenshot_enabled',
    customTicketFields: 'ticket_custom_fields'
  });
}

/**
 * Format the classic options for UserVoice.
 *
 * @api private
 * @param {Object} options
 * @return {Object}
 */

function formatClassicOptions(options) {
  return alias(options, {
    forumId: 'forum_id',
    classicMode: 'mode',
    primaryColor: 'primary_color',
    tabPosition: 'tab_position',
    tabColor: 'tab_color',
    linkColor: 'link_color',
    defaultMode: 'default_mode',
    tabLabel: 'tab_label',
    tabInverted: 'tab_inverted'
  });
}

/**
 * Show the classic version of the UserVoice widget. This method is usually part
 * of UserVoice classic's public API.
 *
 * @api private
 * @param {String} type ('showTab' or 'showLightbox')
 * @param {Object} options (optional)
 */

function showClassicWidget(type, options) {
  type = type || 'showLightbox';
  push(type, 'classic_widget', options);
}

},{"@segment/alias":19,"@segment/analytics.js-integration":544,"@segment/convert-dates":593,"global-queue":625,"to-unix-timestamp":668}],544:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":545,"./statics":546,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],545:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":547,"component-emitter":548,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":549}],546:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":548,"domify":624,"dup":39}],547:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],548:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],549:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],550:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var cookie = require('component-cookie');
var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('_veroq');

/**
 * Expose `Vero` integration.
 */

var Vero = module.exports = integration('Vero')
  .global('_veroq')
  .option('apiKey', '')
  .tag('<script src="//d3qxef4rp70elm.cloudfront.net/m.js">');

/**
 * Initialize.
 *
 * https://github.com/getvero/vero-api/blob/master/sections/js.md
 *
 * @api public
 */

Vero.prototype.initialize = function() {
  // clear default cookie so vero parses correctly.
  // this is for the tests.
  // basically, they have window.addEventListener('unload')
  // which then saves their "command_store", which is an array.
  // so we just want to create that initially so we can reload the tests.
  if (!cookie('__veroc4')) cookie('__veroc4', '[]');
  push('init', { api_key: this.options.apiKey });
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Vero.prototype.loaded = function() {
  return !!(window._veroq && window._veroq.push !== Array.prototype.push);
};

/**
 * Page.
 *
 * https://www.getvero.com/knowledge-base#/questions/71768-Does-Vero-track-pageviews
 *
 * @api public
 * @param {Page} page
 */

Vero.prototype.page = function() {
  push('trackPageview');
};

/**
 * Identify.
 *
 * https://www.getvero.com/api/http/#users
 * https://github.com/getvero/vero-api/blob/master/sections/js.md#user-identification
 *
 * @api public
 * @param {Identify} identify
 */

Vero.prototype.identify = function(identify) {
  var traits = identify.traits();
  var email = identify.email();
  var id = identify.userId();
  // userId OR email address are required by Vero's API. When userId isn't present,
  // email will be used as the userId.
  if (!id && !email) return;
  push('user', traits);
};

/**
 * Track.
 *
 * https://www.getvero.com/api/http/#actions
 * https://github.com/getvero/vero-api/blob/master/sections/js.md#tracking-events
 *
 * @api public
 * @param {Track} track
 */

Vero.prototype.track = function(track) {
  var regex = /[uU]nsubscribe/;

  if (track.event().match(regex)) {
    push('unsubscribe', { id: track.properties().id });
  } else {
    push('track', track.event(), track.properties(), { source: 'segment' });
  }
};

/**
 * Alias.
 *
 * https://www.getvero.com/api/http/#users
 * https://github.com/getvero/vero-api/blob/master/sections/api/users.md
 *
 * @api public
 * @param {Alias} alias
 */

Vero.prototype.alias = function(alias) {
  var to = alias.to();

  if (alias.from()) {
    push('reidentify', to, alias.from());
  } else {
    push('reidentify', to);
  }
};

},{"@segment/analytics.js-integration":551,"component-cookie":610,"global-queue":625}],551:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":552,"./statics":553,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],552:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":554,"component-emitter":555,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":556}],553:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":555,"domify":624,"dup":39}],554:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],555:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],556:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],557:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('component-each');
var integration = require('@segment/analytics.js-integration');
var tick = require('next-tick');

/**
 * Expose `VWO` integration.
 */

var VWO = module.exports = integration('Visual Website Optimizer')
  .global('_vis_opt_queue')
  .global('_vis_opt_revenue_conversion')
  .global('_vwo_exp')
  .global('_vwo_exp_ids')
  .option('replay', true)
  .option('listen', false);

/**
 * The context for this integration.
 */

var integrationContext = {
  name: 'visual-website-optimizer',
  version: '1.0.0'
};

/**
 * Initialize.
 *
 * http://v2.visualwebsiteoptimizer.com/tools/get_tracking_code.php
 */

VWO.prototype.initialize = function() {
  var self = this;
  if (this.options.replay) {
    tick(function() {
      self.replay();
    });
  }
  if (this.options.listen) {
    tick(function() {
      self.roots();
    });
  }
  this.ready();
};

/**
 * Completed Purchase.
 *
 * https://vwo.com/knowledge/vwo-revenue-tracking-goal
 */

VWO.prototype.orderCompleted = function(track) {
  var total = track.total() || track.revenue() || 0;
  enqueue(function() {
    window._vis_opt_revenue_conversion(total);
  });
};

/**
 * Replay the experiments the user has seen as traits to all other integrations.
 * Wait for the next tick to replay so that the `analytics` object and all of
 * the integrations are fully initialized.
 */

VWO.prototype.replay = function() {
  var analytics = this.analytics;

  experiments(function(err, traits) {
    if (traits) analytics.identify(traits);
  });
};

/**
 * Replay the experiments the user has seen as traits to all other integrations.
 * Wait for the next tick to replay so that the `analytics` object and all of
 * the integrations are fully initialized.
 */

VWO.prototype.roots = function() {
  var analytics = this.analytics;

  rootExperiments(function(err, data) {
    each(data, function(experimentId, variationName) {
      analytics.track(
        'Experiment Viewed',
        {
          experimentId: experimentId,
          variationName: variationName
        },
        { context: { integration: integrationContext } }
      );
    });
  });
};

/**
 * Get dictionary of experiment keys and variations.
 *
 * http://visualwebsiteoptimizer.com/knowledge/integration-of-vwo-with-kissmetrics/
 *
 * @param {Function} fn
 * @return {Object}
 */

function rootExperiments(fn) {
  enqueue(function() {
    var data = {};
    var experimentIds = window._vwo_exp_ids;
    if (!experimentIds) return fn();
    each(experimentIds, function(experimentId) {
      var variationName = variation(experimentId);
      if (variationName) data[experimentId] = variationName;
    });
    fn(null, data);
  });
}

/**
 * Get dictionary of experiment keys and variations.
 *
 * http://visualwebsiteoptimizer.com/knowledge/integration-of-vwo-with-kissmetrics/
 *
 * @param {Function} fn
 * @return {Object}
 */

function experiments(fn) {
  enqueue(function() {
    var data = {};
    var ids = window._vwo_exp_ids;
    if (!ids) return fn();
    each(ids, function(id) {
      var name = variation(id);
      if (name) data['Experiment: ' + id] = name;
    });
    fn(null, data);
  });
}

/**
 * Add a `fn` to the VWO queue, creating one if it doesn't exist.
 *
 * @param {Function} fn
 */

function enqueue(fn) {
  window._vis_opt_queue = window._vis_opt_queue || [];
  window._vis_opt_queue.push(fn);
}

/**
 * Get the chosen variation's name from an experiment `id`.
 *
 * http://visualwebsiteoptimizer.com/knowledge/integration-of-vwo-with-kissmetrics/
 *
 * @param {String} id
 * @return {String}
 */

function variation(id) {
  var experiments = window._vwo_exp;
  if (!experiments) return null;
  var experiment = experiments[id];
  var variationId = experiment.combination_chosen;
  return variationId ? experiment.comb_n[variationId] : null;
}

},{"@segment/analytics.js-integration":586,"component-each":611,"next-tick":640}],558:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var useHttps = require('use-https');

/**
 * Expose `WebEngage` integration.
 */

var WebEngage = module.exports = integration('WebEngage')
  .readyOnInitialize()
  .global('webengage')
  .option('licenseCode', '')
  .tag('http', '<script src="http://cdn.widgets.webengage.com/js/webengage-min-v-6.0.js">')
  .tag('https', '<script src="https://ssl.widgets.webengage.com/js/webengage-min-v-6.0.js">');

/**
 * Initialize.
 *
 * http://docs.webengage.com/docs/web-sdk-integration#section-integration-code
 * @api public
 */

WebEngage.prototype.initialize = function() {
  /* eslint-disable */

  !function(e,t,n){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),arguments])}}var i,s,r=e[n],g=" ",l="init options track screen onReady".split(g),a="feedback survey notification".split(g),c="options render clear abort".split(g),p="Open Close Submit Complete View Click".split(g),u="identify login logout setAttribute".split(g);if(!r||!r.__v){for(e[n]=r={__queue:[],__v:"6.0",user:{}},i=0;i<l.length;i++)o(r,[l[i]]);for(i=0;i<a.length;i++){for(r[a[i]]={},s=0;s<c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s<p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i<u.length;i++)o(r.user,["user",u[i]]);}}(window,document,"webengage");

  window.webengage.ixP = 'Segment';
  /* eslint-enable */

  window.webengage.init(this.options.licenseCode);

  var name = useHttps() ? 'https' : 'http';
  this.load(name, this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

WebEngage.prototype.loaded = function() {
  return !!window.webengage;
};


/**
 * Identify.
 *
 * http://docs.webengage.com/docs/web-sdk-user#section-webengage-user-login
 *
 * @api public
 * @param {Identify} identify
 */

WebEngage.prototype.identify = function(identify) {
  var traits = identify.traits();
  var id = identify.userId();
  if (id) window.webengage.user.login(id);

  if (traits) window.webengage.user.setAttribute(mapTraits(traits));
};


/**
 * Track.
 *
 * http://docs.webengage.com/docs/web-sdk-events#section-webengage-track
 *
 * @api public
 * @param {Track} track
 */

WebEngage.prototype.track = function(track) {
  var event = track.event();
  var properties = track.properties();
  window.webengage.track(event, properties);
};


/**
 * Page.
 *
 * http://docs.webengage.com/docs/web-sdk-integration#section-webengage-screen
 * @param {Page} page
 */

WebEngage.prototype.page = function(page) {
  var name = page.name() || '';
  var properties = page.properties();

  window.webengage.screen(name, properties);
};


/**
 * Map traits to their WebEngage attributes.
 *
 * http://docs.webengage.com/docs/web-sdk-user#section-reserved-attributes
 *
 * @param {Object} traits
 * @return {Object} mapped
 * @api private
 */

function mapTraits(traits) {
  var aliases = {
    name: 'we_first_name',
    firstName: 'we_first_name',
    lastName: 'we_last_name',
    email: 'we_email',
    gender: 'we_gender',
    birthday: 'we_birth_date',
    phone: 'we_phone',
    company: 'we_company'
  };

  var mapped = {};
  for (var k in traits) {
    if (aliases.hasOwnProperty(k)) {
      mapped[aliases[k]] = traits[k];
    } else {
      mapped[k] = traits[k];
    }
  }

  if (Object.prototype.toString.call(mapped.we_birth_date) === '[object Date]') {
    var date = mapped.we_birth_date;

    mapped.we_birth_date = date.getUTCFullYear()
      + '-' + pad(date.getUTCMonth() + 1)
      + '-' + pad(date.getUTCDate());
  }

  return mapped;
}


/**
 * Pad single digit numbers with a leading 0.
 *
 * @param {number} number
 * @return {number}
 * @api private
 */

function pad(number) {
  return number < 10 ? '0' + number : number;
}

},{"@segment/analytics.js-integration":559,"use-https":672}],559:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":560,"./statics":561,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],560:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":562,"component-emitter":563,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":564}],561:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":563,"domify":624,"dup":39}],562:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],563:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],564:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],565:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var each = require('component-each');
var integration = require('@segment/analytics.js-integration');
var toSnakeCase = require('to-snake-case');
var is = require('is');
var foldl = require('@ndhoule/foldl');
var json = require('json3');
var isostring = require('isostring');
var time = require('unix-time');

/**
 * Expose `Woopra` integration.
 */

var Woopra = module.exports = integration('Woopra')
  .global('woopra')
  .option('domain', '')
  .option('cookieName', 'wooTracker')
  .option('cookieDomain', null)
  .option('cookiePath', '/')
  .option('ping', true)
  .option('pingInterval', 12000)
  .option('idleTimeout', 300000)
  .option('downloadTracking', true)
  .option('outgoingTracking', true)
  .option('outgoingIgnoreSubdomain', true)
  .option('downloadPause', 200)
  .option('outgoingPause', 400)
  .option('ignoreQueryUrl', true)
  .option('hideCampaign', false)
  .tag('<script src="//static.woopra.com/js/w.js">');

/**
 * Initialize.
 *
 * http://www.woopra.com/docs/setup/javascript-tracking/
 */

Woopra.prototype.initialize = function() {
  /* eslint-disable */
  (function(){var i, s, z, w = window, d = document, a = arguments, q = 'script', f = ['config', 'track', 'identify', 'visit', 'push', 'call'], c = function(){var i, self = this; self._e = []; for (i = 0; i < f.length; i++){(function(f){self[f] = function(){self._e.push([f].concat(Array.prototype.slice.call(arguments, 0))); return self; }; })(f[i]); } }; w._w = w._w || {}; for (i = 0; i < a.length; i++){ w._w[a[i]] = w[a[i]] = w[a[i]] || new c(); } })('woopra');
  /* eslint-enable */

  this.load(this.ready);
  each(this.options, function(key, value) {
    key = toSnakeCase(key);
    if (value == null) return;
    if (value === '') return;
    window.woopra.config(key, value);
  });
};

/**
 * Loaded?
 *
 * @return {Boolean}
 */

Woopra.prototype.loaded = function() {
  return !!(window.woopra && window.woopra.loaded);
};

/**
 * Page.
 *
 * @param {String} category (optional)
 */

Woopra.prototype.page = function(page) {
  var props = page.properties();
  var name = page.fullName();
  if (name) props.title = name;
  window.woopra.track('pv', props);
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

Woopra.prototype.identify = function(identify) {
  var traits = identify.traits();

  // Woopra likes timestamps in milliseconds
  // Ref: https://www.woopra.com/docs/manual/configure-schema/
  each(traits, function(key, val) {
    if (isostring(val) || is.date(val)) {
      traits[key] = time(val) * 1000;
    }
  });

  if (identify.name()) traits.name = identify.name();
  // `push` sends it off async
  window.woopra.identify(traits).push();
};

/**
 * Track.
 *
 * @param {Track} track
 */

Woopra.prototype.track = function(track) {
  window.woopra.track(track.event(), stringifyNested(track.properties()));
};

/**
 * Stringify nested objects.
 *
 * Undocumented aspect of Woopra's API, but apparently required. Breaks
 * on `Completed Order` `properties.products`.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function stringifyNested(obj) {
  return foldl(function(results, value, key) {
    if (is.array(obj[key])) {
      results[key] = json.stringify(obj[key]);
    } else {
      results[key] = obj[key];
    }
    return results;
  }, {}, obj);
}

},{"@ndhoule/foldl":11,"@segment/analytics.js-integration":566,"component-each":611,"is":629,"isostring":632,"json3":633,"to-snake-case":665,"unix-time":671}],566:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":567,"./statics":568,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],567:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":569,"component-emitter":570,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":571}],568:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":570,"domify":624,"dup":39}],569:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],570:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],571:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],572:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var omit = require('omit');

/**
 * Expose `Wootric` integration.
 */

var Wootric = module.exports = integration('Wootric')
  .assumesPageview()
  .option('accountToken', '')
  .global('wootricSettings')
  .global('wootric_survey_immediately')
  .global('wootric')
  .tag('library', '<script src="//d27j601g4x0gd5.cloudfront.net/segmentioSnippet.js"></script>')
  .tag('pixel', '<img src="//d8myem934l1zi.cloudfront.net/pixel.gif?account_token={{ accountToken }}&email={{ email }}&created_at={{ createdAt }}&url={{ url }}&random={{ cacheBuster }}">');

/**
 * Initialize Wootric.
 *
 * @api public
 */

Wootric.prototype.initialize = function() {
  // We use this to keep track of the last page that Wootric has tracked to
  // ensure we don't accidentally send a duplicate page call
  this.lastPageTracked = null;
  window.wootricSettings = window.wootricSettings || {};
  window.wootricSettings.account_token = this.options.accountToken;

  var self = this;
  this.load('library', function() {
    self.ready();
  });
};

/**
 * Has the Wootric library been loaded yet?
 *
 * @api private
 * @return {boolean}
 */

Wootric.prototype.loaded = function() {
  // We are always ready since we are just setting a global variable in initialize
  return !!window.wootric;
};

/**
 * Identify a user.
 *
 * @api public
 * @param {Facade} identify
 */

Wootric.prototype.identify = function(identify) {
  var traits = identify.traits();
  var email = identify.email();
  var createdAt = identify.created();
  var language = traits.language;

  if (createdAt && createdAt.getTime) window.wootricSettings.created_at = Math.round(createdAt.getTime() / 1000);
  if (language) window.wootricSettings.language = language;
  window.wootricSettings.email = email;
  // Set the rest of the traits as properties
  window.wootricSettings.properties = omit(['created', 'createdAt', 'email'], traits);

  window.wootric('run');
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

Wootric.prototype.page = function(page) {
  // Only track page if we haven't already tracked it
  if (this.lastPageTracked === window.location) {
    return;
  }

  // Set this page as the last page tracked
  this.lastPageTracked = window.location;

  var wootricSettings = window.wootricSettings;
  this.load('pixel', {
    accountToken: this.options.accountToken,
    email: encodeURIComponent(wootricSettings.email),
    createdAt: wootricSettings.created_at,
    url: encodeURIComponent(page.url()),
    cacheBuster: Math.random()
  });
};

},{"@segment/analytics.js-integration":573,"omit":643}],573:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":574,"./statics":575,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],574:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":576,"component-emitter":577,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":578}],575:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":577,"domify":624,"dup":39}],576:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],577:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],578:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],579:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var bind = require('component-bind');
var integration = require('@segment/analytics.js-integration');
var tick = require('next-tick');
var when = require('do-when');

/**
 * Expose `Yandex` integration.
 */

var Yandex = module.exports = integration('Yandex Metrica')
  .assumesPageview()
  .global('yandex_metrika_callbacks')
  .global('Ya')
  .option('type', 0)
  .option('counterId', null)
  .option('clickmap', false)
  .option('webvisor', false)
  .option('trackHash', false)
  .option('trackLinks', false)
  .option('accurateTrackBounce', false)
  .tag('<script src="//mc.yandex.ru/metrika/watch.js">');

/**
 * Initialize.
 *
 * https://tech.yandex.com/metrika/
 * http://help.yandex.com/metrica/objects/creating-object.xml
 *
 * @api public
 */

Yandex.prototype.initialize = function() {
  var id = this.options.counterId;
  var type = this.options.type;
  var clickmap = this.options.clickmap;
  var webvisor = this.options.webvisor;
  var trackHash = this.options.trackHash;
  var trackLinks = this.options.trackLinks;
  var accurateTrackBounce = this.options.accurateTrackBounce;

  push(function() {
    window['yaCounter' + id] = new window.Ya.Metrika({
      id: id,
      type: type,
      clickmap: clickmap,
      webvisor: webvisor,
      trackHash: trackHash,
      trackLinks: trackLinks,
      accurateTrackBounce: accurateTrackBounce
    });
  });

  var loaded = bind(this, this.loaded);
  var ready = this.ready;
  this.load(function() {
    when(loaded, function() {
      tick(ready);
    });
  });
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Yandex.prototype.loaded = function() {
  return !!(window.Ya && window.Ya.Metrika);
};

/**
 * Push a new callback on the global Yandex queue.
 *
 * @api private
 * @param {Function} callback
 */

function push(callback) {
  window.yandex_metrika_callbacks = window.yandex_metrika_callbacks || [];
  window.yandex_metrika_callbacks.push(callback);
}

},{"@segment/analytics.js-integration":580,"component-bind":608,"do-when":623,"next-tick":640}],580:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":581,"./statics":582,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],581:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":583,"component-emitter":584,"dup":38,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":585}],582:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":584,"domify":624,"dup":39}],583:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],584:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],585:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],586:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./protos":587,"./statics":588,"@ndhoule/clone":5,"@ndhoule/defaults":6,"@ndhoule/extend":10,"component-bind":608,"debug":621,"dup":37,"slug-component":661}],587:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Emitter = require('component-emitter');
var after = require('@ndhoule/after');
var each = require('@ndhoule/each');
var events = require('analytics-events');
var every = require('@ndhoule/every');
var fmt = require('@segment/fmt');
var foldl = require('@ndhoule/foldl');
var is = require('is');
var loadIframe = require('load-iframe');
var loadScript = require('@segment/load-script');
var nextTick = require('next-tick');
var normalize = require('to-no-case');

/**
 * hasOwnProperty reference.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * No operation.
 */

var noop = function noop() {};

/**
 * Window defaults.
 */

var onerror = window.onerror;
var onload = null;

/**
 * Mixin emitter.
 */

/* eslint-disable new-cap */
Emitter(exports);
/* eslint-enable new-cap */

/**
 * Initialize.
 */

exports.initialize = function() {
  var ready = this.ready;
  nextTick(ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

exports.loaded = function() {
  return false;
};

/**
 * Page.
 *
 * @api public
 * @param {Page} page
 */

/* eslint-disable no-unused-vars */
exports.page = function(page) {};
/* eslint-enable no-unused-vars */

/**
 * Track.
 *
 * @api public
 * @param {Track} track
 */

/* eslint-disable no-unused-vars */
exports.track = function(track) {};
/* eslint-enable no-unused-vars */

/**
 * Get values from items in `options` that are mapped to `key`.
 * `options` is an integration setting which is a collection
 * of type 'map', 'array', or 'mixed'
 *
 * Use cases include mapping events to pixelIds (map), sending generic
 * conversion pixels only for specific events (array), or configuring dynamic
 * mappings of event properties to query string parameters based on event (mixed)
 *
 * @api public
 * @param {Object|Object[]|String[]} options An object, array of objects, or
 * array of strings pulled from settings.mapping.
 * @param {string} key The name of the item in options whose metadata
 * we're looking for.
 * @return {Array} An array of settings that match the input `key` name.
 * @example
 *
 * // 'Map'
 * var events = { my_event: 'a4991b88' };
 * .map(events, 'My Event');
 * // => ["a4991b88"]
 * .map(events, 'whatever');
 * // => []
 *
 * // 'Array'
 * * var events = ['Completed Order', 'My Event'];
 * .map(events, 'My Event');
 * // => ["My Event"]
 * .map(events, 'whatever');
 * // => []
 *
 * // 'Mixed'
 * var events = [{ key: 'my event', value: '9b5eb1fa' }];
 * .map(events, 'my_event');
 * // => ["9b5eb1fa"]
 * .map(events, 'whatever');
 * // => []
 */

exports.map = function(options, key) {
  var normalizedComparator = normalize(key);
  var mappingType = getMappingType(options);

  if (mappingType === 'unknown') {
    return [];
  }

  return foldl(function(matchingValues, val, key) {
    var compare;
    var result;

    if (mappingType === 'map') {
      compare = key;
      result = val;
    }

    if (mappingType === 'array') {
      compare = val;
      result = val;
    }

    if (mappingType === 'mixed') {
      compare = val.key;
      result = val.value;
    }

    if (normalize(compare) === normalizedComparator) {
      matchingValues.push(result);
    }

    return matchingValues;
  }, [], options);
};

/**
 * Invoke a `method` that may or may not exist on the prototype with `args`,
 * queueing or not depending on whether the integration is "ready". Don't
 * trust the method call, since it contains integration party code.
 *
 * @api private
 * @param {string} method
 * @param {...*} args
 */

exports.invoke = function(method) {
  if (!this[method]) return;
  var args = Array.prototype.slice.call(arguments, 1);
  if (!this._ready) return this.queue(method, args);
  var ret;

  try {
    this.debug('%s with %o', method, args);
    ret = this[method].apply(this, args);
  } catch (e) {
    this.debug('error %o calling %s with %o', e, method, args);
  }

  return ret;
};

/**
 * Queue a `method` with `args`.
 *
 * @api private
 * @param {string} method
 * @param {Array} args
 */

exports.queue = function(method, args) {
  this._queue.push({ method: method, args: args });
};

/**
 * Flush the internal queue.
 *
 * @api private
 */

exports.flush = function() {
  this._ready = true;
  var self = this;

  each(function(call) {
    self[call.method].apply(self, call.args);
  }, this._queue);

  // Empty the queue.
  this._queue.length = 0;
};

/**
 * Reset the integration, removing its global variables.
 *
 * @api private
 */

exports.reset = function() {
  for (var i = 0; i < this.globals.length; i++) {
    window[this.globals[i]] = undefined;
  }

  window.onerror = onerror;
  window.onload = onload;
};

/**
 * Load a tag by `name`.
 *
 * @param {string} name The name of the tag.
 * @param {Object} locals Locals used to populate the tag's template variables
 * (e.g. `userId` in '<img src="https://whatever.com/{{ userId }}">').
 * @param {Function} [callback=noop] A callback, invoked when the tag finishes
 * loading.
 */

exports.load = function(name, locals, callback) {
  // Argument shuffling
  if (typeof name === 'function') { callback = name; locals = null; name = null; }
  if (name && typeof name === 'object') { callback = locals; locals = name; name = null; }
  if (typeof locals === 'function') { callback = locals; locals = null; }

  // Default arguments
  name = name || 'library';
  locals = locals || {};

  locals = this.locals(locals);
  var template = this.templates[name];
  if (!template) throw new Error(fmt('template "%s" not defined.', name));
  var attrs = render(template, locals);
  callback = callback || noop;
  var self = this;
  var el;

  switch (template.type) {
  case 'img':
    attrs.width = 1;
    attrs.height = 1;
    el = loadImage(attrs, callback);
    break;
  case 'script':
    el = loadScript(attrs, function(err) {
      if (!err) return callback();
      self.debug('error loading "%s" error="%s"', self.name, err);
    });
      // TODO: hack until refactoring load-script
    delete attrs.src;
    each(function(val, key) {
      el.setAttribute(key, val);
    }, attrs);
    break;
  case 'iframe':
    el = loadIframe(attrs, callback);
    break;
  default:
      // No default case
  }

  return el;
};

/**
 * Locals for tag templates.
 *
 * By default it includes a cache buster and all of the options.
 *
 * @param {Object} [locals]
 * @return {Object}
 */

exports.locals = function(locals) {
  locals = locals || {};
  var cache = Math.floor(new Date().getTime() / 3600000);
  if (!locals.hasOwnProperty('cache')) locals.cache = cache;
  each(function(val, key) {
    if (!locals.hasOwnProperty(key)) locals[key] = val;
  }, this.options);
  return locals;
};

/**
 * Simple way to emit ready.
 *
 * @api public
 */

exports.ready = function() {
  this.emit('ready');
};

/**
 * Wrap the initialize method in an exists check, so we don't have to do it for
 * every single integration.
 *
 * @api private
 */

exports._wrapInitialize = function() {
  var initialize = this.initialize;
  this.initialize = function() {
    this.debug('initialize');
    this._initialized = true;
    var ret = initialize.apply(this, arguments);
    this.emit('initialize');
    return ret;
  };
};

/**
 * Wrap the page method to call to noop the first page call if the integration assumes
 * a pageview.
 *
 * @api private
 */

exports._wrapPage = function() {
  // Noop the first page call if integration assumes pageview
  if (this._assumesPageview) return this.page = after(2, this.page);
};

/**
 * Wrap the track method to call other ecommerce methods if available depending
 * on the `track.event()`.
 *
 * @api private
 */

exports._wrapTrack = function() {
  var t = this.track;
  this.track = function(track) {
    var event = track.event();
    var called;
    var ret;

    for (var method in events) {
      if (has.call(events, method)) {
        var regexp = events[method];
        if (!this[method]) continue;
        if (!regexp.test(event)) continue;
        ret = this[method].apply(this, arguments);
        called = true;
        break;
      }
    }

    if (!called) ret = t.apply(this, arguments);
    return ret;
  };
};

/**
 * Determine the type of the option passed to `#map`
 *
 * @api private
 * @param {Object|Object[]} mapping
 * @return {String} mappingType
 */

function getMappingType(mapping) {
  if (is.array(mapping)) {
    return every(isMixed, mapping) ? 'mixed' : 'array';
  }
  if (is.object(mapping)) return 'map';
  return 'unknown';
}

/**
 * Determine if item in mapping array is a valid "mixed" type value
 *
 * Must be an object with properties "key" (of type string)
 * and "value" (of any type)
 *
 * @api private
 * @param {*} item
 * @return {Boolean}
 */

function isMixed(item) {
  if (!is.object(item)) return false;
  if (!is.string(item.key)) return false;
  if (!has.call(item, 'value')) return false;
  return true;
}

/**
 * TODO: Document me
 *
 * @api private
 * @param {Object} attrs
 * @param {Function} fn
 * @return {Image}
 */

function loadImage(attrs, fn) {
  fn = fn || function() {};
  var img = new Image();
  img.onerror = error(fn, 'failed to load pixel', img);
  img.onload = function() { fn(); };
  img.src = attrs.src;
  img.width = 1;
  img.height = 1;
  return img;
}

/**
 * TODO: Document me
 *
 * @api private
 * @param {Function} fn
 * @param {string} message
 * @param {Element} img
 * @return {Function}
 */

function error(fn, message, img) {
  return function(e) {
    e = e || window.event;
    var err = new Error(message);
    err.event = e;
    err.source = img;
    fn(err);
  };
}

/**
 * Render template + locals into an `attrs` object.
 *
 * @api private
 * @param {Object} template
 * @param {Object} locals
 * @return {Object}
 */

function render(template, locals) {
  return foldl(function(attrs, val, key) {
    attrs[key] = val.replace(/\{\{\ *(\w+)\ *\}\}/g, function(_, $1) {
      return locals[$1];
    });
    return attrs;
  }, {}, template.attrs);
}

},{"@ndhoule/after":3,"@ndhoule/each":8,"@ndhoule/every":9,"@ndhoule/foldl":11,"@segment/fmt":594,"@segment/load-script":598,"analytics-events":606,"component-emitter":589,"is":629,"load-iframe":635,"next-tick":640,"to-no-case":590}],588:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var Emitter = require('component-emitter');
var domify = require('domify');
var each = require('@ndhoule/each');
var includes = require('@ndhoule/includes');

/**
 * Mix in emitter.
 */

/* eslint-disable new-cap */
Emitter(exports);
/* eslint-enable new-cap */

/**
 * Add a new option to the integration by `key` with default `value`.
 *
 * @api public
 * @param {string} key
 * @param {*} value
 * @return {Integration}
 */

exports.option = function(key, value) {
  this.prototype.defaults[key] = value;
  return this;
};

/**
 * Add a new mapping option.
 *
 * This will create a method `name` that will return a mapping for you to use.
 *
 * @api public
 * @param {string} name
 * @return {Integration}
 * @example
 * Integration('My Integration')
 *   .mapping('events');
 *
 * new MyIntegration().track('My Event');
 *
 * .track = function(track){
 *   var events = this.events(track.event());
 *   each(send, events);
 *  };
 */

exports.mapping = function(name) {
  this.option(name, []);
  this.prototype[name] = function(key) {
    return this.map(this.options[name], key);
  };
  return this;
};

/**
 * Register a new global variable `key` owned by the integration, which will be
 * used to test whether the integration is already on the page.
 *
 * @api public
 * @param {string} key
 * @return {Integration}
 */

exports.global = function(key) {
  this.prototype.globals.push(key);
  return this;
};

/**
 * Mark the integration as assuming an initial pageview, so to defer the first page call, keep track of
 * whether we already nooped the first page call.
 *
 * @api public
 * @return {Integration}
 */

exports.assumesPageview = function() {
  this.prototype._assumesPageview = true;
  return this;
};

/**
 * Mark the integration as being "ready" once `load` is called.
 *
 * @api public
 * @return {Integration}
 */

exports.readyOnLoad = function() {
  this.prototype._readyOnLoad = true;
  return this;
};

/**
 * Mark the integration as being "ready" once `initialize` is called.
 *
 * @api public
 * @return {Integration}
 */

exports.readyOnInitialize = function() {
  this.prototype._readyOnInitialize = true;
  return this;
};

/**
 * Define a tag to be loaded.
 *
 * @api public
 * @param {string} [name='library'] A nicename for the tag, commonly used in
 * #load. Helpful when the integration has multiple tags and you need a way to
 * specify which of the tags you want to load at a given time.
 * @param {String} str DOM tag as string or URL.
 * @return {Integration}
 */

exports.tag = function(name, tag) {
  if (tag == null) {
    tag = name;
    name = 'library';
  }
  this.prototype.templates[name] = objectify(tag);
  return this;
};

/**
 * Given a string, give back DOM attributes.
 *
 * Do it in a way where the browser doesn't load images or iframes. It turns
 * out domify will load images/iframes because whenever you construct those
 * DOM elements, the browser immediately loads them.
 *
 * @api private
 * @param {string} str
 * @return {Object}
 */

function objectify(str) {
  // replace `src` with `data-src` to prevent image loading
  str = str.replace(' src="', ' data-src="');

  var el = domify(str);
  var attrs = {};

  each(function(attr) {
    // then replace it back
    var name = attr.name === 'data-src' ? 'src' : attr.name;
    if (!includes(attr.name + '=', str)) return;
    attrs[name] = attr.value;
  }, el.attributes);

  return {
    type: el.tagName.toLowerCase(),
    attrs: attrs
  };
}

},{"@ndhoule/each":8,"@ndhoule/includes":12,"component-emitter":589,"domify":624}],589:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],590:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],591:[function(require,module,exports){
var utf8Encode = require('utf8-encode');
var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

module.exports = encode;
function encode(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = utf8Encode(input);

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
            keyStr.charAt(enc1) + keyStr.charAt(enc2) +
            keyStr.charAt(enc3) + keyStr.charAt(enc4);

    }

    return output;
}
},{"utf8-encode":673}],592:[function(require,module,exports){
'use strict';

/**
 * Get the current page's canonical URL.
 *
 * @return {string|undefined}
 */
function canonical() {
  var tags = document.getElementsByTagName('link');
  // eslint-disable-next-line no-cond-assign
  for (var i = 0, tag; tag = tags[i]; i++) {
    if (tag.getAttribute('rel') === 'canonical') {
      return tag.getAttribute('href');
    }
  }
}

/*
 * Exports.
 */

module.exports = canonical;

},{}],593:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var clone = require('@ndhoule/clone');
var each = require('@ndhoule/each');
var type = require('component-type');

/**
 * Recursively convert an `obj`'s dates to new values.
 *
 * @param {Object} obj
 * @param {Function} convert
 * @return {Object}
 */
function convertDates(obj, convert) {
  obj = clone(obj);
  each(function(val, key) {
    if (type(val) === 'date') {
      obj[key] = convert(val);
    }
    if (type(val) === 'object') {
      obj[key] = convertDates(val, convert);
    }
  }, obj);
  return obj;
}

/*
 * Exports.
 */

module.exports = convertDates;

},{"@ndhoule/clone":5,"@ndhoule/each":8,"component-type":618}],594:[function(require,module,exports){
(function (global){
'use strict';

// Stringifier
var toString = global.JSON && typeof JSON.stringify === 'function' ? JSON.stringify : String;

/**
 * Format the given `str`.
 *
 * @param {string} str
 * @param {...*} [args]
 * @return {string}
 */
function fmt(str) {
  var args = Array.prototype.slice.call(arguments, 1);
  var j = 0;

  return str.replace(/%([a-z])/gi, function(match, f) {
    return fmt[f] ? fmt[f](args[j++]) : match + f;
  });
}

// Formatters
fmt.o = toString;
fmt.s = String;
fmt.d = parseInt;

/*
 * Exports.
 */

module.exports = fmt;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],595:[function(require,module,exports){
'use strict';

function isMeta(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return true;
  }

  // Logic that handles checks for the middle mouse button, based
  // on [jQuery](https://github.com/jquery/jquery/blob/master/src/event.js#L466).
  var which = e.which;
  var button = e.button;
  if (!which && button !== undefined) {
    // eslint-disable-next-line no-bitwise, no-extra-parens
    return (!button & 1) && (!button & 2) && (button & 4);
  } else if (which === 2) {
    return true;
  }

  return false;
}

/*
 * Exports.
 */

module.exports = isMeta;

},{}],596:[function(require,module,exports){
'use strict';

var type = require('component-type');
var each = require('component-each');
var isodate = require('@segment/isodate');

/**
 * Expose `traverse`.
 */

module.exports = traverse;

/**
 * Traverse an object or array, and return a clone with all ISO strings parsed
 * into Date objects.
 *
 * @param {Object} obj
 * @return {Object}
 */

function traverse(input, strict) {
  if (strict === undefined) strict = true;

  if (type(input) === 'object') return object(input, strict);
  if (type(input) === 'array') return array(input, strict);
  return input;
}

/**
 * Object traverser.
 *
 * @param {Object} obj
 * @param {Boolean} strict
 * @return {Object}
 */

function object(obj, strict) {
  each(obj, function(key, val) {
    if (isodate.is(val, strict)) {
      obj[key] = isodate.parse(val);
    } else if (type(val) === 'object' || type(val) === 'array') {
      traverse(val, strict);
    }
  });
  return obj;
}

/**
 * Array traverser.
 *
 * @param {Array} arr
 * @param {Boolean} strict
 * @return {Array}
 */

function array(arr, strict) {
  each(arr, function(val, x) {
    if (type(val) === 'object') {
      traverse(val, strict);
    } else if (isodate.is(val, strict)) {
      arr[x] = isodate.parse(val);
    }
  });
  return arr;
}

},{"@segment/isodate":597,"component-each":611,"component-type":618}],597:[function(require,module,exports){
'use strict';

/**
 * Matcher, slightly modified from:
 *
 * https://github.com/csnover/js-iso8601/blob/lax/iso8601.js
 */

var matcher = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;

/**
 * Convert an ISO date string to a date. Fallback to native `Date.parse`.
 *
 * https://github.com/csnover/js-iso8601/blob/lax/iso8601.js
 *
 * @param {String} iso
 * @return {Date}
 */

exports.parse = function(iso) {
  var numericKeys = [1, 5, 6, 7, 11, 12];
  var arr = matcher.exec(iso);
  var offset = 0;

  // fallback to native parsing
  if (!arr) {
    return new Date(iso);
  }

  /* eslint-disable no-cond-assign */
  // remove undefined values
  for (var i = 0, val; val = numericKeys[i]; i++) {
    arr[val] = parseInt(arr[val], 10) || 0;
  }
  /* eslint-enable no-cond-assign */

  // allow undefined days and months
  arr[2] = parseInt(arr[2], 10) || 1;
  arr[3] = parseInt(arr[3], 10) || 1;

  // month is 0-11
  arr[2]--;

  // allow abitrary sub-second precision
  arr[8] = arr[8] ? (arr[8] + '00').substring(0, 3) : 0;

  // apply timezone if one exists
  if (arr[4] === ' ') {
    offset = new Date().getTimezoneOffset();
  } else if (arr[9] !== 'Z' && arr[10]) {
    offset = arr[11] * 60 + arr[12];
    if (arr[10] === '+') {
      offset = 0 - offset;
    }
  }

  var millis = Date.UTC(arr[1], arr[2], arr[3], arr[5], arr[6] + offset, arr[7], arr[8]);
  return new Date(millis);
};


/**
 * Checks whether a `string` is an ISO date string. `strict` mode requires that
 * the date string at least have a year, month and date.
 *
 * @param {String} string
 * @param {Boolean} strict
 * @return {Boolean}
 */

exports.is = function(string, strict) {
  if (strict && (/^\d{4}-\d{2}-\d{2}/).test(string) === false) {
    return false;
  }
  return matcher.test(string);
};

},{}],598:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var onload = require('script-onload');
var tick = require('next-tick');
var type = require('component-type');

/**
 * Loads a script asynchronously.
 *
 * @param {Object} options
 * @param {Function} cb
 */
function loadScript(options, cb) {
  if (!options) {
    throw new Error('Can\'t load nothing...');
  }

  // Allow for the simplest case, just passing a `src` string.
  if (type(options) === 'string') {
    options = { src : options };
  }

  var https = document.location.protocol === 'https:' || document.location.protocol === 'chrome-extension:';

  // If you use protocol relative URLs, third-party scripts like Google
  // Analytics break when testing with `file:` so this fixes that.
  if (options.src && options.src.indexOf('//') === 0) {
    options.src = (https ? 'https:' : 'http:') + options.src;
  }

  // Allow them to pass in different URLs depending on the protocol.
  if (https && options.https) {
    options.src = options.https;
  } else if (!https && options.http) {
    options.src = options.http;
  }

  // Make the `<script>` element and insert it before the first script on the
  // page, which is guaranteed to exist since this Javascript is running.
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = options.src;

  // If we have a cb, attach event handlers. Does not work on < IE9 because
  // older browser versions don't register element.onerror
  if (type(cb) === 'function') {
    onload(script, cb);
  }

  tick(function() {
    // Append after event listeners are attached for IE.
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  });

  // Return the script element in case they want to do anything special, like
  // give it an ID or attributes.
  return script;
}

/*
 * Exports.
 */

module.exports = loadScript;

},{"component-type":618,"next-tick":640,"script-onload":649}],599:[function(require,module,exports){
'use strict';

/**
 * Prevent default on a given event.
 *
 * @param {Event} e
 * @example
 * anchor.onclick = prevent;
 * anchor.onclick = function(e){
 *   if (something) return prevent(e);
 * };
 */

function preventDefault(e) {
  e = e || window.event;
  return e.preventDefault ? e.preventDefault() : e.returnValue = false;
}

/*
 * Exports.
 */

module.exports = preventDefault;

},{}],600:[function(require,module,exports){
'use strict';

/**
 * Convenience alias
 */

var define = Object.defineProperty;


/**
 *  The base protocol
 */

var initialProtocol = window.location.protocol;

/**
 * Fallback mocked protocol in case Object.defineProperty doesn't exist.
 */

var mockedProtocol;


module.exports = function(protocol) {
  if (arguments.length === 0) {
    return get();
  }
  return set(protocol);
};


/**
 * Sets the protocol to be http:
 */

module.exports.http = function() {
  set('http:');
};


/**
 * Sets the protocol to be https:
 */

module.exports.https = function() {
  set('https:');
};


/**
 * Reset to the initial protocol.
 */

module.exports.reset = function() {
  set(initialProtocol);
};


/**
 * Gets the current protocol, using the fallback and then the native protocol.
 *
 * @return {String} protocol
 */

function get() {
  return mockedProtocol || window.location.protocol;
}


/**
 * Sets the protocol
 *
 * @param {String} protocol
 */

function set(protocol) {
  try {
    define(window.location, 'protocol', {
      get: function() { return protocol; }
    });
  } catch (err) {
    mockedProtocol = protocol;
  }
}

},{}],601:[function(require,module,exports){
'use strict';

/*
 * Module dependencies.
 */

var JSON = require('json3');
var base64encode = require('@segment/base64-encode');
var cors = require('has-cors');
var jsonp = require('jsonp');

/*
 * Exports.
 */

exports = module.exports = cors ? json : base64;

/**
 * Expose `callback`
 */

exports.callback = 'callback';

/**
 * Expose `prefix`
 */

exports.prefix = 'data';

/**
 * Expose `json`.
 */

exports.json = json;

/**
 * Expose `base64`.
 */

exports.base64 = base64;

/**
 * Expose `type`
 */

exports.type = cors ? 'xhr' : 'jsonp';

/**
 * Send the given `obj` to `url` with `fn(err, req)`.
 *
 * @param {String} url
 * @param {Object} obj
 * @param {Object} headers
 * @param {Function} fn
 * @api private
 */

function json(url, obj, headers, fn) {
  if (arguments.length === 3) fn = headers, headers = {};

  var req = new XMLHttpRequest;
  req.onerror = fn;
  req.onreadystatechange = done;
  req.open('POST', url, true);

  // TODO: Remove this eslint disable
  // eslint-disable-next-line guard-for-in
  for (var k in headers) {
    req.setRequestHeader(k, headers[k]);
  }
  req.send(JSON.stringify(obj));

  function done() {
    if (req.readyState === 4) {
      return fn(null, req);
    }
  }
}

/**
 * Send the given `obj` to `url` with `fn(err, req)`.
 *
 * @param {String} url
 * @param {Object} obj
 * @param {Function} fn
 * @api private
 */

function base64(url, obj, _, fn) {
  if (arguments.length === 3) fn = _;

  var prefix = exports.prefix;
  var data = encode(obj);
  url += '?' + prefix + '=' + data;
  jsonp(url, { param: exports.callback }, function(err, obj) {
    if (err) return fn(err);
    fn(null, {
      url: url,
      body: obj
    });
  });
}

/**
 * Encodes `obj`.
 *
 * @param {Object} obj
 */

function encode(obj) {
  var str = '';
  str = JSON.stringify(obj);
  str = base64encode(str);
  str = str.replace(/\+/g, '-').replace(/\//g, '_');
  return encodeURIComponent(str);
}

},{"@segment/base64-encode":591,"has-cors":626,"json3":633,"jsonp":634}],602:[function(require,module,exports){
(function (global){
"use strict"

var JSON = require('json3');

module.exports = (function() {
	// Store.js
	var store = {},
		win = (typeof window != 'undefined' ? window : global),
		doc = win.document,
		localStorageName = 'localStorage',
		scriptTag = 'script',
		storage

	store.disabled = false
	store.version = '1.3.20'
	store.set = function(key, value) {}
	store.get = function(key, defaultVal) {}
	store.has = function(key) { return store.get(key) !== undefined }
	store.remove = function(key) {}
	store.clear = function() {}
	store.transact = function(key, defaultVal, transactionFn) {
		if (transactionFn == null) {
			transactionFn = defaultVal
			defaultVal = null
		}
		if (defaultVal == null) {
			defaultVal = {}
		}
		var val = store.get(key, defaultVal)
		transactionFn(val)
		store.set(key, val)
	}
	store.getAll = function() {
		var ret = {}
		store.forEach(function(key, val) {
			ret[key] = val
		})
		return ret
	}
	store.forEach = function() {}
	store.serialize = function(value) {
		return JSON.stringify(value)
	}
	store.deserialize = function(value) {
		if (typeof value != 'string') { return undefined }
		try { return JSON.parse(value) }
		catch(e) { return value || undefined }
	}

	// Functions to encapsulate questionable FireFox 3.6.13 behavior
	// when about.config::dom.storage.enabled === false
	// See https://github.com/marcuswestin/store.js/issues#issue/13
	function isLocalStorageNameSupported() {
		try { return (localStorageName in win && win[localStorageName]) }
		catch(err) { return false }
	}

	if (isLocalStorageNameSupported()) {
		storage = win[localStorageName]
		store.set = function(key, val) {
			if (val === undefined) { return store.remove(key) }
			storage.setItem(key, store.serialize(val))
			return val
		}
		store.get = function(key, defaultVal) {
			var val = store.deserialize(storage.getItem(key))
			return (val === undefined ? defaultVal : val)
		}
		store.remove = function(key) { storage.removeItem(key) }
		store.clear = function() { storage.clear() }
		store.forEach = function(callback) {
			for (var i=0; i<storage.length; i++) {
				var key = storage.key(i)
				callback(key, store.get(key))
			}
		}
	} else if (doc && doc.documentElement.addBehavior) {
		var storageOwner,
			storageContainer
		// Since #userData storage applies only to specific paths, we need to
		// somehow link our data to a specific path.  We choose /favicon.ico
		// as a pretty safe option, since all browsers already make a request to
		// this URL anyway and being a 404 will not hurt us here.  We wrap an
		// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
		// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
		// since the iframe access rules appear to allow direct access and
		// manipulation of the document element, even for a 404 page.  This
		// document can be used instead of the current document (which would
		// have been limited to the current path) to perform #userData storage.
		try {
			storageContainer = new ActiveXObject('htmlfile')
			storageContainer.open()
			storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
			storageContainer.close()
			storageOwner = storageContainer.w.frames[0].document
			storage = storageOwner.createElement('div')
		} catch(e) {
			// somehow ActiveXObject instantiation failed (perhaps some special
			// security settings or otherwse), fall back to per-path storage
			storage = doc.createElement('div')
			storageOwner = doc.body
		}
		var withIEStorage = function(storeFunction) {
			return function() {
				var args = Array.prototype.slice.call(arguments, 0)
				args.unshift(storage)
				// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
				// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
				storageOwner.appendChild(storage)
				storage.addBehavior('#default#userData')
				storage.load(localStorageName)
				var result = storeFunction.apply(store, args)
				storageOwner.removeChild(storage)
				return result
			}
		}

		// In IE7, keys cannot start with a digit or contain certain chars.
		// See https://github.com/marcuswestin/store.js/issues/40
		// See https://github.com/marcuswestin/store.js/issues/83
		var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
		var ieKeyFix = function(key) {
			return key.replace(/^d/, '___$&').replace(forbiddenCharsRegex, '___')
		}
		store.set = withIEStorage(function(storage, key, val) {
			key = ieKeyFix(key)
			if (val === undefined) { return store.remove(key) }
			storage.setAttribute(key, store.serialize(val))
			storage.save(localStorageName)
			return val
		})
		store.get = withIEStorage(function(storage, key, defaultVal) {
			key = ieKeyFix(key)
			var val = store.deserialize(storage.getAttribute(key))
			return (val === undefined ? defaultVal : val)
		})
		store.remove = withIEStorage(function(storage, key) {
			key = ieKeyFix(key)
			storage.removeAttribute(key)
			storage.save(localStorageName)
		})
		store.clear = withIEStorage(function(storage) {
			var attributes = storage.XMLDocument.documentElement.attributes
			storage.load(localStorageName)
			for (var i=attributes.length-1; i>=0; i--) {
				storage.removeAttribute(attributes[i].name)
			}
			storage.save(localStorageName)
		})
		store.forEach = withIEStorage(function(storage, callback) {
			var attributes = storage.XMLDocument.documentElement.attributes
			for (var i=0, attr; attr=attributes[i]; ++i) {
				callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))
			}
		})
	}

	try {
		var testKey = '__storejs__'
		store.set(testKey, testKey)
		if (store.get(testKey) != testKey) { store.disabled = true }
		store.remove(testKey)
	} catch(e) {
		store.disabled = true
	}
	store.enabled = !store.disabled
	
	return store
}())

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"json3":633}],603:[function(require,module,exports){
'use strict';

/**
 * Pad a `number` with a ten's place zero.
 *
 * @param {number} number
 * @return {string}
 */
function pad(number) {
  var n = number.toString();
  return n.length === 1 ? '0' + n : n;
}

/**
 * Turn a `date` into an ISO string.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 *
 * @param {Date} date
 * @return {string}
 */
function toISOString(date) {
  return date.getUTCFullYear()
    + '-' + pad(date.getUTCMonth() + 1)
    + '-' + pad(date.getUTCDate())
    + 'T' + pad(date.getUTCHours())
    + ':' + pad(date.getUTCMinutes())
    + ':' + pad(date.getUTCSeconds())
    + '.' + String((date.getUTCMilliseconds()/1000).toFixed(3)).slice(2, 5)
    + 'Z';
}

/*
 * Exports.
 */

module.exports = toISOString;

},{}],604:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var parse = require('component-url').parse;
var cookie = require('component-cookie');

/**
 * Get the top domain.
 *
 * The function constructs the levels of domain and attempts to set a global
 * cookie on each one when it succeeds it returns the top level domain.
 *
 * The method returns an empty string when the hostname is an ip or `localhost`.
 *
 * Example levels:
 *
 *      domain.levels('http://www.google.co.uk');
 *      // => ["co.uk", "google.co.uk", "www.google.co.uk"]
 *
 * Example:
 *
 *      domain('http://localhost:3000/baz');
 *      // => ''
 *      domain('http://dev:3000/baz');
 *      // => ''
 *      domain('http://127.0.0.1:3000/baz');
 *      // => ''
 *      domain('http://segment.io/baz');
 *      // => 'segment.io'
 *
 * @param {string} url
 * @return {string}
 * @api public
 */
function domain(url) {
  var cookie = exports.cookie;
  var levels = exports.levels(url);

  // Lookup the real top level one.
  for (var i = 0; i < levels.length; ++i) {
    var cname = '__tld__';
    var domain = levels[i];
    var opts = { domain: '.' + domain };

    cookie(cname, 1, opts);
    if (cookie(cname)) {
      cookie(cname, null, opts);
      return domain;
    }
  }

  return '';
}

/**
 * Levels returns all levels of the given url.
 *
 * @param {string} url
 * @return {Array}
 * @api public
 */
domain.levels = function(url) {
  var host = parse(url).hostname;
  var parts = host.split('.');
  var last = parts[parts.length - 1];
  var levels = [];

  // Ip address.
  if (parts.length === 4 && last === parseInt(last, 10)) {
    return levels;
  }

  // Localhost.
  if (parts.length <= 1) {
    return levels;
  }

  // Create levels.
  for (var i = parts.length - 2; i >= 0; --i) {
    levels.push(parts.slice(i).join('.'));
  }

  return levels;
};

/**
 * Expose cookie on domain.
 */
domain.cookie = cookie;

/*
 * Exports.
 */

exports = module.exports = domain;

},{"component-cookie":610,"component-url":619}],605:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var foldl = require('@ndhoule/foldl');
var parse = require('component-querystring').parse;

/**
 * hasOwnProperty reference.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Get all utm params from the given `querystring`
 *
 * @param {String} query
 * @return {Object}
 * @api private
 */

function utm(query) {
  // Remove leading ? if present
  if (query.charAt(0) === '?') {
    query = query.substring(1);
  }

  query = query.replace(/\?/g, '&');

  var param;
  var params = parse(query);
  var results = {};

  for (var key in params) {
    if (has.call(params, key)) {
      if (key.substr(0, 4) === 'utm_') {
        param = key.substr(4);
        if (param === 'campaign') param = 'name';
        results[param] = params[key];
      }
    }
  }

  return results;
}

var allowedKeys = {
  name: true,
  term: true,
  source: true,
  medium: true,
  content: true
};

/**
 * Get strict utm params - from the given `querystring`
 *
 * @param {String} query
 * @return {Object}
 * @api private
 */

function strict(query) {
  return foldl(function(acc, val, key) {
    if (has.call(allowedKeys, key)) acc[key] = val;
    return acc;
  }, {}, utm(query));
}

/*
 * Exports.
 */

module.exports = utm;
module.exports.strict = strict;

},{"@ndhoule/foldl":11,"component-querystring":616}],606:[function(require,module,exports){
'use strict';

/**
 * Module Dependencies
 */

var map = require('@ndhoule/map');
var foldl = require('@ndhoule/foldl');

var eventMap = {
  // Promotions
  promotionViewed: [{
    object: 'promotion',
    action: 'viewed'
  }],
  promotionClicked: [{
    object: 'promotion',
    action: 'clicked'
  }],

  // Browsing
  productsSearched: [{
    object: 'products',
    action: 'searched'
  }],
  productListViewed: [{
    object: 'product list',
    action: 'viewed'
  }, {
    object: 'product category',
    action: 'viewed'
  }],
  productListFiltered: [{
    object: 'product list',
    action: 'filtered'
  }],

  // Core Ordering
  productClicked: [{
    object: 'product',
    action: 'clicked'
  }],
  productViewed: [{
    object: 'product',
    action: 'viewed'
  }],
  productAdded: [{
    object: 'product',
    action: 'added'
  }],
  productRemoved: [{
    object: 'product',
    action: 'removed'
  }],
  cartViewed: [{
    object: 'cart',
    action: 'viewed'
  }],
  orderUpdated: [{
    object: 'order',
    action: 'updated'
  }],
  orderCompleted: [{
    object: 'order',
    action: 'completed'
  }],
  orderRefunded: [{
    object: 'order',
    action: 'refunded'
  }],
  orderCancelled: [{
    object: 'order',
    action: 'cancelled'
  }],
  paymentInfoEntered: [{
    object: 'payment info',
    action: 'entered'
  }],
  checkoutStarted: [{
    object: 'checkout',
    action: 'started'
  }],
  checkoutStepViewed: [{
    object: 'checkout step',
    action: 'viewed'
  }],
  checkoutStepCompleted: [{
    object: 'checkout step',
    action: 'completed'
  }],

  // Coupons
  couponEntered: [{
    object: 'coupon',
    action: 'entered'
  }],
  couponApplied: [{
    object: 'coupon',
    action: 'applied'
  }],
  couponDenied: [{
    object: 'coupon',
    action: 'denied'
  }],
  couponRemoved: [{
    object: 'coupon',
    action: 'removed'
  }],

  // Wishlisting
  productAddedToWishlist: [{
    object: 'product',
    action: 'added to wishlist'
  }],
  productRemovedFromWishlist: [{
    object: 'product',
    action: 'removed from wishlist'
  }],
  productAddedFromWishlistToCart: [{
    object: 'product',
    action: 'added to cart from wishlist'
  }, {
    object: 'product',
    action: 'added from wishlist to cart'
  }],

  // Sharing
  productShared: [{
    object: 'product',
    action: 'shared'
  }],
  cartShared: [{
    object: 'cart',
    action: 'shared'
  }],

  // Reviewing
  productReviewed: [{
    object: 'product',
    action: 'reviewed'
  }],

  // App Lifecycle
  applicationInstalled: [{
    object: 'application',
    action: 'installed'
  }],
  applicationUpdated: [{
    object: 'application',
    action: 'updated'
  }],
  applicationOpened: [{
    object: 'application',
    action: 'opened'
  }],
  applicationBackgrounded: [{
    object: 'application',
    action: 'backgrounded'
  }],
  applicationUninstalled: [{
    object: 'application',
    action: 'uninstalled'
  }],

  // App Campaign and Referral Events
  installAttributed: [{
    object: 'install',
    action: 'attributed'
  }],
  deepLinkOpened: [{
    object: 'deep link',
    action: 'opened'
  }],
  pushNotificationReceived: [{
    object: 'push notification',
    action: 'received'
  }],
  pushNotificationTapped: [{
    object: 'push notification',
    action: 'tapped'
  }],
  pushNotificationBounced: [{
    object: 'push notification',
    action: 'bounced'
  }]
};

/**
 * Export the event map
 *
 * For each method
 *   - For each of its object:action alias pairs
 *     - For each permutation of that pair
 *       - Create a regex string
 *   - Join them and assign it to its respective method value
 *
 *  [{
 *    object: 'product list',
 *    action: 'viewed'
 *  },{
 *    object: 'product category',
 *    action: 'viewed'
 *  }] => /
 *    ^[ _]?product[ _]?list[ _]?viewed[ _]?
 *   |^[ _]?viewed[ _]?product[ _]?list[ _]?
 *   |^[ _]?product[ _]?category[ _]?viewed[ _]?
 *   |^[ _]?viewed[ _]?product[ _]?category[ _]?
 *   $/i
 *
 *  todo(cs/wj/nh): memoization strategy / build step?
 */

module.exports = foldl(function transform(ret, pairs, method) {
  var values = map(function(pair) {
    return map(function(permutation) {
      var flattened = [].concat.apply([], map(function(words) {
        return words.split(' ');
      }, permutation));
      return '^[ _]?' + flattened.join('[ _]?') + '[ _]?';
    }, [
      [pair.action, pair.object],
      [pair.object, pair.action]
    ]).join('|');
  }, pairs);
  var conjoined = values.join('|') + '$';
  ret[method] = new RegExp(conjoined, 'i');
  return ret;
}, {}, eventMap);

},{"@ndhoule/foldl":11,"@ndhoule/map":14}],607:[function(require,module,exports){
'use strict';

var bind = require('component-bind');

function bindAll(obj) {
  // eslint-disable-next-line guard-for-in
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'function') {
      obj[key] = bind(obj, obj[key]);
    }
  }
  return obj;
}

module.exports = bindAll;

},{"component-bind":608}],608:[function(require,module,exports){
/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

},{}],609:[function(require,module,exports){
/**
 * Module dependencies.
 */

var type;
try {
  type = require('component-type');
} catch (_) {
  type = require('type');
}

/**
 * Module exports.
 */

module.exports = clone;

/**
 * Clones objects.
 *
 * @param {Mixed} any object
 * @api public
 */

function clone(obj){
  switch (type(obj)) {
    case 'object':
      var copy = {};
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          copy[key] = clone(obj[key]);
        }
      }
      return copy;

    case 'array':
      var copy = new Array(obj.length);
      for (var i = 0, l = obj.length; i < l; i++) {
        copy[i] = clone(obj[i]);
      }
      return copy;

    case 'regexp':
      // from millermedeiros/amd-utils - MIT
      var flags = '';
      flags += obj.multiline ? 'm' : '';
      flags += obj.global ? 'g' : '';
      flags += obj.ignoreCase ? 'i' : '';
      return new RegExp(obj.source, flags);

    case 'date':
      return new Date(obj.getTime());

    default: // string, number, boolean, …
      return obj;
  }
}

},{"component-type":618,"type":618}],610:[function(require,module,exports){

/**
 * Module dependencies.
 */

var debug = require('debug')('cookie');

/**
 * Set or get cookie `name` with `value` and `options` object.
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {Mixed}
 * @api public
 */

module.exports = function(name, value, options){
  switch (arguments.length) {
    case 3:
    case 2:
      return set(name, value, options);
    case 1:
      return get(name);
    default:
      return all();
  }
};

/**
 * Set cookie `name` to `value`.
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @api private
 */

function set(name, value, options) {
  options = options || {};
  var str = encode(name) + '=' + encode(value);

  if (null == value) options.maxage = -1;

  if (options.maxage) {
    options.expires = new Date(+new Date + options.maxage);
  }

  if (options.path) str += '; path=' + options.path;
  if (options.domain) str += '; domain=' + options.domain;
  if (options.expires) str += '; expires=' + options.expires.toUTCString();
  if (options.secure) str += '; secure';

  document.cookie = str;
}

/**
 * Return all cookies.
 *
 * @return {Object}
 * @api private
 */

function all() {
  var str;
  try {
    str = document.cookie;
  } catch (err) {
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(err.stack || err);
    }
    return {};
  }
  return parse(str);
}

/**
 * Get cookie `name`.
 *
 * @param {String} name
 * @return {String}
 * @api private
 */

function get(name) {
  return all()[name];
}

/**
 * Parse cookie `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parse(str) {
  var obj = {};
  var pairs = str.split(/ *; */);
  var pair;
  if ('' == pairs[0]) return obj;
  for (var i = 0; i < pairs.length; ++i) {
    pair = pairs[i].split('=');
    obj[decode(pair[0])] = decode(pair[1]);
  }
  return obj;
}

/**
 * Encode.
 */

function encode(value){
  try {
    return encodeURIComponent(value);
  } catch (e) {
    debug('error `encode(%o)` - %o', value, e)
  }
}

/**
 * Decode.
 */

function decode(value) {
  try {
    return decodeURIComponent(value);
  } catch (e) {
    debug('error `decode(%o)` - %o', value, e)
  }
}

},{"debug":621}],611:[function(require,module,exports){

/**
 * Module dependencies.
 */

try {
  var type = require('type');
} catch (err) {
  var type = require('component-type');
}

var toFunction = require('to-function');

/**
 * HOP reference.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Iterate the given `obj` and invoke `fn(val, i)`
 * in optional context `ctx`.
 *
 * @param {String|Array|Object} obj
 * @param {Function} fn
 * @param {Object} [ctx]
 * @api public
 */

module.exports = function(obj, fn, ctx){
  fn = toFunction(fn);
  ctx = ctx || this;
  switch (type(obj)) {
    case 'array':
      return array(obj, fn, ctx);
    case 'object':
      if ('number' == typeof obj.length) return array(obj, fn, ctx);
      return object(obj, fn, ctx);
    case 'string':
      return string(obj, fn, ctx);
  }
};

/**
 * Iterate string chars.
 *
 * @param {String} obj
 * @param {Function} fn
 * @param {Object} ctx
 * @api private
 */

function string(obj, fn, ctx) {
  for (var i = 0; i < obj.length; ++i) {
    fn.call(ctx, obj.charAt(i), i);
  }
}

/**
 * Iterate object keys.
 *
 * @param {Object} obj
 * @param {Function} fn
 * @param {Object} ctx
 * @api private
 */

function object(obj, fn, ctx) {
  for (var key in obj) {
    if (has.call(obj, key)) {
      fn.call(ctx, key, obj[key]);
    }
  }
}

/**
 * Iterate array-ish.
 *
 * @param {Array|Object} obj
 * @param {Function} fn
 * @param {Object} ctx
 * @api private
 */

function array(obj, fn, ctx) {
  for (var i = 0; i < obj.length; ++i) {
    fn.call(ctx, obj[i], i);
  }
}

},{"component-type":612,"to-function":664,"type":612}],612:[function(require,module,exports){

/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Function]': return 'function';
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object String]': return 'string';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val && val.nodeType === 1) return 'element';
  if (val === Object(val)) return 'object';

  return typeof val;
};

},{}],613:[function(require,module,exports){
var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind !== 'addEventListener' ? 'on' : '';

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.bind = function(el, type, fn, capture){
  el[bind](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};
},{}],614:[function(require,module,exports){
module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],615:[function(require,module,exports){
/**
 * Global Names
 */

var globals = /\b(Array|Date|Object|Math|JSON)\b/g;

/**
 * Return immediate identifiers parsed from `str`.
 *
 * @param {String} str
 * @param {String|Function} map function or prefix
 * @return {Array}
 * @api public
 */

module.exports = function(str, fn){
  var p = unique(props(str));
  if (fn && 'string' == typeof fn) fn = prefixed(fn);
  if (fn) return map(str, p, fn);
  return p;
};

/**
 * Return immediate identifiers in `str`.
 *
 * @param {String} str
 * @return {Array}
 * @api private
 */

function props(str) {
  return str
    .replace(/\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\//g, '')
    .replace(globals, '')
    .match(/[a-zA-Z_]\w*/g)
    || [];
}

/**
 * Return `str` with `props` mapped with `fn`.
 *
 * @param {String} str
 * @param {Array} props
 * @param {Function} fn
 * @return {String}
 * @api private
 */

function map(str, props, fn) {
  var re = /\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\/|[a-zA-Z_]\w*/g;
  return str.replace(re, function(_){
    if ('(' == _[_.length - 1]) return fn(_);
    if (!~props.indexOf(_)) return _;
    return fn(_);
  });
}

/**
 * Return unique array.
 *
 * @param {Array} arr
 * @return {Array}
 * @api private
 */

function unique(arr) {
  var ret = [];

  for (var i = 0; i < arr.length; i++) {
    if (~ret.indexOf(arr[i])) continue;
    ret.push(arr[i]);
  }

  return ret;
}

/**
 * Map with prefix `str`.
 */

function prefixed(str) {
  return function(_){
    return str + _;
  };
}

},{}],616:[function(require,module,exports){

/**
 * Module dependencies.
 */

var trim = require('trim');
var type = require('type');

var pattern = /(\w+)\[(\d+)\]/

/**
 * Safely encode the given string
 * 
 * @param {String} str
 * @return {String}
 * @api private
 */

var encode = function(str) {
  try {
    return encodeURIComponent(str);
  } catch (e) {
    return str;
  }
};

/**
 * Safely decode the string
 * 
 * @param {String} str
 * @return {String}
 * @api private
 */

var decode = function(str) {
  try {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  } catch (e) {
    return str;
  }
}

/**
 * Parse the given query `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */

exports.parse = function(str){
  if ('string' != typeof str) return {};

  str = trim(str);
  if ('' == str) return {};
  if ('?' == str.charAt(0)) str = str.slice(1);

  var obj = {};
  var pairs = str.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var parts = pairs[i].split('=');
    var key = decode(parts[0]);
    var m;

    if (m = pattern.exec(key)) {
      obj[m[1]] = obj[m[1]] || [];
      obj[m[1]][m[2]] = decode(parts[1]);
      continue;
    }

    obj[parts[0]] = null == parts[1]
      ? ''
      : decode(parts[1]);
  }

  return obj;
};

/**
 * Stringify the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api public
 */

exports.stringify = function(obj){
  if (!obj) return '';
  var pairs = [];

  for (var key in obj) {
    var value = obj[key];

    if ('array' == type(value)) {
      for (var i = 0; i < value.length; ++i) {
        pairs.push(encode(key + '[' + i + ']') + '=' + encode(value[i]));
      }
      continue;
    }

    pairs.push(encode(key) + '=' + encode(obj[key]));
  }

  return pairs.join('&');
};

},{"trim":669,"type":617}],617:[function(require,module,exports){
/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  val = val.valueOf
    ? val.valueOf()
    : Object.prototype.valueOf.apply(val)

  return typeof val;
};

},{}],618:[function(require,module,exports){
/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  if (isBuffer(val)) return 'buffer';

  val = val.valueOf
    ? val.valueOf()
    : Object.prototype.valueOf.apply(val);

  return typeof val;
};

// code borrowed from https://github.com/feross/is-buffer/blob/master/index.js
function isBuffer(obj) {
  return !!(obj != null &&
    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
      (obj.constructor &&
      typeof obj.constructor.isBuffer === 'function' &&
      obj.constructor.isBuffer(obj))
    ))
}

},{}],619:[function(require,module,exports){

/**
 * Parse the given `url`.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */

exports.parse = function(url){
  var a = document.createElement('a');
  a.href = url;
  return {
    href: a.href,
    host: a.host || location.host,
    port: ('0' === a.port || '' === a.port) ? port(a.protocol) : a.port,
    hash: a.hash,
    hostname: a.hostname || location.hostname,
    pathname: a.pathname.charAt(0) != '/' ? '/' + a.pathname : a.pathname,
    protocol: !a.protocol || ':' == a.protocol ? location.protocol : a.protocol,
    search: a.search,
    query: a.search.slice(1)
  };
};

/**
 * Check if `url` is absolute.
 *
 * @param {String} url
 * @return {Boolean}
 * @api public
 */

exports.isAbsolute = function(url){
  return 0 == url.indexOf('//') || !!~url.indexOf('://');
};

/**
 * Check if `url` is relative.
 *
 * @param {String} url
 * @return {Boolean}
 * @api public
 */

exports.isRelative = function(url){
  return !exports.isAbsolute(url);
};

/**
 * Check if `url` is cross domain.
 *
 * @param {String} url
 * @return {Boolean}
 * @api public
 */

exports.isCrossDomain = function(url){
  url = exports.parse(url);
  var location = exports.parse(window.location.href);
  return url.hostname !== location.hostname
    || url.port !== location.port
    || url.protocol !== location.protocol;
};

/**
 * Return default port for `protocol`.
 *
 * @param  {String} protocol
 * @return {String}
 * @api private
 */
function port (protocol){
  switch (protocol) {
    case 'http:':
      return 80;
    case 'https:':
      return 443;
    default:
      return location.port;
  }
}

},{}],620:[function(require,module,exports){
/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

(function(global) {
  'use strict';

  var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
  
      // Regexes and supporting functions are cached through closure
      return function (date, mask, utc, gmt) {
  
        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
  
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
  
        // Allow setting the utc/gmt argument via the mask
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
  
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(Math.round(L / 10)),
          t:    H < 12 ? 'a'  : 'p',
          tt:   H < 12 ? 'am' : 'pm',
          T:    H < 12 ? 'A'  : 'P',
          TT:   H < 12 ? 'AM' : 'PM',
          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W:    W,
          N:    N
        };
  
        return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();

  dateFormat.masks = {
    'default':               'ddd mmm dd yyyy HH:MM:ss',
    'shortDate':             'm/d/yy',
    'mediumDate':            'mmm d, yyyy',
    'longDate':              'mmmm d, yyyy',
    'fullDate':              'dddd, mmmm d, yyyy',
    'shortTime':             'h:MM TT',
    'mediumTime':            'h:MM:ss TT',
    'longTime':              'h:MM:ss TT Z',
    'isoDate':               'yyyy-mm-dd',
    'isoTime':               'HH:MM:ss',
    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
  };

  // Internationalization strings
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
  };

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occured and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};



  if (typeof define === 'function' && define.amd) {
    define(function () {
      return dateFormat;
    });
  } else if (typeof exports === 'object') {
    module.exports = dateFormat;
  } else {
    global.dateFormat = dateFormat;
  }
})(this);

},{}],621:[function(require,module,exports){
(function (process){
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window && typeof window.process !== 'undefined' && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document && 'WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window && window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  try {
    return exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (typeof process !== 'undefined' && 'env' in process) {
    return process.env.DEBUG;
  }
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

}).call(this,require('_process'))
},{"./debug":622,"_process":647}],622:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug.default = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":636}],623:[function(require,module,exports){
/**
 * Module dependencies.
 */

var nextTick = require('next-tick');

/**
 * Loop on a short interval until `condition()` is true, then call `fn`.
 *
 * @param {Function} condition
 * @param {Function} fn
 * @param {number} [interval=10]
 */

function when(condition, fn, interval) {
  if (typeof condition !== 'function') throw new Error('condition must be a function');
  if (typeof fn !== 'function') throw new Error('fn must be a function');

  if (condition()) return nextTick(fn);

  var ref = setInterval(function () {
    if (!condition()) return;
    nextTick(fn);
    clearInterval(ref);
  }, interval || 10);
}

/**
 * Exports.
 */

module.exports = when;

},{"next-tick":640}],624:[function(require,module,exports){

/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

},{}],625:[function(require,module,exports){

/**
 * Module dependencies.
 */

var debug = require('debug');

/**
 * Expose `generate`.
 */

module.exports = generate;

/**
 * Generate a global queue pushing method with `name`.
 *
 * @param {String} name
 * @param {Object} options
 *   @property {Boolean} wrap
 * @return {Function}
 */

function generate (name, options) {
  var log = debug('global-queue:' + name);
  options = options || {};

  return function (args) {
    args = [].slice.call(arguments);
    window[name] || (window[name] = []);
    log('%o', args);
    options.wrap === false
      ? window[name].push.apply(window[name], args)
      : window[name].push(args);
  };
}

},{"debug":621}],626:[function(require,module,exports){

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{}],627:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],628:[function(require,module,exports){

module.exports = function isEmail (string) {
    return (/.+\@.+\..+/).test(string);
};
},{}],629:[function(require,module,exports){
/* globals window, HTMLElement */

'use strict';

/**!
 * is
 * the definitive JavaScript type testing library
 *
 * @copyright 2013-2014 Enrico Marino / Jordan Harband
 * @license MIT
 */

var objProto = Object.prototype;
var owns = objProto.hasOwnProperty;
var toStr = objProto.toString;
var symbolValueOf;
if (typeof Symbol === 'function') {
  symbolValueOf = Symbol.prototype.valueOf;
}
var isActualNaN = function (value) {
  return value !== value;
};
var NON_HOST_TYPES = {
  'boolean': 1,
  number: 1,
  string: 1,
  undefined: 1
};

var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
var hexRegex = /^[A-Fa-f0-9]+$/;

/**
 * Expose `is`
 */

var is = {};

/**
 * Test general.
 */

/**
 * is.type
 * Test if `value` is a type of `type`.
 *
 * @param {Mixed} value value to test
 * @param {String} type type
 * @return {Boolean} true if `value` is a type of `type`, false otherwise
 * @api public
 */

is.a = is.type = function (value, type) {
  return typeof value === type;
};

/**
 * is.defined
 * Test if `value` is defined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is defined, false otherwise
 * @api public
 */

is.defined = function (value) {
  return typeof value !== 'undefined';
};

/**
 * is.empty
 * Test if `value` is empty.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is empty, false otherwise
 * @api public
 */

is.empty = function (value) {
  var type = toStr.call(value);
  var key;

  if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
    return value.length === 0;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (owns.call(value, key)) {
        return false;
      }
    }
    return true;
  }

  return !value;
};

/**
 * is.equal
 * Test if `value` is equal to `other`.
 *
 * @param {Mixed} value value to test
 * @param {Mixed} other value to compare with
 * @return {Boolean} true if `value` is equal to `other`, false otherwise
 */

is.equal = function equal(value, other) {
  if (value === other) {
    return true;
  }

  var type = toStr.call(value);
  var key;

  if (type !== toStr.call(other)) {
    return false;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (!is.equal(value[key], other[key]) || !(key in other)) {
        return false;
      }
    }
    for (key in other) {
      if (!is.equal(value[key], other[key]) || !(key in value)) {
        return false;
      }
    }
    return true;
  }

  if (type === '[object Array]') {
    key = value.length;
    if (key !== other.length) {
      return false;
    }
    while (key--) {
      if (!is.equal(value[key], other[key])) {
        return false;
      }
    }
    return true;
  }

  if (type === '[object Function]') {
    return value.prototype === other.prototype;
  }

  if (type === '[object Date]') {
    return value.getTime() === other.getTime();
  }

  return false;
};

/**
 * is.hosted
 * Test if `value` is hosted by `host`.
 *
 * @param {Mixed} value to test
 * @param {Mixed} host host to test with
 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
 * @api public
 */

is.hosted = function (value, host) {
  var type = typeof host[value];
  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
};

/**
 * is.instance
 * Test if `value` is an instance of `constructor`.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an instance of `constructor`
 * @api public
 */

is.instance = is['instanceof'] = function (value, constructor) {
  return value instanceof constructor;
};

/**
 * is.nil / is.null
 * Test if `value` is null.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is null, false otherwise
 * @api public
 */

is.nil = is['null'] = function (value) {
  return value === null;
};

/**
 * is.undef / is.undefined
 * Test if `value` is undefined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is undefined, false otherwise
 * @api public
 */

is.undef = is.undefined = function (value) {
  return typeof value === 'undefined';
};

/**
 * Test arguments.
 */

/**
 * is.args
 * Test if `value` is an arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.args = is.arguments = function (value) {
  var isStandardArguments = toStr.call(value) === '[object Arguments]';
  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
  return isStandardArguments || isOldArguments;
};

/**
 * Test array.
 */

/**
 * is.array
 * Test if 'value' is an array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an array, false otherwise
 * @api public
 */

is.array = Array.isArray || function (value) {
  return toStr.call(value) === '[object Array]';
};

/**
 * is.arguments.empty
 * Test if `value` is an empty arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
 * @api public
 */
is.args.empty = function (value) {
  return is.args(value) && value.length === 0;
};

/**
 * is.array.empty
 * Test if `value` is an empty array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty array, false otherwise
 * @api public
 */
is.array.empty = function (value) {
  return is.array(value) && value.length === 0;
};

/**
 * is.arraylike
 * Test if `value` is an arraylike object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.arraylike = function (value) {
  return !!value && !is.bool(value)
    && owns.call(value, 'length')
    && isFinite(value.length)
    && is.number(value.length)
    && value.length >= 0;
};

/**
 * Test boolean.
 */

/**
 * is.bool
 * Test if `value` is a boolean.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a boolean, false otherwise
 * @api public
 */

is.bool = is['boolean'] = function (value) {
  return toStr.call(value) === '[object Boolean]';
};

/**
 * is.false
 * Test if `value` is false.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is false, false otherwise
 * @api public
 */

is['false'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === false;
};

/**
 * is.true
 * Test if `value` is true.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is true, false otherwise
 * @api public
 */

is['true'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === true;
};

/**
 * Test date.
 */

/**
 * is.date
 * Test if `value` is a date.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a date, false otherwise
 * @api public
 */

is.date = function (value) {
  return toStr.call(value) === '[object Date]';
};

/**
 * is.date.valid
 * Test if `value` is a valid date.
 *
 * @param {Mixed} value value to test
 * @returns {Boolean} true if `value` is a valid date, false otherwise
 */
is.date.valid = function (value) {
  return is.date(value) && !isNaN(Number(value));
};

/**
 * Test element.
 */

/**
 * is.element
 * Test if `value` is an html element.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an HTML Element, false otherwise
 * @api public
 */

is.element = function (value) {
  return value !== undefined
    && typeof HTMLElement !== 'undefined'
    && value instanceof HTMLElement
    && value.nodeType === 1;
};

/**
 * Test error.
 */

/**
 * is.error
 * Test if `value` is an error object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an error object, false otherwise
 * @api public
 */

is.error = function (value) {
  return toStr.call(value) === '[object Error]';
};

/**
 * Test function.
 */

/**
 * is.fn / is.function (deprecated)
 * Test if `value` is a function.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a function, false otherwise
 * @api public
 */

is.fn = is['function'] = function (value) {
  var isAlert = typeof window !== 'undefined' && value === window.alert;
  return isAlert || toStr.call(value) === '[object Function]';
};

/**
 * Test number.
 */

/**
 * is.number
 * Test if `value` is a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a number, false otherwise
 * @api public
 */

is.number = function (value) {
  return toStr.call(value) === '[object Number]';
};

/**
 * is.infinite
 * Test if `value` is positive or negative infinity.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
 * @api public
 */
is.infinite = function (value) {
  return value === Infinity || value === -Infinity;
};

/**
 * is.decimal
 * Test if `value` is a decimal number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a decimal number, false otherwise
 * @api public
 */

is.decimal = function (value) {
  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
};

/**
 * is.divisibleBy
 * Test if `value` is divisible by `n`.
 *
 * @param {Number} value value to test
 * @param {Number} n dividend
 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
 * @api public
 */

is.divisibleBy = function (value, n) {
  var isDividendInfinite = is.infinite(value);
  var isDivisorInfinite = is.infinite(n);
  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
  return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
};

/**
 * is.integer
 * Test if `value` is an integer.
 *
 * @param value to test
 * @return {Boolean} true if `value` is an integer, false otherwise
 * @api public
 */

is.integer = is['int'] = function (value) {
  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
};

/**
 * is.maximum
 * Test if `value` is greater than 'others' values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is greater than `others` values
 * @api public
 */

is.maximum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value < others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.minimum
 * Test if `value` is less than `others` values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is less than `others` values
 * @api public
 */

is.minimum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value > others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.nan
 * Test if `value` is not a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is not a number, false otherwise
 * @api public
 */

is.nan = function (value) {
  return !is.number(value) || value !== value;
};

/**
 * is.even
 * Test if `value` is an even number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an even number, false otherwise
 * @api public
 */

is.even = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
};

/**
 * is.odd
 * Test if `value` is an odd number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an odd number, false otherwise
 * @api public
 */

is.odd = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
};

/**
 * is.ge
 * Test if `value` is greater than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.ge = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value >= other;
};

/**
 * is.gt
 * Test if `value` is greater than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.gt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value > other;
};

/**
 * is.le
 * Test if `value` is less than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if 'value' is less than or equal to 'other'
 * @api public
 */

is.le = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value <= other;
};

/**
 * is.lt
 * Test if `value` is less than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if `value` is less than `other`
 * @api public
 */

is.lt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value < other;
};

/**
 * is.within
 * Test if `value` is within `start` and `finish`.
 *
 * @param {Number} value value to test
 * @param {Number} start lower bound
 * @param {Number} finish upper bound
 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
 * @api public
 */
is.within = function (value, start, finish) {
  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
    throw new TypeError('all arguments must be numbers');
  }
  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
  return isAnyInfinite || (value >= start && value <= finish);
};

/**
 * Test object.
 */

/**
 * is.object
 * Test if `value` is an object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an object, false otherwise
 * @api public
 */
is.object = function (value) {
  return toStr.call(value) === '[object Object]';
};

/**
 * is.primitive
 * Test if `value` is a primitive.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a primitive, false otherwise
 * @api public
 */
is.primitive = function isPrimitive(value) {
  if (!value) {
    return true;
  }
  if (typeof value === 'object' || is.object(value) || is.fn(value) || is.array(value)) {
    return false;
  }
  return true;
};

/**
 * is.hash
 * Test if `value` is a hash - a plain object literal.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a hash, false otherwise
 * @api public
 */

is.hash = function (value) {
  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
};

/**
 * Test regexp.
 */

/**
 * is.regexp
 * Test if `value` is a regular expression.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a regexp, false otherwise
 * @api public
 */

is.regexp = function (value) {
  return toStr.call(value) === '[object RegExp]';
};

/**
 * Test string.
 */

/**
 * is.string
 * Test if `value` is a string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a string, false otherwise
 * @api public
 */

is.string = function (value) {
  return toStr.call(value) === '[object String]';
};

/**
 * Test base64 string.
 */

/**
 * is.base64
 * Test if `value` is a valid base64 encoded string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
 * @api public
 */

is.base64 = function (value) {
  return is.string(value) && (!value.length || base64Regex.test(value));
};

/**
 * Test base64 string.
 */

/**
 * is.hex
 * Test if `value` is a valid hex encoded string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
 * @api public
 */

is.hex = function (value) {
  return is.string(value) && (!value.length || hexRegex.test(value));
};

/**
 * is.symbol
 * Test if `value` is an ES6 Symbol
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a Symbol, false otherise
 * @api public
 */

is.symbol = function (value) {
  return typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol';
};

module.exports = is;

},{}],630:[function(require,module,exports){
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isArray = require('isarray');

module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && isArray(val) === false;
};

},{"isarray":631}],631:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],632:[function(require,module,exports){

module.exports = isDate;


/**
 * Matching format per: http://www.w3.org/TR/NOTE-datetime
 */

var isoformat = '^\\d{4}-\\d{2}-\\d{2}' +        // Match YYYY-MM-DD
                '((T\\d{2}:\\d{2}(:\\d{2})?)' +  // Match THH:mm:ss
                '(\\.\\d{1,6})?' +               // Match .sssss
                '(Z|(\\+|-)\\d{2}:\\d{2})?)?$';  // Time zone (Z or +hh:mm)


var matcher = new RegExp(isoformat);


function isDate (val) {
  return typeof val === 'string' &&
         matcher.test(val) &&
         !isNaN(Date.parse(val));
}
},{}],633:[function(require,module,exports){
(function (global){
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root["Object"]());
    exports || (exports = root["Object"]());

    // Native constructor aliases.
    var Number = context["Number"] || root["Number"],
        String = context["String"] || root["String"],
        Object = context["Object"] || root["Object"],
        Date = context["Date"] || root["Date"],
        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
        TypeError = context["TypeError"] || root["TypeError"],
        Math = context["Math"] || root["Math"],
        nativeJSON = context["JSON"] || root["JSON"];

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty, forEach, undef;

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    try {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        // Safari < 2.0.2 stores the internal millisecond time value correctly,
        // but clips the values returned by the date methods to the range of
        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    } catch (exception) {}

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] !== undef) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("json-parse");
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            try {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undef &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undef) === undef &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undef &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undef]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undef, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                // serialize extended years.
                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
            } catch (exception) {
              stringifySupported = false;
            }
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse;
          if (typeof parse == "function") {
            try {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  try {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  } catch (exception) {}
                  if (parseSupported) {
                    try {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    } catch (exception) {}
                  }
                  if (parseSupported) {
                    try {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    } catch (exception) {}
                  }
                }
              }
            } catch (exception) {
              parseSupported = false;
            }
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Define additional utility methods if the `Date` methods are buggy.
      if (!isExtended) {
        var floor = Math.floor;
        // A mapping between the months of the year and the number of days between
        // January 1st and the first of the respective month.
        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        // Internal: Calculates the number of days between the Unix epoch and the
        // first day of the given month.
        var getDay = function (year, month) {
          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
        };
      }

      // Internal: Determines if a property is a direct property of the given
      // object. Delegates to the native `Object#hasOwnProperty` method.
      if (!(isProperty = objectProto.hasOwnProperty)) {
        isProperty = function (property) {
          var members = {}, constructor;
          if ((members.__proto__ = null, members.__proto__ = {
            // The *proto* property cannot be set multiple times in recent
            // versions of Firefox and SeaMonkey.
            "toString": 1
          }, members).toString != getClass) {
            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
            // supports the mutable *proto* property.
            isProperty = function (property) {
              // Capture and break the object's prototype chain (see section 8.6.2
              // of the ES 5.1 spec). The parenthesized expression prevents an
              // unsafe transformation by the Closure Compiler.
              var original = this.__proto__, result = property in (this.__proto__ = null, this);
              // Restore the original prototype chain.
              this.__proto__ = original;
              return result;
            };
          } else {
            // Capture a reference to the top-level `Object` constructor.
            constructor = members.constructor;
            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
            // other environments.
            isProperty = function (property) {
              var parent = (this.constructor || constructor).prototype;
              return property in this && !(property in parent && this[property] === parent[property]);
            };
          }
          members = null;
          return isProperty.call(this, property);
        };
      }

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      forEach = function (object, callback) {
        var size = 0, Properties, members, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        members = new Properties();
        for (property in members) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(members, property)) {
            size++;
          }
        }
        Properties = members = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
          };
        } else if (size == 2) {
          // Safari <= 2.0.4 enumerates shadowed properties twice.
          forEach = function (object, callback) {
            // Create a set of iterated properties.
            var members = {}, isFunction = getClass.call(object) == functionClass, property;
            for (property in object) {
              // Store each property name to prevent double enumeration. The
              // `prototype` property of functions is not enumerated due to cross-
              // environment inconsistencies.
              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forEach(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Double-quotes a string `value`, replacing all ASCII control
        // characters (characters with code unit values between 0 and 31) with
        // their escaped equivalents. This is an implementation of the
        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
        var unicodePrefix = "\\u00";
        var quote = function (value) {
          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
          for (; index < length; index++) {
            var charCode = value.charCodeAt(index);
            // If the character is a control character, append its Unicode or
            // shorthand escape sequence; otherwise, append the character as-is.
            switch (charCode) {
              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
                result += Escapes[charCode];
                break;
              default:
                if (charCode < 32) {
                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                  break;
                }
                result += useCharIndex ? symbols[index] : value.charAt(index);
            }
          }
          return result + '"';
        };

        // Internal: Recursively serializes an object. Implements the
        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
          try {
            // Necessary for host object support.
            value = object[property];
          } catch (exception) {}
          if (typeof value == "object" && value) {
            className = getClass.call(value);
            if (className == dateClass && !isProperty.call(value, "toJSON")) {
              if (value > -1 / 0 && value < 1 / 0) {
                // Dates are serialized according to the `Date#toJSON` method
                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                // for the ISO 8601 date time string format.
                if (getDay) {
                  // Manually compute the year, month, date, hours, minutes,
                  // seconds, and milliseconds if the `getUTC*` methods are
                  // buggy. Adapted from @Yaffle's `date-shim` project.
                  date = floor(value / 864e5);
                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                  date = 1 + date - getDay(year, month);
                  // The `time` value specifies the time within the day (see ES
                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                  // to compute `A modulo B`, as the `%` operator does not
                  // correspond to the `modulo` operation for negative numbers.
                  time = (value % 864e5 + 864e5) % 864e5;
                  // The hours, minutes, seconds, and milliseconds are obtained by
                  // decomposing the time within the day. See section 15.9.1.10.
                  hours = floor(time / 36e5) % 24;
                  minutes = floor(time / 6e4) % 60;
                  seconds = floor(time / 1e3) % 60;
                  milliseconds = time % 1e3;
                } else {
                  year = value.getUTCFullYear();
                  month = value.getUTCMonth();
                  date = value.getUTCDate();
                  hours = value.getUTCHours();
                  minutes = value.getUTCMinutes();
                  seconds = value.getUTCSeconds();
                  milliseconds = value.getUTCMilliseconds();
                }
                // Serialize extended years correctly.
                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                  // Months, dates, hours, minutes, and seconds should have two
                  // digits; milliseconds should have three.
                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                  // Milliseconds are optional in ES 5.0, but required in 5.1.
                  "." + toPaddedString(3, milliseconds) + "Z";
              } else {
                value = null;
              }
            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
              // ignores all `toJSON` methods on these objects unless they are
              // defined directly on an instance.
              value = value.toJSON(property);
            }
          }
          if (callback) {
            // If a replacement function was provided, call it to obtain the value
            // for serialization.
            value = callback.call(object, property, value);
          }
          if (value === null) {
            return "null";
          }
          className = getClass.call(value);
          if (className == booleanClass) {
            // Booleans are represented literally.
            return "" + value;
          } else if (className == numberClass) {
            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
            // `"null"`.
            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
          } else if (className == stringClass) {
            // Strings are double-quoted and escaped.
            return quote("" + value);
          }
          // Recursively serialize objects and arrays.
          if (typeof value == "object") {
            // Check for cyclic structures. This is a linear search; performance
            // is inversely proportional to the number of unique nested objects.
            for (length = stack.length; length--;) {
              if (stack[length] === value) {
                // Cyclic structures cannot be serialized by `JSON.stringify`.
                throw TypeError();
              }
            }
            // Add the object to the stack of traversed objects.
            stack.push(value);
            results = [];
            // Save the current indentation level and indent one additional level.
            prefix = indentation;
            indentation += whitespace;
            if (className == arrayClass) {
              // Recursively serialize array elements.
              for (index = 0, length = value.length; index < length; index++) {
                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                results.push(element === undef ? "null" : element);
              }
              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
            } else {
              // Recursively serialize object members. Members are selected from
              // either a user-specified list of property names, or the object
              // itself.
              forEach(properties || value, function (property) {
                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                if (element !== undef) {
                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                  // is not the empty string, let `member` {quote(property) + ":"}
                  // be the concatenation of `member` and the `space` character."
                  // The "`space` character" refers to the literal space
                  // character, not the `space` {width} argument provided to
                  // `JSON.stringify`.
                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                }
              });
              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
            }
            // Remove the object from the traversed object stack.
            stack.pop();
            return result;
          }
        };

        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
        exports.stringify = function (source, filter, width) {
          var whitespace, callback, properties, className;
          if (objectTypes[typeof filter] && filter) {
            if ((className = getClass.call(filter)) == functionClass) {
              callback = filter;
            } else if (className == arrayClass) {
              // Convert the property names array into a makeshift set.
              properties = {};
              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
            }
          }
          if (width) {
            if ((className = getClass.call(width)) == numberClass) {
              // Convert the `width` to an integer and create a string containing
              // `width` number of space characters.
              if ((width -= width % 1) > 0) {
                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
              }
            } else if (className == stringClass) {
              whitespace = width.length <= 10 ? width : width.slice(0, 10);
            }
          }
          // Opera <= 7.54u2 discards the values associated with empty string keys
          // (`""`) only if they are used directly within an object member list
          // (e.g., `!("" in { "": 1})`).
          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
        };
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                if (source.slice(Index, Index + 4) == "true") {
                  Index += 4;
                  return true;
                } else if (source.slice(Index, Index + 5) == "false") {
                  Index += 5;
                  return false;
                } else if (source.slice(Index, Index + 4) == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undef) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forEach` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(value, length, callback);
              }
            } else {
              forEach(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports["runInContext"] = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root["JSON3"],
        isRestored = false;

    var JSON3 = runInContext(root, (root["JSON3"] = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root["JSON3"] = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}).call(this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],634:[function(require,module,exports){
/**
 * Module dependencies
 */

var debug = require('debug')('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    debug('jsonp got', data);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}

},{"debug":621}],635:[function(require,module,exports){
/**
 * Module dependencies.
 */

var is = require('is');
var onload = require('script-onload');
var tick = require('next-tick');

/**
 * Expose `loadScript`.
 *
 * @param {Object} options
 * @param {Function} fn
 * @api public
 */

module.exports = function loadIframe(options, fn){
  if (!options) throw new Error('Cant load nothing...');

  // Allow for the simplest case, just passing a `src` string.
  if (is.string(options)) options = { src : options };

  var https = document.location.protocol === 'https:' ||
              document.location.protocol === 'chrome-extension:';

  // If you use protocol relative URLs, third-party scripts like Google
  // Analytics break when testing with `file:` so this fixes that.
  if (options.src && options.src.indexOf('//') === 0) {
    options.src = https ? 'https:' + options.src : 'http:' + options.src;
  }

  // Allow them to pass in different URLs depending on the protocol.
  if (https && options.https) options.src = options.https;
  else if (!https && options.http) options.src = options.http;

  // Make the `<iframe>` element and insert it before the first iframe on the
  // page, which is guaranteed to exist since this Javaiframe is running.
  var iframe = document.createElement('iframe');
  iframe.src = options.src;
  iframe.width = options.width || 1;
  iframe.height = options.height || 1;
  iframe.style.display = 'none';

  // If we have a fn, attach event handlers, even in IE. Based off of
  // the Third-Party Javascript script loading example:
  // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
  if (is.fn(fn)) {
    onload(iframe, fn);
  }

  tick(function(){
    // Append after event listeners are attached for IE.
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(iframe, firstScript);
  });

  // Return the iframe element in case they want to do anything special, like
  // give it an ID or attributes.
  return iframe;
};

},{"is":629,"next-tick":640,"script-onload":649}],636:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000
var m = s * 60
var h = m * 60
var d = h * 24
var y = d * 365.25

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {}
  var type = typeof val
  if (type === 'string' && val.length > 0) {
    return parse(val)
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ?
			fmtLong(val) :
			fmtShort(val)
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
}

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str)
  if (str.length > 10000) {
    return
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
  if (!match) {
    return
  }
  var n = parseFloat(match[1])
  var type = (match[2] || 'ms').toLowerCase()
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y
    case 'days':
    case 'day':
    case 'd':
      return n * d
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n
    default:
      return undefined
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd'
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h'
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm'
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's'
  }
  return ms + 'ms'
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms'
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name
  }
  return Math.ceil(ms / n) + ' ' + name + 's'
}

},{}],637:[function(require,module,exports){
'use strict';

var is = require('is');
var isodate = require('@segment/isodate');
var milliseconds = require('./milliseconds');
var seconds = require('./seconds');

/**
 * Returns a new Javascript Date object, allowing a variety of extra input types
 * over the native Date constructor.
 *
 * @param {Date|string|number} val
 */
module.exports = function newDate(val) {
  if (is.date(val)) return val;
  if (is.number(val)) return new Date(toMs(val));

  // date strings
  if (isodate.is(val)) {
    return isodate.parse(val);
  }
  if (milliseconds.is(val)) {
    return milliseconds.parse(val);
  }
  if (seconds.is(val)) {
    return seconds.parse(val);
  }

  // fallback to Date.parse
  return new Date(val);
};


/**
 * If the number passed val is seconds from the epoch, turn it into milliseconds.
 * Milliseconds would be greater than 31557600000 (December 31, 1970).
 *
 * @param {number} num
 */
function toMs(num) {
  if (num < 31557600000) return num * 1000;
  return num;
}

},{"./milliseconds":638,"./seconds":639,"@segment/isodate":597,"is":629}],638:[function(require,module,exports){
'use strict';

/**
 * Matcher.
 */

var matcher = /\d{13}/;


/**
 * Check whether a string is a millisecond date string.
 *
 * @param {string} string
 * @return {boolean}
 */
exports.is = function(string) {
  return matcher.test(string);
};


/**
 * Convert a millisecond string to a date.
 *
 * @param {string} millis
 * @return {Date}
 */
exports.parse = function(millis) {
  millis = parseInt(millis, 10);
  return new Date(millis);
};

},{}],639:[function(require,module,exports){
'use strict';

/**
 * Matcher.
 */

var matcher = /\d{10}/;


/**
 * Check whether a string is a second date string.
 *
 * @param {string} string
 * @return {Boolean}
 */
exports.is = function(string) {
  return matcher.test(string);
};


/**
 * Convert a second string to a date.
 *
 * @param {string} seconds
 * @return {Date}
 */
exports.parse = function(seconds) {
  var millis = parseInt(seconds, 10) * 1000;
  return new Date(millis);
};

},{}],640:[function(require,module,exports){
arguments[4][176][0].apply(exports,arguments)
},{"_process":647,"dup":176}],641:[function(require,module,exports){

var identity = function(_){ return _; };


/**
 * Module exports, export
 */

module.exports = multiple(find);
module.exports.find = module.exports;


/**
 * Export the replacement function, return the modified object
 */

module.exports.replace = function (obj, key, val, options) {
  multiple(replace).call(this, obj, key, val, options);
  return obj;
};


/**
 * Export the delete function, return the modified object
 */

module.exports.del = function (obj, key, options) {
  multiple(del).call(this, obj, key, null, options);
  return obj;
};


/**
 * Compose applying the function to a nested key
 */

function multiple (fn) {
  return function (obj, path, val, options) {
    normalize = options && isFunction(options.normalizer) ? options.normalizer : defaultNormalize;
    path = normalize(path);

    var key;
    var finished = false;

    while (!finished) loop();

    function loop() {
      for (key in obj) {
        var normalizedKey = normalize(key);
        if (0 === path.indexOf(normalizedKey)) {
          var temp = path.substr(normalizedKey.length);
          if (temp.charAt(0) === '.' || temp.length === 0) {
            path = temp.substr(1);
            var child = obj[key];

            // we're at the end and there is nothing.
            if (null == child) {
              finished = true;
              return;
            }

            // we're at the end and there is something.
            if (!path.length) {
              finished = true;
              return;
            }

            // step into child
            obj = child;

            // but we're done here
            return;
          }
        }
      }

      key = undefined;
      // if we found no matching properties
      // on the current object, there's no match.
      finished = true;
    }

    if (!key) return;
    if (null == obj) return obj;

    // the `obj` and `key` is one above the leaf object and key, so
    // start object: { a: { 'b.c': 10 } }
    // end object: { 'b.c': 10 }
    // end key: 'b.c'
    // this way, you can do `obj[key]` and get `10`.
    return fn(obj, key, val);
  };
}


/**
 * Find an object by its key
 *
 * find({ first_name : 'Calvin' }, 'firstName')
 */

function find (obj, key) {
  if (obj.hasOwnProperty(key)) return obj[key];
}


/**
 * Delete a value for a given key
 *
 * del({ a : 'b', x : 'y' }, 'X' }) -> { a : 'b' }
 */

function del (obj, key) {
  if (obj.hasOwnProperty(key)) delete obj[key];
  return obj;
}


/**
 * Replace an objects existing value with a new one
 *
 * replace({ a : 'b' }, 'a', 'c') -> { a : 'c' }
 */

function replace (obj, key, val) {
  if (obj.hasOwnProperty(key)) obj[key] = val;
  return obj;
}

/**
 * Normalize a `dot.separated.path`.
 *
 * A.HELL(!*&#(!)O_WOR   LD.bar => ahelloworldbar
 *
 * @param {String} path
 * @return {String}
 */

function defaultNormalize(path) {
  return path.replace(/[^a-zA-Z0-9\.]+/g, '').toLowerCase();
}

/**
 * Check if a value is a function.
 *
 * @param {*} val
 * @return {boolean} Returns `true` if `val` is a function, otherwise `false`.
 */

function isFunction(val) {
  return typeof val === 'function';
}

},{}],642:[function(require,module,exports){

/**
 * HOP ref.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Return own keys in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */

exports.keys = Object.keys || function(obj){
  var keys = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
};

/**
 * Return own values in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */

exports.values = function(obj){
  var vals = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      vals.push(obj[key]);
    }
  }
  return vals;
};

/**
 * Merge `b` into `a`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api public
 */

exports.merge = function(a, b){
  for (var key in b) {
    if (has.call(b, key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/**
 * Return length of `obj`.
 *
 * @param {Object} obj
 * @return {Number}
 * @api public
 */

exports.length = function(obj){
  return exports.keys(obj).length;
};

/**
 * Check if `obj` is empty.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api public
 */

exports.isEmpty = function(obj){
  return 0 == exports.length(obj);
};
},{}],643:[function(require,module,exports){
/**
 * Expose `omit`.
 */

module.exports = omit;

/**
 * Return a copy of the object without the specified keys.
 *
 * @param {Array} keys
 * @param {Object} object
 * @return {Object}
 */

function omit(keys, object){
  var ret = {};

  for (var item in object) {
    ret[item] = object[item];
  }

  for (var i = 0; i < keys.length; i++) {
    delete ret[keys[i]];
  }
  return ret;
}
},{}],644:[function(require,module,exports){


/**
 * Cache whether `<body>` exists.
 */

var body = false;


/**
 * Callbacks to call when the body exists.
 */

var callbacks = [];


/**
 * Export a way to add handlers to be invoked once the body exists.
 *
 * @param {Function} callback  A function to call when the body exists.
 */

module.exports = function onBody (callback) {
  if (body) {
    call(callback);
  } else {
    callbacks.push(callback);
  }
};


/**
 * Set an interval to check for `document.body`.
 */

var interval = setInterval(function () {
  if (!document.body) return;
  body = true;
  for (var i = 0; i < callbacks.length; i++) {
    call(callbacks[i]);
  }
  clearInterval(interval);
}, 5);


/**
 * Call a callback, passing it the body.
 *
 * @param {Function} callback  The callback to call.
 */

function call (callback) {
  callback(document.body);
}
},{}],645:[function(require,module,exports){
var each = require('each');


/**
 * Cache whether `<body>` exists.
 */

var body = false;


/**
 * Callbacks to call when the body exists.
 */

var callbacks = [];


/**
 * Export a way to add handlers to be invoked once the body exists.
 *
 * @param {Function} callback  A function to call when the body exists.
 */

module.exports = function onBody (callback) {
  if (body) {
    call(callback);
  } else {
    callbacks.push(callback);
  }
};


/**
 * Set an interval to check for `document.body`.
 */

var interval = setInterval(function () {
  if (!document.body) return;
  body = true;
  each(callbacks, call);
  clearInterval(interval);
}, 5);


/**
 * Call a callback, passing it the body.
 *
 * @param {Function} callback  The callback to call.
 */

function call (callback) {
  callback(document.body);
}
},{"each":611}],646:[function(require,module,exports){

/**
 * Expose `pick`.
 */

module.exports = pick;

/**
 * Pick keys from an `obj`.
 *
 * @param {Object} obj
 * @param {Strings} keys...
 * @return {Object}
 */

function pick(obj){
  var keys = [].slice.call(arguments, 1);
  var ret = {};

  for (var i = 0, key; key = keys[i]; i++) {
    if (key in obj) ret[key] = obj[key];
  }

  return ret;
}
},{}],647:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],648:[function(require,module,exports){

/**
 * Module dependencies.
 */

var type = require('type-component');

/**
 * Expose `reject`
 */

module.exports = reject;

/**
 * Reject `obj`, `fn`.
 *
 * If `fn` is omitted a default function
 * that removes nulls (undefined/null) will
 * be supplied.
 *
 * @param {Object} obj
 * @param {Function} fn
 * @return {Object}
 * @api public
 */

function reject(obj, fn){
  fn = fn || compact;
  return 'array' == type(obj)
    ? reject.array(obj, fn)
    : reject.object(obj, fn);
}

/**
 * Reject `arr`, `fn`.
 *
 * @param {Array|String} arr
 * @param {Function} fn
 * @return {Object}
 * @api public
 */

reject.array = function(arr, fn){
  var ret = [];

  for (var i = 0; i < arr.length; ++i) {
    if (!fn(arr[i], i)) ret[ret.length] = arr[i];
  }

  return ret;
};

/**
 * Reject `obj`, `fn`.
 *
 * @param {Object} obj
 * @param {Function} fn
 * @return {Object}
 * @api public
 */

reject.object = function(obj, fn){
  var ret = {};

  for (var k in obj) {
    if (obj.hasOwnProperty(k) && !fn(obj[k], k)) {
      ret[k] = obj[k]
    }
  }

  return ret;
};

/**
 * Reject `type(s)` of `obj/arr`.
 *
 * @param {Object|Array} obj
 * @param {Array|String} type(s)
 * @return {Object|Array}
 * @api public
 */

reject.types =
reject.type = function(obj, types){
  if (!Array.isArray(types)) types = [types];
  return reject(obj, function(value){
    return -1 != types.indexOf(type(value));
  });
};

/**
 * Reject `value` if it's `null` or `undefined`.
 *
 * @param {Mixed} value
 * @return {Mixed}
 * @api private
 */

function compact(value){
  return null == value;
}

},{"type-component":670}],649:[function(require,module,exports){

// https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html

/**
 * Invoke `fn(err)` when the given `el` script loads.
 *
 * @param {Element} el
 * @param {Function} fn
 * @api public
 */

module.exports = function(el, fn){
  return el.addEventListener
    ? add(el, fn)
    : attach(el, fn);
};

/**
 * Add event listener to `el`, `fn()`.
 *
 * @param {Element} el
 * @param {Function} fn
 * @api private
 */

function add(el, fn){
  el.addEventListener('load', function(_, e){ fn(null, e); }, false);
  el.addEventListener('error', function(e){
    var err = new Error('script error "' + el.src + '"');
    err.event = e;
    fn(err);
  }, false);
}

/**
 * Attach event.
 *
 * @param {Element} el
 * @param {Function} fn
 * @api private
 */

function attach(el, fn){
  el.attachEvent('onreadystatechange', function(e){
    if (!/complete|loaded/.test(el.readyState)) return;
    fn(null, e);
  });
  el.attachEvent('onerror', function(e){
    var err = new Error('failed to load the script "' + el.src + '"');
    err.event = e || window.event;
    fn(err);
  });
}

},{}],650:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var get = require('obj-case');

/**
 * Add address getters to `proto`.
 *
 * @param {Function} proto
 */
module.exports = function(proto) {
  proto.zip = trait('postalCode', 'zip');
  proto.country = trait('country');
  proto.street = trait('street');
  proto.state = trait('state');
  proto.city = trait('city');
  proto.region = trait('region');

  function trait(a, b) {
    return function() {
      var traits = this.traits();
      var props = this.properties ? this.properties() : {};

      return get(traits, 'address.' + a)
        || get(traits, a)
        || (b ? get(traits, 'address.' + b) : null)
        || (b ? get(traits, b) : null)
        || get(props, 'address.' + a)
        || get(props, a)
        || (b ? get(props, 'address.' + b) : null)
        || (b ? get(props, b) : null);
    };
  }
};

},{"obj-case":641}],651:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var inherit = require('./utils').inherit;
var Facade = require('./facade');

/**
 * Initialize a new `Alias` facade with a `dictionary` of arguments.
 *
 * @param {Object} dictionary
 *   @property {string} from
 *   @property {string} to
 *   @property {Object} options
 * @param {Object} opts
 *   @property {boolean|undefined} clone
 */
function Alias(dictionary, opts) {
  Facade.call(this, dictionary, opts);
}

/**
 * Inherit from `Facade`.
 */

inherit(Alias, Facade);

/**
 * Return type of facade.
 *
 * @return {string}
 */
Alias.prototype.action = function() {
  return 'alias';
};

Alias.prototype.type = Alias.prototype.action;

/**
 * Get `previousId`.
 *
 * @api public
 * @return {*}
 */
Alias.prototype.previousId = function() {
  return this.field('previousId') || this.field('from');
};

Alias.prototype.from = Alias.prototype.previousId;

/**
 * Get `userId`.
 *
 * @api public
 * @return {string}
 */
Alias.prototype.userId = function() {
  return this.field('userId') || this.field('to');
};

Alias.prototype.to = Alias.prototype.userId;

/**
 * Exports.
 */

module.exports = Alias;

},{"./facade":652,"./utils":660}],652:[function(require,module,exports){
'use strict';

var address = require('./address');
var clone = require('./utils').clone;
var isEnabled = require('./is-enabled');
var newDate = require('new-date');
var objCase = require('obj-case');
var traverse = require('@segment/isodate-traverse');
var type = require('./utils').type;

/**
 * Initialize a new `Facade` with an `obj` of arguments.
 *
 * @param {Object} obj
 * @param {Object} opts
 */
function Facade(obj, opts) {
  opts = opts || {};
  if (!('clone' in opts)) opts.clone = true;
  if (opts.clone) obj = clone(obj);
  if (!('traverse' in opts)) opts.traverse = true;
  if (!('timestamp' in obj)) obj.timestamp = new Date();
  else obj.timestamp = newDate(obj.timestamp);
  if (opts.traverse) traverse(obj);
  this.opts = opts;
  this.obj = obj;
}

/**
 * Mixin address traits.
 */

address(Facade.prototype);

/**
 * Return a proxy function for a `field` that will attempt to first use methods,
 * and fallback to accessing the underlying object directly. You can specify
 * deeply nested fields too like:
 *
 *   this.proxy('options.Librato');
 *
 * @param {string} field
 */
Facade.prototype.proxy = function(field) {
  var fields = field.split('.');
  field = fields.shift();

  // Call a function at the beginning to take advantage of facaded fields
  var obj = this[field] || this.field(field);
  if (!obj) return obj;
  if (typeof obj === 'function') obj = obj.call(this) || {};
  if (fields.length === 0) return this.opts.clone ? transform(obj) : obj;

  obj = objCase(obj, fields.join('.'));
  return this.opts.clone ? transform(obj) : obj;
};

/**
 * Directly access a specific `field` from the underlying object, returning a
 * clone so outsiders don't mess with stuff.
 *
 * @param {string} field
 * @return {*}
 */
Facade.prototype.field = function(field) {
  var obj = this.obj[field];
  return this.opts.clone ? transform(obj) : obj;
};

/**
 * Utility method to always proxy a particular `field`. You can specify deeply
 * nested fields too like:
 *
 *   Facade.proxy('options.Librato');
 *
 * @param {string} field
 * @return {Function}
 */
Facade.proxy = function(field) {
  return function() {
    return this.proxy(field);
  };
};

/**
 * Utility method to directly access a `field`.
 *
 * @param {string} field
 * @return {Function}
 */
Facade.field = function(field) {
  return function() {
    return this.field(field);
  };
};

/**
 * Proxy multiple `path`.
 *
 * @param {string} path
 * @return {Array}
 */
Facade.multi = function(path) {
  return function() {
    var multi = this.proxy(path + 's');
    if (type(multi) === 'array') return multi;
    var one = this.proxy(path);
    if (one) one = [this.opts.clone ? clone(one) : one];
    return one || [];
  };
};

/**
 * Proxy one `path`.
 *
 * @param {string} path
 * @return {*}
 */
Facade.one = function(path) {
  return function() {
    var one = this.proxy(path);
    if (one) return one;
    var multi = this.proxy(path + 's');
    if (type(multi) === 'array') return multi[0];
  };
};

/**
 * Get the basic json object of this facade.
 *
 * @return {Object}
 */
Facade.prototype.json = function() {
  var ret = this.opts.clone ? clone(this.obj) : this.obj;
  if (this.type) ret.type = this.type();
  return ret;
};

/**
 * Get the options of a call (formerly called "context"). If you pass an
 * integration name, it will get the options for that specific integration, or
 * undefined if the integration is not enabled.
 *
 * @param {string} [integration]
 * @return {Object or Null}
 */
Facade.prototype.options = function(integration) {
  var obj = this.obj.options || this.obj.context || {};
  var options = this.opts.clone ? clone(obj) : obj;
  if (!integration) return options;
  if (!this.enabled(integration)) return;
  var integrations = this.integrations();
  var value = integrations[integration] || objCase(integrations, integration);
  if (typeof value !== 'object') value = objCase(this.options(), integration);
  return typeof value === 'object' ? value : {};
};

Facade.prototype.context = Facade.prototype.options;

/**
 * Check whether an integration is enabled.
 *
 * @param {string} integration
 * @return {boolean}
 */
Facade.prototype.enabled = function(integration) {
  var allEnabled = this.proxy('options.providers.all');
  if (typeof allEnabled !== 'boolean') allEnabled = this.proxy('options.all');
  if (typeof allEnabled !== 'boolean') allEnabled = this.proxy('integrations.all');
  if (typeof allEnabled !== 'boolean') allEnabled = true;

  var enabled = allEnabled && isEnabled(integration);
  var options = this.integrations();

  // If the integration is explicitly enabled or disabled, use that
  // First, check options.providers for backwards compatibility
  if (options.providers && options.providers.hasOwnProperty(integration)) {
    enabled = options.providers[integration];
  }

  // Next, check for the integration's existence in 'options' to enable it.
  // If the settings are a boolean, use that, otherwise it should be enabled.
  if (options.hasOwnProperty(integration)) {
    var settings = options[integration];
    if (typeof settings === 'boolean') {
      enabled = settings;
    } else {
      enabled = true;
    }
  }

  return !!enabled;
};

/**
 * Get all `integration` options.
 *
 * @api private
 * @param {string} integration
 * @return {Object}
 */
Facade.prototype.integrations = function() {
  return this.obj.integrations || this.proxy('options.providers') || this.options();
};

/**
 * Check whether the user is active.
 *
 * @return {boolean}
 */
Facade.prototype.active = function() {
  var active = this.proxy('options.active');
  if (active === null || active === undefined) active = true;
  return active;
};

/**
 * Get `sessionId / anonymousId`.
 *
 * @api public
 * @return {*}
 */
Facade.prototype.anonymousId = function() {
  return this.field('anonymousId') || this.field('sessionId');
};

Facade.prototype.sessionId = Facade.prototype.anonymousId;

/**
 * Get `groupId` from `context.groupId`.
 *
 * @api public
 * @return {string}
 */
Facade.prototype.groupId = Facade.proxy('options.groupId');

/**
 * Get the call's "super properties" which are just traits that have been
 * passed in as if from an identify call.
 *
 * @param {Object} aliases
 * @return {Object}
 */
Facade.prototype.traits = function(aliases) {
  var ret = this.proxy('options.traits') || {};
  var id = this.userId();
  aliases = aliases || {};

  if (id) ret.id = id;

  for (var alias in aliases) {
    var value = this[alias] == null ? this.proxy('options.traits.' + alias) : this[alias]();
    if (value == null) continue;
    ret[aliases[alias]] = value;
    delete ret[alias];
  }

  return ret;
};

/**
 * Add a convenient way to get the library name and version
 */
Facade.prototype.library = function() {
  var library = this.proxy('options.library');
  if (!library) return { name: 'unknown', version: null };
  if (typeof library === 'string') return { name: library, version: null };
  return library;
};

/**
 * Return the device information or an empty object
 *
 * @return {Object}
 */
Facade.prototype.device = function() {
  var device = this.proxy('context.device');
  if (type(device) !== 'object') device = {};
  var library = this.library().name;
  if (device.type) return device;

  if (library.indexOf('ios') > -1) device.type = 'ios';
  if (library.indexOf('android') > -1) device.type = 'android';
  return device;
};

/**
 * Set up some basic proxies.
 */

Facade.prototype.userAgent = Facade.proxy('context.userAgent');
Facade.prototype.timezone = Facade.proxy('context.timezone');
Facade.prototype.timestamp = Facade.field('timestamp');
Facade.prototype.channel = Facade.field('channel');
Facade.prototype.ip = Facade.proxy('context.ip');
Facade.prototype.userId = Facade.field('userId');

/**
 * Return the cloned and traversed object
 *
 * @param {*} obj
 * @return {*}
 */
function transform(obj) {
  return clone(obj);
}

/**
 * Exports.
 */

module.exports = Facade;

},{"./address":650,"./is-enabled":656,"./utils":660,"@segment/isodate-traverse":596,"new-date":637,"obj-case":641}],653:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var inherit = require('./utils').inherit;
var isEmail = require('is-email');
var newDate = require('new-date');
var Facade = require('./facade');

/**
 * Initialize a new `Group` facade with a `dictionary` of arguments.
 *
 * @param {Object} dictionary
 *   @param {string} userId
 *   @param {string} groupId
 *   @param {Object} properties
 *   @param {Object} options
 * @param {Object} opts
 *   @property {boolean|undefined} clone
 */
function Group(dictionary, opts) {
  Facade.call(this, dictionary, opts);
}

/**
 * Inherit from `Facade`
 */

inherit(Group, Facade);

/**
 * Get the facade's action.
 */
Group.prototype.action = function() {
  return 'group';
};

Group.prototype.type = Group.prototype.action;

/**
 * Setup some basic proxies.
 */
Group.prototype.groupId = Facade.field('groupId');

/**
 * Get created or createdAt.
 *
 * @return {Date}
 */
Group.prototype.created = function() {
  var created = this.proxy('traits.createdAt')
    || this.proxy('traits.created')
    || this.proxy('properties.createdAt')
    || this.proxy('properties.created');

  if (created) return newDate(created);
};

/**
 * Get the group's email, falling back to the group ID if it's a valid email.
 *
 * @return {string}
 */
Group.prototype.email = function() {
  var email = this.proxy('traits.email');
  if (email) return email;
  var groupId = this.groupId();
  if (isEmail(groupId)) return groupId;
};

/**
 * Get the group's traits.
 *
 * @param {Object} aliases
 * @return {Object}
 */
Group.prototype.traits = function(aliases) {
  var ret = this.properties();
  var id = this.groupId();
  aliases = aliases || {};

  if (id) ret.id = id;

  for (var alias in aliases) {
    var value = this[alias] == null ? this.proxy('traits.' + alias) : this[alias]();
    if (value == null) continue;
    ret[aliases[alias]] = value;
    delete ret[alias];
  }

  return ret;
};

/**
 * Special traits.
 */

Group.prototype.name = Facade.proxy('traits.name');
Group.prototype.industry = Facade.proxy('traits.industry');
Group.prototype.employees = Facade.proxy('traits.employees');

/**
 * Get traits or properties.
 *
 * TODO: remove me
 *
 * @return {Object}
 */
Group.prototype.properties = function() {
  return this.field('traits') || this.field('properties') || {};
};

/**
 * Exports.
 */

module.exports = Group;

},{"./facade":652,"./utils":660,"is-email":628,"new-date":637}],654:[function(require,module,exports){
'use strict';

var Facade = require('./facade');
var get = require('obj-case');
var inherit = require('./utils').inherit;
var isEmail = require('is-email');
var newDate = require('new-date');
var trim = require('trim');
var type = require('./utils').type;

/**
 * Initialize a new `Identify` facade with a `dictionary` of arguments.
 *
 * @param {Object} dictionary
 *   @param {string} userId
 *   @param {string} sessionId
 *   @param {Object} traits
 *   @param {Object} options
 * @param {Object} opts
 *   @property {boolean|undefined} clone
 */
function Identify(dictionary, opts) {
  Facade.call(this, dictionary, opts);
}

/**
 * Inherit from `Facade`.
 */

inherit(Identify, Facade);

/**
 * Get the facade's action.
 */
Identify.prototype.action = function() {
  return 'identify';
};

Identify.prototype.type = Identify.prototype.action;

/**
 * Get the user's traits.
 *
 * @param {Object} aliases
 * @return {Object}
 */
Identify.prototype.traits = function(aliases) {
  var ret = this.field('traits') || {};
  var id = this.userId();
  aliases = aliases || {};

  if (id) ret.id = id;

  for (var alias in aliases) {
    var value = this[alias] == null ? this.proxy('traits.' + alias) : this[alias]();
    if (value == null) continue;
    ret[aliases[alias]] = value;
    if (alias !== aliases[alias]) delete ret[alias];
  }

  return ret;
};

/**
 * Get the user's email, falling back to their user ID if it's a valid email.
 *
 * @return {string}
 */
Identify.prototype.email = function() {
  var email = this.proxy('traits.email');
  if (email) return email;

  var userId = this.userId();
  if (isEmail(userId)) return userId;
};

/**
 * Get the user's created date, optionally looking for `createdAt` since lots of
 * people do that instead.
 *
 * @return {Date|undefined}
 */
Identify.prototype.created = function() {
  var created = this.proxy('traits.created') || this.proxy('traits.createdAt');
  if (created) return newDate(created);
};

/**
 * Get the company created date.
 *
 * @return {Date|undefined}
 */
Identify.prototype.companyCreated = function() {
  var created = this.proxy('traits.company.created') || this.proxy('traits.company.createdAt');

  if (created) {
    return newDate(created);
  }
};

/**
 * Get the user's name, optionally combining a first and last name if that's all
 * that was provided.
 *
 * @return {string|undefined}
 */
Identify.prototype.name = function() {
  var name = this.proxy('traits.name');
  if (typeof name === 'string') {
    return trim(name);
  }

  var firstName = this.firstName();
  var lastName = this.lastName();
  if (firstName && lastName) {
    return trim(firstName + ' ' + lastName);
  }
};

/**
 * Get the user's first name, optionally splitting it out of a single name if
 * that's all that was provided.
 *
 * @return {string|undefined}
 */
Identify.prototype.firstName = function() {
  var firstName = this.proxy('traits.firstName');
  if (typeof firstName === 'string') {
    return trim(firstName);
  }

  var name = this.proxy('traits.name');
  if (typeof name === 'string') {
    return trim(name).split(' ')[0];
  }
};

/**
 * Get the user's last name, optionally splitting it out of a single name if
 * that's all that was provided.
 *
 * @return {string|undefined}
 */
Identify.prototype.lastName = function() {
  var lastName = this.proxy('traits.lastName');
  if (typeof lastName === 'string') {
    return trim(lastName);
  }

  var name = this.proxy('traits.name');
  if (typeof name !== 'string') {
    return;
  }

  var space = trim(name).indexOf(' ');
  if (space === -1) {
    return;
  }

  return trim(name.substr(space + 1));
};

/**
 * Get the user's unique id.
 *
 * @return {string|undefined}
 */
Identify.prototype.uid = function() {
  return this.userId() || this.username() || this.email();
};

/**
 * Get description.
 *
 * @return {string}
 */
Identify.prototype.description = function() {
  return this.proxy('traits.description') || this.proxy('traits.background');
};

/**
 * Get the age.
 *
 * If the age is not explicitly set
 * the method will compute it from `.birthday()`
 * if possible.
 *
 * @return {number}
 */
Identify.prototype.age = function() {
  var date = this.birthday();
  var age = get(this.traits(), 'age');
  if (age != null) return age;
  if (type(date) !== 'date') return;
  var now = new Date();
  return now.getFullYear() - date.getFullYear();
};

/**
 * Get the avatar.
 *
 * .photoUrl needed because help-scout
 * implementation uses `.avatar || .photoUrl`.
 *
 * .avatarUrl needed because trakio uses it.
 *
 * @return {*}
 */
Identify.prototype.avatar = function() {
  var traits = this.traits();
  return get(traits, 'avatar') || get(traits, 'photoUrl') || get(traits, 'avatarUrl');
};

/**
 * Get the position.
 *
 * .jobTitle needed because some integrations use it.
 *
 * @return {*}
 */
Identify.prototype.position = function() {
  var traits = this.traits();
  return get(traits, 'position') || get(traits, 'jobTitle');
};

/**
 * Setup sme basic "special" trait proxies.
 */

Identify.prototype.username = Facade.proxy('traits.username');
Identify.prototype.website = Facade.one('traits.website');
Identify.prototype.websites = Facade.multi('traits.website');
Identify.prototype.phone = Facade.one('traits.phone');
Identify.prototype.phones = Facade.multi('traits.phone');
Identify.prototype.address = Facade.proxy('traits.address');
Identify.prototype.gender = Facade.proxy('traits.gender');
Identify.prototype.birthday = Facade.proxy('traits.birthday');

/**
 * Exports.
 */

module.exports = Identify;

},{"./facade":652,"./utils":660,"is-email":628,"new-date":637,"obj-case":641,"trim":669}],655:[function(require,module,exports){
'use strict';

var Facade = require('./facade');

/**
 * Expose specific-method facades.
 */

Facade.Alias = require('./alias');
Facade.Group = require('./group');
Facade.Identify = require('./identify');
Facade.Track = require('./track');
Facade.Page = require('./page');
Facade.Screen = require('./screen');

/**
 * Exports.
 */

module.exports = Facade;

},{"./alias":651,"./facade":652,"./group":653,"./identify":654,"./page":657,"./screen":658,"./track":659}],656:[function(require,module,exports){
'use strict';

/**
 * A few integrations are disabled by default. They must be explicitly
 * enabled by setting options[Provider] = true.
 */

var disabled = {
  Salesforce: true
};

/**
 * Check whether an integration should be enabled by default.
 *
 * @param {string} integration
 * @return {boolean}
 */

module.exports = function(integration) {
  return !disabled[integration];
};

},{}],657:[function(require,module,exports){
'use strict';

var inherit = require('./utils').inherit;
var Facade = require('./facade');
var Track = require('./track');
var isEmail = require('is-email');

/**
 * Initialize new `Page` facade with `dictionary`.
 *
 * @param {Object} dictionary
 *   @param {string} category
 *   @param {string} name
 *   @param {Object} traits
 *   @param {Object} options
 * @param {Object} opts
 *   @property {Boolean|Undefined} clone
 */

function Page(dictionary, opts) {
  Facade.call(this, dictionary, opts);
}

/**
 * Inherit from `Facade`
 */

inherit(Page, Facade);

/**
 * Get the facade's action.
 *
 * @return {string}
 */
Page.prototype.action = function() {
  return 'page';
};

Page.prototype.type = Page.prototype.action;

/**
 * Fields
 */

Page.prototype.category = Facade.field('category');
Page.prototype.name = Facade.field('name');

/**
 * Proxies.
 */

Page.prototype.title = Facade.proxy('properties.title');
Page.prototype.path = Facade.proxy('properties.path');
Page.prototype.url = Facade.proxy('properties.url');

/**
 * Referrer.
 */
Page.prototype.referrer = function() {
  return this.proxy('context.referrer.url')
    || this.proxy('context.page.referrer')
    || this.proxy('properties.referrer');
};

/**
 * Get the page properties mixing `category` and `name`.
 *
 * @param {Object} aliases
 * @return {Object}
 */
Page.prototype.properties = function(aliases) {
  var props = this.field('properties') || {};
  var category = this.category();
  var name = this.name();
  aliases = aliases || {};

  if (category) props.category = category;
  if (name) props.name = name;

  for (var alias in aliases) {
    var value = this[alias] == null
      ? this.proxy('properties.' + alias)
      : this[alias]();
    if (value == null) continue;
    props[aliases[alias]] = value;
    if (alias !== aliases[alias]) delete props[alias];
  }

  return props;
};

/**
 * Get the user's email, falling back to their user ID if it's a valid email.
 *
 * @return {string}
 */
Page.prototype.email = function() {
  var email = this.proxy('context.traits.email') || this.proxy('properties.email');
  if (email) return email;

  var userId = this.userId();
  if (isEmail(userId)) return userId;
};

/**
 * Get the page fullName.
 *
 * @return {string}
 */
Page.prototype.fullName = function() {
  var category = this.category();
  var name = this.name();
  return name && category
    ? category + ' ' + name
    : name;
};

/**
 * Get event with `name`.
 *
 * @return {string}
 */
Page.prototype.event = function(name) {
  return name
    ? 'Viewed ' + name + ' Page'
    : 'Loaded a Page';
};

/**
 * Convert this Page to a Track facade with `name`.
 *
 * @param {string} name
 * @return {Track}
 */
Page.prototype.track = function(name) {
  var json = this.json();
  json.event = this.event(name);
  json.timestamp = this.timestamp();
  json.properties = this.properties();
  return new Track(json, this.opts);
};

/**
 * Exports.
 */

module.exports = Page;

},{"./facade":652,"./track":659,"./utils":660,"is-email":628}],658:[function(require,module,exports){
'use strict';

var inherit = require('./utils').inherit;
var Page = require('./page');
var Track = require('./track');

/**
 * Initialize new `Screen` facade with `dictionary`.
 *
 * @param {Object} dictionary
 *   @param {string} category
 *   @param {string} name
 *   @param {Object} traits
 *   @param {Object} options
 * @param {Object} opts
 *   @property {boolean|undefined} clone
 */
function Screen(dictionary, opts) {
  Page.call(this, dictionary, opts);
}

/**
 * Inherit from `Page`
 */

inherit(Screen, Page);

/**
 * Get the facade's action.
 *
 * @api public
 * @return {string}
 */
Screen.prototype.action = function() {
  return 'screen';
};

Screen.prototype.type = Screen.prototype.action;

/**
 * Get event with `name`.
 *
 * @api public
 * @param {string} name
 * @return {string}
 */
Screen.prototype.event = function(name) {
  return name ? 'Viewed ' + name + ' Screen' : 'Loaded a Screen';
};

/**
 * Convert this Screen.
 *
 * @api public
 * @param {string} name
 * @return {Track}
 */
Screen.prototype.track = function(name) {
  var json = this.json();
  json.event = this.event(name);
  json.timestamp = this.timestamp();
  json.properties = this.properties();
  return new Track(json, this.opts);
};

/**
 * Exports.
 */

module.exports = Screen;

},{"./page":657,"./track":659,"./utils":660}],659:[function(require,module,exports){
'use strict';

var inherit = require('./utils').inherit;
var type = require('./utils').type;
var Facade = require('./facade');
var Identify = require('./identify');
var isEmail = require('is-email');
var get = require('obj-case');

/**
 * Initialize a new `Track` facade with a `dictionary` of arguments.
 *
 * @param {object} dictionary
 *   @property {string} event
 *   @property {string} userId
 *   @property {string} sessionId
 *   @property {Object} properties
 *   @property {Object} options
 * @param {Object} opts
 *   @property {boolean|undefined} clone
 */

function Track(dictionary, opts) {
  Facade.call(this, dictionary, opts);
}

/**
 * Inherit from `Facade`.
 */

inherit(Track, Facade);

/**
 * Return the facade's action.
 *
 * @return {string}
 */

Track.prototype.action = function() {
  return 'track';
};

Track.prototype.type = Track.prototype.action;

/**
 * Setup some basic proxies.
 */

Track.prototype.event = Facade.field('event');
Track.prototype.value = Facade.proxy('properties.value');

/**
 * Misc
 */

Track.prototype.category = Facade.proxy('properties.category');

/**
 * Ecommerce
 */

/**
 * ids
 */

Track.prototype.id = Facade.proxy('properties.id');
Track.prototype.productId = function() {
  return this.proxy('properties.product_id') || this.proxy('properties.productId');
};
Track.prototype.promotionId = function() {
  return this.proxy('properties.promotion_id') || this.proxy('properties.promotionId');
};
Track.prototype.cartId = function() {
  return this.proxy('properties.cart_id') || this.proxy('properties.cartId');
};
Track.prototype.checkoutId = function() {
  return this.proxy('properties.checkout_id') || this.proxy('properties.checkoutId');
};
Track.prototype.paymentId = function() {
  return this.proxy('properties.payment_id') || this.proxy('properties.paymentId');
};
Track.prototype.couponId = function() {
  return this.proxy('properties.coupon_id') || this.proxy('properties.couponId');
};
Track.prototype.wishlistId = function() {
  return this.proxy('properties.wishlist_id') || this.proxy('properties.wishlistId');
};
Track.prototype.reviewId = function() {
  return this.proxy('properties.review_id') || this.proxy('properties.reviewId');
};

Track.prototype.orderId = function() {
  // doesn't follow above convention since this fallback order was how it used to be
  return this.proxy('properties.id')
    || this.proxy('properties.order_id')
    || this.proxy('properties.orderId');
};

Track.prototype.sku = Facade.proxy('properties.sku');
Track.prototype.tax = Facade.proxy('properties.tax');
Track.prototype.name = Facade.proxy('properties.name');
Track.prototype.price = Facade.proxy('properties.price');
Track.prototype.total = Facade.proxy('properties.total');
Track.prototype.repeat = Facade.proxy('properties.repeat');
Track.prototype.coupon = Facade.proxy('properties.coupon');
Track.prototype.shipping = Facade.proxy('properties.shipping');
Track.prototype.discount = Facade.proxy('properties.discount');

Track.prototype.shippingMethod = function() {
  return this.proxy('properties.shipping_method') || this.proxy('properties.shippingMethod');
};

Track.prototype.paymentMethod = function() {
  return this.proxy('properties.payment_method') || this.proxy('properties.paymentMethod');
};

/**
 * Description
 */

Track.prototype.description = Facade.proxy('properties.description');

/**
 * Plan
 */

Track.prototype.plan = Facade.proxy('properties.plan');

/**
 * Get subtotal.
 *
 * @return {number}
 */
Track.prototype.subtotal = function() {
  var subtotal = get(this.properties(), 'subtotal');
  var total = this.total();

  if (subtotal) return subtotal;
  if (!total) return 0;

  var n = this.tax();
  if (n) total -= n;
  n = this.shipping();
  if (n) total -= n;
  n = this.discount();
  if (n) total += n;

  return total;
};

/**
 * Get products.
 *
 * @return {Array}
 */
Track.prototype.products = function() {
  var props = this.properties();
  var products = get(props, 'products');
  return type(products) === 'array' ? products : [];
};

/**
 * Get quantity.
 *
 * @return {number}
 */
Track.prototype.quantity = function() {
  var props = this.obj.properties || {};
  return props.quantity || 1;
};

/**
 * Get currency.
 *
 * @return {string}
 */
Track.prototype.currency = function() {
  var props = this.obj.properties || {};
  return props.currency || 'USD';
};

/**
 * BACKWARDS COMPATIBILITY: should probably re-examine where these come from.
 */

Track.prototype.referrer = function() {
  return this.proxy('context.referrer.url')
    || this.proxy('context.page.referrer')
    || this.proxy('properties.referrer');
};

Track.prototype.query = Facade.proxy('options.query');

/**
 * Get the call's properties.
 *
 * @param {Object} aliases
 * @return {Object}
 */
Track.prototype.properties = function(aliases) {
  var ret = this.field('properties') || {};
  aliases = aliases || {};

  for (var alias in aliases) {
    var value = this[alias] == null ? this.proxy('properties.' + alias) : this[alias]();
    if (value == null) continue;
    ret[aliases[alias]] = value;
    delete ret[alias];
  }

  return ret;
};

/**
 * Get the call's username.
 *
 * @return {string|undefined}
 */
Track.prototype.username = function() {
  return this.proxy('traits.username')
    || this.proxy('properties.username')
    || this.userId()
    || this.sessionId();
};

/**
 * Get the call's email, using an the user ID if it's a valid email.
 *
 * @return {string|undefined}
 */
Track.prototype.email = function() {
  var email = this.proxy('traits.email')
    || this.proxy('properties.email')
    || this.proxy('options.traits.email');
  if (email) return email;

  var userId = this.userId();
  if (isEmail(userId)) return userId;
};

/**
 * Get the call's revenue, parsing it from a string with an optional leading
 * dollar sign.
 *
 * For products/services that don't have shipping and are not directly taxed,
 * they only care about tracking `revenue`. These are things like
 * SaaS companies, who sell monthly subscriptions. The subscriptions aren't
 * taxed directly, and since it's a digital product, it has no shipping.
 *
 * The only case where there's a difference between `revenue` and `total`
 * (in the context of analytics) is on ecommerce platforms, where they want
 * the `revenue` function to actually return the `total` (which includes
 * tax and shipping, total = subtotal + tax + shipping). This is probably
 * because on their backend they assume tax and shipping has been applied to
 * the value, and so can get the revenue on their own.
 *
 * @return {number}
 */
Track.prototype.revenue = function() {
  var revenue = this.proxy('properties.revenue');
  var event = this.event();
  var orderCompletedRegExp = /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i;

  // it's always revenue, unless it's called during an order completion.
  if (!revenue && event && event.match(orderCompletedRegExp)) {
    revenue = this.proxy('properties.total');
  }

  return currency(revenue);
};

/**
 * Get cents.
 *
 * @return {number}
 */
Track.prototype.cents = function() {
  var revenue = this.revenue();
  return typeof revenue !== 'number' ? this.value() || 0 : revenue * 100;
};

/**
 * A utility to turn the pieces of a track call into an identify. Used for
 * integrations with super properties or rate limits.
 *
 * TODO: remove me.
 *
 * @return {Facade}
 */
Track.prototype.identify = function() {
  var json = this.json();
  json.traits = this.traits();
  return new Identify(json, this.opts);
};

/**
 * Get float from currency value.
 *
 * @param {*} val
 * @return {number}
 */
function currency(val) {
  if (!val) return;
  if (typeof val === 'number') {
    return val;
  }
  if (typeof val !== 'string') {
    return;
  }

  val = val.replace(/\$/g, '');
  val = parseFloat(val);

  if (!isNaN(val)) {
    return val;
  }
}

/**
 * Exports.
 */

module.exports = Track;

},{"./facade":652,"./identify":654,"./utils":660,"is-email":628,"obj-case":641}],660:[function(require,module,exports){
'use strict';

exports.inherit = require('inherits');
exports.clone = require('@ndhoule/clone');
exports.type = require('type-component');

},{"@ndhoule/clone":5,"inherits":627,"type-component":670}],661:[function(require,module,exports){

/**
 * Generate a slug from the given `str`.
 *
 * example:
 *
 *        generate('foo bar');
 *        // > foo-bar
 *
 * @param {String} str
 * @param {Object} options
 * @config {String|RegExp} [replace] characters to replace, defaulted to `/[^a-z0-9]/g`
 * @config {String} [separator] separator to insert, defaulted to `-`
 * @return {String}
 */

module.exports = function (str, options) {
  options || (options = {});
  return str.toLowerCase()
    .replace(options.replace || /[^a-z0-9]/g, ' ')
    .replace(/^ +| +$/g, '')
    .replace(/ +/g, options.separator || '-')
};

},{}],662:[function(require,module,exports){
(function (factory) {
    if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else {
        // Browser globals (with support for web workers)
        var glob;

        try {
            glob = window;
        } catch (e) {
            glob = self;
        }

        glob.SparkMD5 = factory();
    }
}(function (undefined) {

    'use strict';

    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */

    /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */
    var add32 = function (a, b) {
        return (a + b) & 0xFFFFFFFF;
    },
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32((a << s) | (a >>> (32 - s)), b);
    }

    function ff(a, b, c, d, x, s, t) {
        return cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function gg(a, b, c, d, x, s, t) {
        return cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function hh(a, b, c, d, x, s, t) {
        return cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function ii(a, b, c, d, x, s, t) {
        return cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];

        a = ff(a, b, c, d, k[0], 7, -680876936);
        d = ff(d, a, b, c, k[1], 12, -389564586);
        c = ff(c, d, a, b, k[2], 17, 606105819);
        b = ff(b, c, d, a, k[3], 22, -1044525330);
        a = ff(a, b, c, d, k[4], 7, -176418897);
        d = ff(d, a, b, c, k[5], 12, 1200080426);
        c = ff(c, d, a, b, k[6], 17, -1473231341);
        b = ff(b, c, d, a, k[7], 22, -45705983);
        a = ff(a, b, c, d, k[8], 7, 1770035416);
        d = ff(d, a, b, c, k[9], 12, -1958414417);
        c = ff(c, d, a, b, k[10], 17, -42063);
        b = ff(b, c, d, a, k[11], 22, -1990404162);
        a = ff(a, b, c, d, k[12], 7, 1804603682);
        d = ff(d, a, b, c, k[13], 12, -40341101);
        c = ff(c, d, a, b, k[14], 17, -1502002290);
        b = ff(b, c, d, a, k[15], 22, 1236535329);

        a = gg(a, b, c, d, k[1], 5, -165796510);
        d = gg(d, a, b, c, k[6], 9, -1069501632);
        c = gg(c, d, a, b, k[11], 14, 643717713);
        b = gg(b, c, d, a, k[0], 20, -373897302);
        a = gg(a, b, c, d, k[5], 5, -701558691);
        d = gg(d, a, b, c, k[10], 9, 38016083);
        c = gg(c, d, a, b, k[15], 14, -660478335);
        b = gg(b, c, d, a, k[4], 20, -405537848);
        a = gg(a, b, c, d, k[9], 5, 568446438);
        d = gg(d, a, b, c, k[14], 9, -1019803690);
        c = gg(c, d, a, b, k[3], 14, -187363961);
        b = gg(b, c, d, a, k[8], 20, 1163531501);
        a = gg(a, b, c, d, k[13], 5, -1444681467);
        d = gg(d, a, b, c, k[2], 9, -51403784);
        c = gg(c, d, a, b, k[7], 14, 1735328473);
        b = gg(b, c, d, a, k[12], 20, -1926607734);

        a = hh(a, b, c, d, k[5], 4, -378558);
        d = hh(d, a, b, c, k[8], 11, -2022574463);
        c = hh(c, d, a, b, k[11], 16, 1839030562);
        b = hh(b, c, d, a, k[14], 23, -35309556);
        a = hh(a, b, c, d, k[1], 4, -1530992060);
        d = hh(d, a, b, c, k[4], 11, 1272893353);
        c = hh(c, d, a, b, k[7], 16, -155497632);
        b = hh(b, c, d, a, k[10], 23, -1094730640);
        a = hh(a, b, c, d, k[13], 4, 681279174);
        d = hh(d, a, b, c, k[0], 11, -358537222);
        c = hh(c, d, a, b, k[3], 16, -722521979);
        b = hh(b, c, d, a, k[6], 23, 76029189);
        a = hh(a, b, c, d, k[9], 4, -640364487);
        d = hh(d, a, b, c, k[12], 11, -421815835);
        c = hh(c, d, a, b, k[15], 16, 530742520);
        b = hh(b, c, d, a, k[2], 23, -995338651);

        a = ii(a, b, c, d, k[0], 6, -198630844);
        d = ii(d, a, b, c, k[7], 10, 1126891415);
        c = ii(c, d, a, b, k[14], 15, -1416354905);
        b = ii(b, c, d, a, k[5], 21, -57434055);
        a = ii(a, b, c, d, k[12], 6, 1700485571);
        d = ii(d, a, b, c, k[3], 10, -1894986606);
        c = ii(c, d, a, b, k[10], 15, -1051523);
        b = ii(b, c, d, a, k[1], 21, -2054922799);
        a = ii(a, b, c, d, k[8], 6, 1873313359);
        d = ii(d, a, b, c, k[15], 10, -30611744);
        c = ii(c, d, a, b, k[6], 15, -1560198380);
        b = ii(b, c, d, a, k[13], 21, 1309151649);
        a = ii(a, b, c, d, k[4], 6, -145523070);
        d = ii(d, a, b, c, k[11], 10, -1120210379);
        c = ii(c, d, a, b, k[2], 15, 718787259);
        b = ii(b, c, d, a, k[9], 21, -343485551);

        x[0] = add32(a, x[0]);
        x[1] = add32(b, x[1]);
        x[2] = add32(c, x[2]);
        x[3] = add32(d, x[3]);
    }

    function md5blk(s) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }

    function md5blk_array(a) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        }
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);
        return state;
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << ((i % 4) << 3);
        }

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);

        return state;
    }

    function rhex(n) {
        var s = '',
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
        }
        return s;
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
        }
        return x.join('');
    }

    // In some cases the fast add32 function cannot be used..
    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
        add32 = function (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        };
    }

    // ---------------------------------------------------

    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */

    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = (val | 0) || 0;

                if (val < 0) {
                    return Math.max(val + length, 0);
                }

                return Math.min(val, length);
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num,
                    target,
                    targetArray,
                    sourceArray;

                if (to !== undefined) {
                    end = clamp(to, length);
                }

                if (begin > end) {
                    return new ArrayBuffer(0);
                }

                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);

                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);

                return target;
            };
        })();
    }

    // ---------------------------------------------------

    /**
     * Helpers.
     */

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }

        return str;
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
           buff = new ArrayBuffer(length),
           arr = new Uint8Array(buff),
           i;

        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);

        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);

        return returnUInt8Array ? result : result.buffer;
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
    }

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */

    function SparkMD5() {
        // call reset to init the instance
        this.reset();
    }

    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.append = function (str) {
        // Converts the string to utf8 bytes if necessary
        // Then append as binary
        this.appendBinary(toUtf8(str));

        return this;
    };

    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;

        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.reset = function () {
        this._buff = '';
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.prototype.getState = function () {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash
        };
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;

        return this;
    };

    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */
    SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };

    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */
    SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };

    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hash = function (str, raw) {
        // Converts the string to utf8 bytes if necessary
        // Then compute it using the binary function
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };

    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} raw     True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */
    SparkMD5.ArrayBuffer = function () {
        // call reset to init the instance
        this.reset();
    };

    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;

        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);

        // Convert buffer to a string
        state.buff = arrayBuffer2Utf8Str(state.buff);

        return state;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        // Convert string to buffer
        state.buff = utf8Str2ArrayBuffer(state.buff, true);

        return SparkMD5.prototype.setState.call(this, state);
    };

    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     raw True to get the raw string, false to get the hex one
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    return SparkMD5;
}));

},{}],663:[function(require,module,exports){

/**
 * Module exports.
 */

module.exports = throttle;

/**
 * Returns a new function that, when invoked, invokes `func` at most one time per
 * `wait` milliseconds.
 *
 * @param {Function} func The `Function` instance to wrap.
 * @param {Number} wait The minimum number of milliseconds that must elapse in between `func` invokations.
 * @return {Function} A new function that wraps the `func` function passed in.
 * @api public
 */

function throttle (func, wait) {
  var rtn; // return value
  var last = 0; // last invokation timestamp
  return function throttled () {
    var now = new Date().getTime();
    var delta = now - last;
    if (delta >= wait) {
      rtn = func.apply(this, arguments);
      last = now;
    }
    return rtn;
  };
}

},{}],664:[function(require,module,exports){

/**
 * Module Dependencies
 */

var expr;
try {
  expr = require('props');
} catch(e) {
  expr = require('component-props');
}

/**
 * Expose `toFunction()`.
 */

module.exports = toFunction;

/**
 * Convert `obj` to a `Function`.
 *
 * @param {Mixed} obj
 * @return {Function}
 * @api private
 */

function toFunction(obj) {
  switch ({}.toString.call(obj)) {
    case '[object Object]':
      return objectToFunction(obj);
    case '[object Function]':
      return obj;
    case '[object String]':
      return stringToFunction(obj);
    case '[object RegExp]':
      return regexpToFunction(obj);
    default:
      return defaultToFunction(obj);
  }
}

/**
 * Default to strict equality.
 *
 * @param {Mixed} val
 * @return {Function}
 * @api private
 */

function defaultToFunction(val) {
  return function(obj){
    return val === obj;
  };
}

/**
 * Convert `re` to a function.
 *
 * @param {RegExp} re
 * @return {Function}
 * @api private
 */

function regexpToFunction(re) {
  return function(obj){
    return re.test(obj);
  };
}

/**
 * Convert property `str` to a function.
 *
 * @param {String} str
 * @return {Function}
 * @api private
 */

function stringToFunction(str) {
  // immediate such as "> 20"
  if (/^ *\W+/.test(str)) return new Function('_', 'return _ ' + str);

  // properties such as "name.first" or "age > 18" or "age > 18 && age < 36"
  return new Function('_', 'return ' + get(str));
}

/**
 * Convert `object` to a function.
 *
 * @param {Object} object
 * @return {Function}
 * @api private
 */

function objectToFunction(obj) {
  var match = {};
  for (var key in obj) {
    match[key] = typeof obj[key] === 'string'
      ? defaultToFunction(obj[key])
      : toFunction(obj[key]);
  }
  return function(val){
    if (typeof val !== 'object') return false;
    for (var key in match) {
      if (!(key in val)) return false;
      if (!match[key](val[key])) return false;
    }
    return true;
  };
}

/**
 * Built the getter function. Supports getter style functions
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function get(str) {
  var props = expr(str);
  if (!props.length) return '_.' + str;

  var val, i, prop;
  for (i = 0; i < props.length; i++) {
    prop = props[i];
    val = '_.' + prop;
    val = "('function' == typeof " + val + " ? " + val + "() : " + val + ")";

    // mimic negative lookbehind to avoid problems with nested properties
    str = stripNested(prop, str, val);
  }

  return str;
}

/**
 * Mimic negative lookbehind to avoid problems with nested properties.
 *
 * See: http://blog.stevenlevithan.com/archives/mimic-lookbehind-javascript
 *
 * @param {String} prop
 * @param {String} str
 * @param {String} val
 * @return {String}
 * @api private
 */

function stripNested (prop, str, val) {
  return str.replace(new RegExp('(\\.)?' + prop, 'g'), function($0, $1) {
    return $1 ? $0 : val;
  });
}

},{"component-props":615,"props":615}],665:[function(require,module,exports){

var toSpace = require('to-space-case')

/**
 * Export.
 */

module.exports = toSnakeCase

/**
 * Convert a `string` to snake case.
 *
 * @param {String} string
 * @return {String}
 */

function toSnakeCase(string) {
  return toSpace(string).replace(/\s/g, '_')
}

},{"to-space-case":667}],666:[function(require,module,exports){
arguments[4][389][0].apply(exports,arguments)
},{"dup":389}],667:[function(require,module,exports){

var clean = require('to-no-case')

/**
 * Export.
 */

module.exports = toSpaceCase

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : ''
  }).trim()
}

},{"to-no-case":666}],668:[function(require,module,exports){
'use strict';

/**
 * Convert a `date` into a Unix timestamp.
 *
 * @param {Date}
 * @return {Number}
 */

function toUnixTimestamp(date) {
  return Math.floor(new Date(date).getTime() / 1000);
}

/**
 * Exports.
 */

module.exports = toUnixTimestamp;

},{}],669:[function(require,module,exports){

exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};

},{}],670:[function(require,module,exports){

/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Function]': return 'function';
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val === Object(val)) return 'object';

  return typeof val;
};

},{}],671:[function(require,module,exports){


/**
 * Converts a date to a unix time stamp
 */

module.exports = function (date) {
  date = new Date(date);
  return Math.floor(date.getTime() / 1000);
}
},{}],672:[function(require,module,exports){

/**
 * Protocol.
 */

module.exports = function (url) {
  switch (arguments.length) {
    case 0: return check();
    case 1: return transform(url);
  }
};


/**
 * Transform a protocol-relative `url` to the use the proper protocol.
 *
 * @param {String} url
 * @return {String}
 */

function transform (url) {
  return check() ? 'https:' + url : 'http:' + url;
}


/**
 * Check whether `https:` be used for loading scripts.
 *
 * @return {Boolean}
 */

function check () {
  return (
    location.protocol == 'https:' ||
    location.protocol == 'chrome-extension:'
  );
}
},{}],673:[function(require,module,exports){
module.exports = encode;

function encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }

    return utftext;
}
},{}],674:[function(require,module,exports){

/**
 * dependencies.
 */

var unserialize = require('unserialize');
var each = require('each');
var storage;

/**
 * Safari throws when a user
 * blocks access to cookies / localstorage.
 */

try {
  storage = window.localStorage;
} catch (e) {
  storage = null;
}

/**
 * Expose `store`
 */

module.exports = store;

/**
 * Store the given `key`, `val`.
 *
 * @param {String|Object} key
 * @param {Mixed} value
 * @return {Mixed}
 * @api public
 */

function store(key, value){
  var length = arguments.length;
  if (0 == length) return all();
  if (2 <= length) return set(key, value);
  if (1 != length) return;
  if (null == key) return storage.clear();
  if ('string' == typeof key) return get(key);
  if ('object' == typeof key) return each(key, set);
}

/**
 * supported flag.
 */

store.supported = !! storage;

/**
 * Set `key` to `val`.
 *
 * @param {String} key
 * @param {Mixed} val
 */

function set(key, val){
  return null == val
    ? storage.removeItem(key)
    : storage.setItem(key, JSON.stringify(val));
}

/**
 * Get `key`.
 *
 * @param {String} key
 * @return {Mixed}
 */

function get(key){
  return unserialize(storage.getItem(key));
}

/**
 * Get all.
 *
 * @return {Object}
 */

function all(){
  var len = storage.length;
  var ret = {};
  var key;

  while (0 <= --len) {
    key = storage.key(len);
    ret[key] = get(key);
  }

  return ret;
}

},{"each":611,"unserialize":675}],675:[function(require,module,exports){

/**
 * Unserialize the given "stringified" javascript.
 * 
 * @param {String} val
 * @return {Mixed}
 */

module.exports = function(val){
  try {
    return JSON.parse(val);
  } catch (e) {
    return val || undefined;
  }
};

},{}],676:[function(require,module,exports){
module.exports={
  "name": "@segment/analytics.js",
  "author": "Segment.io <friends@segment.io>",
  "version": "2.11.0-si-6",
  "license": "MIT",
  "description": "The hassle-free way to integrate analytics into any web application.",
  "keywords": [
    "analytics",
    "analytics.js",
    "segment",
    "segment.io"
  ],
  "main": "analytics.js",
  "scripts": {
    "build": "make build",
    "clean": "make clean",
    "test": "make test"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/segmentio/analytics.js.git"
  },
  "license": "SEE LICENSE IN LICENSE",
  "bugs": {
    "url": "https://github.com/segmentio/analytics.js/issues"
  },
  "homepage": "https://github.com/segmentio/analytics.js#readme",
  "dependencies": {
    "@segment/analytics.js-integration-scratch-it": "git+https://github.com/Scratch-it/analytics.js-integration-scratch-it#1.0.2",
    "@segment/analytics.js-core": "^3.0.0",
    "@segment/analytics.js-integration": "^3.1.0",
    "@segment/analytics.js-integration-adroll": "git+https://github.com/segment-integrations/analytics.js-integration-adroll.git",
    "@segment/analytics.js-integration-adwords": "git+https://github.com/segment-integrations/analytics.js-integration-adwords.git",
    "@segment/analytics.js-integration-alexa": "git+https://github.com/segment-integrations/analytics.js-integration-alexa.git",
    "@segment/analytics.js-integration-amplitude": "git+https://github.com/segment-integrations/analytics.js-integration-amplitude.git",
    "@segment/analytics.js-integration-appcues": "git+https://github.com/segment-integrations/analytics.js-integration-appcues.git",
    "@segment/analytics.js-integration-atatus": "git+https://github.com/segment-integrations/analytics.js-integration-atatus.git",
    "@segment/analytics.js-integration-autosend": "git+https://github.com/segment-integrations/analytics.js-integration-autosend.git",
    "@segment/analytics.js-integration-awesm": "git+https://github.com/segment-integrations/analytics.js-integration-awesm.git",
    "@segment/analytics.js-integration-bing-ads": "git+https://github.com/segment-integrations/analytics.js-integration-bing-ads.git",
    "@segment/analytics.js-integration-blueshift": "git+https://github.com/segment-integrations/analytics.js-integration-blueshift.git",
    "@segment/analytics.js-integration-boomtrain": "git+https://github.com/segment-integrations/analytics.js-integration-boomtrain.git",
    "@segment/analytics.js-integration-bronto": "git+https://github.com/segment-integrations/analytics.js-integration-bronto.git",
    "@segment/analytics.js-integration-bugherd": "git+https://github.com/segment-integrations/analytics.js-integration-bugherd.git",
    "@segment/analytics.js-integration-bugsnag": "git+https://github.com/segment-integrations/analytics.js-integration-bugsnag.git",
    "@segment/analytics.js-integration-chameleon": "git+https://github.com/segment-integrations/analytics.js-integration-chameleon.git",
    "@segment/analytics.js-integration-chartbeat": "git+https://github.com/segment-integrations/analytics.js-integration-chartbeat.git",
    "@segment/analytics.js-integration-clicky": "git+https://github.com/segment-integrations/analytics.js-integration-clicky.git",
    "@segment/analytics.js-integration-comscore": "git+https://github.com/segment-integrations/analytics.js-integration-comscore.git",
    "@segment/analytics.js-integration-crazy-egg": "git+https://github.com/segment-integrations/analytics.js-integration-crazy-egg.git",
    "@segment/analytics.js-integration-curebit": "git+https://github.com/segment-integrations/analytics.js-integration-curebit.git",
    "@segment/analytics.js-integration-customerio": "git+https://github.com/segment-integrations/analytics.js-integration-customerio.git",
    "@segment/analytics.js-integration-drift": "git+https://github.com/segment-integrations/analytics.js-integration-drift.git",
    "@segment/analytics.js-integration-drip": "git+https://github.com/segment-integrations/analytics.js-integration-drip.git",
    "@segment/analytics.js-integration-elevio": "git+https://github.com/segment-integrations/analytics.js-integration-elevio.git",
    "@segment/analytics.js-integration-errorception": "git+https://github.com/segment-integrations/analytics.js-integration-errorception.git",
    "@segment/analytics.js-integration-evergage": "git+https://github.com/segment-integrations/analytics.js-integration-evergage.git",
    "@segment/analytics.js-integration-extole": "git+https://github.com/segment-integrations/analytics.js-integration-extole.git",
    "@segment/analytics.js-integration-facebook-conversion-tracking": "git+https://github.com/segment-integrations/analytics.js-integration-facebook-conversion-tracking.git",
    "@segment/analytics.js-integration-facebook-custom-audiences": "git+https://github.com/segment-integrations/analytics.js-integration-facebook-custom-audiences.git",
    "@segment/analytics.js-integration-facebook-pixel": "git+https://github.com/segment-integrations/analytics.js-integration-facebook-pixel.git",
    "@segment/analytics.js-integration-foxmetrics": "git+https://github.com/segment-integrations/analytics.js-integration-foxmetrics.git",
    "@segment/analytics.js-integration-frontleaf": "git+https://github.com/segment-integrations/analytics.js-integration-frontleaf.git",
    "@segment/analytics.js-integration-gauges": "git+https://github.com/segment-integrations/analytics.js-integration-gauges.git",
    "@segment/analytics.js-integration-get-satisfaction": "git+https://github.com/segment-integrations/analytics.js-integration-get-satisfaction.git",
    "@segment/analytics.js-integration-google-analytics": "git+https://github.com/segment-integrations/analytics.js-integration-google-analytics.git",
    "@segment/analytics.js-integration-google-tag-manager": "git+https://github.com/segment-integrations/analytics.js-integration-google-tag-manager.git",
    "@segment/analytics.js-integration-gosquared": "git+https://github.com/segment-integrations/analytics.js-integration-gosquared.git",
    "@segment/analytics.js-integration-heap": "git+https://github.com/segment-integrations/analytics.js-integration-heap.git",
    "@segment/analytics.js-integration-hellobar": "git+https://github.com/segment-integrations/analytics.js-integration-hellobar.git",
    "@segment/analytics.js-integration-hittail": "git+https://github.com/segment-integrations/analytics.js-integration-hittail.git",
    "@segment/analytics.js-integration-hubspot": "git+https://github.com/segment-integrations/analytics.js-integration-hubspot.git",
    "@segment/analytics.js-integration-improvely": "git+https://github.com/segment-integrations/analytics.js-integration-improvely.git",
    "@segment/analytics.js-integration-inspectlet": "git+https://github.com/segment-integrations/analytics.js-integration-inspectlet.git",
    "@segment/analytics.js-integration-intercom": "git+https://github.com/segment-integrations/analytics.js-integration-intercom.git",
    "@segment/analytics.js-integration-keen-io": "git+https://github.com/segment-integrations/analytics.js-integration-keen-io.git",
    "@segment/analytics.js-integration-kenshoo": "git+https://github.com/segment-integrations/analytics.js-integration-kenshoo.git",
    "@segment/analytics.js-integration-kissmetrics": "git+https://github.com/segment-integrations/analytics.js-integration-kissmetrics.git",
    "@segment/analytics.js-integration-klaviyo": "git+https://github.com/segment-integrations/analytics.js-integration-klaviyo.git",
    "@segment/analytics.js-integration-livechat": "git+https://github.com/segment-integrations/analytics.js-integration-livechat.git",
    "@segment/analytics.js-integration-lucky-orange": "git+https://github.com/segment-integrations/analytics.js-integration-lucky-orange.git",
    "@segment/analytics.js-integration-lytics": "git+https://github.com/segment-integrations/analytics.js-integration-lytics.git",
    "@segment/analytics.js-integration-madkudu": "git+https://github.com/segment-integrations/analytics.js-integration-madkudu.git",
    "@segment/analytics.js-integration-mixpanel": "git+https://github.com/segment-integrations/analytics.js-integration-mixpanel.git",
    "@segment/analytics.js-integration-mojn": "git+https://github.com/segment-integrations/analytics.js-integration-mojn.git",
    "@segment/analytics.js-integration-mouseflow": "git+https://github.com/segment-integrations/analytics.js-integration-mouseflow.git",
    "@segment/analytics.js-integration-mousestats": "git+https://github.com/segment-integrations/analytics.js-integration-mousestats.git",
    "@segment/analytics.js-integration-navilytics": "git+https://github.com/segment-integrations/analytics.js-integration-navilytics.git",
    "@segment/analytics.js-integration-nudgespot": "git+https://github.com/segment-integrations/analytics.js-integration-nudgespot.git",
    "@segment/analytics.js-integration-olark": "git+https://github.com/segment-integrations/analytics.js-integration-olark.git",
    "@segment/analytics.js-integration-optimizely": "git+https://github.com/segment-integrations/analytics.js-integration-optimizely.git",
    "@segment/analytics.js-integration-outbound": "git+https://github.com/segment-integrations/analytics.js-integration-outbound.git",
    "@segment/analytics.js-integration-parsely": "git+https://github.com/segment-integrations/analytics.js-integration-parsely.git",
    "@segment/analytics.js-integration-perfect-audience": "git+https://github.com/segment-integrations/analytics.js-integration-perfect-audience.git",
    "@segment/analytics.js-integration-pingdom": "git+https://github.com/segment-integrations/analytics.js-integration-pingdom.git",
    "@segment/analytics.js-integration-piwik": "git+https://github.com/segment-integrations/analytics.js-integration-piwik.git",
    "@segment/analytics.js-integration-preact": "git+https://github.com/segment-integrations/analytics.js-integration-preact.git",
    "@segment/analytics.js-integration-qualaroo": "git+https://github.com/segment-integrations/analytics.js-integration-qualaroo.git",
    "@segment/analytics.js-integration-quantcast": "git+https://github.com/segment-integrations/analytics.js-integration-quantcast.git",
    "@segment/analytics.js-integration-quanticmind": "git+https://github.com/segment-integrations/analytics.js-integration-quanticmind.git",
    "@segment/analytics.js-integration-ramen": "git+https://github.com/segment-integrations/analytics.js-integration-ramen.git",
    "@segment/analytics.js-integration-rollbar": "git+https://github.com/segment-integrations/analytics.js-integration-rollbar.git",
    "@segment/analytics.js-integration-route": "git+https://github.com/segment-integrations/analytics.js-integration-route.git",
    "@segment/analytics.js-integration-saasquatch": "git+https://github.com/segment-integrations/analytics.js-integration-saasquatch.git",
    "@segment/analytics.js-integration-satismeter": "git+https://github.com/segment-integrations/analytics.js-integration-satismeter.git",
    "@segment/analytics.js-integration-segmentio": "git+https://github.com/segment-integrations/analytics.js-integration-segmentio.git",
    "@segment/analytics.js-integration-sentry": "git+https://github.com/segment-integrations/analytics.js-integration-sentry.git",
    "@segment/analytics.js-integration-simplereach": "git+https://github.com/segment-integrations/analytics.js-integration-simplereach.git",
    "@segment/analytics.js-integration-snapengage": "git+https://github.com/segment-integrations/analytics.js-integration-snapengage.git",
    "@segment/analytics.js-integration-spinnakr": "git+https://github.com/segment-integrations/analytics.js-integration-spinnakr.git",
    "@segment/analytics.js-integration-supporthero": "git+https://github.com/segment-integrations/analytics.js-integration-supporthero.git",
    "@segment/analytics.js-integration-taplytics": "git+https://github.com/segment-integrations/analytics.js-integration-taplytics.git",
    "@segment/analytics.js-integration-tapstream": "git+https://github.com/segment-integrations/analytics.js-integration-tapstream.git",
    "@segment/analytics.js-integration-trakio": "git+https://github.com/segment-integrations/analytics.js-integration-trakio.git",
    "@segment/analytics.js-integration-twitter-ads": "git+https://github.com/segment-integrations/analytics.js-integration-twitter-ads.git",
    "@segment/analytics.js-integration-userlike": "git+https://github.com/segment-integrations/analytics.js-integration-userlike.git",
    "@segment/analytics.js-integration-uservoice": "git+https://github.com/segment-integrations/analytics.js-integration-uservoice.git",
    "@segment/analytics.js-integration-vero": "git+https://github.com/segment-integrations/analytics.js-integration-vero.git",
    "@segment/analytics.js-integration-visual-website-optimizer": "git+https://github.com/segment-integrations/analytics.js-integration-visual-website-optimizer.git",
    "@segment/analytics.js-integration-webengage": "git+https://github.com/segment-integrations/analytics.js-integration-webengage.git",
    "@segment/analytics.js-integration-woopra": "git+https://github.com/segment-integrations/analytics.js-integration-woopra.git",
    "@segment/analytics.js-integration-wootric": "git+https://github.com/segment-integrations/analytics.js-integration-wootric.git",
    "@segment/analytics.js-integration-yandex-metrica": "git+https://github.com/segment-integrations/analytics.js-integration-yandex-metrica.git"
  },
  "devDependencies": {
    "@segment/eslint-config": "^3.1.1",
    "browserify": "^13.0.1",
    "eslint": "^2.9.0",
    "eslint-plugin-mocha": "^2.2.0",
    "eslint-plugin-require-path-exists": "^1.1.5",
    "uglify-js": "^2.6.4"
  }
}

},{}]},{},[1])(1)
});