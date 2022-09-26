import { test, expect} from '@playwright/test'

test("Testing all the features of the company-tab page", async({page}) => {

    //Go To the company page
    await page.goto('https://www.careersingear.com/featured-trucking-companies')
    await expect(page.locator('h1:has-text("Featured Trucking Companies Hiring")')).toHaveText("Featured Trucking Companies Hiring")
    
    //Averitt
    await page.locator('text=Averitt Express').click()
    await page.waitForURL('https://www.careersingear.com/averitt-express')
    await expect(page.locator('img[alt="Averitt Express"]')).toBeVisible
    await expect(page.locator('text=Averitt Express')).toBeVisible
    //await page.locator('div[class="row company-page-job-listings"]').nth(1).waitFor()
    const numOfAverittJobs: number = await page.locator('a:has-text("Apply Now")').count()
    //const numOfJobs: number = await page.locator('[class="row company-page-job-listings"]').count()
    //await expect(numOfJobs > 0).toBeTruthy
    await expect(numOfAverittJobs).toBeGreaterThan(0)
    console.log(numOfAverittJobs)

    //Crete Carrier
    await page.locator('nav >> text=Company').click()
    await page.locator('text=Crete Carrier Corporation').click()
    await page.waitForURL('https://www.careersingear.com/crete-carrier-corporation')
    //await page.screenshot({path: 'cretecarrier.png', fullPage: true})
    await expect(page.locator('.company-name')).toHaveText("Crete Carrier Corporation")
    const numOfCrteJobs: number = await page.locator('a:has-text("Apply Now")').count()
    await expect(numOfCrteJobs).toBeGreaterThan(0)
    console.log(numOfCrteJobs)

     //K & B Transportation 
     await page.locator('nav >> text=Company').click()
     await page.locator('text=K&B Transportation').click()
     await page.waitForURL('https://www.careersingear.com/k-b-transportation/jobs')
     //await page.screenshot({path: 'cretecarrier.png', fullPage: true})
     await expect(page.locator('.company-name')).toHaveText("K&B Transportation")
     const numOfKBJobs: number = await page.locator('a:has-text("Apply Now")').count()
     await expect(numOfKBJobs).toBeGreaterThan(0)
     console.log(numOfKBJobs)

     //Penske
     await page.locator('nav >> text=Company').click()
     await page.locator('text=Penske').click()
     await page.waitForURL('https://www.careersingear.com/penske/jobs')
     await expect(page.locator('.company-name')).toHaveText('Penske')
     const numOfPenskeJobs: number = await page.locator('a:has-text("Apply Now")').count()
     await expect(numOfPenskeJobs).toBeGreaterThan(0)
     console.log(numOfPenskeJobs)

     //US Xpress
     await page.locator('nav >> text=Company').click()
     await page.locator('text=US Xpress').click()
     await page.waitForURL('https://www.careersingear.com/us-xpress')
     await expect(page.locator('.company-name')).toHaveText('US Xpress')
     const numOfUSXpressJobs: number = await page.locator('a:has-text("Apply Now")').count()
     await expect(numOfUSXpressJobs).toBeGreaterThan(0)
     console.log(numOfUSXpressJobs)


     //See More Trucking Companies
     await page.locator('nav >> text=Company').click()
     await page.locator('text=See more trucking companies hiring').click()
     await expect(page.locator('h1')).toHaveText('Trucking Companies')
     await expect(page.locator('.row:has(p)')).toContainText("Searching for trucking and transportation related companies hiring? Look through our list of employers to view all available truck driving and trucking related job postings.")
     //await expect(page.locator('class:has-text("FILTER BY")')).toHaveValues([/A/, /B/, /C/])
     const numOfDiffJobs: number = await page.locator('[class="company-name truncate"]').count()
     await expect(numOfDiffJobs).toBeGreaterThan(0)
     console.log(numOfDiffJobs)
     var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     for(let i=0; i < 26; i++){
        await expect(page.locator('a:has-text("c[i]")')).toBeTruthy
     }



})
