document.addEventListener('keydown',function(event){
  
   document.querySelector('.btn-key').classList.add('hide')
   document.querySelector('.key').classList.remove('hide')
   document.querySelector('.key__info p:nth-child(2)').innerHTML = event.key
   document.querySelector('.key__locations p:nth-child(2)').innerHTML = event.location
   document.querySelector('.key__which p:nth-child(2)').innerHTML = event.keyCode
   document.querySelector('.key__code p:nth-child(2)').innerHTML = event.code
   if(event.key == " "){
      document.querySelector('.key__info p:nth-child(2)').innerHTML = "Space"
   }
   if(event.key == "Unidentified"){
      document.querySelector('.key__code p:nth-child(2)').innerHTML = "Unidentified"
   }
})