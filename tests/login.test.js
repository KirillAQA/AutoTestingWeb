import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import Footer from '../page-objects/components/Footer'
import Google from '../page-objects/components/Google'
import { Role } from 'testcafe'

const navbar = new Navbar()
const loginPage = new LoginPage()
const footer = new Footer()
const google = new Google()
const gitAccUser = Role ('https://djinni.co/login?from=frontpage_main', async t => {
    await t.click('.icon-social-login__github')
           .typeText('#login_field', 'kirillaqa89@gmail.com')
           .typeText('#password', 'ewQ987456321')
           .click('.js-sign-in-button')
})


//prettier-ignore
fixture `Login Test`
      .page `https://djinni.co/`
      .beforeEach(async t => {
        footer.engLng()
        navbar.logTip()
        await t.expect(loginPage.logWrapper.exists).ok()
      })

test('User use invalid data', async t => {

    loginPage.logInSys ('invalid@ma.il', 'invalidpass')
    await t.expect(loginPage.errMsg.innerText).contains('User with this email does not exist.')
})

test('User use empty fields', async t => {

    loginPage.logEmpty()
    await t.expect(loginPage.errorEmailMsg.innerText).contains('Please fill this field.')
    await t.expect(loginPage.errorPassMsg.innerText).contains('Please fill this field.')

})

test('User use correct data', async t => {

    loginPage.logInSys('kirillaqa89@gmail.com', '123456789Qwe')
    await t.expect(loginPage.logInMsg.innerText).contains('Welcome to Djinni!')
    await t.expect(loginPage.logWrapper.exists).notOk()

    footer.logOut()
})

test('User login with google account', async t => {
    
    google.googleSoc('kirillaqa89@gmail.com', '123456789Qwe')

    await t.expect(loginPage.logInMsg.innerText).contains('Welcome to Djinni!')
    await t.expect(loginPage.logWrapper.exists).notOk()

    footer.logOut()
})

test ('User login with git account', async t => {
    
    await t.useRole(gitAccUser)

    await t.expect(loginPage.logInMsg.innerText).contains('Welcome to Djinni!')
    await t.expect(loginPage.logWrapper.exists).notOk()

    footer.logOut()
})