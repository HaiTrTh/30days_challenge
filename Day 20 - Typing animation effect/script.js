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

document.addEventListener("DOMContentLoaded", () =>{
  const text = "Hello, this is a typing animation";
  const typingTextElement = document.querySelector(".typing-text");
  let index = 0;
  function typeLetter(){
    if(index < text.length){
      typingTextElement.textContent  += text.charAt(index);
      index++;
      setTimeout(typeLetter,100)
    }
  }
  typeLetter();
})