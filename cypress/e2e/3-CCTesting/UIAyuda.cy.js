/// <reference types="cypress" />


describe('Pruebas sobre UI en the-internet.herokuapp', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    // it('ejemplo de esperas', () => {
    //     cy.wait(10000);
    //     cy.contains("Challenging DOM").click();
    // })

    // it('Nueva Pestaña', () => {
    //     cy.contains("Multiple Windows").click()
    //    cy.contains("Click Here").invoke("removeAttr", "target").click();
    //    cy.contains("New Window").should("have.text", "New Window")
    // })

    // it('Shadow DOM', () => {
    //     cy.contains("Shadow DOM").click();
    //     cy.get("ul > :nth-child(2)").should('have.text','In a list!')
    // })

    // it('Primer y ultimo elemento', () => {
    //     cy.contains("Dynamic Content").click();
    //     // cy.get('img').first().should('be.visible')
    //     // cy.get('img').last().should('be.visible')
    //     cy.get('img').eq(2).should('be.visible')
    // })

    // it('Padres e Hijos', () => {
    //     cy.contains("Dynamic Content").click();
    //    cy.get(":nth-child(4) > .large-2 > img").parent();
    //    cy.get(".example > :nth-child(7)").children();
    // })

    // it('Invoke', () => {
    //     cy.contains("Dynamic Content").should('be.hidden').invoke('show').should('be.visible')
       
    // })

    // it("Ejemplo de click", () => {
    //     cy.contains("Add/Remove Elements").click();
    //     cy.get('button').click();
    //     cy.contains("Delete").click()
    // })

    // it("Ejemplo de escritura", () => {
    //     cy.contains("Form Authentication").click();
    //     cy.get('#username').type('tomsmith');
    //     cy.get('#password').type('SuperSecretPassword!');
    //     cy.get('.fa').click()
    //     cy.contains("Logout").click()
    // })


    // it("Ejemplo de checkboxes", () => {
    //     cy.contains("Checkboxes").click();
    //     cy.get('#checkboxes > :nth-child(1)').check()
    //     cy.get('#checkboxes > :nth-child(3)').uncheck()
    // })

      it("Ejemplo de Dropdown", () => {
        cy.contains("Dropdown").click();
        cy.get('#dropdown').select('Option 2')
    })







})