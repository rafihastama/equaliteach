import UrlParser from '../../../routes/url-parser'
import EqualiteachSource from '../../data/equaliteach-source'
import { detailPage } from '../../templates/template-creator'

const DetailTc = {
  async render () {
    return `
        <h2>Detail Page</h2>
        <div id="contentDetail"></div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const tc1 = await EqualiteachSource.detailTcContent(url.id)
    const tc1Container = document.querySelector('#contentDetail')
    tc1Container.innerHTML = detailPage(tc1)
  }
}

export default DetailTc
