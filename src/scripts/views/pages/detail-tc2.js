import UrlParser from '../../../routes/url-parser'
import EqualiteachSource from '../../data/equaliteach-source'
import { detailPage } from '../../templates/template-creator'

const DetailTc = {
  async render () {
    return `
        <div id="contentDetail"></div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const tc2 = await EqualiteachSource.detailTcContent(url.id)
    const tc2Container = document.querySelector('#contentDetail')
    tc2Container.innerHTML = detailPage(tc2)
  }
}

export default DetailTc
