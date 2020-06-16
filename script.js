const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


const navSlide = () => {
    const navBar = document.querySelector('.navBar');
    const navMenu = document.querySelector('.navMenu');
    const menuLinks = document.querySelectorAll('.navMenu li');

    navBar.addEventListener('click', () => {
        //toggle mobile nav
        navMenu.classList.toggle('navMenu-active');
        
        //animate mobile menu 
        
        menuLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navMenuFade 0.5s ease forwards ${index / 7 + .8}s`;
            }
        });

        //animate mobile-nav 
        navBar.classList.toggle('navBarToggle');
    });
}

navSlide();