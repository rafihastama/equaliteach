/* js navbar berubah warna */
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar')

  if (window.scrollY > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})
/* js untuk scroll ke atas */
window.onscroll = function () { scrollFunction() }

function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('btnScrollToTop').style.display = 'block'
  } else {
    document.getElementById('btnScrollToTop').style.display = 'none'
  }
}

// eslint-disable-next-line no-unused-vars
function scrollToTop () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
