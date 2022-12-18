class Logout {

    get logout () {
        return cy.get("a[role='button ']")
    }
    logoutBtn () {
        this.logout.click()
    }
}

export const logout = new Logout ()