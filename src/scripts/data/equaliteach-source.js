import API_ENDPOINT from '../globals/api-endpoint'

class EqualiteachSource {
  static async contentTwi () {
    const response = await fetch(API_ENDPOINT.TWI)
    const responseJson = await response.json()
    return responseJson.contents
  }

  static async contentGec () {
    const response = await fetch(API_ENDPOINT.GEC)
    const responseJson = await response.json()
    return responseJson.contents
  }

  static async contentTc () {
    const response = await fetch(API_ENDPOINT.TC)
    const responseJson = await response.json()
    return responseJson.contents
  }

  static async detailTwiContent (id) {
    const response = await fetch(API_ENDPOINT.DETAIL_TWI(id))
    return response.json()
  }

  static async detailGecContent (id) {
    const response = await fetch(API_ENDPOINT.DETAIL_GEC(id))
    return response.json()
  }

  static async detailTcContent (id) {
    const response = await fetch(API_ENDPOINT.DETAIL_TC(id))
    return response.json()
  }
}

export default EqualiteachSource
