import UrlParser from '../../../routes/url-parser'
import EqualiteachSource from '../../data/equaliteach-source'
import { detailPage } from '../../templates/template-creator'

const DetailTwi = {
  async render () {
    return `
        <div id="contentDetail"></div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const twi = await EqualiteachSource.detailTwiContent(url.id)
    const twiContainer = document.querySelector('#contentDetail')
    twiContainer.innerHTML = detailPage(twi)
  }
}

export default DetailTwi
