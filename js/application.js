/*================================================================
App ceb
==================================================================*/
'use strict';
angular.module('ceb', ['ui.router','ui.bootstrap'])

.config(['$stateProvider', "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/question");
    $stateProvider
        .state('question', {
            url: "/question",
            templateUrl: "partials/question.html"
        })
}]);

/* -------------------
QUESTIONS CONTROLLER 
----------------------*/
'use strict';
angular
    .module('ceb')
    .controller('questionController', questionController);

function questionController($scope,$http, $log) {

    var vm = this;
    vm.open = false;
    vm.tab=true;	

    vm.openOptions = function () {
    // 	  if (e.target !== this)
    // return;

    	vm.open = true
    }
     vm.closeOptions = function () {
   
    // 	  if (e.target !== this)
    // return;
    	vm.open = false;
    }

      $http.get("images/data/data.json")
  .then(function(response) {
      
      vm.test = response.data;
  });

  // $scope.$watch(function() {
  //           return vm.answer;
  //       }, function(current, original) {
  //           $log.info('vm.answer was %s', original);
  //           $log.info('vm.answer is now %s', current);
  //       });


}
/* -------------------
QUESTIONS CONTROLLER END
----------------------*/
