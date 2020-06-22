export function loadPage(){
    let div = document.querySelector('#content');
    let header = document.createElement('h1');
    let image = document.createElement('img');
    image.src = "https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg";
    header.textContent="Lucciano's Vegan Italian Restaurant";
    let p = document.createElement('p');
    p.textContent="Lorem Ipsem";
    div.appendChild(header);
    div.appendChild(image);
    div.appendChild(p);
}
