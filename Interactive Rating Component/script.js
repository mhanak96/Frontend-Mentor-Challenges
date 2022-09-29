'use strict'

// selecting every rating circle and submit button
const ratCircle = document.querySelectorAll('.rat');
const submit = document.querySelector('.btn-submit');

// selecting two cards - one with rating circle and one the result card
const cRait = document.querySelector('.card-rating');
const cRes = document.querySelector('.card-result');

// span on the "card result" responsible for showing the "You selected X of 5" text. 
const result = document.querySelector('.result');


// adding event listener on click for each circle in html document
ratCircle.forEach(rat => {
    rat.addEventListener('click', function(){
        // every time you select circle it removes class 'choice' from everyc cirlce in the DOM 
        // to avoid a situation in which there are two circles selected
        ratCircle.forEach(ratr =>{
            ratr.classList.remove('choice');
        })
        // after we removed class 'choice' from every button, I added the class choice to button that was clicked
        rat.classList.add('choice')
    })
})

// when clicking the submit button I am hiding the "rating card" and showing the "result card"
submit.addEventListener('click', function(){
    cRait.classList.add('hidden');
    cRes.classList.remove('hidden');

    // I am declaring the choice variable which is getting the text content from selected circle for example 5.
    let choice = document.querySelector('.choice').textContent;

    // lastly I changed the result text message to contain my choice variable
    result.textContent = `You selected ${choice} out of 5`;

})