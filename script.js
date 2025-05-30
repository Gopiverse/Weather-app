// import { API_KEY } from './config.js'
const API_KEY = "2ad01f5b735e064bda95c1a39d90bf83";

let inputLoc = document.getElementById("city");
let inputTemp = document.getElementById("temperature");
let weatherDesc = document.getElementById("weather-info");
// let locElmt = document.getElementById("location");
let btn = document.getElementById("info-button");
let loc = inputLoc.value;

btn.onclick = async function weatherInfo() {

    let loc = inputLoc.value.trim();

    // if (loc === "") {
    //     alert("Please enter a location");
    // }

    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${loc}&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        document.querySelector('#location').innerHTML = data.name;
        document.querySelector('#weather-info').innerHTML = `Wind speed : ${data.wind.speed}`;
        document.querySelector('#temperature').innerHTML = data.main.temp;
        if (data.weather[0].main=="Rain") {
            document.getElementById('myImage').src = 'img/rain.svg'
       }
       else if (data.weather[0].main=="Clouds") {
            document.getElementById('myImage').src = 'img/cloud.svg'
       }
       else {
            document.getElementById('myImage').src = 'img/clear.svg'
       }
        
        inputLoc.value = '';

    } catch(error) {
        alert("Please enter a valid location");
    }
    
    
    
}




