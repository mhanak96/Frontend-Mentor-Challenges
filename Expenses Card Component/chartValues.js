['use strict']

const costs = document.querySelectorAll('.cost');
const charts = document.querySelectorAll('.chart-element');

chartListen(charts);

// add event listener on every chart click + hidding all clicked items (if such exsist) and
// showing the clicked one
function chartListen(charts){
   for(let i = 0; i < charts.length; i++){
    charts[i].addEventListener('click', function(){
      for(let j = 0; j < costs.length; j++){
        costs[j].classList.add('hidden');
      }
        costs[i].classList.remove('hidden');
    });

   }

}
