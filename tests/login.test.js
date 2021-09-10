import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import Footer from '../page-objects/components/Footer'
import Google from '../page-objects/components/Google'

const navbar = new Navbar()
const loginPage = new LoginPage()
const footer = new Footer()
const google = new Google()

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

test ('User login with google account', async t => {
    
    google.googleSoc('kirillaqa89@gmail.com', '123456789Qwe')

    await t.expect(loginPage.logInMsg.innerText).contains('Welcome to Djinni!')
    await t.expect(loginPage.logWrapper.exists).notOk()

    footer.logOut()
})