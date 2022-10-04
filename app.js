const randomColorHex = () => {
    let c = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' +c.slice(0,6);
}

const data = document.getElementById('enter');
const btn = document.querySelector('.btn');
const btnEnter = document.getElementById('btnEnter');

btn.addEventListener('click', bgRandom);
btnEnter.addEventListener('click', valorColor);
 
function bgRandom  () {
    let bgColor = randomColorHex();
    btn.style.background = bgColor;
    btn.innerText = bgColor;
    data.value = bgColor;
}
function valorColor () {
    let valor = data.value;
    btn.style.background = valor;
    btn.innerText = valor;
}

