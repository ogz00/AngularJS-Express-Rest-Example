/**
 * Created by oguzhan on 12.07.2015.
 */


//option 0
//angular.module('customerApp',[]);


//option 0 -1
(function () {
    var customerApp = angular.module('customerApp', ['ngRoute']);

    customerApp.config(function ($routeProvider) {
        $routeProvider
            .when('/',
            {
                controller: '',
                templateUrl: 'app/index.html'

            })
            .when('/customers',
            {
                controller: 'CustomerController',
                templateUrl: 'app/views/customers.html'

            })
            //route parameter
            .when('/editCustomer/:customerId',
            {
                controller: 'CustomerEditController',
                templateUrl: 'app/views/customerEdit.html'

            })
            .when('/orders/:customerId',
            {
                controller: 'OrderController',
                templateUrl: 'app/views/orders.html'

            })
            .otherwise({redirectTo: '/'});
    });
}());

//option2
//var customerApp2 = angular.module('customerApp2', [])
