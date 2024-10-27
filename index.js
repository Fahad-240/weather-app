function weatherData() {
    let city = document.getElementById("inputCity").value;
    axios.get(`https://api.weatherapi.com/v1/current.json?key=d347dfb1a00b4f86add45435242510&q=${city}`)
        .then(function (response) {

            console.log(response.data);
            let data = response.data;
            let location = data.location.name;
            document.getElementById("loc").innerText = "location: " + `${location}`;

            let fahrenhiet = data.current.temp_c;
            document.getElementById("fah").innerText = " Fahrenhiet: " + `${fahrenhiet}` + "°F";

            let feelsLike = data.current.feelslike_c;
            document.getElementById("feel").innerText = " Feels Like: " + `${feelsLike}` + "°C";

            let himudity = data.current.humidity;
            document.getElementById("hum").innerText = " Himudity: " + `${himudity}` + "%";

            let tempratue = data.current.temp_c;
            document.getElementById("temp").innerText = " Temprature: " + `${tempratue}` + "°C";

            let day = data.location.localtime;
            document.getElementById("day").innerText = " Date & Time: " + `${day}`;

            let wind = data.current.wind_kph;
            document.getElementById("wind").innerText = " Wind kph: " + `${wind}` + " kmph ";

            let country = data.location.country;
            document.getElementById("con").innerText = " Country: " + `${country}`;


        }).catch(function (error) {
            console.log("error fetch data", error)
        })

}
