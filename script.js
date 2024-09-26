const colorInput1 = document.getElementById('colorInput1');
const colorOverlay1 = document.getElementById('colorOverlay1');

const colorInput2 = document.getElementById('colorInput2');
const colorOverlay2 = document.getElementById('colorOverlay2');

colorInput1.addEventListener('input', function () {
    const selectedColor = colorInput1.value;
    colorOverlay1.style.backgroundColor = selectedColor;
});

colorInput2.addEventListener('input', function () {
    const selectedColor = colorInput2.value;
    colorOverlay2.style.backgroundColor = selectedColor;
});
