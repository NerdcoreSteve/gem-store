var angular = require('angular')
global.jQuery = require('jquery') //to satisfy bootstrap
var bootstrap = require('bootstrap') // eslint-disable-line no-unused-vars

angular
    .module('store', [])
    .controller('StoreController', function () {
        this.products = gems
    })
    .controller('PanelController', function () {
        this.tab = 1
        this.select_tab = (set_tab) => this.tab = set_tab
        this.is_selected = (tab) => this.tab === tab
    })

var gems = [
    {
        name: 'Dodecahedron',
        price: 2,
        description: 'A polyhedron with twelve flat faces',
        can_purchase: true,
        images: [
            {
                full: 'Dodecahedron-full.jpg',
                thumb: 'Dodecahedron-thumb.jpg'
            },
            {
                full: 'dodecahedron-full.png',
                thumb: 'dodecahedron-thumb.png'
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
