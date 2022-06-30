
let divvv = document.createElement("div");
divvv.setAttribute("class","cont1");
document.body.append(divvv);


async function main(){
    let res = await fetch("https://restcountries.com/v3.1/all");
    let result = await res.json();
    result.forEach((obj)=>{
        getcountriesinfo(obj);
    })
}

main();


async function getcountriesinfo(obj){
    let lat = obj.latlng[0];
    let lon = obj.latlng[1]; 
    let fin = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=241b93c307ef798a49aacb826cd2846b`);
    let final = await fin.json(); 
    let temp = document.createElement("div");
    temp.setAttribute("class", "cont2");
    temp.innerHTML = `
        <p style="text-align: center; background-color: black; color:white; margin-top: 0px; margin-bottom: 0px; font-size: 25px; padding: 5px"> ${obj.name.common}</p>
        <div class="i2">
            <img class="flag" src=${obj.flags.svg} alt=${obj.name.common} />
            <div id="secondcont">
                <h4>Data From RestCountries API</h4>
                <p><strong>Capital:</strong> ${obj.capital}</p>
                <p><strong>Region:</strong> ${obj.region}</p>
                <p class="lat"><strong>Lat:</strong> ${obj.latlng[0]}</p>
                <p class="long"><strong>Lng:</strong> ${obj.latlng[1]}</p>
                <p><strong>Country Code:</strong> ${obj.flag}</p>
                <div class="weatcont">
                    <h4>Data From OpenWeather API</h4>
                    <p><strong>Weather type:</strong> ${final.weather[0].main}</p>
                    <p><strong>Temperature:</strong> ${final.main.temp} degC</p>
                    <p><strong>Humidity:</strong> ${final.main.humidity} %</p>
                    <p><strong>Visibility:</strong> ${final.visibility} meter</p>
                    <p><strong>Wind Speed:</strong> ${final.wind.speed} meter/sec</p>
                </div>
            </div>
        </div>
    `
    document.querySelector(".cont1").append(temp);
}


