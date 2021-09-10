import { Selector, t } from "testcafe";

class ForgotPassPage {
    constructor() {
        this.forgotPassBtn = Selector ('a').withText('Forgot password?')
        this.forgotPassForm = Selector ('.col-sm-offset-2')
        this.forgotEmailIn = Selector ('#email')
        this.forgotProceed = Selector ('.btn-primary')
        this.forgotMsg = Selector ('.lead')
        this.forgotInputGr = Selector ('.input-group-lg')
    }
    async forgotPasswordForm () {
        await t.click(this.forgotPassBtn)
    }

    async forgotPass (email) {
        await t
               .typeText(this.forgotEmailIn, email, { paste: true, replace: true })
               .click(this.forgotProceed)
    }

    async forgotPassEmpty() {
        await t.click(this.forgotProceed)
    }
}

export default ForgotPassPage