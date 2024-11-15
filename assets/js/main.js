/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),

    closeMenu = document.getElementById('nav-close')

// SHOW


 



toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== MOUSEMOVE HOME IMG =====*/

function ShowSideBar(){
  const menu = document.querySelector('.menu-2');
  menu.style.display="flex"
}

function HideSideBar(){
    const menu = document.querySelector('.menu-2')
    menu.style.display="none"

}
        
