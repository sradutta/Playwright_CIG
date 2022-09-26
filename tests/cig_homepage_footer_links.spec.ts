import {test, expect} from '@playwright/test'

test("Verifying footer links on homepage", async({page}) => {

    //Navigate to CIG homepage
    await page.goto('https://www.careersingear.com/')

    //Verify "About CIG" link
    await page.locator('text=About CIG').click()
    await expect(page).toHaveURL('https://www.careersingear.com/about')
    await page.screenshot({path: 'aboutcig.png', fullPage: true})

    //Verify "RR Terms of Use and Privacy Policy"
    const [pagePrivacy] = await Promise.all([
        page.waitForEvent('popup'),
        page.click ('a:has-text("Randall-Reilly Terms of Use and Privacy Policy")'),
        
    ])
    await pagePrivacy.waitForLoadState()
    await pagePrivacy.locator('text=WEBSITE TERMS OF USE')
    await pagePrivacy.screenshot({path: 'privacypolicy.png', fullPage: true})
     //Verify "RR Terms of Use and Privacy Policy"

    //Verify "Points of Collection"
    const [pageCollection] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('a:has-text("Point of Collection")')
    ])
    await pageCollection.waitForLoadState()
    await pageCollection.locator('text=POINT OF COLLECTION NOTICE')
    await pageCollection.screenshot({path: 'pointsofcollection.png', fullPage: true})
    //Verify "Points of Collection"

    //Verify "California Notice"
    const [pageCalifornia] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('a:has-text("Notice California Residents – Exercise Your Rights")')
    ])
    await pageCalifornia.waitForLoadState()
    await pageCalifornia.locator('text=If you are a California or Nevada resident')
    await pageCalifornia.screenshot({path: 'californianotice.png', fullPage: true})
    //Verify "California Notice"

    //Verify "Copyright"
    const [pageCopyright] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('a:has-text("2022 Randall-Reilly")')
    ])
    await pageCopyright.waitForLoadState()
    await pageCopyright.locator('text=We are the growth platform for vital industries')
    await pageCopyright.screenshot({path: 'copyright.png', fullPage: true})
     //Verify "Copyright"

    //Verify "Facebook"
    const [pageFB] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('[aria-label="Careers in Gear Facebook Page"] svg')
    ])
    await pageFB.waitForLoadState()
    await pageFB.waitForURL('https://www.facebook.com/CareersinGear')
    await pageFB.screenshot({path: 'cigfacebook.png', fullPage: true})
    //Verify "Facebook"

    //Verify "Twitter"
    const [pageTwitter] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('[aria-label="Careers in Gear Twitter Page"] path')
    ])
    await pageTwitter.waitForLoadState()
    await pageTwitter.waitForURL('https://twitter.com/CareersInGear')
    await pageTwitter.screenshot({path: 'cigfacebook.png', fullPage: true})
     //Verify "Twitter"

    //Verify 'Advertise' link
    await page.click('li > a:has-text("Advertise")')
    const advertise = page.locator('#tab-advertise >> text=Advertise')
    await expect(advertise).toHaveText("Advertise")
    await page.screenshot({path: 'advertise.png', fullPage: true})

})