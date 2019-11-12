const qs = e => document.querySelector(e)

let url = 'https://api.openweathermap.org/data/2.5/weather?'
let apiKey = 'APPID=281ebdcd59ed51cf8ad5380190437020'

const getWeather = async () => {
  const zipCode = qs('input.zipInput').value
  const resp = await fetch(`${url}zip=${zipCode}&${apiKey}&units=imperial`)
  const weatherData = await resp.json()
  displayData(weatherData)
}

const displayData = weatherData => {
  qs('.temp').textContent = 'Temperature: ' + weatherData.main.temp + '°'
  qs('.conditions').textContent =
    'Conditions: ' + weatherData.weather[0].description
}

qs('.getWeather').addEventListener('click', getWeather)
