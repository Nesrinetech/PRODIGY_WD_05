from flask import Flask, request, jsonify
from flask_cors import CORS 
import requests

app = Flask(__name__)
CORS(app) 
API_KEY = "5cbedd07cdbdc3722fbe18c0c2651245"
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"


@app.route('/')
def home():
    return "Welcome to Weather Web App!"

@app.route('/get-weather', methods=['POST'])
def get_weather():
    data = request.get_json()
    city = data.get('city')
    if city:
        request_url = f"{BASE_URL}?appid={API_KEY}&q={city}"
        response = requests.get(request_url)

        if response.status_code == 200:
            data = response.json()
            weather = data['weather'][0]['description']
            temperature = round(data["main"]["temp"] - 273.15, 2)
            return jsonify({
               "weather": weather,
               "temperature": temperature 
            }), 200
        else:
             return jsonify({"error": "City not found"}), 400
    return jsonify({"error": "City not provided"}), 400

if __name__ == "__main__":
    app.run(debug=True)