var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')


function showError(input, message){
  let parent = input.parentElement;
  let small = parent.querySelector('small')

  parent.classList.add('error')
  small.textContent = message
}

function showSuccess(input){
  let parent = input.parentElement;
  let small = parent.querySelector('small')

  parent.classList.remove('error')
  small.textContent = ""
}

function checkErrorSubmit(listInput){
  let isEmptyError = false;
  listInput.forEach(function(input){
      input.value = input.value.trim();
      if(!input.value){
        isEmptyError = true;
        showError(input,"Ko duoc de trong")
      }
      else{
        showSuccess(input)
      }

  })
  return isEmptyError
}

function checkEmailError(input){
  const regex = 
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim();
  let isEmailError = !regex.test(input.value)
  if(regex.test(input.value)){
    showSuccess(input)
  }
  else{
    showError(input,"Email Invalid")
  }
  return isEmailError
}

function checkLengthError(input, max, min){

  input.value = input.value.trim();

  if(input.value.length < min){
    showError(input,`Khong duoc it hon ${min} ky tu`)
    return true;
  }

  if(input.value.length > max){
    showError(input,`Khong duoc vuot qua ${max} ky tu`)
    return true;
  }
  return false;
}
function checkMatchPasswordError(passwordInput,cfPasswordInput){
    if(passwordInput.value != cfPasswordInput.value){
        showError(cfPasswordInput,"Password ko trung khop")
        return true;
    }
    return false;
}

form.addEventListener('submit',function(e){
    e.preventDefault();
   
    let isEmptyError =  checkErrorSubmit([username,email,password,confirmPassword]);
    let isEmailError = checkEmailError(email);
    let isUsernameLengthError = checkLengthError(username,10,3)
    let isPasswordLengthError = checkLengthError(password,10,3);
    let isMatchPasswordError = checkMatchPasswordError(password,confirmPassword)
    if(isEmptyError|| isEmailError ||  isUsernameLengthError|| isPasswordLengthError|| isMatchPasswordError){
      // don't do anything.
    }
    else{
      // call API, services
    }
})