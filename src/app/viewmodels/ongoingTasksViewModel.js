define(['services/taskServices', 'services/eventServices', 'services/staticData'], function (taskServices, eventServices, staticData) {

   var eoList = ko.observableArray();
   var selectedItem = {};


   taskServices.mapObservable(selectedItem);

   taskServices.eoQuickSearch("O").then(function (result) {
      if (!result.errorMessage || result.errorMessage == "OK") {
         var arr = taskServices.organizeResult(result);
         arr.forEach(
            function (item) {
               eoList.push(item);
            }
         );
      }





   });

   var selectItem = function (data) {

      taskServices.mapObservable(selectedItem, data);
      $("#popupeodetail").popup("open");

   };

   var popForm = function (data) {

      taskServices.mapObservable(selectedItem, data);
      $("#popupaction").popup("open");
   };



   var submit = function (item, type) {
      var selected = type();

      if (!selected)
         return;

      var tempItem = ko.toJS(item);

      var option = {
         createUser: 10000,
         eventType: "NORM",
         eventCode: selected,
         EO: [tempItem.eo],
         ERID: [tempItem.erID],
         ERITN: [tempItem.erITN],
         eventListener1: "",
         eventListener2: "",
         eventListener3: "",
         eventListener4: "",
         eventDateTime: "",

         memo: "",
         Lat: 31.2,
         Lng: 120.11

      };
      eventServices.createLocation(option).then(
         function (result) {
            if (!result.errorMessage || result.errorMessage == "OK")
               $("#popupaction").popup("close");
            else
               alert(result.errorMessage);
         }
      );

   };
   // var eventType = ko.observable(staticData.eventTypes[0].value);
   var eventType = ko.observable();

   return {
      selectedItem: selectedItem,
      selectItem: selectItem,
      popForm: popForm,
      eoList: eoList,
      eventTypes: staticData.eventTypes,
      eventType: eventType,
      submit: submit
   };
});
