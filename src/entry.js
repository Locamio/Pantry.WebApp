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