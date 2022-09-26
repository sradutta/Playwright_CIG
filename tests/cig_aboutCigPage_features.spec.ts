import {test } from '@playwright/test'
import { AboutCigFeatures } from '../page-objects/AboutCigPageFeatures'

test.describe("Testing the About CIG Page and 3 of the footer-links", () => {

    //Declare and define variable
    let aboutcig: AboutCigFeatures

    //Before hook
    test.beforeEach(async({page}) => {
        aboutcig = new AboutCigFeatures(page)
        await aboutcig.aboutCigPageOpens()
        await aboutcig.aboutCigPageVisible()
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