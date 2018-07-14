(function( $ ) {
    var Loadie = {};
  
    Loadie.uid = function() {
      var newDate = new Date;
      return newDate.getTime();
    };
  
    Loadie.finish = function(dom) {
      var loadie = $('#loadie-' + dom.data('loadie-id'), dom);
      dom.find(loadie).fadeOut(200).end().find(loadie).remove();
    }
  
    Loadie.update = function(dom, percent) {
      var loadie = $('#loadie-' + dom.data('loadie-id'), dom);
      loadie.css({'width': percent + "%"});
    }
  
    Loadie.init = function(dom, percent) {
      var uid = this.uid();
      var loadie = dom.append($('<div id="loadie-' + uid + '" class="loadie"></div>'));
      dom.data('loadie-id', uid);
      dom.css('position', 'relative');
      this.update(dom, percent);
    }
    
    $.fn.loadie = function(percent, callback) {
      var percent = (percent) || 0;
      var parent = $(this);
      
      if (percent === 0) {
        Loadie.finish(parent);
        Loadie.init(parent, percent);
      } else {
        Loadie.update(parent, percent);
      }
      if (percent >= 100) {
        setTimeout(function() {
          Loadie.finish(parent);
        }, 200);
      }
      parent.data('loadie-loaded', 1);
      return this;
    };
  }( jQuery ))