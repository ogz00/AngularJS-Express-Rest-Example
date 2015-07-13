/**
 * Created by oguzhan on 12.07.2015.
 */
//Option 0
(function () {
    var CustomerController = function ($scope, $log, customerFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = 'false';
        $scope.customers = [];
        $scope.appSettings = appSettings;
        function init() {
            customerFactory.getCustomers()
                .success(function (customers) {
                    $scope.customers = customers;
                })
                .error(function (data, status, headers, config) {
                    //handle error
                    $log.log(data.error + ' ' + status);
                });
        }

        init();
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        $scope.deleteCustomer = function (customerId) {
            customerFactory.deleteCustomer(customerId)
                .success(function (status) {
                    if (status) {
                        for (var i = 0, len = $scope.customers.length; i < len; i++) {
                            if ($scope.customers[i].id === customerId) {
                                $scope.customers.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else {
                        $window.alert('Unable to delete customer');
                    }
                })
                .error(function (data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        };

    };

    CustomerController.$inject = ['$scope', '$log', 'customerFactory', 'appSettings'];
    angular.module('customerApp').
        controller('CustomerController', CustomerController);
}());

//Option 1
/*(function () {
 angular.module('customerApp').
 controller('CustomerController', function ($scope) {
 $scope.sortBy = 'name';
 $scope.reverse = 'false';
 $scope.customers = [{joined: '2000-02-08', name: 'John', city: 'Chandler', orderTotal: 109.9956}
 , {joined: '1965-12-02', name: 'Zed', city: 'Las Vegas', orderTotal: 49.9956}
 , {joined: '1944-10-25', name: 'Tina', city: 'New York', orderTotal: 190.9956}
 , {joined: '1984-03-15', name: 'Dave', city: 'San Francisco', orderTotal: 129.9956}
 , {joined: '2005-06-31', name: 'Dimitri', city: 'Los Angeles', orderTotal: 109.9956}
 , {joined: '1995-04-08', name: 'Silva', city: 'San Diego', orderTotal: 459.9956}
 , {joined: '1964-08-25', name: 'Jack', city: 'New Orleans', orderTotal: 319.9956}
 , {joined: '1989-09-05', name: 'Bond', city: 'Miami', orderTotal: 189.9956}];

 $scope.doSort = function (propName) {
 $scope.sortBy = propName;
 $scope.reverse = !$scope.reverse;
 };

 });

 }());*/


//Option 2
/*customerApp2.controller('CustomerController2', function ($scope) {

 $scope.sortBy = 'name';
 $scope.reverse = 'false';
 $scope.customers = [{joined: '2000-02-08', name: 'John', city: 'Chandler', orderTotal: 109.9956}
 , {joined: '1965-12-02', name: 'Zed', city: 'Las Vegas', orderTotal: 49.9956}
 , {joined: '1944-10-25', name: 'Tina', city: 'New York', orderTotal: 190.9956}
 , {joined: '1984-03-15', name: 'Dave', city: 'San Francisco', orderTotal: 129.9956}
 , {joined: '2005-06-31', name: 'Dimitri', city: 'Los Angeles', orderTotal: 109.9956}
 , {joined: '1995-04-08', name: 'Silva', city: 'San Diego', orderTotal: 459.9956}
 , {joined: '1964-08-25', name: 'Jack', city: 'New Orleans', orderTotal: 319.9956}
 , {joined: '1989-09-05', name: 'Bond', city: 'Miami', orderTotal: 189.9956}];

 $scope.doSort = function (propName) {
 $scope.sortBy = propName;
 $scope.reverse = !$scope.reverse;
 };
 });*/