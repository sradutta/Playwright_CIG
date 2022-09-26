import {PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 60000, //leaving it 0 will imply no timeout. This is a global timeout
    retries: 0,     //# of times you want playwright to retry a failing test
    use: {
        headless: true, 
        viewport: { width: 1280, height: 720}, 
        actionTimeout: 15000, //it's the timeout for click, selectors, etc before errors
        ignoreHTTPSErrors: true,
        video: "retain-on-failure",
        screenshot: "only-on-failure"
    },

    projects: [
        {
            name: 'Chromium', 
            use: {browserName: 'chromium'},
        },
        {
            name: 'FireFox',
            use: {browserName: 'firefox'},
        },
        {
            name: 'Webkit',
            use: {browserName: 'webkit'},
        },
    ],
}

export default config