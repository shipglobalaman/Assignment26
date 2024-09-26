const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url("${imgLink}")`; 
    imageView.textContent="";
    imageView.style.border=0;
  
}
dropArea.addEventListener("dragover",function(e){
 e.preventDefault();
});
dropArea.addEventListener("drop",function(e){
    e.preventDefault();
    inputFile.files=e.dataTransfer.files ;
    uploadImage();
});
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

let timeoutId;

menuIcon.addEventListener('mouseenter', () => {
    timeoutId = setTimeout(() => {
        sidebar.classList.add('open');
    }, 300); 
});

menuIcon.addEventListener('mouseleave', () => {
    clearTimeout(timeoutId);
});

sidebar.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
});

sidebar.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
        sidebar.classList.remove('open');
    }, 300); 
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});
