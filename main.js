let menuIcon = document.querySelector('.fa-bars'); // Ícone de hambúrguer
let closeIcon = document.querySelector('.fa-xmark'); // Ícone de fechar
let navbar = document.querySelector('.navbar');

// Alternar visibilidade do menu
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
};

closeIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
};

// Scroll: Alterar links ativos
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Remover navbar ao clicar em um link
navLinks.forEach((link) => {
    link.onclick = () => {
        navbar.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    };
});
