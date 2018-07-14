/*jslint browser: true */
(function(global) {
  'use strict';
  console.log('admin homepage: loading');
  var wrap = function($, store, actions, logger) {
    var nameSpace = '.NAME_SPACE';
    var defaults = {
    };
    var AdminHomepage = function(options) {
      var self = this;
      this.settings = $.extend({}, defaults, options);
      self.initialize();
    };

    AdminHomepage.prototype.initialize = function() {
      var self = this;
      console.log('initialize  : admin homapage');
      self.globalHeader = $('[data-header]');
      self.mainPanelContainer = $('[data-panel-container-main]');
      self.homePageContainer = self.mainPanelContainer.find('admin-homepage-container');
      self.bindElements();
    };

    AdminHomepage.prototype.bindElements = function() {
      var self = this;
      var time = 2000;
      $('[data-header]').on('click', '.admin-profile-link', function() {
        console.log('hello');
        $('.main-header').find('.active').removeClass('active').end().find('.about').addClass('active');
        $('.loader').addOverlay({time: time, type: 'adminPreloader', bodyLoader: true});
        console.log('loaded');
        setTimeout(self.render, time);
      });
    };

    AdminHomepage.prototype.render = function() {
      var self = this;
      $('[data-content-container]').loadTpl({
        template: 'ui-admin-homepage'
      });
    }

    return new AdminHomepage();
  }; // Wrap Ends
  // Register module with AMD
  /* istanbul ignore else */
  if (typeof define === 'function' && define.amd) {
    define('js/ui-admin-homepage', [
      'jquery',
      'js/plugin-template-loader',
      'js/plugin-overlay'
    ], wrap);
  } else {
    return wrap(global.jQuery);
  }
})(this);   