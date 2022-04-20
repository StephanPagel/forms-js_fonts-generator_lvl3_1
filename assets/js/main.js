let fontFamily = document.getElementById('font_family');
let fontSize = document.getElementById('font_size');
let inputText = document.getElementById('input_text');
let output = document.getElementById('output_text');

function changeFontsSize() {
    output.style.fontFamily = fontFamily.value;
    output.style.fontSize = fontSize.value + 'px';
    output.innerHTML = inputText.value;
}