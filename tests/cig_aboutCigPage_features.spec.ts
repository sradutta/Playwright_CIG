import {test } from '@playwright/test'
import { AboutCigFeatures } from '../page-objects/AboutCigPageFeatures'

/* This test verifies all the links from About CIG page
   It also verifies that the CDL Scholarship page opens and
   displays the corect heading. It also verifies that when 
   user clicks on "Get Started" from "About CIG" page, user
   is navigated to the correct page with all of CIG's job
   listings.
*/

test.describe("Testing the About CIG Page and 3 of the footer-links", () => {

    //Declare and define variable
    let aboutcig: AboutCigFeatures

    //Before hook
    test.beforeEach(async({page}) => {
        aboutcig = new AboutCigFeatures(page)
        await aboutcig.aboutCigPageOpens()
        await aboutcig.aboutCigPageVisible()
    })
    
    //About Page has "Get Started" link and user is navigated to corect page
    test('About CIG page has "Get Started and user navigates to correct page', async({page}) => {
        await aboutcig.aboutCIGPageLinkToGetStarted()
    })

    //CDL Scholarship
    test('CDL Scholarship link', async({page}) => {
        await aboutcig.visitAndAssertCDLScholarshipPage
    })
   
    //BBB Logo
    test('BBB Logo Link', async({page}) => {
        await aboutcig.visitAndAssertbbbPage()
    })
    
    //Chamber Logo
    test('Chamber Page Link', async({page}) => {
        await aboutcig.visitAndAssertChamberPage()
    })
})