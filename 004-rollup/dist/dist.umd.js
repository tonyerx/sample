(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.result = factory());
}(this, function () { 'use strict';

  function logA () {
    console.log('function logA called.');
  }

  /* 1 */
  var main = logA();

  /* 3 */

  return main;

}));
