/**
 * Created by oguzhan on 13.07.2015.
 */
(function () {
    var AllOrdersController = function ($scope, customerFactory) {
        $scope.orders = null;
        $scope.ordersTotal = 0.0;
        $scope.totalType;

        function init() {
            customerFactory.getOrders()
                .success(function (orders) {
                    $scope.orders = orders;
                    getOrdersTotal();
                })
                .error(function (data, status, headers, config) {
                    //handle error
                });
        }

        function getOrdersTotal() {
            var total = 0;
            for (var i = 0, len = $scope.orders.length; i < len; i++) {
                total += $scope.orders[i].total;
            }
            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
        }

        init();

    };
    AllOrdersController.$inject = ['$scope', 'customerFactory'];
    angular.module('customerApp')
        .controller('AllOrdersController', AllOrdersController);
}());
