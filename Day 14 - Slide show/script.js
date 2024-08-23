let slideIndex = 0;
const listImage = document.querySelectorAll(".image")
const buttonNextImage = document.querySelector('.image__arrow-next')
const buttonPreviousImage = document.querySelector('.image__arrow-previous')


function showSlide(slideIndex) {
  listImage.forEach((slide,index) => {
      slide.style.display = "none";
      slide.classList.remove("show")
  })
  listImage[slideIndex].style.display = "block";
  listImage[slideIndex].classList.add("show")
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % listImage.length ;
    showSlide(slideIndex);
}
function previousSlide() {
    slideIndex = (slideIndex -1 + listImage.length) % listImage.length;
    showSlide(slideIndex);
}

buttonNextImage.addEventListener('click', nextSlide)
buttonPreviousImage.addEventListener('click', previousSlide)

// setInterval(nextSlide,4000)

showSlide(slideIndex);

const listWrapperImage = document.querySelectorAll('.image-wrapper')
listWrapperImage.forEach((imageWraper,index)=>{
  imageWraper.addEventListener('click', function(){
      showSlide(index);
  })
})