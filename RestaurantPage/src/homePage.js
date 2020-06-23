export function loadPage(){
    let container = document.querySelector('#content');
    let div=document.createElement('div');
    let header = document.createElement('h2');
    let image = document.createElement('img');
    image.src = "https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg";
    header.textContent="Lucciano's Vegan Italian Restaurant";
    let p = document.createElement('p');
    p.textContent="Lorem Ipsem";
    div.appendChild(header);
    div.appendChild(image);
    div.appendChild(p);
    container.appendChild(div);
}
