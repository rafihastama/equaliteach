import EqualiteachSource from '../../data/equaliteach-source'
import { tokohWanitaIndonesiaContent } from '../../templates/template-creator'

const TokohWanitaIndonesia = {
  async render () {
    return `
          <div>
            <div class="gender-equality-item-container">
            <h1>Tokoh Wanita Indonesia</h1>
            </div>
            <div id="twiContentContainer"></div>
          </div>
        `
  },

  async afterRender () {
    const contents = await EqualiteachSource.contentTwi()
    const twiContainer = document.querySelector('#twiContentContainer')
    contents.forEach((content) => {
      twiContainer.innerHTML += tokohWanitaIndonesiaContent(content)
    })
  }
}

export default TokohWanitaIndonesia
