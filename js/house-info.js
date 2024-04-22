
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

const swiperPreview = new Swiper('.swiper-preview', {

    slidesPerView: 1,

    breakpoints: {
    
    
      768: {
        slidesPerView: 1,
    
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
      }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
    
      navigation: {
        nextEl: '.swiper-button-next.mobile',
        prevEl: '.swiper-button-prev.mobile',
      },
    
    
  })
const swiperPreviewMobile = new Swiper('.swiper-preview-pagination', {

    slidesPerView: 1.15,
    centeredSlides: true,
    slideToClickedSlide: true,
   
  })

  const imgsHouse = document.querySelectorAll('.swiper__preview-img');
  const imgsHousePagination = document.querySelectorAll('.swiper-preview .swiper-pagination-bullet');

  if(window.matchMedia("(min-width: 769px)").matches){
    for(let i = 0; i < imgsHouse.length; i++){
      let previewImg = imgsHouse[i].src.split('/')[imgsHouse[i].src.split('/').length - 1];
      console.log(previewImg)
      imgsHousePagination[i].style.background = `url('../img/${previewImg}')`
    }
  }



  if(window.matchMedia("(max-width: 768px)").matches){
   


    swiperPreviewMobile.on('slideChange', function () {
      swiperPreview.slideTo(swiperPreviewMobile.realIndex)

    });
    swiperPreview.on('slideChange', function () {
      swiperPreviewMobile.slideTo(swiperPreview.realIndex)

    });
  }

  new WOW().init();

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
