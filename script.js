const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


// single product 
var MainImg = document.getElementById("MainImg");
var small_img = document.getElementsByClassName("small-img");


small_img[0].onclick = function() {
MainImg.src = small_img[0].src;
}
small_img[1].onclick = function() {
MainImg.src = small_img[1].src;
}
small_img[2].onclick = function() {
MainImg.src = small_img[2].src;
}
small_img[3].onclick = function() {
MainImg.src = small_img[3].src;
}

