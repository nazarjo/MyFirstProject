// const webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;

// const driver = new webdriver.Builder()
//     .forBrowser('chrome')
//     .build();

// driver.get('http://www.google.com');

// driver.findElement(By.name('q')).sendKeys('webdriver');

// driver.sleep(5000).then(function() {
//     driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
    
// });

// driver.findElement(By.name('btnK')).click();
// //driver.findElement(By.xpath('/html/body/div[5]/div[3]/form/div[1]/div[1]/div[2]/div[2]/div[2]/center/input[1]')).click();
// //driver.findElement(By.className("center:nth-child(1) > .gNO89b")).click();
// //driver.findElement(By.xpath("//input[@name='btnK'])[2]")).click();
// //driver.findElement(By.className('gNO89b'.name('btnK'))).click();
// //driver.findElement(By.name('btnK')).click();

// driver.sleep(9000).then(function() {
//   driver.getTitle().then(function(title) {
//     if(title === 'webdriver - Google Search') {
//       console.log('Test passed');
//     } else {
//       console.log('Test failed');
//     }
//     driver.quit();
//   });
// });

// //firefox  btnK

const {Builder, By, Key, until} = require('selenium-webdriver');

let result

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        // Navigate to Url
        await driver.get('https://www.google.com');

        // Enter text "cheese" and perform keyboard action "Enter"
        await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);

        firstResult = await driver.wait(until.elementLocated(By.css('h1')), 7000); // get url 
    

        console.log(firstResult);

        
        console.log(await firstResult.getAttribute('textContent'));

        

        if(result === 'cheese - Google Search') {
                  console.log('Test passed');
                } else {
                  console.log('Test failed');
                }

        
        
    }
    finally{
        driver.quit();
    }
})();



//let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 7000);
// to do використання тестового