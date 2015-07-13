/**
 * Created by oguzhan on 12.07.2015.
 */
//option 0 -1
(function () {
    var customerApp = angular.module('customerApp', ['ngRoute', 'ngAnimate']);

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
            .when('/orders',
            {
                controller: 'AllOrdersController',
                templateUrl: 'app/views/allorders.html'

            })
            .otherwise({redirectTo: '/'});
    });
}());

//option2
//var customerApp2 = angular.module('customerApp2', [])
