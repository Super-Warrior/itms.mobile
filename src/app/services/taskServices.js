define(['services/config', 'services/base64Services'], function (config, base64) {
   var user = localStorage.getItem("userName");

   var url = config.baseUrl + "EO/EOQuickSearchDriver",
        init = function () {
           var auth = 'Basic ' + base64.encode(config.userName + ':' + config.password);
           amplify.request.define('EOQuickSearchDriver', 'ajax', {
              url: url,
              dataType: 'json',
              type: 'POST',
              beforeSend: function (data) {
                 data.setRequestHeader("Authorization", auth);
                 return true;
              }
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
           }).promise();
        },

        eoQuickSearch = function (type) {
           var param = {
              SerType: 'AND',
              EO: [''],
              EOStatus: [''],
              eventstatus: [''],
              EOType: [''],
              EOTRType: [''],
              EOTag: [''],
              EOTRVendor1: '',
              EOTRVendor2: '',
              EOTRVendor3: '',
              customerOrder1: '',
              customerOrder2: '',
              customerOrder3: '',
              VendorOrder1: '',
              VendorOrder2: '',
              VendorOrder3: '',
              reqDelDate1: '',
              reqDelDate2: '',
              reqDelDate3: '',
              reqDelDate4: '',
              ScheduleVendor1: '',
              ScheduleClass1: '',
              DepDate1: '',
              ArrDate1: '',
              DepTime1: '',
              Arrtime1: '',
              DeliverBP1: '',
              DeliverBP2: '',
              depCustomer: '',
              depLocCode: '',
              ERTag: '',
              MesUnit1: '',
              reqDelDate: '',
              dep_Country: '',
              dep_State: '',
              dep_City: '',
              dep_Disc: '',
              dep_Group1: '',
              dep_Group2: '',
              rec_Country: '',
              rec_State: '',
              rec_City: '',
              rec_Disc: '',
              rec_Group1: '',
              rec_Group2: '',
              transDriverID: user,
              statusGroup: type

           };

           return defferRequest('EOQuickSearchDriver', param);
        };

   init();

   return {
      eoQuickSearch: eoQuickSearch
   };
});