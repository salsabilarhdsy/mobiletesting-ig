
### How to starts (use Git bash):
1. npm init -y
2. menambahkan webdriver.io dengan: npm init wdio atau npm i --save-dev @wdio/cli 
2.1. npx wdio config (Kalau ada error module not found: npm config set script-shell bash)
2.2. Ulangi langkah 2.1
3. Choose E2E Testing
4. Choose my local  machine
5. Choose mobile > android
6. Choose framework MOCHA
7. Compiler: NO
8. Sample test case: NO
9. Reporter: spec
10. Plugin: NO
11. Service: Appium
12. npm install ts-node (karena webdriver.io membutuhkan typescript)
13. appium (untuk run, please dont use git bash here)
14. appium driver install uiautomator2

### Configurasi di Appium Inspector (App):
{ 
    "appium:platformName": "Android", 
    "appium:platformVersion": "13", 
    "appium:automationName": "UIAutomator2", 
    "appium:appPackage": "id.or.nu.app", 
    "appium:appActivity": "id.or.nu.app.MainActivity", 
    "appium:noReset": true, 
    "appium:autoGrantPermissions": true, 
    "appium:forceAppLaunch" : true 
}

{ 
    "appium:platformName": "Android", 
    "appium:platformVersion": "13", 
    "appium:automationName": "UIAutomator2", 
    "appium:appPackage": "com.instagram.android", 
    "appium:appActivity": "com.instagram.mainactivity.InstagramMainActivity", 
    "appium:noReset": true, 
    "appium:autoGrantPermissions": true, 
    "appium:forceAppLaunch" : true 
}

### Sample test:
describe('Mobile App Test Suite', () => { 
    it('should open the app and perform a simple test', () => { 
         
    }); 
});


### Sample helpers (function):
/** 
 Menambahkan delay dalam milidetik. 
 @param {number} milliseconds - Jumlah milidetik yang diinginkan. 
*/ 
function delay(milliseconds) { 
    return new Promise((resolve) => { 
      setTimeout(resolve, milliseconds); 
    }); 
  } 
   
  module.exports = { 
    delay, 
  };


### Sample page Object:
class HomePage { 
    get buttonOthers(){ 
        return $('~Lainnya') 
    } 
 
    async clickButtonLainya(){ 
        await this.buttonOthers.click(); 
    } 
} 
 
module.exports = new HomePage()

### Sample file test:

const HomePage = require('../pageobjects/home.page') 
const { delay } = require('../../helpers/delayHelper'); 
 
describe('Test Kalkulator Zakat', () => { 
    it('Open Menu Lainya', async () => { 
        //await delay(5000); 
        await HomePage.clickButtonLainya(); 
         
    }); 
});
