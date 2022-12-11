describe ('Register testing', () => {
    it('Visit Gallery', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })

    it('Go to Register', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
    })

    it('Register', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type('Petar')
        cy.get('#last-name').type('Markovic')
        cy.get('#email').type('test@homework1.com')
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').type('12345678')
        cy.get('.form-check-input').click()
        cy.get('.btn').click()
    })
})