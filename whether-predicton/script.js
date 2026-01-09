function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");
  
    if (city === "") {
      result.innerHTML = "Enter city name";
      return;
    }
  
    // // Dummy frontend prediction (without real API)
    // result.innerHTML = `
    //   <p><b>City:</b> ${city}</p>
    //   <p><b>Temperature:</b> 30°C</p>
    //   <p><b>Condition:</b> Sunny ☀️</p>
    // `;
    async function getWeather() {
        const city = document.getElementById('city-input').value || "Chennai";
        const apiKey = "API Key: 94b7d20185724cafa43153537260901 ";
        const url = "https://api.openweathermap.org/data/2.5/weather?q=${Chennai}&appid=${API Key: 94b7d20185724cafa43153537260901}&units=Celsius";
    
        try {
            const response = await fetch(url);
            const data = await response.json();
    
            document.getElementById('city-name').innerText = data.name;
            document.getElementById('temp').innerText = data.main.temp;
            document.getElementById('condition').innerText = data.weather[0].description;
        } catch (error) {
            alert("City not found or API error!");
        }
    }
    
  }
  