/// <reference types="cypress" />

import { login } from "../../PageObjects.js/Login";
import { logout } from "../../PageObjects.js/Logout"
import { loginPage } from "../../PageObjects.js/LoginPage"


describe('Logout', () => {

    it('Logout', () => { 
        cy.visit('/')
        loginPage.clickLoginPage()
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
        }).as('loginData');
        login.login('testiranje@test.com', '12345678' )
        cy.wait('@loginData').then((request) =>{
            expect(request.response.statusCode).to.eql(200)
            expect(request.response.body.expires_in).to.eql(3600)
            expect(request.response.body.token_type).to.eql("bearer")
        })
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/logout', (req) => {
        }).as('logoutData');
        logout.logoutBtn()
        cy.wait('@logoutData').then((request) => {
            expect(request.response.body).to.have.property('message')
        })
    })
})