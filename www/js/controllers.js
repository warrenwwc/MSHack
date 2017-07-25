angular.module('app.controllers', [])

    .controller('cameraTabDefaultPageCtrl', ['$scope', '$stateParams', '$http', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams, $http, $rootScope) {
            $rootScope.list = [];
            $rootScope.ttlcat = 0;
            $rootScope.ttlfat = 0;
            $rootScope.ttlch = 0;
            $rootScope.ttlpt = 0;
            $scope.heading = "Heading";

            $scope.TakePics = function() {

                navigator.camera.getPicture(onSuccess, onFail, {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL
                })

            };

            onSuccess = function(imageData) {
                $scope.heading = "Processing"
                var image = document.getElementById('image');
                image.src = "data:image/jpeg;base64," + imageData;

                $http(imgUrlReq(imageData)).then(function(res) {
                    url = res.data;
                    $http(cvApiReq(url)).then(function(respond) {
                        desc = respond.data.description.captions[0].text
                        alert(desc);
                        $scope.heading = desc;
                        cat = 10;
                        fat = 10;
                        ch = 10;
                        pt = 10;
                        var obj = {
                            "thumbnail": imageData,
                            "name": desc,
                            "cat": cat,
                            "fat": fat,
                            "ch": ch,
                            "pt": pt
                        };
                        $rootScope.ttlcat += cat;
                        $rootScope.ttlfat += fat;
                        $rootScope.ttlch += ch;
                        $rootScope.ttlpt += pt;
                        $rootScope.list.push(obj);
                    }, function(data) {
                        alert("Failed in Computer Vision API process")
                    });
                }, function(data) {
                    alert("Failed in uploading image")
                });


                //        var req = {
                //         method: 'POST',
                //         url: 'https://mshackimageapi.azurewebsites.net/api/imageapi?code=yrlwmBHn3oGpo9Dy5h0yndytaQjZEao4Ud/OnfrEQLCdTLmJtEeIjQ==',
                //         headers: {
                //           'Content-Type': 'application/json'
                //         },
                //         data: { 'img': imageData }
                //        }
                //
                //        $http(req).then(function(res){
                //            alert(res.data);
                //        }, function(data){});

            }

            function onFail(message) {
                alert('Failed because: ' + message);
            }

        }
    ])

    .controller('nutritionCtrl', ['$scope', '$stateParams', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams, $rootScope) {


        }
    ])

    .controller('exerciseCtrl', ['$scope', '$stateParams', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams, $rootScope) {

            $scope.weight = 120;

            $scope.situpTime = function(calories, weight) {
                calories ? calories : 0;
                return (calories / 9).toFixed(2) + " minutes";;
            }

            $scope.jogTime = function(calories, weight) {
                return (calories / 16).toFixed(2) + " minutes";
            }

            $scope.bballTime = function(calories, weight) {
                burnRate = 3.4 + 0.3 * ((weight - 100) / 10);
                return (calories / burnRate).toFixed(2) + " minutes";
            }

            $scope.bikingTime = function(calories, weight) {
                burnRate = 6 + 0.7 * ((weight - 100) / 10);
                return (calories / burnRate).toFixed(2) + " minutes";
            }

            $scope.swimTime = function(calories, weight) {
                burnRate = 5.3 + 0.5 * ((weight - 100) / 10);
                return (calories / burnRate).toFixed(2) + " minutes";
            }

            $scope.boxTime = function(calories, weight) {
                burnRate = 4.5 + 0.5 * ((weight - 100) / 10);
                return (calories / burnRate).toFixed(2) + " minutes";
            }

            $scope.pilatesTime = function(calories, weight) {
                burnRate = 1.9 + 0.3 * ((weight - 100) / 10);
                return (calories / burnRate).toFixed(2) + " minutes";
            }
        }
    ])