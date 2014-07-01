(function () {
    // define global scope properties of site for the different objects
    window.site = {};
    site.$document = $(document);
    site.views = {};
    site.collections = {};
    site.models = {};
    site.events = _.clone(Backbone.Events);
    site.routers = {};
    site.pix_margin = 0;
    window_init();
})();

//function to get window dimensions
function window_init() {
    site.WIDTH = $(window).width();
    if (site.WIDTH >= 960) {
        site.pix_dim = site.WIDTH / 72;
        site.pix_dim = Math.round(site.pix_dim);
    }
    else {
        site.pix_dim = site.HEIGHT / 52;
        site.pix_dim = Math.round(site.pix_dim);
    }
    site.HEIGHT = $(window).height();
}