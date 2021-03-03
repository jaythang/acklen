import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
before (function (){

  cy.log ('Before')
} )
after (function (){

  cy.log ('After')
} )
  Given(/^I visit carpark calc and select Short Term Parking$/, () => {
    cy.viewport(1536, 758)
    cy.visit('https://www.shino.de/parkcalc/index.php')
    cy.get('table > tbody > tr > .BodyCopy > #ParkingLot').focus()
      .select('Short')
  })

  When(/^I input Entry Date$/, () =>{
    cy.get('tr:nth-child(2)').click();
    cy.get('#StartingDate').clear()
    cy.get('#StartingDate').type('06/25/2021');
    cy.get('tr:nth-child(2) > .BodyCopy:nth-child(2)').click();
    cy.get('#StartingTime').clear()
    cy.get('#StartingTime').type('5:00');

  
  })

  When(/^I input invalid Leaving Date$/, () =>{
    cy.get('tr:nth-child(3)').click();
    cy.get('#LeavingDate').clear()
    cy.get('#LeavingDate').type('06/25/2020');
    cy.get('tr:nth-child(3) > .BodyCopy:nth-child(2)').click();
    cy.get('#LeavingTime').clear()
    cy.get('#LeavingTime').type('18:00');
    cy.get('tr:nth-child(3) input:nth-child(5)').click();

  })

  When(/^I should receive an error$/, () =>{
    cy.get('form').submit()
    cy.get('td.SubHead')
    .contains('ERROR!') 
    cy.screenshot()
  })