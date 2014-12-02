define(function () {
   var url = "http://211.144.85.15:8080/itms/rest/";

   return {
      baseUrl: url,
      userName: "test@blade.com",
      password: "test",
      convertToObservable: function (list) {
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
   };
});