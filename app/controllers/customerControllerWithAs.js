/**
 * Created by oguzhan on 12.07.2015.
 */

function CustomersController() {
    this.sortBy = 'name';
    this.reverse = 'false';
    this.customers = [{joined: '2000-02-08', name: 'John', city: 'Chandler', orderTotal: 109.9956}
        , {joined: '1965-12-02', name: 'Zed', city: 'Las Vegas', orderTotal: 49.9956}
        , {joined: '1944-10-25', name: 'Tina', city: 'New York', orderTotal: 190.9956}
        , {joined: '1984-03-15', name: 'Dave', city: 'San Francisco', orderTotal: 129.9956}
        , {joined: '2005-06-31', name: 'Dimitri', city: 'Los Angeles', orderTotal: 109.9956}
        , {joined: '1995-04-08', name: 'Silva', city: 'San Diego', orderTotal: 459.9956}
        , {joined: '1964-08-25', name: 'Jack', city: 'New Orleans', orderTotal: 319.9956}
        , {joined: '1989-09-05', name: 'Bond', city: 'Miami', orderTotal: 189.9956}];
    this.doSort = function (propName) {
        this.sortBy = propName;
        this.reverse = !this.reverse;
    };


}