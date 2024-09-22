async function getWeather() {
    const city = document.getElementById('city').value;
    const response = await fetch('http://localhost:5000/get-weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ city: city })
    });

    const data = await response.json();
    if (response.ok) {
        document.getElementById('weather').innerText = `Weather: ${data.weather}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.temperature} Celsius`;
    } else {
        document.getElementById('weather').innerText = `Error: ${data.error}`;
    }
}