import {test, expect} from '@playwright/test'
import {loadHomePage, assertH1} from '../helpers'

test("Simple basic test", async({page}) => {
    await page.goto("https://www.careersingear.com")
    const hpfirsth1 = await page.locator('h1')
    await expect(hpfirsth1).toContainText('Start your search to find the best trucking job.')
})

test("Clicking on elements", async({page}) =>{
    await page.goto("https://www.careersingear.com")
    //await page.locator('[placholder="Keywords or Company"]').click();
    await page.locator('text=Search Advanced Filters >> [placeholder="Keywords or Company"]').click();
    //await page.locator('css=[placeholder="Keywords or Company"]').fill('flatbed');
    await page.locator('text=Search Advanced Filters >> [placeholder="Keywords or Company"]').fill('flatbed');
})

//test.skip("Selectors", async({page}) =>{

    //Text
    //await page.click('text = some text')

    //CSS Selectors
   //await page.click('html selectors') //html selectors = h1, button, etc
   //await page.check('.class')

    //Only visible CSS Selectors
    //await page.click('.submit-button:visible')

    //Combinations
    //await page.click(#username, .first)   //there can be infinite combinations

    //Xpath
   //await page.click('//button') // The double-slash telling it's a xpath
//})

test.describe.parallel.only('Hooks', () =>{
    test.beforeEach(async({page}) =>{
        await page.goto('https://www.careersingear.com');
    })
    test('Screenshots', async({page}) => {
        //await page.goto('https://www.careersingear.com');
        await page.screenshot({path: 'screenshot.png', fullPage: true 
        })
    })
    
    test('Screesnhot single element', async({page}) => {
        //await page.goto('https://www.careersingear.com');
        const element = await page.$('h1')
        await element?.screenshot({path: 'single_element.png'})
    })
})


test('Custom Helpers', async({page}) => {
    await loadHomePage(page)
    //await page.pause()  //comment it or delete it and only use for debugging purposes
    await assertH1(page)
})