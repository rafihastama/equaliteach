import UrlParser from '../../routes/url-parser'
import routes from '../../routes/routes'

class App {
  constructor ({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    if (page !== undefined) {
      this._content.innerHTML = await page.render()
      if (page.afterRender !== undefined) {
        await page.afterRender()
      }
    } else {
      this._content.innerHTML = '<h3>Page Not Found</h3>'
    }
  }

  _getPage (url) {
    const routeKeys = Object.keys(routes)
    const matchingRoute = routeKeys.find(route => {
      const pattern = new RegExp(`^${route}$`, 'g')
      return pattern.test(url)
    })

    return routes[matchingRoute]
  }

  async _renderContent (page) {
    this._content.innerHTML = await page.render()
  }

  async _afterRender (page) {
    await page.afterRender()
  }

  _afterRenderContent (page) {
    if (page) {
      page.afterRender()
    }
  }

  _renderFullPage () {
    // Implement your logic to render the full page here
    // This could include updating the header, footer, or any other elements on the page
  }
}

export default App
