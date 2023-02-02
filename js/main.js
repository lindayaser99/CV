let to_top = document.getElementsByClassName('to-top');
window.onscroll = function(){
    if(window.scrollY >= 100){
        to_top[0].style.display = 'block';
    }else{
        to_top[0].style.display = 'none';
    }
}
/*top:window.innerHeight;*/
/*scrollBy*/
/*offeset*/
to_top[0].onclick = function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}
/*theme*/
let btn = document.getElementById('btn');
let theme = document.getElementById('theme-color');

btn.onclick = function (){
    theme.classList.toggle('show');
}

let spans = document.querySelectorAll('div#theme-color span');
let root = document.querySelector(':root');
spans.forEach(span => {
    span.onclick = function (){
        root.style.setProperty('--mainColor',span.dataset.color);
    }
});



let links = document.querySelectorAll('nav a');
let sections = document.querySelectorAll('section');
let header = document.querySelector('header');

window.onscroll = function(){
    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 200){
            
            
               
            
            links.forEach(link => {
                if(link.getAttribute('href') == '#'+section.getAttribute('id')){
                    link.style.background = 'var(--mainColor)';
                    header.style.background ='#5E5C5C';
                    
                }else{
                   
                    link.style.background = null;
                   header.style.background = ' ';
                    
                }
            });
        }
    });
}



