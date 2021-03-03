import { describe } from "mocha";

describe('report', function (){

    before (function (){

        cy.log ('Before')
    } )

    beforeEach (function (){

        cy.log ('Before')
    } )

    afterEach (function (){

        cy.log ('After Each')
    } )

    after (function (){

        cy.log ('After')
    } )

} )