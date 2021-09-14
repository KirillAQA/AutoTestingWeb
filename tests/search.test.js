import SearchPage from "../page-objects/pages/SearchPage";
import Footer from "../page-objects/components/Footer";
import { RequestLogger } from "testcafe";


const searchPage = new SearchPage()
const footer = new Footer()
const url = 'https://djinni.co/jobs/';
const logger = RequestLogger({ url, method: 'get' }, {
    logResponseHeaders: true,
    logResponseBody:    true
});

//prettier-ignore
fixture `Search test`
      .page `https://djinni.co/jobs/`
      .requestHooks(logger)
      .beforeEach ( async t => {
        footer.engLng()
        await t.expect(searchPage.searchTitle.innerText).contains('Jobs on Djinni')
        await t.expect(searchPage.searchCheckForm.exists).ok()
      })


test('User input  text request', async t => {

    searchPage.searchInput('Automation QA')
    await t.expect(searchPage.searchResultTitle.innerText).contains('Automation QA')
    await t.expect(logger.contains(r => r.response.statusCode === 200)).ok()
})

test('User use filter', async t => {

    searchPage.searchClick()
    await t.expect(searchPage.searchResultTitle.innerText).contains('QA')
    await t.expect(logger.contains(r => r.response.statusCode === 200)).ok()

})
// These 2 tests used on the mobile device or with mobile orientation browser
test.skip('Mobile user input text', async t => {
    searchPage.searchInputMob('Automation QA')
    await t.expect(searchPage.searchResultTitle.innerText).contains('Automation QA')

})

test.skip('Mobile user use filter', async t => {
    searchPage.searchMobile()
    await t.expect(searchPage.searchResultTitle.innerText).contains('QA')

})