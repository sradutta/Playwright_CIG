import { Locator, Page, expect } from "@playwright/test";

export class AboutCigFeatures {

    //Declare variables
    readonly page: Page
    readonly cdlscholarship: Locator
    readonly bbb: Locator
    readonly chamber: Locator
    

    //Define selectors using constructors
    constructor(page: Page){
        this.page = page
        this.cdlscholarship = page.locator('a:has-text("CDL Scholarship")')
        //this.cdlscholarship = page.locator('text=CDL Scholarship')
        this.bbb = page.locator('img[alt="BBB Logo"]')
        this.chamber = page.locator('[alt="Chamber of Commerce Logo"]')
    }

    //Define methods
    async aboutCigPageOpens(){
        await this.page.goto('https://www.careersingear.com/about')
    }
    async aboutCigPageVisible(){
        //expect((this.page).locator('h1:has-text("About")')).toBeVisible()
        await expect (this.page.locator('h1, .title white-text')).toHaveText("About")
        await this.page.screenshot({ path: 'aboutcigscreenshot.png', fullPage: true })
    }
    async visitAndAssertCDLScholarshipPage(){
        await this.cdlscholarship.click()
        await this.page.waitForNavigation
        //expect(this.page).toHaveURL('https://www.careersingear.com/cdl-scholarship', {timeout: 5000})  
        await expect(this.page).toHaveURL('https://www.careersingear.com/cdl-scholarship') 
        await expect(this.page.locator('h1')).toHaveText('Careers In Gear Trucking Scholarship')
        await this.page.screenshot({path: 'cdlscholarshippagescreenshot.png', fullPage: true})

        //await this.page.waitForURL('https://www.careersingear.com/cdl-scholarship'), waits for the URL and never goes to the next line in the code
    }
    async visitAndAssertbbbPage(){
        const [bbbPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.bbb.click()
        ])
        await bbbPage.waitForLoadState()
        expect(bbbPage).toHaveURL('https://www.bbb.org/us/al/tuscaloosa/profile/digital-marketing/randall-reilly-llc-0463-1323#sealclick')
        //await this.page.waitForEvent('popup')
        //await expect(this.page).toHaveURL('https://www.bbb.org/us/al/tuscaloosa/profile/digital-marketing/randall-reilly-llc-0463-1323#sealclick')
        await expect((bbbPage).locator('[aria-label="Better Business Bureau Homepage"]')).toHaveText('Better Business BureauBetter Business Bureau®')
        //await expect((bbbPage).locator('.css-5wwsy1 egrmarl0')).toHaveText('Better Business Bureau')
        //await expect((bbbPage).locator('.MuiTypography-root MuiTypography-h2 font-normal text-black css-1eyz3jv')).toContainText('Randall Reilly, LLC')
        await bbbPage.screenshot({path: 'bbbpagescreenshot.png', fullPage: true})
    }
    async visitAndAssertChamberPage(){
        const [chamberPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.chamber.click()     
        ])
        await chamberPage.waitForLoadState()
        await expect(chamberPage).toHaveURL('https://westalabamachamber.com/#action=Listing&value=47720&searchID=265580&cid=160&did=37') 
        //await expect((chamberPage).locator('a:has-text("The Chamber of Commerce of West Alabama")')).toBeVisible()
        await chamberPage.screenshot({path: 'chamberpagescreenshot.png', fullPage: true})
    }
    
}