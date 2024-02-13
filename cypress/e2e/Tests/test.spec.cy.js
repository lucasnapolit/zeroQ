describe("zeroQa testsuite",()=>{

    it("logearse en la pagina ",()=>{
        cy.visit("https://zeroq.cl/home")
        cy.contains("Iniciar sesión").click()
        cy.get("input[placeholder='Correo Electrónico']").type("lucasnapoliit@gmail.com")
        cy.get("input[placeholder='Contraseña']").type("Qwer1234")
        cy.get(".sc-jOrMOR.imKrLW").click()
        cy.get("input[placeholder='Busca un local...']").type("demo web qa")
        cy.wait(5000)
        cy.get(".sc-ePsPkC.iCiWYU").find("span").click()
        cy.get("div[title='Fila 3'").click()

    })

})
