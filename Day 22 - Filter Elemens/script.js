document.addEventListener("DOMContentLoaded" ,function(){
  const buttons = document.querySelectorAll('.container__btn button')
  const images = document.querySelectorAll('.img__wrapper img')
  
  buttons.forEach((button,index)=> {
    if(button.getAttribute ==="all"){
      images.forEach(function(image){
        image.style.display = "block";
      })
    }
    button.addEventListener('click', function(){
      const category = this.getAttribute('data-category');
      images.forEach(function(image){
        const imageCategory = image.getAttribute('data-category');
        if(category==="all" || category === imageCategory )
          { 
            image.style.display = "block"
          }
          else{
            image.style.display = "none"
    
          }
      })
    })
  })
})