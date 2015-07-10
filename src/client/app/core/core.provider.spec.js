/* jshint -W117, -W030 */
'use strict';

describe('$core provider', function() {

    var coreProvider;
    var deferred, 
        returns,
        keysNotInTest = [];

    var keys = [
      'baseURL',
      'basePath',
    ];

    var keysWithIds = [
    ];

    var testKeys = [
        'baseURL',
        'basePath',
    ];

    keys.forEach(function(key) {
        if (-1 === testKeys.indexOf(key)) {
            keysNotInTest.push(key);
        }
    }, this);

    describe('should be able to', function () {
        beforeEach(function() {
            // load the module.
            module('app', function($provide, _$coreProvider_) {
                coreProvider = _$coreProvider_;
                specHelper.fakeStateProvider($provide);
                specHelper.fakeLogger($provide);
                $provide.constant('ENV', 'production');
            });
            specHelper.injector(function($rootScope, $q, ENV) {});
            deferred = $q.defer();
        });

        describe('check if all the methods of localDev are defined', function () {
            for (var i = 0; i < keys.length; i++) {
                runMethods(keys[i]);
            }
            function runMethods(key) {
                it('should have coreProvider\'s get.' + key + ' defined', inject(function() {
                    coreProvider.$get().switchSet('localDev');

                    expect(coreProvider.$get().get[key]).to.be.defined;
                    coreProvider.$get().get(key);
                }));
            }
            
            for (var j = 0; j < keysWithIds.length; j++) {
                runMethodsWithIds(keysWithIds[j]);
            }
            function runMethodsWithIds(key) {
                it('should have coreProvider\'s get.' + key + ' defined and there id', inject(function() {
                    var id = 'testUUid';
                    coreProvider.$get().switchSet('localDev');

                    expect(coreProvider.$get().get[key]).to.be.defined;
                    coreProvider.$get().get(key, id);
                }));
            }
        });

        describe('check if all the methods of production are defined', function () {
            for (var i = 0; i < keys.length; i++) {
                runMethods(keys[i]);
            }
            function runMethods(key) {
                it('should have coreProvider\'s get.' + key + ' defined', inject(function() {
                    coreProvider.$get().switchSet('production');

                    expect(coreProvider.$get().get[key]).to.be.defined;
                    coreProvider.$get().get(key);
                }));
            }

            for (var j = 0; j < keysWithIds.length; j++) {
                runMethodsWithIds(keysWithIds[j]);
            }
            function runMethodsWithIds(key) {
                it('should have coreProvider\'s get.' + key + ' defined and there id', inject(function() {
                    var id = 'testUUid';
                    coreProvider.$get().switchSet('production');

                    expect(coreProvider.$get().get[key]).to.be.defined;
                    coreProvider.$get().get(key, id);
                }));
            }
        });

        describe('check if all the methods of testing are defined', function () {
            for (var i = 0; i < testKeys.length; i++) {
                runMethods(testKeys[i]);
            }
            function runMethods(key) {
                it('should have coreProvider\'s get.' + key + ' defined', inject(function() {
                    coreProvider.$get().switchSet('testing');

                    expect(coreProvider.$get().get[key]).to.be.defined;
                    coreProvider.$get().get(key);
                }));
            }

            for (var j = 0; j < keysNotInTest.length; j++) {
                runThrownMethods(keysNotInTest[j]);
            }
            function runThrownMethods(key) {
                it('should have coreProvider\'s get.' + key + ' defined', inject(function() {
                    coreProvider.$get().switchSet('testing');
                    
                    try {
                        coreProvider.$get().get(key);
                    } catch (e) {
                        expect(e).to.equal('CONFIG: Invalid configVar ' + key);
                    }
                    expect(coreProvider.$get().get[key]).to.be.undefined;
                }));
            }
        });

        describe('should be able to', function () {

            it('throw an error when invalid defaultSet', inject(function() {
                try {
                    coreProvider.$get().switchSet('unknownSet');
                } catch (e) {
                    expect(e).to.equal('CONFIG: Invalid default set ' + 'unknownSet');
                }
            }));
            
            it('throw an error when invalid configVar', inject(function() {
                try {
                    coreProvider.$get().get('baseURL');
                } catch (e) {
                    expect(e).to.equal('CONFIG: Invalid configVar ' + key);
                }
            }));

            it('to getSet', inject(function() {           
                returns = coreProvider.$get().getSet();
                expect(returns).to.be.defined;
            }));

            it('to getSetComplete', inject(function() {           
                returns = coreProvider.$get().getSetComplete('production');
                expect(Object.keys(returns).length).to.be.at.least(1);
            }));

        });
    });

});