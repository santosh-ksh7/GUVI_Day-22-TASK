// let divvv = document.createElement("div");
// divvv.setAttribute("class","cont1");
// document.body.append(divvv);


// async function main(){
//     let res = await fetch("https://restcountries.com/v3.1/all");
//     let result = await res.json();
//     result.forEach((obj) => {
//         let temp = document.createElement("div");
//         temp.setAttribute("class", "cont2");
//         temp.innerHTML += `
//             <p style="text-align: center; background-color: black; color:white; margin-top: 0px; margin-bottom: 0px; font-size: 22px;"> ${obj.name.common}</p>
//             <div class="i2">
//                 <img class="flag" src=${obj.flags.svg} alt=${obj.name.common} />
//                 <div id="secondcont">
//                     <p><strong>Capital:</strong> ${obj.capital}</p>
//                     <p><strong>Region:</strong> ${obj.region}</p>
//                     <p class="lat"><strong>Lat:</strong> ${obj.latlng[0]}</p>
//                     <p class="long"><strong>Lng:</strong> ${obj.latlng[1]}</p>
//                     <p><strong>Country Code:</strong> ${obj.flag}</p>
//                 </div>
//             </div>
//         `
        // 
        // document.querySelector(".cont1").append(temp);
    //     let btn = document.createElement("button");
    //     btn.innerHTML= "Get Weather Info";
    //     // btn.addEventListener("click", `${weatherinfo(obj)}`);
    //     document.querySelector(".cont2").append(btn);
    // })
// }
// 

// async function weatherinfo(obj){
//     let lat = obj.latlng[0];
//     let lon = obj.latlng[1]; 
//     let fin = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=241b93c307ef798a49aacb826cd2846b`);
//     let final = await fin.json();
//     let temp1 = document.createElement("div");
//     temp1.setAttribute("class", "weatcont");
//     temp1.innerHTML=`
//         <p><strong>Weather type:</strong> ${final.weather[0].main}</p>
//         <p><strong>Temperature:</strong> ${final.main.temp} degC</p>
//         <p><strong>Humidity:</strong> ${final.main.humidity} %</p>
//         <p><strong>Visibility:</strong> ${final.visibility} meter</p>
//         <p><strong>Wind Speed:</strong> ${final.wind.speed} meter/sec</p>
//     `
//     document.querySelector(".secondcont").append(temp1);
// }




// main();






// async function run(){
//     let res = await fetch("https://restcountries.com/v3.1/all");
//     let result = await res.json();
//     result.forEach((obj)=>{
//         // let lat = obj.latlng[0];
//         // let long = obj.latlng[1];
//         let temp = document.createElement("div");
//         temp.setAttribute("class", "cont2");
//         temp.innerHTML += `
//             <p style="text-align: center; background-color: black; color:white; margin-top: 0px; margin-bottom: 0px; font-size: 22px;"> ${obj.name.common}</p>
//             <div class="i2">
//                 <img class="flag" src=${obj.flags.svg} alt=${obj.name.common} />
//                 <div id="secondcont">
//                     <p><strong>Capital:</strong> ${obj.capital}</p>
//                     <p><strong>Region:</strong> ${obj.region}</p>
//                     <p class="lat"><strong>Lat:</strong> ${obj.latlng[0]}</p>
//                     <p class="long"><strong>Lng:</strong> ${obj.latlng[1]}</p>
//                     <p><strong>Country Code:</strong> ${obj.flag}</p>
//                     <button class="qq" onclick="run1()">Show weather info</button>
//                     <div class="weatcont">
//                     </div>
//                 </div>
//             </div>
//         `
//         document.querySelector(".cont1").append(temp);
//         })      
// }



