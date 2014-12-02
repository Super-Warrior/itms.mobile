define(['services/userServices'], function (userService) {
    var userName = ko.observable('');

    var login = function () {
        var option = {username: userName()};
            userService.loginDriver(option).then(function (result) {
                if (result.errorMessage !== 'OK'){
                    $.mobile.changePage("#errMessage");
                }
                else{
                    $.mobile.changePage("#indexpage");
                }
            })
        };

    //public methods & Properties
    return {
        userName: userName,
        login: login
    };
});
