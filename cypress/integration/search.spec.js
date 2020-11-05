describe("Search functionality", () => {
  it("Displays results for a search", () => {
    cy.visit("www.google.com");
    cy.get("[aria-label='Buscar']").type("Max The Bull").type("{enter}");
    cy.get("[href='https://www.facebook.com/MaxTheBull/?ref=py_c']").should("exist");
  })
})