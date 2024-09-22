async function getWeather() {
    const city = document.getElementById('city').value;
    const API_KEY = '5cbedd07cdbdc3722fbe18c0c2651245';  
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
      
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`; // 'metric' for Celsius
   
   
 try {
    const response = await fetch(url);
    const data = await response.json();
  
    if (response.ok) {
        document.getElementById('weather').innerText = `Weather: ${data.weather[0].description}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} Celsius`;
    } else {
        document.getElementById('weather').innerText = `Error: ${data.message}`;
    }
} catch (error) {
    console.error('Error fetching the weather data:', error);
    document.getElementById('weather').innerText =  'Error: Could not retrieve data';
}
}