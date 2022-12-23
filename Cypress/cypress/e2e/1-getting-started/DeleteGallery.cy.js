/// <reference types="cypress" />

import { login } from "../../PageObjects.js/Login"
import { loginPage } from "../../PageObjects.js/LoginPage"
import { createGallery } from "../../PageObjects.js/CreateGallery"
import { goToCreateGalleryBtn } from "../../PageObjects.js/CreateGalleryPage"
import { deletegallery } from "../../PageObjects.js/DeleteGallery"
import { myGallery } from "../../PageObjects.js/MyGallery"
const { faker } = require ("@faker-js/faker")


describe('Delete gallery test', () => {
    beforeEach('Visit page', () => {
        cy.visit('/')
        loginPage.clickLoginPage()
        login.login('testiranje@test.com', '12345678')
    })
    let galleryId = null;

    it('Login and create gallery', () => {
        goToCreateGalleryBtn.clickCreateGalleryBtn()
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) =>{
        }).as('createGallery')
        createGallery.CreateGalleryInput(faker.random.word(), faker.random.word(), 'https://www.w3schools.com/html/workplace.jpg' )
        cy.wait('@createGallery').then((request) => {
        expect(request.response.statusCode).to.eql(201);
        galleryId = request.response.body.id;
        //cy.visit(`https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`);
        })
    })

    it('Delete gallery', () => {
        myGallery.goToMyGalleries()
        deletegallery.deleteGallery.should('be.visible')
        deletegallery.clickDeleteBtn()
    })

})