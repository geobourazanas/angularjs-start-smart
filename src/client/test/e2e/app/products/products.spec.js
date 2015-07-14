/* jshint -W117, -W030 */
'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
var assert = chai.assert;

var ProductsPage = require('./products.po.js');
var config = browser.params;

describe('Products page', function() {
    var page;

    page = new ProductsPage();

    describe('initialization', function() {

        beforeEach(function () {
            page.get();
        });

        it('should have a page title', function() {
            expect(browser.getTitle()).to.eventually.equal('StartSmart Project: Products');
        });
    });

    describe('check main layout elements', function () {
        page.checkMainLayoutElements();
    });

    describe('check content and their layout', function () {

        it('should render initial data set', function() {
            expect(page.products.count()).to.eventually.equal(6);
            expect(page.firstProduct.name.getText()).to.eventually.equal('Tomorrow is today, Red printed scarf');
            expect(page.secondProduct.getText()).to.eventually.equal('Anna, multi-colored bangles');
            expect(page.lastProduct.getText())
            .to.eventually.equal('iPhone 6 case abalone shell iPhone 6 Plus Case iphone 5');
          // expect(element(by.binding('page.products.length')).getText())
          //     .to.match("I have 10 page.products. They are:");
        });

        it('should have an "Add Product" button', function () {
            expect(page.addButton.isPresent()).to.eventually.be.true;
        });

        it('should open the add/edit form when the "Add Product" button clicked', function () {
            // The form is hidden in it's default state
            expect(page.form.isPresent()).to.eventually.be.false;

            // When the "Add Product" button clicked then the form must show
            page.addButton.click().then(function () {
                expect(page.form.isPresent()).to.eventually.be.true;
            });
        });

        it('should close the the add/edit form when the "Add Product" button clicked again', function () {
            // The form is presented
            expect(page.form.isPresent()).to.eventually.be.true;

            // When the "Add Product" button clicked again the form turned off
            page.addButton.click().then(function () {
                expect(page.form.isPresent()).to.eventually.be.false;
            });
        });

        it('should add a new product on top of the others in the list', function () {
            page.addButton.click().then(function () {
                expect(page.form.isPresent()).to.eventually.be.true;

                page.formFields.name.sendKeys('New product name');
                page.formFields.price.sendKeys('30');
                page.formFields.description.sendKeys('New product description');
                page.formFields.submit.click().then(function () {
                    // Form must disappear
                    expect(page.form.isPresent()).to.eventually.be.false;
                    
                    expect(page.products.count()).to.eventually.equal(7);
                    // TODO: Have to check for the other fields of course
                    expect(page.firstProduct.name.getText()).to.eventually.equal('New product name');
                    
                    expect(page.secondProduct.getText()).to.eventually.equal('Tomorrow is today, Red printed scarf');
                });
            });
        });

        it('should edit the new product', function () {
            // default the form is hedden
            expect(page.form.isPresent()).to.eventually.be.false;

            page.editFirstProduct.click().then(function () {
                // The form is shown when clicking on edit
                expect(page.form.isPresent()).to.eventually.be.true;

                // Updates all the field values
                page.formFields.name.clear();
                page.formFields.name.sendKeys('New product name updated');
                page.formFields.price.clear();
                page.formFields.price.sendKeys('40');
                page.formFields.description.clear();
                page.formFields.description.sendKeys('New product description updated');

                page.formFields.submit.click().then(function () {
                    // Form must disappear
                    expect(page.form.isPresent()).to.eventually.be.false;
                    
                    // TODO: Have to check for the other fields of course
                    expect(page.firstProduct.name.getText()).to.eventually.equal('New product name updated');
                    expect(page.firstProduct.price.getText()).to.eventually.equal('€40.00');
                    expect(page.firstProduct.description.getText())
                        .to.eventually.equal('New product description updated');
                });
            });
        });

        it('should remove a product from the list', function () {
            // The products amount after the latest added product
            expect(page.products.count()).to.eventually.equal(7);

            // Clicking the remove on the first product
            page.removesListProduct.click().then(function () {
                // Must be one less
                expect(page.products.count()).to.eventually.equal(6);
            });
        });
    });

});