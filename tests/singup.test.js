import Navbar from "../page-objects/components/Navbar";
import Footer from "../page-objects/components/Footer";
import SingUpPage from "../page-objects/pages/SingUpPage";

const navbar = new Navbar()
const footer = new Footer()
const singUpPage = new SingUpPage()

//prettier-ignore
fixture `Sing Up Test`
        .page `https://djinni.co/`
        .beforeEach (async t => {
            footer.engLng()
            navbar.regTip()
            await t.expect(singUpPage.singUpForm.exists).ok()
        })

test('User use empty fields', async t => {
    
    singUpPage.singUpEmpty()
    await t.expect(singUpPage.singEmErr.innerText).contains('Please fill this field.')
    await t.expect(singUpPage.singPassErr.innerText).contains('Please fill this field.')
})

test('User can sing up', async t => {

    //insert your random email for success test
    singUpPage.singUp('password') 
    await t.expect(singUpPage.singUpMsg.innerText).contains('Djinni sent you an e-mail to')
    await t.expect(singUpPage.singUpForm.exists).notOk()

    footer.logOut()
})