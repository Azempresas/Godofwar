var swiper = new Swiper(".slide-characters", {
    slidesPerView: 3,
    spaceBetween: 19,
    freeMode: true,   
     
  });

var newImage = document.querySelector("#trocaImage");  

newImage.setAttribute('src', '/assets/logo.jpg');

console.log(newImage);
