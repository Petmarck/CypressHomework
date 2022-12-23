class MyGallery {

    get myGallery () {
       return cy.get(':nth-child(2) > .nav-link')
    }
    get galleryIdClick () {
        return cy.get(':nth-child(1) > h2 > .box-title')
    }

    goToMyGalleries () {
        this.myGallery
        this.galleryIdClick.click()
    }
}

export const myGallery = new MyGallery ()