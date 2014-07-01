(function () {
    site.init = function () {

        //create model instance for use in PixelView
        var pixel = new site.models.Pixel();

        var yid = 1;
        var pixs = [];

        //Create each pixel according to the Pixel model and add to array
        for (var y = 0; y < site.HEIGHT; y = y + site.pix_dim + site.pix_margin) {
            var xid = 1;
            for (var x = 0; x < site.WIDTH; x = x + site.pix_dim + site.pix_margin) {
                if(y < (site.HEIGHT/2)){
                    pixs.push({
                        id: xid + "_" + yid,
                        x: x,
                        y: y,
                        hidden: false,
                        color: "#FFC540"
                    });
                }
                else{
                    pixs.push({
                        id: xid + "_" + yid,
                        x: x,
                        y: y,
                        hidden: false,
                        color: "#6E84D6"
                    });
                }

                xid++;
            }
            yid++;
        }

        //pass array through into new pixel collection
        var pixels = new site.collections.Pixels(pixs);

        //define PixelView/DebugPixelView instance and PixelListView instance
        new site.views.PixelView({el: "#matrix", model: pixel});
        new site.views.DebugPixelView({el: "#matrix", model: pixel});
        new site.views.PixelsListView({el: "#matrix", collection: pixels});


        //Listen for d keypress and trigger custom event "DEBUG" if pressed
        $(window).keypress(function(e) {
            //console.log(e.which);
            if ( e.which == 100 ) {
                e.preventDefault();
                $("#matrix").trigger("DEBUG");
            }
        });

        Backbone.history.start();
    };

    site.$document.on('ready', site.init);


})();



