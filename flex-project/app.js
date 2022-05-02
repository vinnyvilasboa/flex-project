//////////////////////////////WEATHER SECTION//////////////////////////////////
let weather = {
    apiKey: "772a5938a64f5d0f8aa3e42401341db0",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        console.log(name, icon, description, temp)
        document.querySelector(".temp-city").innerHTML = "Weather in " + name + " is:";
        document.querySelector(".temp-degree").innerHTML = temp;
        document.querySelector(".temp-description").innerHTML = description;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}
//////////////////////////////JOKE SECTION//////////////////////////////////


const jokeBtn = document.querySelector(".joke-btn")
const jokeSection = document.querySelector(".joke-section")
async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    const data = await response.json();
    return data
}
async function handleClick(){
    const {joke} = await fetchJoke();
    jokeSection.textContent = joke;
}

jokeBtn.addEventListener("click", handleClick)


//////////////////////////////QUOTE SECTION//////////////////////////////////
const quotesBtn = document.querySelector(".quotes-btn");
const quotesSection = document.querySelector(".quotes-section");

// async function fetchQuotes () {
//     const response = await fetch("https://type.fit/api/quotes", { 
//         headers: {
//             Accept: "application/json",
//         },
//     })
//     const data = await response.json()
//     return data;

// }

// fetch("https://type.fit/api/quotes")
// .then(response=>response.json())
// .then(data=>{
//     var randomIndex = Math.floor(Math.random()*data.length);
//     document.getElementById("set").innerHTML = data[randomIndex].text;
// });
//pull random quote from array 
async function fetchQuotes () {
await fetch("https://type.fit/api/quotes")
  .then(response=> response.json())
  .then(data => {
      let randomQuote = Math.floor(Math.random()*data.length);
      console.log(randomQuote)
      document.querySelector(".quotes-section").innerHTML = data[randomQuote].text;
      
  });
}
// async function handleClick(){
//     const {text} = await fetchQuotes();
//     quotesSection.textContent = text[0];
//     console.log(text)
// }

// quotesBtn.addEventListener("click", handleClick)


// fetchQuotes()

// async function handleClick(){
//     const {text, author} = await fetchQuotes();
//     quotesSection.textContent = text[0];
// }

// quotesBtn.addEventListener("click", handleClick)



// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
// })


//////////////////////////////MAIN BUTTON//////////////////////////////////

document.querySelector('.search button').addEventListener("click", function () {
    weather.search();
})

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });
//////////////////////////////MAIN BUTTON//////////////////////////////////
