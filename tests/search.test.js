import SearchPage from "../page-objects/pages/SearchPage";
import Footer from "../page-objects/components/Footer";
import { Selector } from "testcafe";

const searchPage = new SearchPage()
const footer = new Footer()

//prettier-ignore
fixture `Search test`
      .page `https://djinni.co/jobs/`
      .beforeEach ( async t => {
        footer.engLng()
        await t.expect(searchPage.searchTitle.innerText).contains('Jobs on Djinni')
        await t.expect(searchPage.searchCheckForm.exists).ok()
      })


test('User input  text request', async t => {

    searchPage.searchInput('Automation QA')
    await t.expect(searchPage.searchResultTitle.innerText).contains('Automation QA')
})

test ('User use filter', async t => {

    searchPage.searchClick()
    await t.expect(searchPage.searchResultTitle.innerText).contains('QA')

})