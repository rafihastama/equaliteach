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
      const pesanInput = document.getElementById('pesan')
      const pesan = pesanInput.value
      const tanggal = new Date()
      const tanggalPosting = tanggal.toLocaleString()
      const tanggalPosting2 = tanggal.toLocaleString()

      document.getElementById('bahasDiskusi').textContent = pesan
      document.getElementById('tanggalPosting').textContent = tanggalPosting
      document.getElementById('tanggalPosting2').textContent = tanggalPosting2

      const isiDiskusi = document.getElementById('isiDiskusi')
      const usernameDiskusi = document.getElementById('usernameDiskusi').innerText

      // Membuat elemen div baru untuk menampung pesan diskusi
      const newDiskusi = document.createElement('div')
      newDiskusi.classList.add('infoIsiDiskusi')

      // Membuat elemen untuk menampilkan username dan tanggal posting
      const usernameElement = document.createElement('label')
      usernameElement.innerText = usernameDiskusi

      const tanggalPostingElement = document.createElement('div')
      tanggalPostingElement.innerText = tanggalPosting2

      newDiskusi.appendChild(usernameElement)
      newDiskusi.appendChild(tanggalPostingElement)

      // Membuat elemen paragraf untuk menampilkan pesan diskusi
      const pesanElement = document.createElement('p')
      pesanElement.innerText = pesan
      newDiskusi.appendChild(pesanElement)

      // Membuat tombol hapus pesan
      const deleteButton = document.createElement('button')
      deleteButton.classList.add('deletebutton')
      deleteButton.innerText = 'Hapus'
      deleteButton.addEventListener('click', function () {
        newDiskusi.remove()
      })
      newDiskusi.appendChild(deleteButton)

      // Menambahkan elemen diskusi baru ke dalam container diskusi
      isiDiskusi.appendChild(newDiskusi)
    })
  }
}

export default DiscussionRoom
