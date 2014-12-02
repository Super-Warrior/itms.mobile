require.config({
    paths: {
        'jquery': '../vendor/jquery/dist/jquery',
        'underscore': '../vendor/underscore/underscore',
        'knockout': '../vendor/knockoutjs/build/output/knockout-latest'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'knockout': {
            exports: 'ko'
        }
    }
});


require(['viewmodels/demoViewModel','knockout'], function (testViewModel,ko) {

    ko.applyBindings(testViewModel);
});