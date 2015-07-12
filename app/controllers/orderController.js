/**
 * Created by oguzhan on 12.07.2015.
 */
(function () {
    var OrderController = function ($scope, $routeParams, customerFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;

        function init() {
            customerFactory.getCustomer(customerId)
                .success(function (customer) {
                    $scope.customer = customer;
                })
                .error(function (data, status, headers, config) {
                    //handle error

                });
        }

        init();


    };
    OrderController.$inject = ['$scope', '$routeParams', 'customerFactory'];
    angular.module('customerApp').
        controller('OrderController', OrderController);
}());