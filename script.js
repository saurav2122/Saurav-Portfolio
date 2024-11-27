$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["UI/UX Designer", "Graphics Designer", "Blogger", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["UI\UX Designer", "Graphics Designer", "Blogger", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    document.getElementById('downloadCV').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor behavior
        
        // Trigger file download
        const link = document.createElement('a');
        link.href = 'Pdf/66979e932689d03585f8168a.pdf'; 
        link.download = 'SauravCv.pdf'; 
        link.click();
  
        // Show SweetAlert confirmation
        Swal.fire({
          title: 'Thank you!',
          text: 'Thanks for showing interest in my CV!',
          icon: 'success',
          confirmButtonText: 'Close'
        });
      });
  

s

document.addEventListener("DOMContentLoaded", function() {
   
    function updateProgressBar(skillClass, percentage) {
        const line = document.querySelector(`.${skillClass}`);
        line.style.width = `${percentage}%`;

        // Set color based on percentage
        if (percentage >= 80) {
            line.style.backgroundColor = "#4caf50"; 
        } else if (percentage >= 60) {
            line.style.backgroundColor = "#ff9800"; 
        } else {
            line.style.backgroundColor = "#f44336"; 
        }
    }

   
    updateProgressBar('html', 90);
    updateProgressBar('css', 60);
    updateProgressBar('js', 80);
    updateProgressBar('Figma', 90);
    updateProgressBar('Photoshop', 70);
    updateProgressBar('Canva', 80);
    updateProgressBar('Sketch', 70);
    updateProgressBar('Typography', 70);
});




    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});