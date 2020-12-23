let foto;
window.onload = function(){
    foto = new Foto();
}

function selectImage(){
    document.getElementById("foto-file").click();
}

function makeGrayScale() {
    foto.grayscale();
}

function makeBright() {
    foto.makeBright();
}

function makeDark() {
    foto.makeDark();
}

function makeBlur() {
    foto.makeBlur();
}

function makeEmboss() {
    foto.applyEmbossFilter();
}

function makeSharp() {
    foto.applySharpFilter();
}

function download(){
    foto.export();
}

function openColorpicker(){
    document.getElementById("color-picker").click();
}

function makeColorize(elem){
    let color = elem.value;
    foto.colorize(color);
}

function openColorFilterPicker(){
    document.getElementById("colorize-color-picker").click();
}

function applyColorFilter(elem){
    let color = elem.value;
    foto.applyColorFilter(color);
}

function crop() {
    foto.cropSelected();
}

function flipVertically(){
    foto.flipVertically();
}

function rotate(elem){
    foto.rotate(elem.value)
}