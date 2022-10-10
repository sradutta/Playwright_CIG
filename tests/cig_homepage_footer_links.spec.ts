import {test, expect} from '@playwright/test'

/* This test verifies that all the footer links in CIG navigates user to the correct page */

test.describe("Verifying footer links on homepage", () => {

    //Before each test navigate to CIG homepage
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.careersingear.com/')
    })
   

    //Verify "About CIG" link
    test('About CIG link', async({page}) => {
        await page.locator('text=About CIG').click()
        await expect(page).toHaveURL('https://www.careersingear.com/about')
        await expect(page.locator('h1,[class="title white-text"]')).toHaveText('About')
        //await page.screenshot({path: 'aboutcig.png', fullPage: true}) -- debugging

    })
    
    //Verify "RR Terms of Use and Privacy Policy"
    test('Terms of Use and Privacy Policy link', async({page}) => {
        const [pagePrivacy] = await Promise.all([
            page.waitForEvent('popup'),
            page.click ('a:has-text("Randall-Reilly Terms of Use and Privacy Policy")'),
            
        ])
        await pagePrivacy.waitForLoadState()
        await pagePrivacy.locator('text=WEBSITE TERMS OF USE')
        //await pagePrivacy.screenshot({path: 'privacypolicy.png', fullPage: true}) -- debugging
    })

    //Verify "Points of Collection"
    test('Points of Collection', async({page}) => {
        const [pageCollection] = await Promise.all([
            page.waitForEvent('popup'),
            page.click('a:has-text("Point of Collection")')
        ])
        await pageCollection.waitForLoadState()
        await pageCollection.locator('text=POINT OF COLLECTION NOTICE')
        //await pageCollection.screenshot({path: 'pointsofcollection.png', fullPage: true}) -- debugging
    })

    //Verify "California Notice"
    test('California Residents Notice', async({page}) => {
        const [pageCalifornia] = await Promise.all([
            page.waitForEvent('popup'),
            page.click('a:has-text("Notice California Residents – Exercise Your Rights")')
        ])
        await pageCalifornia.waitForLoadState()
        await pageCalifornia.locator('text=If you are a California or Nevada resident')
        await expect(pageCalifornia.locator('[aria-label="Select request type(s)"]')).toBeVisible()
        //await pageCalifornia.screenshot({path: 'californianotice.png', fullPage: true}) -- debugging
    })

    //Verify "Copyright"
    test('Copyright Notice Link', async({page}) => {
        const [pageCopyright] = await Promise.all([
            page.waitForEvent('popup'),
            page.click('a:has-text("2022 Randall-Reilly")')
        ])
        await pageCopyright.waitForLoadState()
        await expect(pageCopyright.locator('text=We are the growth platform for vital industries')).toBeVisible()
        //await pageCopyright.screenshot({path: 'copyright.png', fullPage: true}) -- debugging
    })

    //Verify "Facebook"
    test('Facebook Link', async({page}) => {
        const [pageFB] = await Promise.all([
            page.waitForEvent('popup'),
            page.click('[aria-label="Careers in Gear Facebook Page"] svg')
        ])
        await pageFB.waitForLoadState()
        await pageFB.waitForURL('https://www.facebook.com/CareersinGear')
        //await pageFB.screenshot({path: 'cigfacebook.png', fullPage: true}) -- debugging
    })

    //Verify "Twitter"
    test('Twitter Page Link', async({page}) => {
        const [pageTwitter] = await Promise.all([
            page.waitForEvent('popup'),
            page.click('[aria-label="Careers in Gear Twitter Page"] path')
        ])
        await pageTwitter.waitForLoadState()
        await pageTwitter.waitForURL('https://twitter.com/CareersInGear')
        //await pageTwitter.screenshot({path: 'cigtwitter.png', fullPage: true}) -- debugging

    })

    //Verify 'Advertise' link
    test('Advertise Link', async({page})  => {
        await page.click('li > a:has-text("Advertise")')
        const advertise = page.locator('#tab-advertise >> text=Advertise')
        await expect(advertise).toHaveText("Advertise")
        //await page.screenshot({path: 'advertise.png', fullPage: true}) -- debugging 
    })

})