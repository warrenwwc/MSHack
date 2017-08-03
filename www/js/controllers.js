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
            $scope.heading = "Snap";

            $scope.TakePics = function() {
                
                CameraPreview.takePicture(async function(imgData){
                    $scope.heading = "Processing";
                   
                    link = await $http(imgUrlReq(imgData));

                    res = await $http(cvApiReq2(link.data));
                    
                    desc = res.data.Predictions[0].Probability.toFixed(2) > 0.5 ? res.data.Predictions[0].Tag.replace("_", " ") +" (" + res.data.Predictions[0].Probability.toFixed(2) * 100 + "%)" : "Generic";
                    //desc = res.data.description.captions[0].text;
//                    tags = res.data.tags;
//                    
//                    tagString = "";
//                    for (i in tags) {
//                        tagString += tags[i].name + " ";
//                    }
                    
                    $scope.heading = desc;
                    
                    $scope.$apply();
                    
                    food = getMatch(desc);
                    
                    var obj = {
                        "thumbnail": String(imgData),
                        "name": food.name,
                        "cat": food.cal,
                        "fat": food.fat,
                        "ch": food.carb,
                        "pt": food.pro
                    };
                    
                    $rootScope.ttlcat += obj.cat;
                    $rootScope.ttlfat += obj.fat;
                    $rootScope.ttlch += obj.ch;
                    $rootScope.ttlpt += obj.pt;
                    $rootScope.list.push(obj);
                    
                    $rootscope.$digest();
                    
                });
                                                      
                
            };

        }
    ])

    .controller('nutritionCtrl', ['$scope', '$stateParams', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams, $rootScope) {
           $scope.DeleteItem = function(index) {
               $rootScope.list.splice(index,1);
           }

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