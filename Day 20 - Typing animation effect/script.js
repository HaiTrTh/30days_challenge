// document.addEventListener('DOMContentLoaded', () => {
//   const text = "Hello, this is a typing animation";
//   const typingTextElement = document.querySelector('.typing-text');
//   let index = 0;
  
//   function typeLetter() {
//     if(index < text.length){
//       typingTextElement.textContent += text.charAt(index);
//       index++;
//       setTimeout(typeLetter, 100);
//     }
//   }
//   typeLetter();
// })

// document.addEventListener('DOMContentLoaded', () =>{
//   const text = "Hello, this is a typing animation";
//   const typingTextElement = document.querySelector('.typing-text');
//   let index = 0;
//   function typeLetter(){
//     if(index < text.length){
//       typingTextElement.textContent +=text.charAt(index);
//       index++;
//       setTimeout(typeLetter,100)
//     }
//   } 
//   typeLetter();
// })
// document.addEventListener('DOMContentLoaded',() => {
//   const text ="Hello, this is a typing animation";
//   const typingTextElement = document.querySelector('.typing-text');
//   let index = 0;
//   function typeLetter() {
//     if(index < text.length){
//       typingTextElement.textContent += text.charAt(index);
//       index++;
//       setTimeout(typeLetter,100);
//     }
//   }
//   typeLetter();

// })

document.addEventListener("DOMContentLoaded", () => {
  let text = "This is the typing text effect"
  let textParagraph = document.querySelector('.typing-text')
  
  let index = 0;
  let isDeleting = false;
  function typingAndDelete(){
    if(!isDeleting){
        textParagraph.textContent += text.charAt(index);
        index++;
        if(index === text.length){
          isDeleting = true;
          setTimeout(typingAndDelete,1000);
        }
        else{
          setTimeout(typingAndDelete, 100);
        }
    }
    else{
        textParagraph.textContent = text.substring(0, index-1);
        index--;
        if(index === 0){
          isDeleting = false;
          setTimeout(typingAndDelete,1000);
        }
        else{
          setTimeout(typingAndDelete,40);
        }

    }
  }
  typingAndDelete();
})