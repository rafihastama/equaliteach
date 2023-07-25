const homeItemTemplate = (content) => `
<section class="hero">
    <img class="home-item" alt="" src="/assets/vector-16.svg" />
    
    <img class="home-inner" alt="" src="/assets/group-162534.svg" />
    <div class="hero-sec">
      <p class="hero-let">Education for all</p>
      <p class="hero-let"><span>Empowerment</span> for</p>
      <p class="hero-let">Everyone</p>
      <p class="hero-p">Transforming Lives Through Inclusive Education</p>
      <a href="#middle" class="btn-start">Get started</a>
    </div>

    <div class="home-child1"></div>

    <img class="home-child" alt="" src="/assets/group-162533.svg" />
    
    <img class="add-icon" alt="" src="/assets/add.svg" />
    
  </section>

  <div class="hero-hub-gender-1-icon_container">
    <img
    class="hero-hub-gender-1-icon"
    alt=""
    src="/assets/herohub-gender-1@2x.png"
  />
  </div>

  <div class="middle" id="middle">
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  </div>
  
  <section class="content">
    <div class="content1">
      <h2 class="judul-content">Kenapa hal ini<br>penting?</h2><br>
      <p>Beberapa point Gender Equality harus<br>
        disuarakan</p>
    </div>

    <div class="content2">
      <div class="isi1-content2">
        <img class="group-inner" alt="" src="/assets/group-542.svg" />
        <p class="judul-isi">Keadilan Sosial</p>
        <p>setiap gender memiliki hak<br>
          yang sama untuk mengakses<br>
          peluang, sumber daya, dan<br>
          keuntungan dalam kehidupan.</p>
      </div>

      <div class="isi2-content2">
        <img class="group-child1" alt="" src="/assets/group-555.svg" />
        <p class="judul-isi">Pembangunan Berkelanjutan</p>
        <p>Partisipasi aktif perempuan<br>
          dalam semua bidang dapat<br>
          mencapai pertumbuhan yang<br>
          inklusif dan berkelanjutan.</p>
      </div>

      <div class="isi3-content2">
        <img class="group-child2" alt="" src="/assets/group-556.svg" />
        <p class="judul-isi">Peningkatan Potensi</p>
        <p>Kesetaraan gender<br>
          menciptakan lingkungan yang<br>
          mendukung potensi penuh<br>
          setiap individu</p>
      </div>

      <div class="isi4-content2">
        <img class="group-icon" alt="" src="/assets/group-554.svg" />
        <p class="judul-isi">Perubahan Sosial</p>
        <p>Kesetaraan gender adalah kunci<br>
          untuk mengubah norma dan<br>
          persepsi sosial yang membatasi<br>
          peran dan ekspetasi gender.</p>
      </div>
      
    </div>
  </section>

  <h3 class="trending-topicjud">Trending Topic</h3>

  <section class="trending-topic">
    
    <div class="isi-trending">
      <div class="bentuk1">
      <p>Sudah tercatat dengan baik bahwa Covid-19 telah menghambat kemajuan perempuan, yang menanggung sebagian besar tugas perawatan. 
      Namun, menurut The Washington Post, "pandemi hampir terlupakan di Perserikatan Bangsa-Bangsa dan janji-janji tahun lalu tidak terpenuhi." 
      Tahun lalu. . . . </p>
        <a href="/#/detail-tc1/YAaQfW4MNtF6lPbj" onClick="scrollToTop()" class="btn-smr1">See More</a>
      </div>

      <div class="bentuk2">
        <img
              class="gender-equality-0-1"
              alt=""
              src="https://i.postimg.cc/RCnSstLc/covid-woman-1-1024x504.jpg"
            />
      </div>

      <div class="bentuk3">
        <img
        class="gender-equality-1-1"
        alt=""
        src="https://i.postimg.cc/8cChGHkP/Peran-Laki-laki-dalam-Mendorong-Kepemimpinan-Perempuan.jpg"
      />
      </div>

      <div class="bentuk4">
        <p>Pada UNGA tahun ini, terbentuklah Platform Pemimpin Perempuan UNGA yang mengumpulkan kepala negara dan pemerintahan perempuan untuk menyoroti pentingnya kepemimpinan politik perempuan. Selama UNGA, mantan Presiden UNGA mengomentari bahwa. . .</p>
        <a href="/#/detail-tc2/pBJHkJLwKlnmd8_d" onClick="scrollToTop()" class="btn-smr2">See More</a>
      </div>
    </div>
  </section>

  <div id="chatContainer" class="chat-container">
    <button onclick="window.location.href='https://equaliteach-delta.vercel.app/diskusi'" id="btn-diskusi">Diskusi</button>

    <button onclick="scrollToTop()" id="btnScrollToTop" title="Kembali ke atas">&#8679;</button>
  </div>`

