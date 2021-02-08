import { userBuilder } from "../support/generate";

describe("login without using UI", () => {
    const user = userBuilder()
    
    beforeEach(() => {
        cy.visit("/")
        cy.url().should("include", "/")
        cy.findByText("SIGN IN").should("have.text", "SIGN IN").click()
        cy.url().should("include", "/signin")
        cy.fixture("user1.json").then((user) => {
            cy.findByTestId('email_signin').type(user.email)
        cy.findByTestId('password_signin').type(user.password)
        })
        cy.findByTestId('login').should('be.visible').click()
        cy.url().should("include", "/dashboard")
    })
    it("Navigate to flick and select movies", () => {
        cy.findByText("Flick").should('be.visible').click()
        cy.visit("/dashboard/flick")
        cy.findByTestId('yes').should('be.visible').click().click()
        cy.findByTestId('no').should('be.visible').click().click()
        
    })
    it("Navigate to watchlist and view movies. Delete 2", () => {
        cy.findByText("Movie list").should('be.visible').click()
        cy.visit("/dashboard/movielist")
        cy.findAllByText("Delete").eq(0).should('contain', "Delete").click()
        cy.findAllByText("Delete").eq(3).should('contain', "Delete").click()
    })
    it("Navigate to friendslist and view friends. Add 2 friends. Delete friend. View friends movies", () => {
        cy.findByText("Friends").should('be.visible').click()
        cy.visit("/dashboard/friends")
        cy.findByTestId('addFriend').should('be.visible')
        
    })

})