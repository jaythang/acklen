import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

  Given(/^I visit carpark calc and select Short Term Parking$/, () => {
    cy.viewport(1536, 758)
    cy.visit('https://www.shino.de/parkcalc/index.php')
    cy.get('table > tbody > tr > .BodyCopy > #ParkingLot').focus()
      .select('Short')
  })