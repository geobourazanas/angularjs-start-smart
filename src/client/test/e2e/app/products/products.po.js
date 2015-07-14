/* jshint -W117, -W030 */
'use strict';

/**
 * Page object file for the e2e test products.spec.js
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
var assert = chai.assert;
var config = browser.params;
var Products, page;

Products = (function() {

    function Products() {
        this.brandName = element(by.css('a.navbar-brand'));
        this.productsReap = by.repeater('product in vm.products');
        this.products = element.all(this.productsReap);
        this.firstProduct = {
            name: element(this.productsReap.row(0).column('product.name')),
            price: element(this.productsReap.row(0).column('product.price')),
            description: element(this.productsReap.row(0).column('product.description'))
        };
        
        this.secondProduct = element(this.productsReap.row(1).column('product.name'));
        this.lastProduct = element(this.productsReap.row(5).column('product.name'));

        this.addButton = element(by.css('#top-buttons > button'));
        this.form = element(by.css('#add-new-form > div.in'));
        this.formFields = {
            name: element(by.model('vm.product.name')),
            price: element(by.model('vm.product.price')),
            description: element(by.model('vm.product.description')),
            submit: element(by.css('#add-new-form button[type="submit"]'))
        };
        this.editsList = element.all(by.css('.list-group-item > p > a.edit'));
        this.editFirstProduct = this.editsList.first();
        this.removesList = element.all(by.css('.list-group-item > p > a.remove'));
        this.removesListProduct = this.removesList.first();
        
        this.sideBarInnerList = element.all(by.css('.sidebar-inner > ul.navi')).all(by.css('li'));
    }
    
    Products.prototype.get = function() {
        browser.get('/products');
        return browser.getCurrentUrl();
    };
    
    Products.prototype.getBrandName = function() {
        return this.brandName.getText();
    };

    Products.prototype.checkMainLayoutElements = function(currentActive, breadcrumb) {
        page = this;
        currentActive = currentActive || 'products';
        breadcrumb = breadcrumb || ['', 'Products'];

        describe('should', function () {
            var sideBarItems = [
                'Products',
            ];
            var sideBarItemsIds = [
                'products',
            ];

            before(function () {
                element(by.id(currentActive)).click();
            });

            // after(function () {});

            it('have a brand name', function () {
                expect(page.getBrandName()).to.eventually.equal('Brand');
            });

            // it('have a breadcrumb active on Products', function () {
            //     expect(page.breadcrumbItems.getText()).to.eventually.deep.equal(breadcrumb);
            // });

            it('have a side-bar with menu items', function () {
                expect(page.sideBarInnerList.getText()).to.eventually
                        .deep.equal(sideBarItems);
            });

        });
    };

    return Products;

    function hasClass(element, cls) {
        return element.getAttribute('class').then(function (classes) {
            return classes.split(' ').indexOf(cls) !== -1;
        });
    }

})();
module.exports = Products;