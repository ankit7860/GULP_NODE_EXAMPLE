/*jslint browser: true */
/*global define, dust, mwfGlobals, $ */
(function(global) {
  'use strict';
  console.log('app-header: loading');
  var wrap = function($, store, actions, logger) {
    var nameSpace = "my-app-header";
    var defaults = {
    };

    var MyAppHeader = function(options) {
      var self = this;
      this.settings = $.extend({}, defaults, options);
      self.initialize();
    };

    MyAppHeader.prototype.initialize = function() {
      console.log(nameSpace + ': initialize');
      var self = this;
      console.log();
      this.mainContainer = $('[data-main-container]');
      this.appHeaderContainer = this.mainContainer.find('[data-header-container]');
      self.bindElements();
    };

    MyAppHeader.prototype.bindElements = function() {
      console.log(nameSpace + ': bindElements');
      var self = this;
    };

    MyAppHeader.prototype.renderHeader = function() {
      console.log(nameSpace + ': render');
      var self = this;
    };

    MyAppHeader.prototype.bindSubscriptions = function() {
      console.log(nameSpace + ': bindSubscriptions');
      var self = this;
      store.subscribeToPath('PATH', function(response) {
        if (!$.isEmptyObject(response)) {
          store.dispatch(actions.ACTION_CRAETOR_FUNC);
        }
      });
    }

    return new MyAppHeader();
  }; // Wrap Ends
  // Register module with AMD
  /* istanbul ignore else */
  if (typeof define === 'function' && define.amd) {
    define([
      'jquery'
    ], wrap);
  } else {
    return wrap(global.jQuery);
  }
})(this);