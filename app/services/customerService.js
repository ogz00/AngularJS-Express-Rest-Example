/**
 * Created by oguzhan on 12.07.2015.
 */

(function () {
    var customerService = function () {
        var customers = [{
            id: 1,
            joined: '2000-02-08',
            name: 'John',
            city: 'Chandler',
            orderTotal: 109.9956,
            orders: [{id: 1, product: 'Shoes', total: 80.9956}, {id: 4, product: 'Hat', total: 29.00}]
        }
            , {
                id: 2,
                joined: '1965-12-02',
                name: 'Zed',
                city: 'Las Vegas',
                orderTotal: 49.9956,
                orders: [{id: 2, product: 'Baseball', total: 20.9956}, {id: 3, product: 'Racketball', total: 29.00}]
            }
            , {
                id: 3,
                joined: '1944-10-25',
                name: 'Tina',
                city: 'New York',
                orderTotal: 90.9956,
                orders: [{id: 4, product: 'Hat', total: 20.9956}, {id: 5, product: 'Ring', total: 70.00}]
            }
            , {
                id: 4,
                joined: '1984-03-15',
                name: 'Dave',
                city: 'San Francisco',
                orderTotal: 129.9956,
                orders: [{id: 1, product: 'Shoes', total: 59.9956}, {id: 5, product: 'Ring', total: 70.00}]
            }
            , {
                id: 5,
                joined: '2005-06-31',
                name: 'Dimitri',
                city: 'Los Angeles',
                orderTotal: 109.9956,
                orders: [{id: 3, product: 'Racketball', total: 59.9956}, {id: 1, product: 'Shoes', total: 50.00}]
            }];


        this.getCustomers = function () {
            return customers;
        };
        this.getCustomer = function (customerId) {
            /*search the customers for the customerId*/
            for (var i = 0, len = customers.length; i < len; i++) {
                if (customers[i].id === parseInt(customerId)) {
                    return customers[i];
                }
            }
            return {};
        };


    };

    angular.module('customerApp').service('customerService', customerService);

}());
