const Locators = require("../../fixtures/Locators.json")
const { faker } = require("@faker-js/faker")
const password = '123' + faker.internet.password()

describe ('Register testing', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.nav-link').eq(2).click()
    })
    it('Visit Gallery', () => {
        // cy.visit('/')
    })

    it('Go to Register', () => {
        // cy.visit('/')
        // cy.get('.nav-link').eq(2).click()
    })

    it('Register', () => {
        cy.get(Locators.Register.firstName).type(faker.name.firstName())
        cy.get(Locators.Register.lastName).type(faker.name.lastName())
        cy.get(Locators.Register.email).type(faker.internet.email())
        cy.get(Locators.Register.password).type(password)
        cy.get(Locators.Register.passwordConfirm).type(password)
        cy.get(Locators.Register.termsBtn).click()
        cy.get(Locators.Register.submitBtn).click()
    })

    afterEach(() => {
        cy.clearCookies()
    })
})