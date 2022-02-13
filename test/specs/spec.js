const expect = require("chai").expect;
const PageFactory = require("../utils/pageObjects/pageFactory");
const loginPage = PageFactory.getPage("Login");
const homePage = PageFactory.getPage("Home");
const myProfilePage = PageFactory.getPage("MyProfile");
const initialLoginPage = PageFactory.getPage("Initial");
const microsoftLoginPage = PageFactory.getPage("Microsoft");
const {mauseClick, scrollTo, hover} = require('../utils/helpers/actionsFunctions');
const {wait, open, waitUntilVisible} = require("../utils/helpers/functions");

describe("Heroes home page tests", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            browser.manage().window().maximize();
    });

    it("should have 11 recent badges", async function () {
        await open('https://heroes.epam.com/');
        await loginPage.typeLogin();
        await loginPage.typePassword();
        const signInButton = await loginPage.signInButton.element;
        const signInButtonName = await loginPage.signInButton.elementName;
        await mauseClick(signInButton, signInButtonName);
        await loginPage.clickSendMePush();
        await microsoftLoginPage.clickYes();
        await homePage.waitForFirstNavigationButton();
        await homePage.Header.navigationButtons.clickElementByText("My Profile");
        await myProfilePage.waitForRecentBadges();
        const countOfRecentBadges = await myProfilePage.getCountOfRecentBadges();
        const appreciationsBadges  = await myProfilePage.appriciationsSection.collection.get(0);
        const appreciationsBadgesName  = await myProfilePage.appriciationsSection.elementName;
        await waitUntilVisible(appreciationsBadges);
        await scrollTo(appreciationsBadges, appreciationsBadgesName);
        await wait(2);
        const firstBadgeOfappreciationBadge = await myProfilePage.appriciationsSection.collection.get(0);
        await hover(firstBadgeOfappreciationBadge);
        await wait(2);
        expect(countOfRecentBadges).to.be.equal(11);
    });
});