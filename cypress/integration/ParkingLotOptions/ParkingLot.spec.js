import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";


Given (/^That I go to the Site$/,  () => {
    
    cy.visit('https://www.shino.de/parkcalc/index.php')
    
    
})

When (/^I select all carpark options$/, () =>{

    cy.get('table > tbody > tr > .BodyCopy > #ParkingLot').focus()
  
})


Then (/^All options should be available$/, ()=>{
    cy.get('table > tbody > tr > .BodyCopy > #ParkingLot').focus()
    .select('Short-Term Parking')
    cy.screenshot()
    cy.get('table > tbody > tr > .BodyCopy > #ParkingLot').focus()
      .select('Valet Parking')
      cy.screenshot()
    cy.get('table > tbody > tr > .BodyCopy > #ParkingLot').focus()
      .select('Economy Parking')
      cy.screenshot()
      cy.get('table > tbody > tr > .BodyCopy > #ParkingLot').focus()
      .select('Long-Term Garage Parking')
      cy.screenshot()
      cy.get('table > tbody > tr > .BodyCopy > #ParkingLot').focus()
      .select('Long-Term Surface Parking')
      cy.screenshot()

})



        //  Given That I go to the Site
        //  When I select all carpark options
        //  Then All options should be available