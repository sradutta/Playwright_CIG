import { Page, Locator, expect } from '@playwright/test'

export class CigFeatures{

    //Declare Variables
    readonly page: Page
    //Header Tab Variables
    readonly companytab: Locator
    readonly statetab: Locator
    readonly haultypetab: Locator
    readonly ciglogotab: Locator
    readonly magnifyingtab: Locator
    //3 Companies Visible On Homepage
    readonly company1: Locator
    readonly company2: Locator
    readonly company3: Locator
    //Footer Tab Visible On Homepage
    readonly aboutcig: Locator
    readonly privacypolicy: Locator
    readonly pointscollection: Locator
    readonly calinotice: Locator
    readonly copyright: Locator
    readonly facebook: Locator
    readonly twitter: Locator
    readonly advertise: Locator


    //Init selectors using constructors
    constructor(page: Page){
        this.page = page
        //Header Links
        this.companytab = page.locator(':nth-match(:text("Company"),1)')
        this.statetab = page.locator(':nth-match(:text("State"),1)')
        this.haultypetab = page.locator('text=Haul Type')
        this.ciglogotab = page.locator('[aria-label="Site logo link to homepage"] svg')
        this.magnifyingtab = page.locator('#mdi-magnify')
        //Companies in Body
        //this.company1 = page.locator('text=US Xpress')
        this.company1 = page.locator('a:has-text("US Xpress")')
        this.company2 = page.locator('text=Averitt')
        this.company3 = page.locator('text=Crete Carrier Corporation')
        //Footer Tabs
        this.aboutcig = page.locator('text=About CIG')
        this.privacypolicy = page.locator('a:has-text("Randall-Reilly Terms of Use and Privacy Policy")')
        this.pointscollection = page.locator('a:has-text("Point of Collection")')
        this.calinotice = page.locator('a:has-text("Notice California Residents – Exercise Your Rights")')
        this.copyright = page.locator('a:has-text("2022 Randall-Reilly")')
        this.facebook = page.locator('[aria-label="Careers in Gear Facebook Page"] svg')
        this.twitter = page.locator('[aria-label="Careers in Gear Twitter Page"] path')
        this.advertise = page.locator('li > a:has-text("Advertise")')

    }

    //Define methods
    //Navigate to CIG homepage
    async visitCigHompege(){
        await this.page.goto('https://www.careersingear.com/')
    }
    //A page pops open
    async popup(){
        await this.page.waitForEvent('popup')
    }
    //Click company tab from top-right --> navigate to the correct page
    async clickAndAssertCompanyTab(){
        await this.companytab.click()
        await expect(this.page).toHaveURL('https://www.careersingear.com/featured-trucking-companies')
        await this.page.screenshot({path: 'company.png', fullPage: true})
       
    }
    //Click state tab from top-right --> navigate to the correct page
    async clickAndAssertStateTab(){
        await this.statetab.click()
        await expect(this.page).toHaveURL("https://www.careersingear.com/trucking-jobs")
        await this.page.screenshot({path: 'state.png', fullPage: true})
    }
    //Click haul-type tab from top-right --> navigate to the correct page
    async clickAndAssertHaulTypeTab(){
        await this.haultypetab.click()
        await expect(this.page).toHaveURL("https://www.careersingear.com/haul-types")
        await this.page.screenshot({path: 'haultype.png', fullPage: true})
    }
    //Click CIG logo from top-left --> navigtate to the cig homepae
    async clickAndAssertCigLogo(){
        await this.ciglogotab.click()
        await expect(this.page).toHaveURL("https://www.careersingear.com/")
        await this.page.screenshot({path: 'ciglogo.png', fullPage: true}) 
    }

