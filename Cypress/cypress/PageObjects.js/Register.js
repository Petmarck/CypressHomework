class RegisterPage {

    get firstNameInput () {
        return cy.get('#first-name')
    }

    get lastNameInput () {
        return cy.get('#last-name')
    }

    get emailReg () {
        return cy.get('#email')
    }

    get password1 () {
        return cy.get('#password')
    }

    get password2 () {
        return cy.get('#password-confirmation')
    }

    get terms () {
        return cy.get('.form-check-input')
    }
    
     get submitBtn () {
        return cy.get('.btn.btn-custom')
    }

     register (firstName, lastName, email, password, confirmation) {
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailReg.type(email)
        this.password1.type(password)
        this.password2.type(confirmation)
     }
    }

export const registerPage = new RegisterPage ()