// async function run1(){
//     let lat = document.querySelector(".lat").innerHTML;
//     lat = lat.slice(5)
//     console.log(lat);
    // let fin = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=241b93c307ef798a49aacb826cd2846b`);
    // let final= await fin.json();
    // document.querySelector(".qq").style.display="none";
    // document.querySelector(".weatcont").innerHTML=`
    //     <p><strong>Weather type:</strong> ${final.weather[0].main}</p>
    //     <p><strong>Temperature:</strong> ${final.main.temp} degC</p>
    //     <p><strong>Humidity:</strong> ${final.main.humidity} %</p>
    //     <p><strong>Visibility:</strong> ${final.visibility} meter</p>
    //     <p><strong>Wind Speed:</strong> ${final.wind.speed} meter/sec</p>
    //     <button class="ww" onclick="run2()">Hide weather info</button>
    // `
// }





// run();









// let divvv = document.createElement("div");
// divvv.setAttribute("class","cont1");
// document.body.append(divvv);


// async function main(){
//     let res = await fetch("https://restcountries.com/v3.1/all");
//     let result = await res.json();
//     result.forEach((obj)=>{
//         getcountriesinfo(obj);
//     })
// }

// main();


// async function getcountriesinfo(obj){
//     let lat = obj.latlng[0];
//     let lon = obj.latlng[1]; 
//     let fin = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=241b93c307ef798a49aacb826cd2846b`);
//     let final = await fin.json(); 
//     let temp = document.createElement("div");
//     temp.setAttribute("class", "cont2");
//     temp.innerHTML = `
//         <p style="text-align: center; background-color: black; color:white; margin-top: 0px; margin-bottom: 0px; font-size: 22px;"> ${obj.name.common}</p>
//         <div class="i2">
//             <img class="flag" src=${obj.flags.svg} alt=${obj.name.common} />
//             <div id="secondcont">
//                 <p><strong>Capital:</strong> ${obj.capital}</p>
//                 <p><strong>Region:</strong> ${obj.region}</p>
//                 <p class="lat"><strong>Lat:</strong> ${obj.latlng[0]}</p>
//                 <p class="long"><strong>Lng:</strong> ${obj.latlng[1]}</p>
//                 <p><strong>Country Code:</strong> ${obj.flag}</p>
//                 <div class="weatcont">
//                     <p><strong>Weather type:</strong> ${final.weather[0].main}</p>
//                     <p><strong>Temperature:</strong> ${final.main.temp} degC</p>
//                     <p><strong>Humidity:</strong> ${final.main.humidity} %</p>
//                     <p><strong>Visibility:</strong> ${final.visibility} meter</p>
//                     <p><strong>Wind Speed:</strong> ${final.wind.speed} meter/sec</p>
//                 </div>
//                 <button onclick="c1()">Get weather info</button>
//             </div>
//         </div>
//     `
//     document.querySelector(".cont1").append(temp);
// }


// async function getweatherinfo(obj){
//     let lat = obj.latlng[0];
//     let lon = obj.latlng[1]; 
//     let fin = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=241b93c307ef798a49aacb826cd2846b`);
//     let final = await fin.json(); 

// }




// function c1(){
//     document.querySelector(".weatcont").style.display= "none";
// }




// async function getweatherinfo(obj){
//     let lat = obj.latlng[0];
//     let lon = obj.latlng[1]; 
//     let fin = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=241b93c307ef798a49aacb826cd2846b`);
//     let final = await fin.json(); 
//     document.querySelector(".weatcont").innerHTML=`
//         <p><strong>Weather type:</strong> ${final.weather[0].main}</p>
//         <p><strong>Temperature:</strong> ${final.main.temp} degC</p>
//         <p><strong>Humidity:</strong> ${final.main.humidity} %</p>
//         <p><strong>Visibility:</strong> ${final.visibility} meter</p>
//         <p><strong>Wind Speed:</strong> ${final.wind.speed} meter/sec</p>
//         <button class="ww" onclick="run2()">Hide weather info</button>
//     `
// }














































// let divvv = document.createElement("div");
// divvv.setAttribute("class","cont1");
// document.body.append(divvv);


// async function main(){
//     let res = await fetch("https://restcountries.com/v3.1/all");
//     let result = await res.json();
//     result.forEach((obj)=>{
//         getcountriesinfo(obj);
//     })
// }

