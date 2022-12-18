/// <reference types="cypress" />
import { registerBtn } from "../../PageObjects.js/HomePage";
import { registerPage } from "../../PageObjects.js/Register";
import { createGallery } from "../../PageObjects.js/CreateGallery";
import { goToCreateGalleryBtn } from "../../PageObjects.js/CreateGalleryPage";
const { faker } = require('@faker-js/faker')
const password = '123' + faker.internet.password()

describe ('Register testing', () => {
    beforeEach(() => {
        cy.visit('/')
        registerBtn.clickRegisterBtn()
        cy.url().should('include','/register')
    })

    it('Register', () => {
        registerPage.firstNameInput.type(faker.name.firstName())
        registerPage.lastNameInput.type(faker.name.lastName())
        registerPage.emailReg.type(faker.internet.email())
        registerPage.password1.type(password)
        registerPage.password2.type(password)
        registerPage.terms.click()
        registerPage.submitBtn.click()

        registerPage.submitBtn.should('have.text', 'Submit').and('have.css','background-color','rgb(72, 73, 75)')
        cy.get('.title-style').should('have.text', 'Register')
        registerPage.firstNameInput.should('have.css', 'border-radius', '20px')
        goToCreateGalleryBtn.createGalleryBtn.should('not.exist')
        

        // goToCreateGalleryBtn.createGalleryBtn.should('not.be.visible')
    })

    afterEach(() => {
        cy.clearCookies()
    })
})