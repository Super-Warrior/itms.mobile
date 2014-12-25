define(['services/config', 'services/base64Services'], function (config, base64) {

   var loginUrl = config.baseUrl + "EO/EventCreateLocation",
        init = function () {
           var auth = 'Basic ' + base64.encode(config.userName + ':' + config.password);

           amplify.request.define('CreateLocation', 'ajax', {
              url: loginUrl,
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

        createLocation = function (option) {
           return defferRequest("CreateLocation", option);
        };

   init();

   var formatDateTime = function (dateTime, format) {
      if (!dateTime) return "";
      if (typeof (dateTime) == "string") {
         dateTime = dateTime.replace("T", " ");
         var index = dateTime.indexOf(".");
         var mill = 0;
         if (index >= 0) {
            mill = parseInt(dateTime.substring(index + 1), 10);
            dateTime = dateTime.substring(0, index);
         }
         var dateAndTime = dateTime.split(" ");
         var arr = dateAndTime[0].split("-").concat(dateAndTime[1].split(":"));
         arr.push(mill);

         dateTime = new Date();
         dateTime.setFullYear(arr[0], arr[1] - 1, arr[2]);
         dateTime.setHours(arr[3]);
         dateTime.setMinutes(arr[4], arr[5], arr[6]);
      }

      var o = {
         "M+": dateTime.getMonth() + 1,                 //月份
         "d+": dateTime.getDate(),                    //日
         "h+": dateTime.getHours(),                   //小时
         "m+": dateTime.getMinutes(),                 //分
         "s+": dateTime.getSeconds(),                 //秒
         "q+": Math.floor((dateTime.getMonth() + 3) / 3), //季度
         "S": dateTime.getMilliseconds()             //毫秒
      };
      var fmt = "yyyy-MM-dd hh:mm:ss";
      if (format)
         fmt = format;

      if (/(y+)/.test(fmt))
         fmt = fmt.replace(RegExp.$1, (dateTime.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
         if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
   };

   return {
      "createLocation": createLocation,
      "formatDateTime": formatDateTime
   };
});