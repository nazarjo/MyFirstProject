const {Builder, By, Key, until} = require('selenium-webdriver');

let result

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        // Navigate to Url
        await driver.get('https://www.google.com');

        // Enter text "cheese" and perform keyboard action "Enter"
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Пошук Google'), 7000);
        result = await driver.wait(until.elementLocated(By.css('h1')), 7000); // get url 
    

        
        //console.log(await result.getAttribute('textContent'));

        if(result = 'webdriver - Пошук Google') {
                 console.log('Test passed');
               } else {
                   console.log(result.getText());
                 console.log('Test failed');
               }  
    }
    finally{
        driver.quit();
    }
})();