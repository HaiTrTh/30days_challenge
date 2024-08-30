
var mirror = document.getElementById("mirror")
var imgs = document.querySelectorAll('.img-wraper .img')
imgs.forEach((img) => {
    img.addEventListener('mousemove', function(e){
        
        var imgSrc = this.getAttribute('src');
        console.log(imgSrc);
        // console.log()
        let w = this.offsetWidth
        let h = this.offsetHeight
    
        let mouseMoveOffsetImgWidth = e.pageX - this.offsetLeft;
        let mouseMoveOffsetImgHeight = e.pageY - this.offsetTop;
        // console.log(mouseMoveOffsetImgWidth)
        // console.log(mouseMoveOffsetImgHeight)
        let left = [(mouseMoveOffsetImgWidth / w) * 100]  
        let top = [(mouseMoveOffsetImgHeight / h) * 100]  
        
         mirror.style.backgroundImage = `url(${imgSrc})`
         mirror.style.backgroundPositionX = `${left}% `
         mirror.style.backgroundPositionY = `${top}% `

         mirror.style.top = `${e.pageY}px`;
         mirror.style.left = `${e.pageX}px`;

    })
})