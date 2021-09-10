import { Selector, t } from "testcafe";

class LoginPage {
    constructor () {
        this.logWrapper = Selector ('.loginpage-wrapper')
        this.logInput = Selector ('input').withAttribute('type','email')
        this.passInput = Selector ('#password')
        this.logInBtn = Selector ('.btn-lg')
        this.errMsg = Selector ('.text-danger')
        this.errorEmailMsg = Selector ('#p_empty_email')
        this.errorPassMsg = Selector('#p_empty_password')
        this.logInMsg = Selector('.lead')
    }
    async logInSys (email, password) {
        await t.typeText (this.logInput, email, { paste: true, replace: true })
               .typeText (this.passInput, password, { paste: true, replace: true})
               .click (this.logInBtn)
        
    }
    async logEmpty(){
        await t.click(this.logInBtn)
    }
    
}

export default LoginPage