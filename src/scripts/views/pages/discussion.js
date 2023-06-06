import { discussionRoom } from '../../templates/template-creator'

const DiscussionRoom = {
  async render () {
    return `
        <div>
            <div class="diskusi-room-container">
            ${discussionRoom()}
            </div>
        </div>
        `
  },

  async afterRender () {

  }
}

export default DiscussionRoom
