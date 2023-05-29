import { tokohWanitaIndonesiaContent } from '../../templates/template-creator'

const TokohWanitaIndonesia = {
  async render () {
    return `
          <div>
            <div class="gender-equality-item-container">
            <h1>Tokoh Wanita Indonesia</h1>
            ${tokohWanitaIndonesiaContent()}
            </div>
          </div>
        `
  },

  async afterRender () {

  }
}

export default TokohWanitaIndonesia
