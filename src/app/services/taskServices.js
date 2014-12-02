define(['services/config'], function (config) {

    var driverEOQuickSearchUrl = config.baseUrl + "EO/DriverEOQuickSearch",
        init = function () {
            //driver login
            amplify.request.define('driverEOQuickSearch', 'ajax', {
                url: driverEOQuickSearchUrl,
                dataType: 'json',
                type: 'POST'
            });
        },

        defferRequest = function (resourceId, option) {
            return $.Deferred(function (dfd) {
                amplify.request({
                    resourceId: resourceId,
                    data: option,
                    success: dfd.resolve,
                    error: dfd.reject
                });
            }).promise()
        },

        driverEOQuickSearch = function (option) {
            return defferRequest('driverEOQuickSearch', option);
        };

    init();

    return{
        driverEOQuickSearch: driverEOQuickSearch
    }
});