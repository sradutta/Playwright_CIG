import {test, expect} from '@playwright/test'
import { CigFeatures} from '../page-objects/CigHompeageFeatures'

/* This tests all the features/links of CIG homepage. 
The header and footer links that are tested here are also available
and tested in cig_homepage_footer_links.spec.ts and 
cig_homepage_header_links.spec.ts as well. Those *spec.ts do not 
follow Page Object Model style. This page does. This page also tests
that the link to the three companies from homepage are working.
*/


test.describe('Testing CIG homepage features', () => {

    //Declare variables
    let cigfeatures: CigFeatures

    //Before hook
    test.beforeEach(async ({page}) => {
        cigfeatures = new CigFeatures(page)
        await cigfeatures.visitCigHompege()
    })

    //Making sure all the header links of homepage open
    test('Verifying header links on homepage', async({page}) =>{
        
        //Verify "Company" link
        await cigfeatures.clickAndAssertCompanyTab()
        //Verify "State" link
        await cigfeatures.clickAndAssertStateTab()
        
        //Verify "Haul Type" link
        await cigfeatures.clickAndAssertHaulTypeTab()
        
        //Verify "CIG Logo" link
        await cigfeatures.clickAndAssertCigLogo()    
    })

    //Making sure the 3 companies from homepage open
    test("Testhing the 3 companies", async({page}) => {
       //First Company in the body
       await cigfeatures.clickAndAssertCompany1Page()
       //Second Company in the body
       await cigfeatures.clickAndAssertCompany2Page()
       //Third company in the body
       await cigfeatures.clickAndAssertCompany3Page()
    })
    
    test('About CIG Link', async({page}) => {
        await cigfeatures.clickAndAssertAboutCigPage() 
    })
    test('RR Terms of Use and Privacy Policy Link', async({page}) => {
        await cigfeatures.clickAndAssertPrivacyPolicyPage()
    })
    test('About Point of Collection Link', async({page}) => {
        await cigfeatures.clickAndAssertPointCollectionPage() 
    })
    test('Notice California Residents Link', async({page}) => {
        await cigfeatures.clickAndAssertCANoticePage()
    })
    test('Copyright Link', async({page}) => {
        await cigfeatures.clickAndAssertCopyrightPage() 
    })
    test('Facebook Link', async({page}) => {
        await cigfeatures.clickAndAssertFacebookPage()
    })
    test('Twitter Link', async({page}) => {
        await cigfeatures.clickAndAssertTwitterPage()
    })
    test('Advertise Link', async({page}) => {
        await cigfeatures.clickAndAssertAdvertisePage()
    })
})