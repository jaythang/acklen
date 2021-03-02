 import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
 

  Given(/^that I selected Short Term Parking$/, () => {
    cy.viewport(1536, 758)
    cy.visit('https://www.shino.de/parkcalc/index.php')
    cy.get('table > tbody > tr > .BodyCopy > #ParkingLot').focus()
      .select('Short')
  })

  When (/^I select Correct Date and Time$/,() => {
    cy.get('tr:nth-child(2)').click();
    cy.get('#StartingDate').clear()
    cy.get('#StartingDate').type('06/25/2021');
    cy.get('tr:nth-child(2) > .BodyCopy:nth-child(2)').click();
    cy.get('#StartingTime').clear()
    cy.get('#StartingTime').type('5:00');

  })
 
  When (/^I select Correct Leave date and time$/,() => {
    cy.get('tr:nth-child(3)').click();
    cy.get('#LeavingDate').clear()
    cy.get('#LeavingDate').type('06/25/2022');
    cy.get('tr:nth-child(3) > .BodyCopy:nth-child(2)').click();
    cy.get('#LeavingTime').clear()
    cy.get('#LeavingTime').type('6:00');
    cy.get('tr:nth-child(3) input:nth-child(5)').click();

  })

  Then(/^it should provide me computation$/,() =>{
    cy.get('form').submit();
    cy.get('.SubHead > b')
    cy.contains('$')
    cy.screenshot()


  })





// #   Given that I selected Short Term Parking
// #    When I select Correct Date and Time
// #    When I select Correct Leave date and time
// #    Then it should provide me computation