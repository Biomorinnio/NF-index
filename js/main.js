
const header = document.querySelector(".header");
const headerInner = document.querySelector(".header__inner");
const footer = document.querySelector(".footer");

// if (!window.matchMedia("(max-width: 768px)").matches) {
//   window.addEventListener("scroll", () => {
//     if (window.matchMedia("(max-width: 1920px)").matches) {
//       if (document.documentElement.scrollHeight - window.pageYOffset < 1200) {
//         header.style.bottom = `${footer.offsetHeight - 180}px`;
//         header.classList.add("stop");
//       } else {
//         header.classList.remove("stop");
//       }
//     }

//     if (window.matchMedia("(min-width: 1921px)").matches) {
//       if (document.documentElement.scrollHeight - window.pageYOffset < 1650) {
//         header.style.bottom = `${footer.offsetHeight - 220}px`;
//         header.classList.add("stop");
//       } else {
//         header.classList.remove("stop");
//       }
//     }

//     if (window.matchMedia("(max-width: 1440px)").matches) {
//       if (document.documentElement.scrollHeight - window.pageYOffset < 950) {
//         header.style.bottom = `${footer.offsetHeight - 140}px`;
//         header.classList.add("stop");
//       } else {
//         header.classList.remove("stop");
//       }
//     }

//     if (window.matchMedia("(max-width: 1240px)").matches) {
//       if (document.documentElement.scrollHeight - window.pageYOffset < 750) {
//         header.style.bottom = `${footer.offsetHeight - 110}px`;
//         header.classList.add("stop");
//       } else {
//         header.classList.remove("stop");
//       }
//     }
//   });
// }

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

const headerBurgerMobile = document.querySelector(".header__burger.mobile");
const headerMenu = document.querySelector(".header__menu.mobile");
const headerBurgerClose = document.querySelector(".header__menu-icon");

headerBurgerMobile.addEventListener("click", () => {
  blockScroll();
  headerMenu.classList.add("active");

});
headerBurgerClose.addEventListener("click", () => {
  unblockScroll();
  headerMenu.classList.remove("active");

});





const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector('.header__nav');
const headerNavLinks = document.querySelectorAll('.header__nav-link');
const headerBurgerIconFixed = document.querySelector('.header__burger-icon.fixed')

const headerLogoFixed = document.querySelector('.header__logo-icon.fixed')

headerInner.addEventListener('mouseover', ()=>{

  header.classList.add('unmix')
})
headerInner.addEventListener('mouseout', ()=>{

  header.classList.remove('unmix')
})

headerLogoFixed?.addEventListener('mouseover', ()=>{

  header.classList.add('unmix')
})
headerLogoFixed?.addEventListener('mouseout', ()=>{

  header.classList.remove('unmix')
})





window.addEventListener('scroll', ()=>{
  headerBurger.classList.remove('none');
  headerNav.classList.add('none');
  headerBurgerIconFixed?.classList.add('visible')
  
  header.classList.remove('unblend')

  headerBurgerIconFixed.style.top = `${headerBurger.getBoundingClientRect().top+1}px`
})

headerBurger.addEventListener('click', ()=>{
  
  headerBurgerIconFixed?.classList.remove('visible')
  headerBurger.classList.add('none');
  headerNav.classList.remove('none');
  
  header.classList.add('unblend')

})


if(window.matchMedia("(max-width: 768px)").matches){
  window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop != 0){
      header.classList.add('blur')
    }
    else{
      header.classList.remove('blur')

    }
  })
}






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

