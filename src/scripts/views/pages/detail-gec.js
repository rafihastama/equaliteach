import UrlParser from '../../../routes/url-parser'
import EqualiteachSource from '../../data/equaliteach-source'

const DetailGec = {
  async render () {
    return `
        <h2>Detail Page</h2>
        <div id="contentDetail"></div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const content = await EqualiteachSource.detailGecContent(url.id)
    console.log(content)
  }
}

export default DetailGec
