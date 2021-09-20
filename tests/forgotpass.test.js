import Navbar from '../page-objects/components/Navbar'
import Footer from '../page-objects/components/Footer'
import ForgotPassPage from '../page-objects/pages/ForgotPassPage'

const navbar = new Navbar()
const footer = new Footer()
const forgotPassPage = new ForgotPassPage()

//prettier-ignore
fixture `Forgot Password Test`
        .page `https://djinni.co/`
        .beforeEach(async t => {
            footer.engLng()
            navbar.logTip()
            forgotPassPage.forgotPasswordForm()
            await t.expect(forgotPassPage.forgotPassForm.exists).ok()
        })

test.skip('Use leave empty field', async t => {
    
    forgotPassPage.forgotPassEmpty()
    await t.expect(forgotPassPage.forgotPassForm.exists).ok()
    await t.expect(forgotPassPage.forgotInputGr.exists).ok()
   
})

test.skip('User use correct email', async t => {
    
    forgotPassPage.forgotPass('user@email.com')
    await t.expect(forgotPassPage.forgotMsg.innerText).contains('We send you a link to reset your password to')
    await t.expect(forgotPassPage.forgotInputGr.exists).notOk()

})