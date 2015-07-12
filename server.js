/**
 * Created by oguzhan on 12.07.2015.
 */
var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname + '/'));

app.get('/customers/:id', function (req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

app.get('/customers', function (req, res) {
    res.json(customers);
    //res.json(500, { error: 'An error has occurred!' });
});

app.get('/orders', function (req, res) {
    var orders = [];
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].orders) {
            for (var j = 0, ordersLen = customers[i].orders.length; j < ordersLen; j++) {
                orders.push(customers[i].orders[j]);
            }
        }
    }
    res.json(orders);
});

app.delete('/customers/:id', function (req, res) {
    var customerId = parseInt(req.params.id);
    var data = {status: true};
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === customerId) {
            customers.splice(i, 1);
            data = {status: true};
            break;
        }
    }
    res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

var customers = [
    {
        id: 1,
        joined: '2000-02-08',
        name: 'John',
        city: 'Philadelphia',
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
        orders: [{id: 3, product: 'Racketball', total: 59.9956}, {id: 6, product: 'Book', total: 50.00}]
    },
    {
        id: 6,
        joined: '1990-04-21',
        name: 'Charles',
        city: 'Houston',
        orderTotal: 199.9956,
        orders: [{id: 6, product: 'Book', total: 99.9956}, {id: 7, product: 'Laptop', total: 100.00}]
    },
    {
        id: 6,
        joined: '2003-05-03',
        name: 'Emile',
        city: 'Phoenix',
        orderTotal: 156.9956,
        orders: [{id: 1, product: 'Shoes', total: 86.9956}, {id: 7, product: 'Laptop', total: 70.00}]
    }
];
