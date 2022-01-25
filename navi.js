function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
    var global_nav = document.querySelector('.global-nav');
  
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
    global_nav.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
  }
  toggleNav();