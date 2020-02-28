
let homepage = require('../pages/homepage.js');


describe('demo calculator tests', function(){

    it('addition test',function(){

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');
        
        //element(by.model('first')).sendKeys('7');
        homepage.enterFirstNumber('7');
        
        //element(by.model('second')).sendKeys('7');
        homepage.enterSecondNumber('7');


        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding','14'))
        //expect(result.getText()).toEqual('14')

        homepage.verifyResult('14');

        browser.sleep(2000)

    });

    it('Subtraction test',function(){

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');
        
        //element(by.model('first')).sendKeys('7');
        homepage.enterFirstNumber('17');
        
        //element(by.model('second')).sendKeys('7');
        homepage.enterSecondNumber('7');


        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding','14'))
        //expect(result.getText()).toEqual('14')

        homepage.verifyResult('20');

        browser.sleep(2000)

    });

});