define(['services/taskServices', 'services/staticData'], function (taskServices, staticData) {

   var eoList = ko.observableArray();
   var selectedEoItem = {};


   taskServices.eoQuickSearch("O").then(function (result) {
      if (!result.errorMessage) {
         
      }
   });

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
