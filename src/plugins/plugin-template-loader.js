// (function ( $ ) {
//     $.fn.loadTpl = function(options) {
//         var settings = $.extend({}, options );
//         var target = $(this).css('color', 'red');
//     };
// }( jQuery ));


/*jslint browser: true */
(function(global) {
  'use strict';
  var wrap = function($, store, actions, logger) {
    var self = this;
    var defaults = {
      container: '[data-content-container]'
    };

    var load = function(options) {
      $(options.container).load('../fragments/' + options.template + '.html', function(response, status, xhr) {
        if ( status == "error" ) {
          var msg = "Sorry but there was an error: ";
          $( ".error" ).html( msg + xhr.status + " " + xhr.statusText );
        }
        console.log('template loaded ' + options.template);
      });
    };

    $.fn.loadTpl = function(options) {
        console.log('plugin template loader : loading');
        var settings = $.extend({}, defaults, options );
        load(settings);
      };
  }
  // Register module with AMD
  /* istanbul ignore else */
  if (typeof define === 'function' && define.amd) {
    define('js/plugin-template-loader', [
      'jquery'
    ], wrap);
  } else {
    return wrap(global.jQuery);
  }
})(this);