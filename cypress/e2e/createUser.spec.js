describe("Create a new User", () => {
    it("should have url /, h1 with the text FLICK and buttons with SIGN UP and SIGN IN", () => {
        cy.visit("/")
        cy.url().should("include", "/")
        cy.get("h1").should("have.text", "FLICK")
        cy.findByText("SIGN UP")
            .should("have.text", "SIGN UP")
            .click()
        cy.url().should("include", "/signup")
    })
})