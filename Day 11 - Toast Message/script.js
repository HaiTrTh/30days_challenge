
function showSuccess(){
  toast({
    title:"Success",
    message: "This is success message",
    type : "success",
    duration : 3000
  })
}
function showWarning(){
  toast({
    title:"Warning",
    message: "This is warning message",
    type : "warning",
    duration : 3000
  })
}
function showError(){
  toast({
    title:"Error",
    message: "This is error message",
    type : "error",
    duration : 3000
  })
}

function toast({title="Success", message="This is the success message",type="success", duration =3000}){
     const main = document.getElementById("main");
     const div = document.createElement("div");
     const icons = {
        success: "fa-solid fa-circle-check",
        warning : "fa-solid fa-triangle-exclamation",
        error : "fa-solid fa-xmark"
     }
     const icon = icons[type];
     div.classList.add('toast', `toast--${type}`)
     const delay = (duration/1000).toFixed(2)
     div.style.animation = `slideIn 1s ease-in forwards, slideOut 1s ${delay}s ease-in forwards`;
     div.innerHTML = `
          <i class="${icon}"></i>
          <h5>${message}</h5>
     ` 
    main.appendChild(div)
    setTimeout(function(){
      main.removeChild(div)
    },duration + 2000)
}  
