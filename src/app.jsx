
import ProductComponent from './components/product-item';
import View from './views/products';

require('./shared_cycle')
require('./css/bundled')
require('./sources/material/sideNav.js')

$( document ).ready(function(){$(".button-collapse").sideNav();})
