define(function () { 'use strict';

  function logA () {
    console.log('function logA called.');
  }

  /* 1 */
  var main = logA();

  /* 3 */

  return main;

});
