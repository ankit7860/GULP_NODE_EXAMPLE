/*jslint browser: true */
/*global define, dust, mwfGlobals, $ */
(function(global) {
	'use strict';
	console.log('index loading...');
  var wrap = function($, appHeader, appBody) {
    console.log('inside wrap index...');
    var defaults = {
    };

    var MyApp = function(options) {
      var self = this;
      console.log('inside construc...');
      MyApp.initialize();
		};
    
    MyApp.initialize = function() {
      console.log('index init...');
    }

		return new MyApp();
  }; // Wrap Ends
  // Register module with AMD
  /* istanbul ignore else */
  if (typeof define === 'function' && define.amd) {
    define([
      'js/my-app-header'
    ], wrap);
  } else {
    return wrap(global.jQuery);
  }
})(this);