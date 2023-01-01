const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f6b8ca021cmsh7225e16a4800de6p1a09a3jsn98f1b3b780cc',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


function getWeather(city) {
    return fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error("Invalid weather location")
    })
}


submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeatherByCity(city.value)
    console.log(document.getElementById(city));
})

getWeatherByCity("Rourkela")

function getWeatherByCity(city) {
    getWeather(city).then((response) => {
        cityName.innerHTML = city;
        result.style = "display:block"
        not_found.style = "display: none"

        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
    }).catch(err => {
        result.style = "display:none"
        not_found.style = "display: block"
    })
}


getWeather("Bisra").then((response) => {
    feels_like1.innerHTML = response.feels_like
    humidity1.innerHTML = response.humidity
    max_temp1.innerHTML = response.max_temp
    min_temp1.innerHTML = response.min_temp
    sunrise1.innerHTML = response.sunrise
    sunset1.innerHTML = response.sunset
    temp1.innerHTML = response.temp
    wind_degrees1.innerHTML = response.wind_degrees
    wind_speed1.innerHTML = response.wind_speed
}).catch(err => {
})

getWeather("Bhubaneswar").then((response) => {
    feels_like2.innerHTML = response.feels_like
    humidity2.innerHTML = response.humidity
    max_temp2.innerHTML = response.max_temp
    min_temp2.innerHTML = response.min_temp
    sunrise2.innerHTML = response.sunrise
    sunset2.innerHTML = response.sunset
    temp2.innerHTML = response.temp
    wind_degrees2.innerHTML = response.wind_degrees
    wind_speed2.innerHTML = response.wind_speed
}).catch(err => {
})



