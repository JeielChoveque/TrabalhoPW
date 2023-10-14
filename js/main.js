var  menu = document.querySelector('nav ul')
var menuBar = document.querySelector('nav .menu-icon')
var  IconMenu = document.querySelector('nav .menu-icon img')
menuBar.addEventListener('click',function(){
    if(IconMenu.getAttribute("src")=='imagens/menu.png'){
        IconMenu.setAttribute("src",'imagens/close.png')
    }
    else{
        IconMenu.setAttribute("src",'imagens/menu.png')
    }
     menu.classList.toggle('active')
})