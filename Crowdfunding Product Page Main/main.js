['use strict']

const primaryHeader = document.querySelector('.header');
const navToogle = document.querySelector('.mobile-nav-toogle');
const primaryNav = document.querySelector('.primary-nav__list');

const btnCta = document.querySelector('.btn-cta')
const modal = document.querySelector('.modal');

const modalBox =  document.querySelectorAll('.modal-box');
const modalPayment = document.querySelectorAll('.modal__payment');
const options = document.querySelectorAll('.modal__option');

const modalExit = document.querySelector('.modal__close');

const paymentBtns = document.querySelectorAll('.payment__button');
const succesModal = document.querySelector('.succes-modal');
const succesBtn = document.querySelector('.succes__button');

navToogle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') 
    ? navToogle.setAttribute('aria-expanded', false) 
    : navToogle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-over");
}); 


// modal toogle

btnCta.addEventListener('click', function(){
    modal.toggleAttribute("open");
    primaryHeader.toggleAttribute("data-over");
});

options.forEach(option => option.addEventListener('click', function(){
    
    modalBox.forEach(modal => modal.classList.remove('active'));
    modalPayment.forEach(payment => payment.classList.remove('pay-active'));

    let choice = option.getAttribute('choice');
    document.querySelector(`.${choice}`).classList.add('active');
    document.querySelector(`.${choice}p`).classList.add('pay-active');
}))

modalExit.addEventListener('click', function(){
    modal.toggleAttribute("open");
    primaryHeader.toggleAttribute("data-over");
});

paymentBtns.forEach(pay => pay.addEventListener('click', function(){
    modal.toggleAttribute("open");
    succesModal.toggleAttribute('show');
}))

succesBtn.addEventListener("click", function(){
    succesModal.toggleAttribute('show');
    primaryHeader.toggleAttribute("data-over");
})
