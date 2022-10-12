import {test, expect, Page} from '@playwright/test'
import { JobLists } from '../page-objects/PagesWithJobLists'


test.describe('Job Details Page', () => {

    let joblists: JobLists

    test.beforeEach( async({page}) => {
        joblists = new JobLists(page)
    })

    test('Testing US Xpress by checking attributes', async({page}) => {
        await joblists.createAndCheckJDPages(joblists.urlusxpres)
    })

    test('Testing Averitt by filling in forms', async({page}) => {
        await joblists.createAndFillJDPages(joblists.urlaveritt)
    })

    test('Testing Crete by filling in forms', async({page}) => {
        await joblists.createAndFillJDPages(joblists.urlcretecar)
    })

    test('Testing K & B by filling in forms', async({page}) => {
        await joblists.createAndFillJDPages(joblists.urlkandb)
    })

    test('Testing Penske by filling in forms', async({page}) => {
        await joblists.createAndFillJDPages(joblists.urlpenske)
    })

    test('Testing Flatbed by filling in forms', async({page}) => {
        await joblists.createAndFillJDPages(joblists.urlflatbed)
    })

    test('Testing Hazmat by filling in forms', async({page}) => {
        await joblists.createAndFillJDPages(joblists.urlhazmat)
    })

    test('Testing Reefer by filling in forms', async({page}) => {
        await joblists.createAndFillJDPages(joblists.urlreefer)
    })

    test('Testing Tanker by filling in forms', async({page}) => {
        await joblists.createAndFillJDPages(joblists.urltanker)
    })

    test('Testing Van by filling in forms', async({page}) => {
        await joblists.createAndFillJDPages(joblists.urlvan)
    })

    test('Testing Alabama by filling in forms', async({page}) => {
        await joblists.createAndFillJDPages(joblists.urlalabma)
    })
   

})





       


        