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
const formInput = document.querySelector('.form__input');
const formButton = document.querySelector('.form__button');
const formEmail = document.forms.email;
const buttonEmail = document.querySelector('.button-email');
const darkTheme = document.querySelectorAll('.dark-theme');
const lightTheme = document.querySelectorAll('.light-theme');
const inputTheme = document.querySelectorAll('.input-theme');
const menuBtnLinks = document.querySelector('.menu-btn__links');
const menuBtnLink = document.querySelectorAll('.menu-btn__link');
const check = document.querySelector('#check')
const checkModal = document.querySelector('#check-modal')



//открытие меню бургер
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menuBtnLinks.classList.toggle('active');
  page.classList.toggle('lock');
})
//ссылки меню бургер + закрытие
menuBtnLink.forEach(button => {
  button.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menuBtnLinks.classList.toggle('active');
    page.classList.toggle('lock');
  })
});


//перереключение темы
inputTheme.forEach(button => {
  button.addEventListener('change', function (e) {
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
      menuBtn.classList.remove('active');
      menuBtnLinks.classList.remove('active');
      page.classList.remove('lock');
    });
    if (button.checked === true) {
      checkModal.checked = true
      check.checked = true
    }
    else
      if (button.checked === false) {
        checkModal.checked = false
        check.checked = false
      }
  })

});
//валидация
formInput.addEventListener('input', function (evt) {
  const isValid = formInput.checkValidity();
  if (isValid) {
    buttonEmail.style.display = '';
    formButton.removeAttribute('disabled');
    formButton.classList.remove('form__button_disabled');
  } else {
    formButton.setAttribute('disabled', true);
    formButton.classList.add('form__button_disabled');
    buttonEmail.style.display = 'none';
  }
});
formEmail.addEventListener('click', function (evt) {
  formEmail.reset();
  evt.preventDefault();
});
