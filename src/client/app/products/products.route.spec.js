// /* jshint -W117, -W030 */
// describe('products', function () {
//     describe('state', function () {
//         var controller;

//         beforeEach(function() {
//             module('app', specHelper.fakeLogger);
//             specHelper.injector(function($httpBackend, $location, $rootScope, $state) {});            
//             $httpBackend.expectGET('app/products/products.html').respond(200);
//         });

//         it('should map / route to products View template', function () {
//             expect($state.get('products').templateUrl).
//                 to.equal('app/products/products.html');
//         });

//         it('should map state products to url / ', function () {
//             expect($state.href('products', {})).to.equal('/');
//         });

//         it('of products should work with $state.go', function () {
//             $state.go('products');
//             $rootScope.$apply();
//             expect($state.is('products'));
//         });

//     });
// });