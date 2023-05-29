import { genderEqualityContent } from '../../templates/template-creator'

const GenderEquality = {
  async render () {
    return `
          <div>
            <div class="gender-equality-item-container">
            <h1>Gender Equality</h1>
            ${genderEqualityContent()}
            </div>
          </div>
        `
  },

  async afterRender () {

  }
}

export default GenderEquality
