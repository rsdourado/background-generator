const body = document.getElementById("body");
const colorInput1 = document.getElementById("color1");
const colorInput2 = document.getElementById("color2");
const cssDisplay = document.getElementById("cssDisplay");
const copyLink = document.getElementById("copy");
const randomButton = document.getElementById("randomButton");

const chgBgColor = () => {
    let color1 = colorInput1.value;
    let color2 = colorInput2.value;
    body.style.background = "linear-gradient(to right, " + color1 + " , " + color2 + ")";
}

document.addEventListener("DOMContentLoaded", chgBgColor);
colorInput1.addEventListener("input", chgBgColor);
colorInput2.addEventListener("input", chgBgColor);


const printCSSBg = () => {
    cssDisplay.textContent = "background: " + body.style.background + ";";
}

document.addEventListener("DOMContentLoaded", printCssBg);
colorInput1.addEventListener("input", printCssBg);
colorInput2.addEventListener("input", printCssBg);

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = cssDisplay.innerHTML;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

copyLink.addEventListener("click", copyToClipboard);

// Click on the random button to generate two random colors.

const randomize = () => {
    const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
    let color1 = "rgba("+getRandomInt(255)+","+getRandomInt(255)+","+getRandomInt(255)+")";
    let color2 = "rgba("+getRandomInt(255)+","+getRandomInt(255)+","+getRandomInt(255)+")";
    body.style.background = `linear-gradient(to right, ${color1} , ${color2})`;

}

randomButton.addEventListener("click", randomize);
randomButton.addEventListener("click", printCssBg);