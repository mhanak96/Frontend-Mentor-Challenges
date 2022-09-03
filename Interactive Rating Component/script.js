'use strict'

const rats = document.querySelectorAll('.rat');
const submit = document.querySelector('.btn-submit');

const cRait = document.querySelector('.card-rating');
const cRes = document.querySelector('.card-result');

const result = document.querySelector('.result');



rats.forEach(rat => {
    rat.addEventListener('click', function(){
        rats.forEach(ratr =>{
            ratr.classList.remove('choice');
        })
        rat.classList.add('choice')
    })
})

submit.addEventListener('click', function(){
    cRait.classList.add('hidden');
    cRes.classList.remove('hidden');

    let choice = document.querySelector('.choice').textContent;

    result.textContent = `You selected ${choice} out of 5`;

})