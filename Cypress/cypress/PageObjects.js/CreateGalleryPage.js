class CreateGalleryBtn {

    get createGalleryBtn () {
        return cy.get('.mr-auto > :nth-child(3) > .nav-link')
    }

    clickCreateGalleryBtn () {
        this.createGalleryBtn.click()
    }
}

export const goToCreateGalleryBtn = new CreateGalleryBtn ()