class RegisterBtn {

    get registerBtn () {
        return cy.get("li:nth-of-type(2) > .nav-buttons.nav-link")
    }

    clickRegisterBtn () {
        this.registerBtn.click()
    }
}

export const registerBtn = new RegisterBtn ()