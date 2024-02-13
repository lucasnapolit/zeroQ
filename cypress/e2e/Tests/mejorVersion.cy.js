import { genericPOM } from "../../POM/loginPage"
const rActions = new genericPOM()
import loginData from "..//..//fixtures//loginData.json"

describe("zeroQa testsuite",()=>{

    it("logearse en la pagina y hacer una busqueda ",()=>{
        rActions.visitUrl(loginData.url)
        rActions.irAlogin()
        rActions.insertEmail(loginData.userEmail)
        rActions.emailValidation()
        rActions.insertPassowrd(loginData.password)
        rActions.passwordValidation()
        rActions.submitValidation()
        rActions.submit()
        rActions.hacerBusqueda(loginData.elemento)
        rActions.seleccionarFila()
        

    })

})