// main();


// async function getcountriesinfo(obj){
//         let lat = obj.latlng[0];
//         let lon = obj.latlng[1]; 
        
//         let temp = document.createElement("div");
//         temp.setAttribute("class", "cont2");
//         temp.innerHTML = `
//             <p style="text-align: center; background-color: black; color:white; margin-top: 0px; margin-bottom: 0px; font-size: 22px;"> ${obj.name.common}</p>
//             <div class="i2">
//                 <img class="flag" src=${obj.flags.svg} alt=${obj.name.common} />
//                 <div id="secondcont">
//                     <p><strong>Capital:</strong> ${obj.capital}</p>
//                     <p><strong>Region:</strong> ${obj.region}</p>
//                     <p class="lat"><strong>Lat:</strong> ${obj.latlng[0]}</p>
//                     <p class="long"><strong>Lng:</strong> ${obj.latlng[1]}</p>
//                     <p><strong>Country Code:</strong> ${obj.flag}</p>
//                     <div class="weatcont"> </div>
//                     <button class="ll" onclick="getwete()">Get weather info</button>
//                 </div>
//             </div>
//         `
//         async function getwete(){
//             let fin = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=241b93c307ef798a49aacb826cd2846b`);
//             let final = await fin.json();
//             let temp1 = document.createElement("div");
//             temp1.setAttribute("class", "weatcont");
//             temp1.innerHTML=`
//                 <p><strong>Weather type:</strong> ${final.weather[0].main}</p>
//                 <p><strong>Temperature:</strong> ${final.main.temp} degC</p>
//                 <p><strong>Humidity:</strong> ${final.main.humidity} %</p>
//                 <p><strong>Visibility:</strong> ${final.visibility} meter</p>
//                 <p><strong>Wind Speed:</strong> ${final.wind.speed} meter/sec</p>
//             `
//         }
//         document.querySelector(".cont1").append(temp);
    // let btn = document.createElement("button");
    // document.querySelector("#secondcont").append(btn);
    // btn.innerHTML="Get weather info";
        
// }


// async function getwe(lat,lon){
//     let fin = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=241b93c307ef798a49aacb826cd2846b`);
//     let final = await fin.json(); 

//     divvv.querySelector(".weatcont").innerHTML=`
//         <p><strong>Weather type:</strong> ${final.weather[0].main}</p>
//         <p><strong>Temperature:</strong> ${final.main.temp} degC</p>
//         <p><strong>Humidity:</strong> ${final.main.humidity} %</p>
//         <p><strong>Visibility:</strong> ${final.visibility} meter</p>
//         <p><strong>Wind Speed:</strong> ${final.wind.speed} meter/sec</p>
//     `
// }



// function c1(){
//     let target = document.querySelector(".weatcont");
//     target.style.display = "block";
// }



















// let divvv = document.createElement("div");
// divvv.setAttribute("class","cont1");
// document.body.append(divvv);



// async function run(){
//     let res = await fetch("https://restcountries.com/v3.1/all");
//     let result = await res.json();
//     result.forEach((obj) => {
//         let temp = document.createElement("div");
//         temp.setAttribute("class", "cont2");
//         temp.innerHTML += `
//             <p style="text-align: center; background-color: black; color:white; margin-top: 0px; margin-bottom: 0px; font-size: 22px;"> ${obj.name.common}</p>
//             <div class="i2">
//                 <img class="flag" src=${obj.flags.svg} alt=${obj.name.common} />
//                 <div id="secondcont">
//                     <p><strong>Capital:</strong> ${obj.capital}</p>
//                     <p><strong>Region:</strong> ${obj.region}</p>
//                     <p class="lat"><strong>Lat:</strong> ${obj.latlng[0]}</p>
//                     <p class="long"><strong>Lng:</strong> ${obj.latlng[1]}</p>
//                     <p><strong>Country Code:</strong> ${obj.flag}</p>
//                     <button>Get weather info</button>
//                 </div>
//             </div>
//         `
//     })
// }

// run();



































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


