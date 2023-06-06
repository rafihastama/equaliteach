import Home from '../scripts/views/pages/home'
import Content from '../scripts/views/pages/content'
import Detail from '../scripts/views/pages/detail'
import GenderEquality from '../scripts/views/pages/genderequality'
import TokohWanitaIndonesia from '../scripts/views/pages/twi'
import TrendingTopic1 from '../scripts/views/pages/trendingtopic1'
import TrendingTopic2 from '../scripts/views/pages/trendingtopic2'
import DiscussionRoom from '../scripts/views/pages/discussion'

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/content': Content,
  '/genderequality': GenderEquality,
  '/twi': TokohWanitaIndonesia,
  '/trendingtopic1': TrendingTopic1,
  '/trendingtopic2': TrendingTopic2,
  '/discussionroom': DiscussionRoom,
  '/detail/:id': Detail
}

export default routes