    //First Company in the body
    async clickAndAssertCompany1Page(){
        const [company1Page] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.company1.click()
        ])
        await company1Page.waitForLoadState()
        await expect(company1Page).toHaveURL('https://www.careersingear.com/us-xpress')
        await expect(company1Page.locator('.company-name')).toHaveText('US Xpress')
        await company1Page.screenshot({path: 'company1.png', fullPage: true})
        const numOfJobs: number = await company1Page.locator('a:has-text("Apply Now")').count()
        await expect(numOfJobs).toBeGreaterThan(0)
        console.log(numOfJobs)
    }
    //Second Company in the body
    async clickAndAssertCompany2Page(){
        const [company2Page] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.company2.click()
        ])
        await company2Page.waitForLoadState()
        await expect(company2Page).toHaveURL('https://www.careersingear.com/averitt-express')
        await expect(company2Page.locator('.company-name')).toHaveText('Averitt Express')
        await company2Page.screenshot({path: 'company2.png', fullPage: true})
        const numOfJobs: number = await company2Page.locator('a:has-text("Apply Now")').count()
        await expect(numOfJobs).toBeGreaterThan(0)
        console.log(numOfJobs)
    }
    //Third company in the body
    async clickAndAssertCompany3Page(){
        const [company3Page] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.company3.click()
        ])
        await company3Page.waitForLoadState()
        await expect(company3Page).toHaveURL('https://www.careersingear.com/crete-carrier-corporation')
        await expect(company3Page.locator('.company-name')).toHaveText('Crete Carrier Corporation')
        await company3Page.screenshot({path: 'company3.png', fullPage: true})
        const numOfJobs: number = await company3Page.locator('a:has-text("Apply Now")').count()
        await expect(numOfJobs).toBeGreaterThan(0)
        console.log(numOfJobs)
    }

    //click About-CIG in footer --> navigate to the correct page
    async clickAndAssertAboutCigPage(){
        await this.aboutcig.click()
        await expect(this.page).toHaveURL('https://www.careersingear.com/about')
        await this.page.locator('a:has-text("Get Started")').click()
        await expect(this.page).toHaveURL('https://www.careersingear.com/search')
        //const handle = await this.page.getAttribute('span')
        // let list = document.getElementsByTagName
        // for(let i=0; i<list.length; i++) {if(list[i].getAttribute('style')=='all:unset') console.log(list[i].innerHTML.replace(/(<(.+))/gi, ""));}
        //THINGS TO WORK ON
        //console.log(this.page.url())
        // await this.page.locator('.row job-listings').nth(0).waitFor()
        // const numOfJobListings: number = await this.page.locator('[div class="row job-listings"]').count()
        //await expect(numOfJobListings).toBeGreaterThan(0)
        // const text = await this.page.locator('[style=all:unset]').textContent()
        // console.log(text)
        // const numOfJobs = Number(text) 
        // console.log(numOfJobs)
        // await expect(numOfJobs).toBeGreaterThan(0)
        //console.log(numOfJobListings)    
    }

    //Assert Website Terms of Use page 
    async clickAndAssertPrivacyPolicyPage(){
        const [privacyPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.privacypolicy.click()
        ])
        await expect(privacyPage).toHaveURL('https://www.randallreilly.com/terms/website-terms-and-privacy-policy/')
        await expect((privacyPage).locator('h1:has-text("WEBSITE TERMS OF USE")')).toHaveText("WEBSITE TERMS OF USE")
        await privacyPage.screenshot({path: 'privacypolicypage.png', fullPage: true})
        console.log(this.page.url())
    }
    //Assert Point of Collection page 
    async clickAndAssertPointCollectionPage(){
        const [pointCollectionPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.pointscollection.click()
        ])
        await expect(pointCollectionPage).toHaveURL('https://www.randallreilly.com/terms/point-of-collection-notice/')
       await expect((pointCollectionPage).locator('text=POINT OF COLLECTION NOTICE >> nth=1')).toContainText("POINT OF COLLECTION NOTICE")
       //await expect(pointCollectionPage.locator('.font1 green header, otnotice-section-content >>nth=1')).toContainText("POINT OF COLLECTION NOTICE")
       await pointCollectionPage.screenshot({path: 'pointCollectionPage.png', fullPage: true})
    }
    //Assert "Notice California Residents" page opens up
    async clickAndAssertCANoticePage(){
        const [caNoticePage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.calinotice.click()
        ])
        await expect(caNoticePage).toHaveURL('https://privacyportal-cdn.onetrust.com/dsarwebform/49a9a972-547e-4c49-b23c-4cc77554cacb/cddab1bc-7e58-4eca-a20d-be42716734cf.html')
        await expect((caNoticePage).locator('#dsar-webform-welcome-text')).toContainText("If you are a California or Nevada resident and would like to exercise any of your consumer rights,")
        //await expect(caNoticePage).toHaveScreenshot('CANoticeForm.png')
    }
    //Assert 2022 Randall-Reilly Copyright page opens up
    async clickAndAssertCopyrightPage(){
        const [copyrightPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.copyright.click()
        ])
        await expect(copyrightPage).toHaveURL('https://www.randallreilly.com/')
        //await expect((this.page).locator('.eplus-wrapper, h2:has-text("We are the growth platform for vital industries")')).toContainText("We are the growth platform for vital industries.")
        await expect(copyrightPage.locator('#learn-how-our-platform-fuels-growth')).toContainText('Learn how our platform fuels growth.')
        await copyrightPage.screenshot({path: 'copyright.png', fullPage: true})
    }
    //Assert CIG Facebook page opens up
    async clickAndAssertFacebookPage(){
        const [fbPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.facebook.click()
        ])
        await expect(fbPage).toHaveURL('https://www.facebook.com/CareersinGear')
        await fbPage.screenshot({path: 'fbpage.png', fullPage: true})
    }
    //Assert CIG Twitter page opens up
    async clickAndAssertTwitterPage(){
        const [twitterPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.twitter.click()
        ])
        await expect(twitterPage).toHaveURL('https://twitter.com/CareersInGear')
        await twitterPage.screenshot({path: 'twitterPage.png', fullPage: true})
    }
    //Assert Advertise page opens up
    async clickAndAssertAdvertisePage(){
        await this.advertise.click()
        await expect((this.page).locator('#tab-advertise >> text=Advertise')).toHaveText("Advertise")
        await this.page.screenshot({path: 'advertise.png', fullPage: true})
    }
}

