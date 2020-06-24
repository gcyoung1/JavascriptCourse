let home = require('./homePage.js');
let history = require('./historyPage.js');

function wipe(){
    let prev = container.querySelector('div');
    container.removeChild(prev);
}


let body=document.querySelector('body');
let tabdiv = document.createElement('div');
tabdiv.style.display = 'grid';
tabdiv.style.gridTemplateColumns = '150px 150px';
let hometab = document.createElement('h1');
hometab.addEventListener('click', ()=>{
    wipe(); home.loadPage()});
hometab.style.gridColumns = "1/2";
hometab.textContent="Home";
tabdiv.appendChild(hometab);

let historytab = document.createElement('h1');
historytab.addEventListener('click', ()=>{
    wipe(); history.loadPage()});
historytab.style.gridColumns = "2/3";
historytab.textContent="History";
tabdiv.appendChild(historytab);
let container = document.querySelector('#content');
body.appendChild(tabdiv);



home.loadPage();
