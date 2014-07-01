site.views.PixelsListView = Backbone.View.extend({

    //tagName used for rendering the list view
    tagName: "div",

    //Listen for Debug event and fire deRender function
    events: {
        'DEBUG': 'deRender'
    },

    initialize: function () {
        this.render();
    },

    render: function() {
        this.collection.each(function(pixel){
            //render each pixel according to the pixelmodel and append to $el
            var pixelView = new site.views.PixelView({ model: pixel });
            this.$el.append(pixelView.render().el);
        }, this);
        return this;
    },

    deRender: function() {
        //empty the listView
        this.$el.empty();
        this.collection.each(function(pixel){
            //render each pixel according to the pixelmodel and append to $el, but use the DebugView this time
            var pixelView = new site.views.DebugPixelView({ model: pixel });
            this.$el.append(pixelView.render().el);
        }, this);
    }
});
