import EqualiteachSource from '../../data/equaliteach-source'
import { trendingTopic1Content } from '../../templates/template-creator'

const TrendingTopic1 = {
  async render () {
    return `
          <div>
            <div class="trending-item-container">
            </div>
            <div id="trending1ContentContainer"></div>
          </div>
        `
  },

  async afterRender () {
    const contents = await EqualiteachSource.contentTc()
    const tc1Container = document.querySelector('#trending1ContentContainer')
    contents.forEach((content) => {
      tc1Container.innerHTML += trendingTopic1Content(content)
    })
  }
}

export default TrendingTopic1