const contentSelection = () => `
  <div class="home-child1"></div>
  <div class="pilihan-content">
    <div class="top-row">
      <div class="content-bentuk1">
        <img class="content-gender-equality-0-1" alt="" src="/assets/gender-equal.png" />
      </div>
        
      <div class="content-bentuk2">
        <p>GENDER<br>
        EQUALITY</p>
        <a href="#/genderequality" onClick="scrollToTop()" class="content-btn-smr1">See More</a>
      </div>
    </div>
  
    <div class="bottom-row">
      <div class="content-bentuk3">
        <p>TOKOH WANITA INDONESIA</p>
        <a href="#/twi" onClick="scrollToTop()" class="content-btn-smr2">See More</a>
      </div>
      
      <div class="content-bentuk4">
        <img class="content-gender-equality-1-1" alt="" src="/assets/twi.png" />
      </div>
    </div>
  </div>
  
  <div id="chatContainer" class="chat-container">
    <button onclick="scrollToTop()" id="btnScrollToTop" title="Kembali ke atas">&#8679;</button>
  </div>
  </div>
  `

const discussionRoom = () => `
<div class="diskusi-container">
  <h4>FORUM DISKUSI</h4>
    <div id="buatDiskusi">
      <p>TAMBAHKAN KOMENTAR</p>
        <input type="text" id="pesan" placeholder="Masukkan Komentar">
        <button id="btnPosting">Posting</button>
    </div>
    <div class="infouser">
    <hr>
    <div id="infoUserDiskusi">
      <label id="usernameDiskusi">(USER)</label>
      <div id="tanggalPosting">(TANGGAL POSTING)</div>
      <p id="judulDiskusi">(Judul Diskusi)</p>
      <p id="deskripsiDiskusi">(Deskripsi Diskusi)</p>
    </div>
    <hr>
    <div id="isiDiskusi">
      <div id="infoIsiDiskusi">
        <label id="usernameDiskusi">(USER)</label>
        <div id="tanggalPosting2">(TANGGAL POSTING)</div>
      </div>
      <p id="bahasDiskusi"></p>
    </div>
    </div>
  </div>
`

const genderEqualityContent = (contents) => `
<div class="gec-item">
    <div class="gec-item__header">
    <a href="/#/detail-gec/${contents.id}">
      <img class="gec-item__header__poster" alt="${contents.name || '-'}"
           src="${contents.image}" href="/#/detail-gec/${contents.id}">
    </div>
    <div class="gec-item__content">
      <h3 class="gec__title"><a href="/#/detail-gec/${contents.id}">${contents.name || '-'}</a></h3>
    </div>
  </div>
`

const tokohWanitaIndonesiaContent = (contents) => `
<div class="twi-item">
    <div class="twi-item__header">
    <a href="/#/detail-twi/${contents.id}">
      <img class="twi-item__header__poster" alt="${contents.name || '-'}"
           src="${contents.image}" href="/#/detail-twi/${contents.id}">
    </div>
    <div class="twi-item__content">
      <h3 class="twi__title"><a href="/#/detail-twi/${contents.id}">${contents.name || '-'}</a></h3>
    </div>
  </div>
`

const trendingTopic1Content = (content) => `
<div class="tc1-item">
    <div class="tc1-item__header">
      <img class="tc1-item__header__poster" alt="${content.name || '-'}"
           src="${content.image}">
    </div>
    <div class="tc1-item__content">
      <h3 class="tc1__title"><a href="/#/detail-tc1/${content.id}">${content.name || '-'}</a></h3>
      <p>${content.description || '-'}</p>
    </div>
  </div>
`

const trendingTopic2Content = (content) => `
<div class="tc2-item">
    <div class="tc2-item__header">
      <img class="tc2-item__header__poster" alt="${content.name || '-'}"
           src="${content.image}">
    </div>
    <div class="tc2-item__content">
      <h3 class="tc2__title"><a href="/#/detail-tc2/${content.id}">${content.name || '-'}</a></h3>
      <p>${content.description || '-'}</p>
    </div>
  </div>
`

const detailPage = (content) => `
<img class="detail__poster" src="${content.image}" alt="${content.name}" />
<h2 class="detail__title">${content.name}</h2>
  <div class="detail__info">
    <p>${content.description}</p>
  </div>
`

export {
  homeItemTemplate,
  contentSelection,
  genderEqualityContent,
  tokohWanitaIndonesiaContent,
  trendingTopic1Content,
  trendingTopic2Content,
  discussionRoom,
  detailPage
}
