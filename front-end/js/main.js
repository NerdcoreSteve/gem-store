var angular = require('angular')
global.jQuery = require('jquery') //to satisfy bootstrap
var bootstrap = require('bootstrap') // eslint-disable-line no-unused-vars

var app = angular.module('store', [])

app.controller('StoreController', function () {
    this.products = gems
})

var gems = [
    {
        name: 'Dodecahedron',
        price: 2,
        description: '...',
        can_purchase: true,
        images: [
            {
                full: 'Dodecahedron-full.jpg',
                thumb: 'Dodecahedron-thumb.jpg'
            },
            {
                full: 'dodecahedron-full.jpg',
                thumb: 'dodecahedron-thumb.jpg'
            }
        ]
    },
    {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: '...',
        can_purchase: false,
        images: [
            {
                full: 'Pentagonal_prism-full.png',
                thumb: 'Pentagonal_prism-thumb.png'
            }
        ]
    } 
]
