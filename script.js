const cityInput= document.getElementById('cityInput');
const searchBtn=document.getElementById('searchBtn');
const temperature=document.getElementById('degree');
const weatherIcon=document.getElementById('icon');
const humidity=document.getElementById('humidity')
const feelsLike=document.getElementById('feelsLike');
const windSpeed=document.getElementById('windSpeed');
const cityName=document.getElementById('cityName');
const condition = document.getElementById("condition");


searchBtn.addEventListener('click',function(){
    const city=cityInput.value.trim();
    if(city===""){
        alert ("Please Enter Any Place");
        return;
    }
getWeather(city);

getForecast(city);
})
async function getWeather(city) {
    const today=new Date();
document.getElementById("date").textContent=today.toDateString();
    const apiKey="86cc98e6beb212e92f863752899db4af";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response=await fetch(url);
    const data=await response.json();
    // cityName.textContent="Loading..."
    
cityName.textContent=data.name;
temperature.textContent=`${Math.round(data.main.temp)}°C`;
humidity.textContent=`${data.main.humidity}%`;
windSpeed.textContent=`${data.wind.speed}km/h`;
feelsLike.textContent=`${Math.round(data.main.feels_like)}°C`;
condition.textContent = data.weather[0].main;
weatherIcon.src =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

} 
async function getForecast(city){
    const apiKey="86cc98e6beb212e92f863752899db4af";
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
const response= await fetch(url);
const data=await response.json();
const forecast=document.getElementById("forecast")
forecast.innerHTML="";

const dailyForecast=[];
data.list.forEach(function(item){
    const date=item.dt_txt.split(" ")[0];
    // const time=item.dt_txt.split(" ")[1];
if(!dailyForecast.some(function(day){
    return day.date===date;
})) {       dailyForecast.push({
            date: date,
            temperature: item.main.temp,
            icon: item.weather[0].icon,
            // condition: item.weather[0].main
        });
    }
        });

console.log(dailyForecast);
    
dailyForecast.forEach(function(day) {
    const card = document.createElement("div");
    card.classList.add("day-card");
    const date=new Date(day.date);
    const dayName=date.toLocaleDateString("en-US",{weekday:"short"})
    card.innerHTML = ` <h5 class="day-p">${dayName}</h5> <img class="day-img"
            src="https://openweathermap.org/img/wn/${day.icon}@2x.png">  
              <p class="p4">${Math.round(day.temperature)}°C</p>`;
    forecast.appendChild(card);

});
}
