blockScroll();

const percentsArray = [
  [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
  [79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [100]
];
let i = 0;

let preloaderLoading = window.setInterval(function () {
  let percArr = percentsArray[i];
  let percNumber = percArr[Math.floor(Math.random()*percArr.length)]

  if (percNumber != 100) {
    document.querySelector(".preloader__list").style.width = `${
      percNumber - 10
    }svw`;
  } else {
    document.querySelector(
      ".preloader__list"
    ).style.width = `${percNumber}svw`;
  }
  document.querySelector(".preloader__text r").textContent = percNumber;
  i++;
}, 500);

window.onload = function () {
  window.setTimeout(() => {
    document.body.classList.add("loaded_hiding");
    unblockScroll();
    clearInterval(preloaderLoading);
    window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
    }, 500);
  }, 2500);
};


ymaps.ready(function () {
    if (window.matchMedia("(min-width: 1921px)").matches) {
      var map = new ymaps.Map(
        "map",
        {
          center: [59.92618756417184, 30.38440950000001],
          zoom: 17.3,
  
          controls: [],
        },
        {
          suppressMapOpenBlock: true,
        }
      );
    }
  
    if (window.matchMedia("(max-width: 1920px)").matches) {
      var map = new ymaps.Map(
        "map",
        {
          center: [59.92618756417184, 30.38440950000001],
          zoom: 16,
  
          controls: [],
        },
        {
          suppressMapOpenBlock: true,
        }
      );
    }
  
    // Создание метки с квадратной активной областью.
    var squareLayout = ymaps.templateLayoutFactory.createClass(
      '<img src="img/footer__logo.svg"  alt=""> '
    );
  
    var squarePlacemark = new ymaps.Placemark(
      [59.92618756417184, 30.38440950000001],
      {
        hintContent: "Санкт-Петербург, ул. Александра Невского д. 10, офис 112",
      },
      {
        iconLayout: squareLayout,
        // Описываем фигуру активной области "Прямоугольник".
        iconShape: {
          type: "Rectangle",
          // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
          coordinates: [
            [-5, 0],
            [65, 33],
          ],
        },
      }
    );
    map.geoObjects.add(squarePlacemark);
  });
  
  new WOW().init();
  
  SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 1600,
    // Размер шага в пикселях
    stepSize: 70,
  
    // Дополнительные настройки:
  
    // Ускорение
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,
  
    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,
  
    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
  
    // Поддержка тачпада
    touchpadSupport: true,
  });
  
  function blockScroll() {
    scrollY = window.pageYOffset;
    document.body.style.top = `-${window.pageYOffset}px`;
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  }
  function unblockScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollY);
  }

  const header = document.querySelector(".header");
const headerInner = document.querySelector(".header__inner");
const footer = document.querySelector(".footer");
  
  const headerBurger = document.querySelector(".header__burger");
  const headerMenu = document.querySelector(".header__menu.mobile");
  const headerBurgerClose = document.querySelector(".header__menu-icon");
  
  headerBurger.addEventListener("click", () => {
    blockScroll();
    headerMenu.classList.add("active");
    header.style.opacity = 1;
  });
  headerBurgerClose.addEventListener("click", () => {
    unblockScroll();
    headerMenu.classList.remove("active");
    header.style.opacity = 0.8;
  });
  



const inputBoxes = document.querySelectorAll('.contacts__form-box')
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputTel = document.getElementById('tel');
const inputCheckbox = document.querySelector('.contacts__bottom-checkbox')
const formBtn = document.querySelector('.contacts__bottom-button');
const successPopup = document.querySelector('.success__submit');
const successPopupClose = document.querySelector('.success__header-close');

inputName.addEventListener('focusout', (e)=>{
    if(e.target.value){
        inputBoxes[0].classList.add('success')
        inputBoxes[0].classList.remove('error')
    } 
    else{
        inputBoxes[0].classList.add('error')
        inputBoxes[0].classList.remove('success')
    } 
})
inputName.addEventListener('input', (e)=>{
    if(e.target.value.length > 3){
        if(e.target.value.length){
       
        inputBoxes[0].classList.add('success')
        inputBoxes[0].classList.remove('error')
        }
        else{
            inputBoxes[0].classList.add('error')
            inputBoxes[0].classList.remove('success')
        } 
    } 
})
inputEmail.addEventListener('focusout', (e)=>{
    if(e.target.value.indexOf('@') != -1 && e.target.value.indexOf('.') != -1){
        inputBoxes[1].classList.add('success')
        inputBoxes[1].classList.remove('error')
    } 
    else{
        inputBoxes[1].classList.add('error')
        inputBoxes[1].classList.remove('success')
    } 
})
inputEmail.addEventListener('input', (e)=>{
    if(e.target.value.indexOf('@') != -1 && e.target.value.indexOf('.') != -1){
        inputBoxes[1].classList.add('success')
        inputBoxes[1].classList.remove('error')
    } 
    
})

inputTel.addEventListener('focusout', (e)=>{
   
    if(e.target.value.length == 16){
        inputBoxes[2].classList.add('success')
        inputBoxes[2].classList.remove('error')
    } 
    else{
        inputBoxes[2].classList.add('error')
        inputBoxes[2].classList.remove('success')
    } 

})
inputTel.addEventListener('input', (e)=>{
    if(e.target.value.length == 11){
        inputBoxes[2].classList.add('success')
        inputBoxes[2].classList.remove('error')
    }
    
})

inputCheckbox.addEventListener('click', ()=>{
    inputCheckbox.classList.remove('error')
})

formBtn.addEventListener('click', ()=>{
    console.log(inputCheckbox.checked)
    if(inputName.value && inputEmail.value.indexOf('@') != -1 && inputEmail.value.indexOf('.') != -1 && (inputTel.value.length == 16 || inputTel.value.length == 11) && inputCheckbox.checked){
        successPopup.classList.add('active')
        blockScroll()
        header.classList.add('popupOpen')
    }
    else{
        if(!inputBoxes[0].classList.contains('success')) inputBoxes[0].classList.add('error')
        if(!inputBoxes[1].classList.contains('success')) inputBoxes[1].classList.add('error')
        if(!inputBoxes[2].classList.contains('success')) inputBoxes[2].classList.add('error')
        if(inputCheckbox) inputCheckbox.classList.add('error')
    }
})

successPopupClose.addEventListener('click', ()=>{
    successPopup.classList.remove('active')
    unblockScroll()

    header.classList.remove('popupOpen')

})



IMask(
    inputTel,
    {
      mask: '+{7} 000 000 00 00'
    }
  )

  document.querySelector('.header__burger.mobile').addEventListener('click', ()=>{
    successPopup.classList.remove('active')
    unblockScroll()
    header.classList.remove('popupOpen')
  })
