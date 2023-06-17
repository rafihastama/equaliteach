import '../styles/global.css'
import '../styles/index.css'
import '../styles/responsive.css'
import App from './views/app'
import routes from '../routes/routes'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage(routes)
})

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage(routes)
})

window.addEventListener('load', () => {
  swRegister()
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

function handleScroll () {
  const btnScrollToTop = document.querySelector('#btnScrollToTop')
  if (btnScrollToTop) {
    if (window.scrollY > 0) {
      btnScrollToTop.style.display = 'block'
    } else {
      btnScrollToTop.style.display = 'none'
    }
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll)

function scrollToTop () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

window.scrollToTop = scrollToTop

// Hamburger menu
const navbarNav = document.querySelector('.navbar-nav')

document.querySelector('#hamburgerButton').onclick = () => {
  navbarNav.classList.toggle('active')
}

// klik luar hambtn
const hamburger = document.querySelector('#hamburgerButton')

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
})
