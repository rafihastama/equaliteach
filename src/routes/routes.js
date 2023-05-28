import Home from '../scripts/views/pages/home'
import Content from '../scripts/views/pages/content'
import Detail from '../scripts/views/pages/detail'

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/content': Content,
  '/detail/:id': Detail
}

export default routes
