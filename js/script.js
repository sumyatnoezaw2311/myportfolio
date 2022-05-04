//preloader
$(window).on("load",function(){
  $(".preLoader").fadeOut(500,function(){
    $(this).remove();
  });
})

//wow js
new WOW().init();

// home page letter effect
let textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 500,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 200
  });

let body = document.querySelector("body");
let home = document.querySelector("#home");
let about = document.querySelector("#about");
let portfolio = document.querySelector("#portfolio");
let contact = document.querySelector("#contact");
let menu = document.querySelector(".menu-main-container");

//highlight menu-item
let scrollHandler = () => {
  let pos_menu = window.pageYOffset + menu.offsetHeight;
  let pos_home = home.offsetTop + home.offsetHeight;
  let pos_about = about.offsetTop + about.offsetHeight;
  let pos_portfolio = portfolio.offsetTop + portfolio.offsetHeight;
  let pos_projects = projects.offsetTop + projects.offsetHeight;
  let pos_contact = contact.offsetTop + contact.offsetHeight;
  
  let distance_home = pos_home - pos_menu;
  let distance_about = pos_about - pos_menu;
  let distance_portfolio = pos_portfolio - pos_menu;
  let distance_projects = pos_projects - pos_menu;
  let distance_contact = pos_contact - pos_menu;
  
  let scrollTop = body.scrollTop;

  if(scrollTop-200 <= distance_home){
    $('.active').removeClass('active');
    $('.vertical-home').addClass("active");
    $('.customActive').removeClass('customActive');
    $('.home-line').addClass('customActive');
  }
  if(distance_home-200 < scrollTop && scrollTop <= distance_about){
    $('.active').removeClass('active');
    $('.vertical-about').addClass("active");
    $('.customActive').removeClass('customActive');
    $('.about-line').addClass('customActive');
  }
  if(distance_about-200 < scrollTop && scrollTop <= distance_portfolio){
    $('.active').removeClass('active');
    $('.vertical-portfolio').addClass("active");
    $('.customActive').removeClass('customActive');
    $('.portfolio-line').addClass('customActive');
  }
  if(distance_portfolio-200 < scrollTop && scrollTop <= distance_projects){
    $('.active').removeClass('active');
    $('.vertical-projects').addClass("active");
    $('.customActive').removeClass('customActive');
    $('.projects-line').addClass('customActive');
  }

  if(distance_projects-300 < scrollTop){
    $('.active').removeClass('active');
    $('.vertical-contact').addClass("active");
    $('.customActive').removeClass('customActive');
    $('.contact-line').addClass('customActive');
  }

  }

  body.onscroll = scrollHandler;


// horizontal menu

$('.customActive').removeClass('customActive');
$('.home-line').addClass('customActive');
$(".menu-container").click(function(){
  if($(this).hasClass('isOpened')){
    close();
  }else{
   open();
  }
});

// responsive menu
$('.active').removeClass('active');
$('.vertical-home').addClass('active');
$('.nav-items').on('click',function(){
  $(this).addClass('active');
  close();
})


function open(){
  $('.open-icon-container').removeClass('d-block');
    $('.open-icon-container').addClass('d-none');
    $('.close-icon-container').removeClass('d-none');
    $('.close-icon-container').addClass('d-block');
    $('.open').removeClass('open');
    $('.menu-container').addClass('isOpened');
}

function close(){
  $('.open-icon-container').removeClass('d-none');
    $('.open-icon-container').addClass('d-block');
    $('.close-icon-container').removeClass('d-block');
    $('.close-icon-container').addClass('d-none');
    $('.vertical-menu-container').addClass('open');
    $('.menu-container').removeClass('isOpened');
}

//show & hide projects
$(".viewAll").click(function(){
    if($(this).hasClass("isOpened")){
        $(this).find('.neon-button')[0].innerText = "View All";
        $(this).removeClass("isOpened");
    }else{
        $(this).find('.neon-button')[0].innerText = "Close";
        $(this).addClass("isOpened");
    }
    $("#projects").toggleClass('autoHeight')
    $('.project').toggleClass('show');

})