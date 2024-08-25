var switchBtn = document.getElementById('switch-light__dark')
switchBtn.addEventListener('click', function(){
  document.querySelector('.content__heading').classList.toggle('dark')
  document.querySelector('.content__body').classList.toggle('dark')
  document.querySelector('.content__body__title').classList.toggle('dark')
  document.querySelector('.content__body__paragraph').classList.toggle('dark')
  document.querySelector('.content__body__btn').classList.toggle('dark')
  document.body.classList.toggle('dark')
})
