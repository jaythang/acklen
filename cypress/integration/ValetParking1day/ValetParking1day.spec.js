import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

    Given (/^That I go to the Site$/, () => {

        cy.viewport(1536, 758)
        cy.visit('https://www.shino.de/parkcalc/index.php')
        cy.get('table > tbody > tr > .BodyCopy > #ParkingLot').focus()
        .select('Valet Parking')
    })

    When(/^I select Valet Parking and select 1 day$/, () =>{
        cy.get('tr:nth-child(2)').click();
        cy.get('#StartingDate').clear()
        cy.get('#StartingDate').type('06/25/2021');
        cy.get('tr:nth-child(2) > .BodyCopy:nth-child(2)').click();
        cy.get('#StartingTime').clear()
        cy.get('#StartingTime').type('5:00');
        cy.get('tr:nth-child(3)').click();
        cy.get('#LeavingDate').clear()
        cy.get('#LeavingDate').type('06/26/2021');
        cy.get('tr:nth-child(3) > .BodyCopy:nth-child(2)').click();
        cy.get('#LeavingTime').clear()
        cy.get('#LeavingTime').type('5:00');
        
        
         } )
    
    Then(/^computation should be correct$/, () =>{
        cy.get('form').submit();
        cy.get('.SubHead > b')
        cy.contains('$ ')
        cy.screenshot()
            
        })



    // Given That I go to the Site
    //       When I select Valet Parking and select 1 day
    //       Then computation should be correct



    // Given(^/ text $/,() =>{


    // } )

    // Then(^/ text $/,() =>{

        
    // } )

    
    // When(^/ text $/,() =>{

        
    // } )