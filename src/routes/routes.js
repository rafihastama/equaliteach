import Home from '../scripts/views/pages/home'
import Content from '../scripts/views/pages/content'
import GenderEquality from '../scripts/views/pages/genderequality'
import TokohWanitaIndonesia from '../scripts/views/pages/twi'
import TrendingTopic1 from '../scripts/views/pages/trendingtopic1'
import TrendingTopic2 from '../scripts/views/pages/trendingtopic2'
import DiscussionRoom from '../scripts/views/pages/discussion'
import DetailTwi from '../scripts/views/pages/detail-twi'
import DetailGec from '../scripts/views/pages/detail-gec'
import DetailTc from '../scripts/views/pages/detail-tc1'
import AboutUs from '../scripts/views/pages/about-us'

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/content': Content,
  '/genderequality': GenderEquality,
  '/twi': TokohWanitaIndonesia,
  '/trendingtopic1': TrendingTopic1,
  '/trendingtopic2': TrendingTopic2,
  '/discussionroom': DiscussionRoom,
  '/detail-twi/:id': DetailTwi,
  '/detail-gec/:id': DetailGec,
  '/detail-tc1/:id': DetailTc,
  '/detail-tc2/:id': DetailTc,
  '/aboutus': AboutUs
}

export default routes
