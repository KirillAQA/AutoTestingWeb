import { Selector, t } from "testcafe";

class Google {
    constructor() {
        this.logSocial = Selector ('.icon-social-login__google')
        this.logSocAcc = Selector ('#identifierId')
        this.logSocPass = Selector ('input').withAttribute('type', 'password')
        this.logSocBtn = Selector ('.VfPpkd-RLmnJb')
        
    }
    async googleSoc (email, password) {
        await t.click(this.logSocial)
               .typeText(this.logSocAcc, email, { paste : true, replace: true})
               .click(this.logSocBtn)
               .typeText(this.logSocPass, password, { paste : true, replace: true})
               .click(this.logSocBtn)
               

    }

}

export default Google