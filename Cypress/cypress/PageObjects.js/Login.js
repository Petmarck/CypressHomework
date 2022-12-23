class Login {

    get emailInputLog () {
        return cy.get('#email')
    }

    get passwordInputLog () {
        return cy.get('#password')
    }

    get submitBtnLog () {
        return cy.get('.btn.btn-custom')
    }

    login (email, password) {
        this.emailInputLog.type(email)
        this.passwordInputLog.type(password)
        this.submitBtnLog.click()
    }
}

export const login = new Login ()