define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/footer/footerTemplate.html'
], function($, _, Backbone, footerTemplate){

  var FooterView = Backbone.View.extend({
    el: $("#_footer-view"),

    initialize: function() {
      this.render();
    },

    render: function(){
      var compiledTemplate = _.template( footerTemplate, {} );
      this.$el.html(compiledTemplate);
    }

  });

  return FooterView;
  
});
