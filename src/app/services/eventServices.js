define(['services/config'], function (config) {

    var loginUrl = config.anotherUrl + "Location/eventCreateLocation ",
        init = function () {
            //driver login
            amplify.request.define('eventCreateLocation', 'ajax', {
                url: loginUrl,
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

        eventCreateLocation = function (option) {
            return defferRequest('eventCreateLocation', option);
        };

    init();

    return{
        eventCreateLocation: eventCreateLocation
    }
});