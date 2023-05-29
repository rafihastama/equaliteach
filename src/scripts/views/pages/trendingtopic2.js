import { trendingTopic2Content } from '../../templates/template-creator'

const TrendingTopic2 = {
  async render () {
    return `
          <div>
            <div class="trending-item-container">
            <h1>will display one of the trending topic content</h1>
            ${trendingTopic2Content()}
            </div>
          </div>
        `
  },

  async afterRender () {

  }
}

export default TrendingTopic2
