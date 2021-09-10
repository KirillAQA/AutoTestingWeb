import { Selector, t } from "testcafe";

class SearchPage {
    constructor () {
        this.searchTitle = Selector ('.page-header')
        this.searchResultTitle = Selector('h1')
        this.searchCheckForm = Selector ('.js-jobs-filter-wrapper')
        this.searchField = Selector ('#all-keywords')
        this.searchBtn = Selector ('#search-submit')
        this.searchJobsTitle = Selector ('a').withExactText('QA Automation')
        this.searchExp = Selector ('a').withExactText('No experience')
        this.searchSalary = Selector ('a').withExactText('$2500')
        this.searchCompType = Selector ('a').withExactText('Product')
        this.searchRemote = Selector ('a').withExactText('Full Remote')
        this.searchEditorial = Selector ('a').withExactText('Relocate')
        
    }
    async searchInput (text) {
        await t.typeText(this.searchField, text, { paste: true, replace: true })
               .click(this.searchBtn)
    }

    async searchClick () {
        await t.click(this.searchJobsTitle)
               .click(this.searchExp)
               .click(this.searchSalary)
               .click(this.searchCompType)
               .click(this.searchRemote)
               .click(this.searchEditorial)
    }
}

export default SearchPage