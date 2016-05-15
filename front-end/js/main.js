var angular = require('angular')
global.jQuery = require('jquery') //to satisfy bootstrap
var bootstrap = require('bootstrap') // eslint-disable-line no-unused-vars

var app = angular.module('store', [])

app.controller('StoreController', function () {
    this.product = gem
    console.log(this.product)
})

var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: '...',
    can_purchase: false
} 
