define(['jquery','knockout','services/demoServices'], function ($, ko,demoService) {

    var sayHelloJquery = function () {
        $(function () {
            $('#test').val('hello from jquery');
            var message=demoService.salutation;
            alert(message);
            //console.log($);
        });
    };


    var firstName=ko.observable("Jasper");
    var lastName=ko.observable("Qiu");

    var fullName=ko.computed(function(){
        return firstName()+" "+lastName();
    });

    return {
        sayHelloJquery: sayHelloJquery,
        firstName: firstName,
        fullName:fullName,
        lastName:lastName
    };
});
