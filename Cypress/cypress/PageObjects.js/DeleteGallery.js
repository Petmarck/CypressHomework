class DeleteGallery {

    get deleteGallery () {
        return cy.get(':nth-child(5) > button.btn') 
    }

    clickDeleteBtn () {
        this.deleteGallery.click()
    }
}

export const deletegallery = new DeleteGallery ()