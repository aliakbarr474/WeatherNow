let btn = document.querySelector("button");

const getWeather = async ()=>{
    let city = document.getElementById("city").value;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=24966a87be1ae3b8e2a9517af64ac53f";
    
    console.log("Fetching Response");

    // .then(data=>{
    //     data.array.forEach(weather => {
    //         const disp = `<p>${weather.timezone}</p>`;
    //         document.querySelector('dispplay').insertAdjacentHTML('beforeend',disp);
    //     });
    // })

    let response = await fetch(url);
    let weather = await response.json();

    console.log(response);
    console.log(weather);

    let location =  weather["name"];
    let temp = weather["main"];
    const kelvin = temp['temp'];
    const kelvinMax = temp['temp_max'];
    const kelvinMin = temp['temp_min'];
    const kelvinFeelsLike = temp['feels_like'];
    
    const degree = Math.floor(kelvin-273.15);
    const degreeMax = Math.floor(kelvinMax-273.15);
    const degreeMin = Math.floor(kelvinMin-273.15);
    const feelsLike = Math.floor(kelvinFeelsLike-273.15);
    
    const weatherAPI = weather['weather'];
    const description = weatherAPI['0']['description'];

    document.getElementById("location").innerHTML = location;
    document.getElementById("temperature").innerHTML = degree + "°";
    document.getElementById("description").innerHTML = description;
    document.getElementById("feels_like").innerHTML = "Feels Like:" + feelsLike + "°";
    document.getElementById("max").innerHTML = "Max:" + degreeMax + "°";
    document.getElementById("min").innerHTML = "Min:" + degreeMin + "°";
}

btn.addEventListener("click",()=>{  
    getWeather();
    document.getElementById("city").value = '';
})

btn.onmouseover=()=>{
    btn.style.backgroundColor="white";
    btn.style.color="dodgerblue";
}

btn.onmouseleave=()=>{
    btn.style.backgroundColor="dodgerblue";
    btn.style.color="white";
}