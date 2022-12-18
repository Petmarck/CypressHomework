/// <reference types="cypress" />
import { createGallery } from "../../PageObjects.js/CreateGallery";
import { loginPage } from "../../PageObjects.js/LoginPage";
import { login } from "../../PageObjects.js/Login";
import { goToCreateGalleryBtn } from "../../PageObjects.js/CreateGalleryPage";
import { logout } from "../../PageObjects.js/Logout";
const { faker } = require('@faker-js/faker')

describe ('Create Gallery', () => {
    beforeEach(() => {
    cy.visit('/')
    loginPage.clickLoginPage()
    cy.url().should('include','/login')
    logout.logout.should('not.exist')
    })

    it ('Login with valid credentials', () => {
        login.emailInputLog.type('testiranje@test.com')
        login.passwordInputLog.type('12345678')
        login.submitBtnLog.click()

    })

    it ('Create new gallery', () => {
        login.emailInputLog.type('testiranje@test.com')
        login.passwordInputLog.type('12345678')
        login.submitBtnLog.click()
        goToCreateGalleryBtn.clickCreateGalleryBtn()
        createGallery.titleInput.type(faker.random.word())
        createGallery.descriptionInput.type(faker.random.words())
        createGallery.imageUrl.type('https://www.w3schools.com/html/workplace.jpg')
        createGallery.submitCreate.click()

        createGallery.cancelBtn.should('be.visible')
        .and('have.text', 'Cancel')
        .and('have.css', 'background-color','rgb(72, 73, 75)')
        cy.url().should('include','/create')
        cy.get('.title-style').should('have.text', 'Create Gallery')
        createGallery.titleInput.should('have.css', 'border-radius', '20px')
        .and('have.css','background-color', 'rgb(255, 255, 255)')
        .and('be.visible')
        cy.wait(5000)
        
        
    })
})