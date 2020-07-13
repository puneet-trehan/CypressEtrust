describe('Etrust Test', function () {
    it('E-Trust Shop Title Verification',  () => {
        cy.visit('https://qa.trustedshops.com/buyerrating/info_X1C77CF6EE730D2E88A284D7203D1B20F.html/')
        
        cy.title().should('include', 'zalando.de Bewertungen & Erfahrungen | Trusted Shops')


    })

    it('Grade Review',  () => {
        cy.visit('https://qa.trustedshops.de/shops/?cat=bekleidung')
        cy.wait(2000)

        cy.get('.results-list').find('.shop-details').each(($element, index, $list) => {
            if($element.find('.shop-mark')[0].innerText == '0.00'){
                cy.log("Grade equal to zero :" + $element.find('.shop-name')[0].innerText + "," + $element.find('.shop-mark')[0].innerText)
            }else{
                cy.log("Grade greater than zero :" + $element.find('.shop-name')[0].innerText + "," + $element.find('.shop-mark')[0].innerText)
            }
        })        
    })
    

   it('Has moreReview grade',  () => {
        cy.visit('https://qa.trustedshops.de/shops/?cat=bekleidung')
        cy.wait(2000)       
        let i = 0
        while(i < 3){
            i = i+1 
            cy.log(i)           
            cy.get('.pagination-next').then(($nextPaginationLink) => {    
                cy.wait(2000)
                cy.get('.results-list').find('.shop-details').each(($element, index, $list) => {
                    if($element.find('.shop-mark')[0].innerText == '0.00'){
                        cy.log("Grade equal to zero :" + $element.find('.shop-name')[0].innerText + "," + $element.find('.shop-mark')[0].innerText)
                    }else{
                        cy.log("Grade greater than zero :" + $element.find('.shop-name')[0].innerText + "," + $element.find('.shop-mark')[0].innerText)
                    }
                })            
                
            }) 
       }
        
        
    })

})
