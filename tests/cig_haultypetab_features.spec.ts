import {test, expect} from '@playwright/test'

/* This tests the haul-types tab. Click on haul-type
from the top-right navigation menu. The test ensures
that each of the haul-types navigate user to the correct
page; user sees jobs. If jobs are not available, then
user is given the notice about the phone number to call. 
It also tests that the proper haul-type box is checked. 
*/

test.describe('Testing the haul type tab', () => {

    //Before each test
    test.beforeEach( async({page}) => {
        await page.goto('https://www.careersingear.com/haul-types')
        await expect(page.locator('h1')).toHaveText('Haul Types')
    })

    //Flatbed
    test('Flatbed', async({page}) => {
        await page.locator('text=Flatbed').click()
        await page.waitForURL('https://www.careersingear.com/haul-type/flatbed')
        await expect(page.locator('#flatbed')).toBeChecked
        const numOfJobs = await page.locator('.job-listings').count()
        if(numOfJobs === 0) {
            await expect(page.locator('[class="orange-text text-darken-4 condensed"]')).toContainText('We did not find any trucking jobs')
            await expect(page.locator('[class="col l6 m12 s12"]:has-text("Suggestions")')).toContainText('Call us now at 1-844-932-0940')
            console.log(numOfJobs) //debugging purpose
        }
        else {
            await expect(numOfJobs).toBeGreaterThan(0)
        }
    })

    //Hazmat
    test('Hazmat', async({page}) => {
        await page.locator('text=Hazmat').click()
        await page.waitForURL('https://www.careersingear.com/haul-type/hazmat')
        await expect(page.locator('#hazmat')).toBeChecked
        const numOfJobs = await page.locator('.job-listings').count()
        if(numOfJobs === 0) {
            await expect(page.locator('[class="orange-text text-darken-4 condensed"]')).toContainText('We did not find any trucking jobs')
            await expect(page.locator('[class="col l6 m12 s12"]:has-text("Suggestions")')).toContainText('Call us now at 1-844-932-0940')
            //console.log(numOfJobs) //debugging purpose
        }
        else {
            await expect(numOfJobs).toBeGreaterThan(0)
        }  
    })

    //Heavy Haul
    test('Heavy Haul', async({page}) => {
        await page.locator('text=Heavy Haul').click()
        await page.waitForURL('https://www.careersingear.com/haul-type/heavy-haul')
        await expect(page.locator('#heavy-haul')).toBeChecked
        const numOfJobs = await page.locator('.job-listings').count()
        if(numOfJobs === 0) {
            await expect(page.locator('[class="orange-text text-darken-4 condensed"]')).toContainText('We did not find any trucking jobs')
            await expect(page.locator('[class="col l6 m12 s12"]:has-text("Suggestions")')).toContainText('Call us now at 1-844-932-0940')
            console.log(numOfJobs) //debugging purpose
        }
        else {
            await expect(numOfJobs).toBeGreaterThan(0)
        }
        //await page.screenshot({path: 'heavyhaul.png', fullPage:true}) 
    })

    //Oversized
    test('Oversized', async({page}) => {
        await page.locator('text=Oversized').click()
        await page.waitForURL('https://www.careersingear.com/haul-type/oversized')
        await expect(page.locator('#oversized')).toBeChecked
        const numOfJobs = await page.locator('.job-listings').count()
        if(numOfJobs === 0) {
            await expect(page.locator('[class="orange-text text-darken-4 condensed"]')).toContainText('We did not find any trucking jobs')
            await expect(page.locator('[class="col l6 m12 s12"]:has-text("Suggestions")')).toContainText('Call us now at 1-844-932-0940')
            console.log(numOfJobs) //debugging purpose
        }
        else {
            await expect(numOfJobs).toBeGreaterThan(0)
        }
        await page.screenshot({path: 'oversized.png', fullPage:true}) 
    })

    //Reefer
    test('Reefer', async({page}) => {
        await page.locator('text=Reefer').click()
        await page.waitForURL('https://www.careersingear.com/haul-type/reefer')
        await expect(page.locator('#reefer')).toBeChecked
        const numOfJobs = await page.locator('.job-listings').count()
        if(numOfJobs === 0) {
            await expect(page.locator('[class="orange-text text-darken-4 condensed"]')).toContainText('We did not find any trucking jobs')
            await expect(page.locator('[class="col l6 m12 s12"]:has-text("Suggestions")')).toContainText('Call us now at 1-844-932-0940')
            console.log(numOfJobs) //debugging purpose
        }
        else {
            await expect(numOfJobs).toBeGreaterThan(0)
        }
        //await page.screenshot({path: 'reefer.png', fullPage:true}) 
        
    })

    //Tanker
    test('Tanker', async({page}) => {
        await page.locator('text=Tanker').click()
        await page.waitForURL('https://www.careersingear.com/haul-type/tanker')
        await expect(page.locator('#tanker')).toBeChecked
        const numOfJobs = await page.locator('.job-listings').count()
        if(numOfJobs === 0) {
            await expect(page.locator('[class="orange-text text-darken-4 condensed"]')).toContainText('We did not find any trucking jobs')
            await expect(page.locator('[class="col l6 m12 s12"]:has-text("Suggestions")')).toContainText('Call us now at 1-844-932-0940')
            console.log(numOfJobs) //debugging purpose
        }
        else {
            await expect(numOfJobs).toBeGreaterThan(0)
        }
        //await page.screenshot({path: 'tanker.png', fullPage:true}) 
        
    })

    //Van
    test('Van', async({page}) => {
        await page.locator('text=Van').click()
        await page.waitForURL('https://www.careersingear.com/haul-type/van')
        await expect(page.locator('#van')).toBeChecked
        const numOfJobs = await page.locator('.job-listings').count()
        if(numOfJobs === 0) {
            await expect(page.locator('[class="orange-text text-darken-4 condensed"]')).toContainText('We did not find any trucking jobs')
            await expect(page.locator('[class="col l6 m12 s12"]:has-text("Suggestions")')).toContainText('Call us now at 1-844-932-0940')
            console.log(numOfJobs) //debugging purpose
        }
        else {
            await expect(numOfJobs).toBeGreaterThan(0)
        }
        await page.screenshot({path: 'van.png', fullPage:true}) 
        
    })


})