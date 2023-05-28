import { contentSelection } from '../../templates/template-creator'

const Content = {
  async render () {
    return `
      <div>
        <div class="content-item-container">
        <h1>Content</h1>
        ${contentSelection()}
        </div>
      </div>
    `
  },

  async afterRender () {

  }
}

export default Content
