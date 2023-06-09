import UrlParser from '../../../routes/url-parser'
import EqualiteachSource from '../../data/equaliteach-source'
import { detailPage } from '../../templates/template-creator'

const DetailGec = {
  async render () {
    return `
        <div id="contentDetail"></div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const gec = await EqualiteachSource.detailGecContent(url.id)
    const gecContainer = document.querySelector('#contentDetail')
    gecContainer.innerHTML = detailPage(gec)
  }
}

export default DetailGec
