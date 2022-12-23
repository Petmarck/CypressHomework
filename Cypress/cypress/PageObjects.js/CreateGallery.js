class CreateGallery {

    get titleInput () {
        return cy.get('#title')
    }

    get descriptionInput () {
        return cy.get('#description')
    }

    get imageUrl () {
        return cy.get('.input-group.mb-3 > .form-control')
    }

    get submitCreate () {
        return cy.get('form > button:nth-of-type(1)')
    }

    get cancelBtn () {
        return cy.get('form > :nth-child(5)')
    }

    CreateGalleryInput (title, description, url) {
        this.titleInput.type(title)
        this.descriptionInput.type(description)
        this.imageUrl.type(url)
        this.submitCreate.click()
    }
}

export const createGallery = new CreateGallery ()