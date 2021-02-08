
import { userBuilder } from "../support/generate";

describe("Sign up and Sign in forms", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.url().should("include", "/")
    })

    const user = userBuilder()
    it("Should see Sign up Button and navigate to Sign up form then Sing up", () => {
        
        cy.findByTestId('signup_button').should('be.visible').click()
        cy.url().should("include", "/signup")
        cy.findByTestId('username').type(user.username)
        cy.findByTestId('email_signup').type(user.email_signup)
        cy.findByTestId('password_signup').type(user.password_signup)
        cy.findByTestId('password_confirm').type(user.password_signup)
        cy.findByTestId('register').should('be.visible').click()
        cy.findByTestId('useFlick').should('be.visible').click()
        cy.url().should("include", "/dashboard")
    })

    it("Should see Sign in Button and navigate to Sign in form then Sign in", () => {
        cy.findByText("SIGN IN").should("have.text", "SIGN IN").click()
        cy.url().should("include", "/signin")
        cy.findByTestId('email_signin').type(user.email_signup)
        cy.findByTestId('password_signin').type(user.password_signup)
        cy.findByTestId('login').should('be.visible').click()
        cy.url().should("include", "/dashboard")
    })
})