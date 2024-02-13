export class genericPOM{
    
    webElements={
        
        userEmail:"input[placeholder='Correo Electrónico']",
        password:"input[placeholder='Contraseña']",
        submit:".sc-jOrMOR.imKrLW",
        searchBar:"input[placeholder='Busca un local...']",
        fila3:"div[title='Fila 3'"

        
        

    }
    visitUrl(url){
        cy.visit(url)
    }
    urlValidation(){
        cy.url().should("have.text","https://zeroq.cl/home")
    }
    irAlogin(){
        cy.contains("Iniciar sesión").click()
    }
    insertEmail(email){
        cy.get(this.webElements.userEmail).type(email)
    }
    insertPassowrd(password){
        cy.get(this.webElements.password).type(password)
    }
    submit(){
        cy.get(this.webElements.submit).click()
    }
    emailValidation(){
        cy.get(this.webElements.userEmail).should("be.visible")
    }
    passwordValidation(){
        cy.get(this.webElements.password).should("be.visible")
    }
    submitValidation(){
        cy.get(this.webElements.submit).should("be.visible").should("have.text","Iniciar Sesión")
    }
    hacerBusqueda(elemento){
        cy.get(this.webElements.searchBar).type(elemento)
        cy.wait(5000)//en caso de que la pagina ande lento 
        //seleccionando el elemento pedido
        cy.get(".sc-ePsPkC.iCiWYU").find("span").click()
    }
    seleccionarFila(){
        cy.get(this.webElements.fila3).click()
    }

}