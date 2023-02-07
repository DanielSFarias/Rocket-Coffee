const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');
    
    nav.classList.toggle('active');
    header.classList.toggle('active');
    
}

btnMobile.addEventListener ('click', toggleMenu);