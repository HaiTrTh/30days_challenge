
const APIKey = "60a2384e8cef442aa4d61122241608"
const city = 'London'
const url = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`
fetch(url)
  .then(response => response.json())
  .then(data=> {
    renderInfo(data)
  })
  .catch(error => console.log(error))

  let weatherLocation = document.querySelector('.weather__location')
  let weatherDateTime = document.querySelector('.weather__dateTime') 
  let weatherTemperature = document.querySelector('.weather__temperature') 
  let weatherState = document.querySelector('.weather__state')
  let weatherVision = document.querySelector('.weather__vision p')
  let weatherWind = document.querySelector('.weather__wind p')
  let weatherLight = document.querySelector('.weather__light p')
  
  console.log(weatherLocation)
  console.log(weatherDateTime)
  console.log(weatherTemperature)
  console.log(weatherState)
  console.log(weatherVision)
  console.log(weatherWind)
  console.log(weatherLight)

  function renderInfo(data){
    weatherLocation.textContent = data.location.name;
    weatherDateTime.textContent = data.location.localtime
    weatherTemperature.textContent = data.current.temp_c
    weatherState.textContent = data.condition.text
    weatherVision.textContent = data.vis_miles
    weatherWind.textContent = data.wind_mph
    weatherLight.textContent = data.cloud
  }