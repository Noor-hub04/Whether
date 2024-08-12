const inputBox = document.querySelector("input");
const searchBtn = document.querySelector("button");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");
const eror = document.querySelector(".location-not-found");
const weather_body = document.querySelector("#weather-body");



async function checkweather(city){
    const API_key = "fafaac7bce4fd331d8a1a879dda87d36";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    const weather_data = await fetch(`${URL}`).then(response => response.json());

if(weather_data.cod === "404"){
eror.style.display = "flex";
weather_body.style.display = "none";
return;
}

eror.style.display = "none";
weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear':
            weather_img.src = "clear.png";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;
        case 'Smoke':
            weather_img.src = "smoke.jpg";
            weather_img.style.height = "200px"
            weather_img.style.object_fit = "cover"
            break;

    };
};


searchBtn.addEventListener("click",()=>{
    checkweather(inputBox.value);
});
