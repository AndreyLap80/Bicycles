const menuBtn = document.querySelector('.menu-btn');
const page = document.querySelector('.page');
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
  button.addEventListener('click', function () {
    page.classList.toggle('dark');
  })
});
