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
    document.getElementById('btnPosting').addEventListener('click', function () {
      const pesan = document.getElementById('pesan').value
      const tanggal = new Date()
      const tanggalPosting = tanggal.toLocaleString()

      document.getElementById('bahasDiskusi').textContent = pesan
      document.getElementById('tanggalPosting').textContent = tanggalPosting
    })
  }
}

export default DiscussionRoom
