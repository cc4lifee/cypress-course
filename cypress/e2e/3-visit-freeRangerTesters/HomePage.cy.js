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
    cy.get(
      '[data-testid="header-container"] > .sc-cOTGOU > .sc-cSaEAk > :nth-child(1) > .sc-hORkcV'
    ).click();
    cy.get(".sc-loYsQo > .sc-fEOKFM > :nth-child(3) > .sc-dJkDXt").should(
      "have.length",
      11
    );
  });

  it("Campo Nombre en formulario, posee clase: sc-jdabBK jjJSyU", () => {
    cy.get("#email-form-name").should("have.class", "sc-jdabBK jjJSyU");
  });

  it("Hay un texto llamado Blog en la barra de navegacion", () => {
    cy.get(
      '[data-testid="header-container"] > .sc-cOTGOU > .sc-cSaEAk > :nth-child(3) > .sc-hORkcV'
    ).should("have.text", "Blog");
  });

  it("Existe un boton de Escuchalo en Spotify", () => {
    cy.get(
      '#page_section_73468050 > [data-react-component="creator_ui/section_adapters/Grid"] > .sc-dVBluf > [data-testid="container"] > [data-testid="grid"] > [data-testid="grid-item"] > .sc-gOUBbZ > .sc-loYsQo > .sc-fEOKFM > .sc-fXqexe > .sc-fcddXt > .sc-ienWRC > .sc-dJkDXt'
    ).should("have.text", "Escuchalo en Spotify");
  });
});
