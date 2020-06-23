export function loadPage(){
    let container = document.querySelector('#content');
    let prev = container.querySelector('div');
    container.removeChild(prev);
    let div=document.createElement('div');    
    let header = document.createElement('h1');
    let image = document.createElement('img');
    image.src = "https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg";
    header.textContent="Our Storied History";
    let p = document.createElement('p');
    p.textContent="Lucciano studied abroad in Italy his Junior year of college. His trip having been cut short by a global pandemic, Luciano opened this.";
    div.appendChild(header);
    div.appendChild(image);
    div.appendChild(p);
    container.appendChild(div);

}
