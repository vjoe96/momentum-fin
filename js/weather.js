const API_KEY = "94c6c833842cd6e750d94f69861815e3";
const checkLat = localStorage.getItem("lat");
const checkLng = localStorage.getItem("lng");

function savedWeather() {
    const lat = checkLat;
    const lng = checkLng;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather");
            const weather = weatherContainer.querySelector("span:first-child");
            const city = weatherContainer.querySelector("span:last-child");
            const name = data.name;
            weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
            city.innerText = data.name;
        });
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather");
            const weather = weatherContainer.querySelector("span:first-child");
            const city = weatherContainer.querySelector("span:last-child");
            const name = data.name;
            weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
            city.innerText = data.name;
            localStorage.setItem("lat", lat);
            localStorage.setItem("lng", lng);
        });
}
function OnGeoError() {
    alert("Can't get your location!");
}
if (checkLat === null || checkLng === null) {
    navigator.geolocation.getCurrentPosition(onGeoOk, OnGeoError);
} else {
    savedWeather();
}
