import '../styles/global.css'
import '../styles/index.css'
import App from './views/app'

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage()
})

/* js navbar berubah warna */
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar')

  if (window.scrollY > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('btnScrollToTop').style.display = 'block'
  } else {
    document.getElementById('btnScrollToTop').style.display = 'none'
  }
}

function scrollToTop () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

window.onscroll = function () {
  scrollFunction()
}

window.scrollToTop = scrollToTop
