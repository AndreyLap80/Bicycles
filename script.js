const menuBtn = document.querySelector('.menu-btn');
const page = document.querySelector('.page');
const header = document.querySelector('.header');
const borderBike = document.querySelector('.border-bike');
const profession = document.querySelector('.profession');
const switchLeft = document.querySelector('.switch-left');
const switchRight = document.querySelector('.switch-right');
const pavementLinks = document.querySelector('.pavement__links');
const subtitle = document.querySelectorAll('.subtitle');
const footer = document.querySelector('.footer');
const copyright = document.querySelector('.copyright');
const footerEmail = document.querySelector('.footer-email');
const buttonEmail = document.querySelector('.button-email');
const darkTheme = document.querySelectorAll('.dark-theme');
const lightTheme = document.querySelectorAll('.light-theme');
const inputFooter = document.querySelectorAll('.input-footer');
const menuBtnLinks = document.querySelector('.menu-btn__links');
const menuBtnLink = document.querySelectorAll('.menu-btn__link');


menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menuBtnLinks.classList.toggle('active');
  page.classList.toggle('lock');
})

menuBtnLink.forEach(button => {
  button.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menuBtnLinks.classList.toggle('active');
    page.classList.toggle('lock');
  })
});

inputFooter.forEach(button => {
  button.addEventListener('change', function () {
    page.classList.toggle('dark');
    header.classList.toggle('header__dark');
    menuBtn.classList.toggle('menu-btn__dark');
    borderBike.classList.toggle('border-bike__dark');
    profession.classList.toggle('profession__dark');
    switchLeft.classList.toggle('switch-left__dark');
    switchRight.classList.toggle('switch-right__dark');
    pavementLinks.classList.toggle('pavement__links_dark');
    copyright.classList.toggle('copyright__dark');
    footer.classList.toggle('footer__dark');
    footerEmail.classList.toggle('footer-email__dark');
    buttonEmail.classList.toggle('button-email__dark');
    lightTheme.forEach(lightThemeImg => {
      lightThemeImg.classList.toggle('light-theme__dark');
    });
    darkTheme.forEach(darkThemeImg => {
      darkThemeImg.classList.toggle('dark-theme__dark');
    });
    subtitle.forEach(subtitleDark => {
      subtitleDark.classList.toggle('subtitle__dark');
    });


  })
});
