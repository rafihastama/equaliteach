import { genderEqualityContent } from '../../templates/template-creator'
import EqualiteachSource from '../../data/equaliteach-source'

const GenderEquality = {
  async render () {
    return `
          <div>
            <div class="gender-equality-item-container">
            <h1>Gender Equality</h1>
            </div>
            <div id="gcContentContainer"></div>
          </div>
        `
  },

  async afterRender () {
    const contents = await EqualiteachSource.contentGec()
    const GcContainer = document.querySelector('#gcContentContainer')
    contents.forEach((content) => {
      GcContainer.innerHTML += genderEqualityContent(content)
    })
  }
}

export default GenderEquality
