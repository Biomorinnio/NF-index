
const discloseIcon = document.querySelectorAll('.concept__bottom-descr svg.mobile');
const discloseList = document.querySelectorAll('.concept__bottom-content')

for(let i = 0; i < discloseIcon.length; i++){
    discloseIcon[i].addEventListener('click', ()=>{
        discloseIcon[i].classList.toggle('active')
        discloseList[i].classList.toggle('active')
    })
}