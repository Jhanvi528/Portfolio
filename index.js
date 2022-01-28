// skill
for (var i = 1; i <= document.querySelectorAll('.jg-review-div').length; i++) {
  var percentage = document.querySelector(
    '#skills .jg-review-div.div-' + i + ' p'
  ).innerHTML
  document.querySelector(
    '#skills .div-' + i + ' .jg-review-percent'
  ).style.width = percentage
}

// navbar
const navbar = document.querySelector('.navbar')
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add('nav-color-change')
  } else {
    navbar.classList.remove('nav-color-change')
  }
}

//name text

var nameLength=document.querySelector(".intro-text h1 span").innerHTML.length;
var name=document.querySelector(".intro-text h1 span").innerHTML;
