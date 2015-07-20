import './shared_cycle';
import './materialize-src/js/sideNav.js'
import View from './views/products';

require('./css/bundled');

$( document ).ready(function(){
  $(".button-collapse").sideNav();
})