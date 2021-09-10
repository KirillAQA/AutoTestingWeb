import { Selector, t } from 'testcafe'

class Navbar {
    constructor () {
        this.djinniBtn = Selector ('.navbar-brand')
        this.logBtn = Selector ('a').withText('Log In')
        this.regBtn = Selector('a').withText('Sign Up')
    }

    async djinniTip () {
        await t.click(this.djinniBtn)
    }
    async logTip () {
        await t.click(this.logBtn)
    }
    async regTip () {
        await t.click(this.regBtn)
    }

}

export default Navbar