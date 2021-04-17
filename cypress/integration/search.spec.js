/// <reference types="cypress" />

describe("Search", () => {
  context("success flow", () => {
    it("it gets the first results", () => {
      cy.visit("/");
      cy.get("[data-cy=search]").type("doctors");
      cy.get("[data-cy=lucky]").click();
      cy.get("[data-cy=box]").should("contain.text", "doctors");
      cy.get("[data-cy=box]").should("have.length", 1);
    });

    it("it gets all the results", () => {
      cy.visit("/");
      cy.get("[data-cy=search]").type("doctors");
      cy.get("[data-cy=all]").click();
      cy.get("[data-cy=box]").should("contain.text", "doctors");
      cy.get("[data-cy=box]").should("have.length.above", 1);
    });
  });

  context("failed flow", () => {
    it("it gets 404 message error [lucky]", () => {
      cy.visit("/");
      cy.get("[data-cy=search]").type("dasdasdasdas");
      cy.get("[data-cy=lucky]").click();
      cy.get("[data-cy=404]").should("contain.text", "Joke not found");
    });

    it("it gets 404 message error [all]", () => {
      cy.visit("/");
      cy.get("[data-cy=search]").type("dasdasdasdas");
      cy.get("[data-cy=all]").click();
      cy.get("[data-cy=404]").should("contain.text", "Joke not found");
    });
  });
});
