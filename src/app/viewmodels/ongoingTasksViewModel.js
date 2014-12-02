define(['services/taskServices', 'services/staticData'], function (taskServices, staticData) {

    var eoList = ko.observableArray();
    var selectedEoItem = {};

    //using this function to covert a plain object to an observable object
    var convertToObservable = function (list) {
        var newList = [];
        $.each(list, function (i, obj) {
            var newObj = {};
            Object.keys(obj).forEach(function (key) {
                newObj[key] = ko.observable(obj[key]);
            });
            newList.push(newObj);
        });
        return newList;
    }

    var onItemClick = function (item) {

    };

    var execute = function () {

    };

    //public methods & Properties
    return {
        selectedEoItem: selectedEoItem,
        onItemClick: onItemClick,
        eoList: eoList,
        execute: execute
    };
});
