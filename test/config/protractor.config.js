exports.config = {

    directConnect: true,

    framework: 'mocha',

    specs: [
        '../specs/*.js'
    ],

    multiCapabilities: [
    {
        'browserName': 'chrome'
    }
    ],
    mochaOpts: {
        reporter: 'mochawesome',
        reporterOptions: {
            overwrite: true,
            reportTitle: 'TEST EPAM HEROES PAGE',
            reportPageTitle: 'TEST EPAM HEROES PAGE',
            reportDir: 'test/report',
            autoOpen: false
        },
        timeout: 70000
    }
};