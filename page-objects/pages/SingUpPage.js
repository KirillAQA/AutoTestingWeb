import { Selector, t } from "testcafe";
import faker from 'faker'

const validEmail = faker.internet.email();
class SingUpPage {
    constructor () {
        this.singUpForm = Selector ('.loginpage-wrapper')
        this.emailIn = Selector ('#email')
        this.passIn = Selector ('#password')
        this.checkBtn = Selector ('input').withAttribute('value', 'candidate')
        this.singUpBtn = Selector ('.btn-lg')
        this.singUpMsg = Selector ('.lead')
        this.singEmErr = Selector ('#p_empty_email')
        this.singPassErr = Selector ('#p_empty_password')

    }
    async singUp(password) {
        await t.typeText(this.emailIn, validEmail, { paste: true, replace: true })
               .typeText(this.passIn, password, { paste: true })
               .click(this.checkBtn)
               .click(this.singUpBtn)
    }
    async singUpEmpty () {
        await t.click(this.singUpBtn)
    }
}

export default SingUpPage