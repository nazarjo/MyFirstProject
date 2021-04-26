const {Builder, By, Key, until} = require('selenium-webdriver');
async function example () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('some text', Key.RETURN,);

    try {
        let nazar = await driver.findElement(By.id('result-stats'),);
        
        console.log('Test passed');
    } catch (err) {
        console.log('Test failed');
    } finally {
        driver.quit();
    }
    
}
example();


// test for PR