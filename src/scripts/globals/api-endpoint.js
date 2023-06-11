import CONFIG from './config'

const API_ENDPOINT = {
  TWI: `${CONFIG.BASE_URL}/twicontents`,
  GEC: `${CONFIG.BASE_URL}/gecontents`,
  TC: `${CONFIG.BASE_URL}/trendingcontents`,
  DETAIL_TWI: (id) => `${CONFIG.BASE_URL}/twicontents/${id}`,
  DETAIL_GEC: (id) => `${CONFIG.BASE_URL}/gecontents/${id}`,
  DETAIL_TC: (id) => `${CONFIG.BASE_URL}/trendingcontents/${id}`
}
export default API_ENDPOINT
