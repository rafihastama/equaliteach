import '../styles/global.css'
import '../styles/index.css'
import App from './views/app'
import routes from '../routes/routes'

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

const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnPopup = document.querySelector('.btn-login')
const iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active')
})

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active')
})

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup')
})

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup')
})
