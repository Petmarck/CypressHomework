class LoginPage {

    get loginPage () {
        return cy.get('.ml-auto.mt-2.mt-lg-0.navbar-nav > li:nth-of-type(1) > .nav-buttons.nav-link')
    }

    clickLoginPage () {
        this.loginPage.click()
    }
}

export const loginPage = new LoginPage ()