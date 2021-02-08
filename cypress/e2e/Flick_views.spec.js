
describe("login and create 2 users", () => {

    beforeEach(() => {
        cy.visit("/")
        cy.url().should("include", "/")
        cy.findByTestId('signup_button').should('be.visible').click()
        cy.visit("/signup")
        cy.url().should("include", "/signup")
        cy.fixture("user1.json").then((user) => {
            cy.findByTestId('username').type(user.username)
            cy.findByTestId('email_signup').type(user.email)
            cy.findByTestId('password_signup').type(user.password)
            cy.findByTestId('password_confirm').type(user.password)
            cy.findByTestId('register').should('be.visible').click()
        })
        cy.findByTestId('back').should('be.visible').click()
        cy.visit("/")
        cy.url().should("include", "/")
        
        cy.findByText("SIGN IN").should("have.text", "SIGN IN").click()
        cy.visit("/signin")
        cy.url().should("include", "/signin")
        cy.fixture("user1.json").then((user) => {
            cy.findByTestId('email_signin').type(user.email)
            cy.findByTestId('password_signin').type(user.password)
        })
        cy.findByTestId('login').should('be.visible').click()
        cy.visit("/dashboard")
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
    })
    it("Navigate to friendslist and view friends. Add 2 friends. Delete friend. View friends movies", () => {
        cy.findByText("Sign Out").should('be.visible').click()

        cy.findByTestId('signup_button').should('be.visible').click()
        cy.fixture("user2.json").then((user) => {
            cy.url().should("include", "/signup")
            cy.findByTestId('username').type(user.username)
            cy.findByTestId('email_signup').type(user.email)
            cy.findByTestId('password_signup').type(user.password)
            cy.findByTestId('password_confirm').type(user.password)
            cy.findByTestId('register').should('be.visible').click()
            cy.findByTestId('back').should('be.visible').click()
            cy.url().should("include", "/")
        })
        cy.findByTestId('signup_button').should('be.visible').click()
        cy.fixture("user3.json").then((user) => {
            cy.url().should("include", "/signup")
            cy.findByTestId('username').type(user.username)
            cy.findByTestId('email_signup').type(user.email)
            cy.findByTestId('password_signup').type(user.password)
            cy.findByTestId('password_confirm').type(user.password)
            cy.findByTestId('register').should('be.visible').click()
            cy.findByTestId('back').should('be.visible').click()
            cy.url().should("include", "/")
        })

        cy.findByText("SIGN IN").should("have.text", "SIGN IN").click()
        cy.url().should("include", "/signin")
        cy.fixture("user1.json").then((user) => {
            cy.findByTestId('email_signin').type(user.email)
        cy.findByTestId('password_signin').type(user.password)
        })
        cy.findByTestId('login').should('be.visible').click()
        cy.visit("/dashboard")
        cy.url().should("include", "/dashboard")

        cy.findByText("Friends").should('be.visible').click()
        cy.visit("/dashboard/friends")
        
        cy.fixture('user2.json').then((user) => {
            cy.findByTestId('addFriendField').should('be.visible').type(user.email)
            cy.findByTestId('addFriendButton').should('be.visible').click()
        })
        cy.fixture('user3.json').then((user) => {
            cy.findByTestId('addFriendField').should('be.visible').type(user.email)
            cy.findByTestId('addFriendButton').should('be.visible').click()
            cy.findByText("Amuro", "La La").should('be.visible')
        })
        cy.findAllByText("Delete").eq(0).should('contain', "Delete").click()
        cy.findByText("See their List!").should('contain', "See their List").click()
    })
    it("Navigate to profile page, change details, delete account", () => {
        cy.findByText("Profile").should('be.visible').click()
        cy.visit("/dashboard/profile")
        cy.fixture('user1.json').then((user) => {
            cy.findByTestId('profilename').type(user.newusername)
            cy.findByTestId('password').type(user.newpassword)
            cy.findByTestId('passwordconfirm').type(user.newpassword)
        })
        cy.findByTestId('savebtn').should('be.visible').click()
        cy.findByTestId('deletebtn').should('be.visible').click()
        cy.visit("/")
        cy.url().should('include', "/")
    })
})