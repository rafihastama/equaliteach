import { homeItemTemplate } from '../../templates/template-creator'

const Home = {
  async render () {
    return `
      <div>
        <div class="home-item-container">
          ${homeItemTemplate()}
        </div>
      </div>
    `
  },

  async afterRender () {

  }
}

export default Home
