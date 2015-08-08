# Pantry.WebApp
Front end for web deployment of pantry

#To setup
`npm i`
`bower i`

#To compile the solution
`webpack`

#To run a test server
`npm start`

#In the browser
localhost:8080/webpack-dev-server/


// this is something to do with sharing stuff between pages...
// if (window.location.pathname === '/product') {
//   showLoadingState();
//   require.ensure([], function() { // this syntax is weird but it works
//     hideLoadingState();
//     require('./product').show(); // when this function is called, the module is guaranteed to be synchronously available.
//   });
// } else if (window.location.pathname === '/shop') {
//   showLoadingState();
//   require.ensure([], function() {
//     hideLoadingState();
//     require('./shop').show();
//   });
// }
