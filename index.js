window.addEventListener('DOMContentLoaded', function() {
  var textElement = document.querySelector('.fade-in-fade-out');
  var texts = ['Anshuma Devi', 'Web Developer', 'Codder', 'Backend Programmer'];
  var currentTextIndex = 0;

  function changeText() {
    textElement.textContent = texts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % texts.length;
  }
  changeText();
  setInterval(changeText, 3000);
});
$(document).ready(function () {
  $(window).scroll(function () {
   
    if (this.scrollY > 20) {
      $("#nav-menu").addClass("sticky");
    } else {
      $("#nav-menu").removeClass("sticky");
    }

    
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });


  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    
    $("html").css("scrollBehavior", "auto");
  });

  $("#nav-menu .menu li a").click(function () {

    $("html").css("scrollBehavior", "smooth");
  });


  $(".menu-btn").click(function () {
    $("#nav-menu .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: ["Full Stack Developer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Full Stack Developer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

let drive = document
  .querySelector(".Drivegoogle")
  .addEventListener("click", openDrive);

function openDrive() {
  window.open(
    (href =
      "https://drive.google.com/file/d/1wv_J5YEOn-7P5kicR4h25cNpN9_MO2LL/view?usp=sharing")
  );
}

let drive2 = document
  .querySelector(".googleDrive")
  .addEventListener("click", openDrive2);

function openDrive2() {
  window.open(
    (href =
      "https://drive.google.com/file/d/1wv_J5YEOn-7P5kicR4h25cNpN9_MO2LL/view?usp=sharing")
  );
}
