import { trendingTopic1Content } from '../../templates/template-creator'

const TrendingTopic1 = {
  async render () {
    return `
          <div>
            <div class="trending-item-container">
            <h1>will display one of the trending topic content</h1>
            ${trendingTopic1Content()}
            </div>
          </div>
        `
  },

  async afterRender () {

  }
}

export default TrendingTopic1
