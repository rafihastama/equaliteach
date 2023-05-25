/*js navbar berubah warna*/
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
/*js untuk scroll ke atas*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnScrollToTop").style.display = "block";
    } else {
        document.getElementById("btnScrollToTop").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleChat() {
    var chatBox = document.getElementById("chatBox");
    if (chatBoxVisible) {
        closeChat();
    } else {
        chatBox.style.display = "block";
        chatBoxVisible = true;
    }
}

function closeChat() {
    var chatBox = document.getElementById("chatBox");
    chatBox.style.display = "none";
    chatBoxVisible = false;
}