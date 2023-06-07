const homeItemTemplate = () => `
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

  <h3>Trending Topic</h3>

  <section class="trending-topic">
    
    <div class="isi-trending">
      <div class="bentuk1">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
      Excepturi fugit eum optio sint ratione perspiciatis, exercitationem<br>
      ullam enim fuga! Cum dolorum cumque, a dolores ab doloremque quia!<br>
      Deserunt, harum cumque.</p>
        <a href="#/trendingtopic1" onClick="scrollToTop()" class="btn-smr1">See More</a>
      </div>

      <div class="bentuk2">
        <img
              class="gender-equality-0-1"
              alt=""
              src="/assets/gender-equality-0-1@2x.png"
            />
      </div>

      <div class="bentuk3">
        <img
        class="gender-equality-1-1"
        alt=""
        src="/assets/gender-equality-1-1@2x.png"
      />
      </div>

      <div class="bentuk4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
          Excepturi fugit eum optio sint ratione perspiciatis, exercitationem<br>
          ullam enim fuga! Cum dolorum cumque, a dolores ab doloremque quia!<br>
          Deserunt, harum cumque.</p>
        <a href="#/trendingtopic2" onClick="scrollToTop()" class="btn-smr2">See More</a>
      </div>
    </div>
  </section>

  <div id="chatContainer" class="chat-container">
    <button onclick="window.location.href='#/discussionroom'" id="btn-diskusi">Diskusi</button>
    
    <button onclick="scrollToTop()" id="btnScrollToTop" title="Kembali ke atas">&#8679;</button>
  </div>`

const contentSelection = () => `
  <div class="home-child1"></div>
  <div class="pilihan-content">
    <div class="top-row">
      <div class="content-bentuk1">
        <img class="content-gender-equality-0-1" alt="" src="/assets/gender-equality-0-1.png" />
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
        <img class="content-gender-equality-1-1" alt="" src="/assets/gender-equality-1-1.png" />
      </div>
    </div>
  </div>
  
  <div id="chatContainer" class="chat-container">
    <button onclick="window.location.href='#/discussionroom'" id="btn-diskusi">Diskusi</button>
    <button onclick="scrollToTop()" id="btnScrollToTop" title="Kembali ke atas">&#8679;</button>
  </div>
  </div>
  `

const discussionRoom = () => `
<div class="diskusi-container">
    <h4>FORUM DISKUSI</h4>
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
        <div id="tanggalPosting">(TANGGAL POSTING)</div>
      </div>
      <p id="bahasDiskusi">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero at officiis dolore alias iure nulla neque quo, quod optio odit laudantium provident voluptas perferendis ducimus voluptate voluptates itaque corrupti fugit?
      </p>
    </div>
    <hr>
    <div id="buatDiskusi">
      <p>TAMBAHKAN KOMENTAR</p>
      <input type="text" id="pesan" placeholder="masukkan komentar">
      <button id="btnPosting">Posting</button>
    </div>
  </div>
`

const genderEqualityContent = () => `
<div class="home-child1"></div>
`

const tokohWanitaIndonesiaContent = () => `
<div class="home-child1"></div>
`

const trendingTopic1Content = () => `
`

const trendingTopic2Content = () => `
`

export {
  homeItemTemplate,
  contentSelection,
  genderEqualityContent,
  tokohWanitaIndonesiaContent,
  trendingTopic1Content,
  trendingTopic2Content,
  discussionRoom
}
