var registerInput = document.querySelectorAll('.register__wrapper input');
var lineRegisterInput = document.querySelectorAll('.register__wrapper .register__line--blue');
var submitInput = document.querySelector('.register__submit');
var myForm = document.querySelector('.register__form');
registerInput.forEach((item,index)=>{
    item.addEventListener('focusin', function(){
      console.log(lineRegisterInput[index])
      lineRegisterInput[index].style.animation = "fullWidth 0.2s ease-in forwards"
    })
})

registerInput.forEach((item,index)=>{
  item.addEventListener('focusout', function(){
    lineRegisterInput[index].style.animation = ""
  })
})

submitInput.addEventListener('click', function(event){
  console.log(event.target)
  console.log('Submit button clicked!');
})

document.getElementById('register__form').addEventListener('submit', function(event){
    const name = document.querySelector('.register__form__username').value;
   
    const email = document.querySelector('.register__form__email').value;
    const password = document.querySelector('.register__form__password').value;
    const repassword = document.querySelector('.register__form__repassword').value;
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(repassword)
    console.log(1)
    // Simple validation (can be expanded as needed)
    if (name === '' || email === '' ||password === '' || repassword === '') {
        console.log('Please fill out all fields.');
        return;
    }
})
