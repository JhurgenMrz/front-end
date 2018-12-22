const ipad =  window.matchMedia('screen and (max-width: 767px)');
const links = document.querySelectorAll('.link');
ipad.addListener(validation)


const menu = (document.querySelector('.menu'))
const burgerButton = document.querySelector('#burger-menu')


function validation(event){
    if(event.matches){
        burgerButton.addEventListener('click', function (){
            menu.classList.toggle('is-active');
        });
        Array.from(links).forEach( link=> { 
            link.addEventListener('click',hideShow)
          })
    }else{
        burgerButton.removeEventListener('click', function (){
            menu.classList.toggle('is-active');

    });
    console.log(event.matches);
}}
validation(ipad)

function hideShow(){
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
    }else{
        menu.classList.add('is-active');
    }
}
