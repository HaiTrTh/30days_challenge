var result = document.querySelector('#result') 

document.addEventListener('mousemove', function(e){
    result.style.top = `${e.clientY}px`
    result.style.left = `${e.clientX}px`
})
