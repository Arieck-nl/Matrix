site.views.DebugPixelView = Backbone.View.extend({
    tagName: 'div',

    events: {
        //events used for mouse animation
        'mouseenter div': 'enterHandler',
        'mouseleave div': 'leaveHandler'
    },


    initialize: function () {
        this.render();
    },

    render: function () {
        //render each pixel according to the pixel model and use some of the model data for the style
        this.$el.addClass("pixel");
        this.$el.css({
            "top": this.model.toJSON().y,
            "left": this.model.toJSON().x,
            //Don't use the model color, but use the debug color
            "backgroundColor": "black",
            //Create gap between each pixel to show grid
            "width": site.pix_dim -1,
            "height": site.pix_dim -1,
            "font-size": site.pix_dim * 0.85
        })
        //return this for method chaining
        return this;
    },

    //handlers for mouse animation
    enterHandler: function (e) {
        var currentTarget = e.target;
        $(currentTarget).hide();

    },
    leaveHandler: function (e) {
        var currentTarget = e.target;
        $(currentTarget).show();

    }
});
