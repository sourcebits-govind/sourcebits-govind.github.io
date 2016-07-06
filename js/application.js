/*================================================================
App ceb
==================================================================*/
'use strict';
angular.module('ceb', ['ui.router'])

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

function questionController() {

    var vm = this;
    vm.open = false;
    vm.tab=true;

    vm.toggleOptions = function () {
    	
    	vm.open = !vm.open; 


    }
    vm.test = {
        'question': "What is the minimum required purchase for a Retailer Discount?",
        'options': ['$100', '$200', '$300', '$400', '$500'],
        'instruction': [

            {
                'title': ' Retail Promotions Inquiry',
                'info': [{


                    'detail': [{ 'description': 'Discount Starting Date', 'value': '06/01/2007' },
                        { 'description': 'Cash-Back Bonus Starting Date', 'value': '06/01/2007' },
                        { 'description': 'Today’s Date', 'value': '07/21/2007' }
                    ]


                }, {

                    'table-title': 'Terms for Retailer Discount',
                    'detail': [{ 'description': 'Length of program', 'value': '60 days' },
                        { 'description': 'Minimum required purchase', 'value': '$200.00' },
                        { 'description': 'Retail discount rate', 'value': '0.5%' }
                    ]


                }, {

                    'table-title': 'Terms for Retailer Cash-Back Bonus',
                    'detail': [{ 'description': 'Length of Program', 'value': '60 days' },
                        { 'description': 'Minumum required purchase', 'value': '$100.00' },
                        { 'description': 'Retail Discount Rate', 'value': '0.25%' }
                    ]


                }]




            }, {
                'title': 'Past Transactions',
                'info': [{

                    'table-title': 'Terms for Retailer Discount',
                    'detail': [{ 'description': 'Length of program', 'value': '60 days' },
                        { 'description': 'Minimum required purchase', 'value': '$200.00' },
                        { 'description': 'Retail discount rate', 'value': '0.5%' }
                    ]


                }, {


                    'detail': [{ 'description': 'Discount Starting Date', 'value': '06/01/2007' },
                        { 'description': 'Cash-Back Bonus Starting Date', 'value': '06/01/2007' },
                        { 'description': 'Today’s Date', 'value': '07/21/2007' }
                    ]


                }, {

                    'table-title': 'Terms for Retailer Cash-Back Bonus',
                    'detail': [{ 'description': 'Length of Program', 'value': '60 days' },
                        { 'description': 'Minumum required purchase', 'value': '$100.00' },
                        { 'description': 'Retail Discount Rate', 'value': '0.25%' }
                    ]


                }]
            }






        ]
    }
    //test  object 

    console.log(vm.test);



}
/* -------------------
QUESTIONS CONTROLLER 
----------------------*/
