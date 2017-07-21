angular.module('app.controllers', [])
  
.controller('cameraTabDefaultPageCtrl', ['$scope', '$stateParams',  '$http', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $rootScope) {
    $rootScope.list = [];
    
    $scope.TakePics = function() {
       navigator.camera.getPicture(onSuccess, onFail, {  
          quality: 50, 
          destinationType: Camera.DestinationType.DATA_URL 
       })
    };  
   
   function onSuccess(imageData) { 
      var image = document.getElementById('image'); 
      image.src = "data:image/jpeg;base64," + imageData;
       name = "Food name";
       cat = 0;
       fat = 0;
       ch = 0;
       pt = 0;
       var obj = {"thumbnail": imageData, "name": name, "cat": cat, "fat": fat, "ch": ch, "pt": pt};
       $rootScope.list.push(obj);
       
   }  
   
   function onFail(message) { 
      alert('Failed because: ' + message); 
   } 
    
}])
   
.controller('nutritionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('exerciseCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    