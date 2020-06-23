import home from './homePage.js';
import history from './historyPage.js';

function wipe(){
    let prev = container.querySelector('div');
    container.removeChild(prev);
}

let tabdiv = document.createElement('div');
tabdiv.style.display = 'grid';
tabdiv.style.gridTemplateColumns = '50px 50px';
let hometab = document.createElement('h1');
hometab.addEventListener('click', ()=>{wipe(); home.loadPage()});
hometab.style.gridColumns = "1/2";
tabdiv.appendChild(hometab);

let historytab = document.createElement('h1');
historytab.addEventListener('click', ()=>{wipe(); history.loadPage()});
historytab.style.gridColumns = "2/3";
tabdiv.appendChild(historytab);
let container = document.querySelector('#content');
container.appendChild(tabdiv);



home.loadPage();
