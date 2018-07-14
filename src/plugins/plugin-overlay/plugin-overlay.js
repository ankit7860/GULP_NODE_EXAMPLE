/*jslint browser: true */
(function (global) {
  'use strict';
  var wrap = function ($, store, actions, logger) {
    var self = this;
    var defaults = {
      container: '.overlay',
      time: 1000
    };

    var addPreloader = function (options) {
      console.log('adding admin preloader');      
      var self = this;
      $('.overlay').loadTpl({
        template: 'preloader',
        container: options.container
      });

      setTimeout(function() {
        removeOverlay(options);
      }, options.time);
    };
    
    var addBodyLoader = function(settings) {
      var percent = 0;
      var int = setInterval(function() {
        $('body').loadie(percent);
        if(percent > 100) {
          clearInterval(int);
        }
        percent = percent + 1000/settings.time;
      }, 10);
      
    };
    
    var removeOverlay = function(options) {
      // $('overlay-loader').removeClass('.loadie');
      console.log('removing overlay');
      $(options.container).css({"width": "0%", "height": "0%"})
      $(options.container).addClass('hidden');
    }

    $.fn.addOverlay = function (options) {
      console.log('plugin template loader : loading');
      var settings = $.extend({}, defaults, options);
      $(settings.container).css({"width": "100%", "height": "100%"});
      $(settings.container).removeClass('hidden');
      if (options.bodyLoader) {
        addBodyLoader(settings);
      }
      switch (settings.type) {
        case 'adminPreloader':
          addPreloader(settings);
          break;
        case 'removeOverlay':
          removeOverlay();
          break;
        default:
        break;
      }
    };
  }
  // Register module with AMD
  /* istanbul ignore else */
  if (typeof define === 'function' && define.amd) {
    define('js/plugin-overlay', [
      'jquery',
      'js/plugin-loadie'
    ], wrap);
  } else {
    return wrap(global.jQuery);
  }
})(this);