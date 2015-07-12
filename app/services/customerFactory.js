/**
 * Created by oguzhan on 12.07.2015.
 */

(function () {
    var customerFactory = function ($http) {

        var factory = {};
        factory.getCustomers = function () {
            return $http.get('/customers');
        };
        factory.getCustomer = function (customerId) {
            return $http.get('/customers/' + customerId);
        };


        return factory;
    };
    customerFactory.$inject = ['$http'];

    angular.module('customerApp').factory('customerFactory', customerFactory);

}());
