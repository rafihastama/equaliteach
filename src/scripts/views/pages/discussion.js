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

      if (pesan.trim() === '') {
        // Tampilkan pesan atau lakukan tindakan lain jika pesan kosong
        alert('KOMENTAR TIDAK BOLEH KOSONG!!!')
        return // Menghentikan eksekusi kode selanjutnya
      }

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

      // Membuat elemen div untuk menampung balasan
      const balasanContainer = document.createElement('div')
      newDiskusi.appendChild(balasanContainer)

      // Membuat input dan tombol untuk membalas pesan
      const balasanInput = document.createElement('input')
      balasanInput.type = 'text'
      balasanInput.placeholder = 'Balas Diskusi...'
      balasanInput.classList.add('balasanInput')

      const balasanButton = document.createElement('button')
      balasanButton.innerText = 'Balas'
      balasanButton.classList.add('balasanButton')
      balasanButton.addEventListener('click', function () {
        const balasanPesan = balasanInput.value
        if (balasanPesan.trim() !== '') {
          const balasanElement = document.createElement('div')
          balasanElement.classList.add('infoIsiDiskusi')
          balasanElement.classList.add('balasan')

          const balasanUsernameElement = document.createElement('label')
          balasanUsernameElement.innerText = usernameDiskusi

          const balasanTanggalElement = document.createElement('div')
          balasanTanggalElement.innerText = tanggalPosting2

          const balasanPesanElement = document.createElement('p')
          balasanPesanElement.innerText = balasanPesan

          balasanElement.appendChild(balasanUsernameElement)
          balasanElement.appendChild(balasanTanggalElement)
          balasanElement.appendChild(balasanPesanElement)

          balasanContainer.appendChild(balasanElement)
          balasanInput.value = ''
        }
      })

      newDiskusi.appendChild(balasanInput)
      newDiskusi.appendChild(balasanButton)

      // Menambahkan elemen diskusi baru ke dalam container diskusi
      isiDiskusi.appendChild(newDiskusi)

      // Menambahkan elemen <hr> untuk memisahkan setiap output pesan
      const hrElement = document.createElement('hr')
      isiDiskusi.appendChild(hrElement)

      // Menghapus teks di dalam input placeholder
      pesanInput.value = ''
    })
  }
}

export default DiscussionRoom
