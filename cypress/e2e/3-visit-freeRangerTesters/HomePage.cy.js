describe("Home Page Tests", () => {
  beforeEach(() => {
    // Visit the FreeRangeTesters website before each test
    cy.visit("https://www.freerangetesters.com/");
  });

  it("should have the correct title", () => {
    cy.title().should("include", "Free Range Testers");
  });

  it("should have text Recursos", () => {
    cy.contains("Recursos");
  });


  it("Should have 11 courses with the button `Ver Producto`", () => {
    cy.get('[data-testid="header-container"] > .sc-cOTGOU > .sc-cSaEAk > :nth-child(1) > .sc-hORkcV').click()
    cy.get('.sc-loYsQo > .sc-fEOKFM > :nth-child(3) > .sc-dJkDXt').should('have.length',11)
   


  })
  
});
