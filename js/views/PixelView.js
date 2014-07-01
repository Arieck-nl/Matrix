site.views.PixelView = Backbone.View.extend({
    tagName: 'div',

    events: {
        //events used for mouse animation
        'mouseenter div': 'enterHandler',
        'mouseleave div': 'leaveHandler'
    },

    //No template used for this assignment
    //template: _.template( $("#Template").html() ),

    initialize: function () {
        this.render();
    },

    render: function () {
        //render each pixel according to the pixel model and use some of the model data for the style
        this.$el.addClass("pixel");
        this.$el.css({
            "top": this.model.toJSON().y,
            "left": this.model.toJSON().x,
            "backgroundColor": this.model.toJSON().color,
            "width": site.pix_dim,
            "height": site.pix_dim,
            "font-size": site.pix_dim * 0.85
        })
        //return this for method chaining
        return this;
    },

    //handler for mouse animation
    enterHandler: function (e) {
        var currentTarget = e.target;
        $(currentTarget).fadeOut(300);

    },
    leaveHandler: function (e) {
        var currentTarget = e.target;
        $(currentTarget).fadeIn()

    }
});
