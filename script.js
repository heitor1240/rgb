// RGB
const rSlider = document.getElementById("r");
const gSlider = document.getElementById("g");
const bSlider = document.getElementById("b");
const rgbColorDisplay = document.getElementById("rgb-color");
const rgbValues = document.getElementById("rgb-values");

function updateRGB() {
    const r = rSlider.value;
    const g = gSlider.value;
    const b = bSlider.value;

    const rgbString = `rgb(${r}, ${g}, ${b})`;
    rgbColorDisplay.style.backgroundColor = rgbString;
    rgbValues.textContent = rgbString;
}

rSlider.addEventListener("input", updateRGB);
gSlider.addEventListener("input", updateRGB);
bSlider.addEventListener("input", updateRGB);

// CMYK
const cSlider = document.getElementById("c");
const mSlider = document.getElementById("m");
const ySlider = document.getElementById("y");
const kSlider = document.getElementById("k");
const cmykColorDisplay = document.getElementById("cmyk-color");
const cmykValues = document.getElementById("cmyk-values");

function updateCMYK() {
    const c = cSlider.value;
    const m = mSlider.value;
    const y = ySlider.value;
    const k = kSlider.value;

    // Convertendo CMYK para RGB
    const r = 255 * (1 - c / 100) * (1 - k / 100);
    const g = 255 * (1 - m / 100) * (1 - k / 100);
    const b = 255 * (1 - y / 100) * (1 - k / 100);

    const rgbString = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    cmykColorDisplay.style.backgroundColor = rgbString;

    const cmykString = `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
    cmykValues.textContent = cmykString;
}

cSlider.addEventListener("input", updateCMYK);
mSlider.addEventListener("input", updateCMYK);
ySlider.addEventListener("input", updateCMYK);
kSlider.addEventListener("input", updateCMYK);
