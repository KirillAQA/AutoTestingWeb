import { Selector, t } from "testcafe";

class Footer {
    constructor () {
        this.ukrBtn = Selector ('a').withText('Українська')
        this.ruBtn = Selector ('a').withText('Русский')
        this.engBtn = Selector('a').withText('English')
        this.logoutBtn = Selector ('a').withText('Logout')
    }

    async engLng () {
        await t.click (this.engBtn)
    }

    async logOut() {
        await t.click (this.logoutBtn)
    }

}

export default Footer