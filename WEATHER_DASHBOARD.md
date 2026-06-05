# Weather Dashboard 🌤️

A modern, fully responsive weather dashboard that fetches real-time data from OpenWeatherMap API.

## Features ✨

✅ **Real-time Weather Data** - Current conditions, temperature, humidity, wind speed  
✅ **Search Any City** - Find weather for any location worldwide  
✅ **Geolocation Support** - Get weather for your current location  
✅ **5-Day Forecast** - Extended weather predictions  
✅ **Hourly Forecast** - Next 8 hours forecast  
✅ **Temperature Toggle** - Switch between Celsius and Fahrenheit  
✅ **Modern UI** - Dark theme with smooth animations  
✅ **Fully Responsive** - Works on desktop, tablet, and mobile  
✅ **Fast & Lightweight** - Minimal dependencies, fast loading  

## Files

```
weather-app.html    - Main HTML file
app.js             - JavaScript with OpenWeatherMap API
app-styles.css     - CSS styling
```

## Quick Start

### Option 1: Direct Open
Simply open `weather-app.html` in your browser

### Option 2: Local Server
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

## How to Use

1. **Search for a City** - Type any city name and press Enter or click Search
2. **Use Current Location** - Click the location button to get weather for your location
3. **Switch Units** - Toggle between °C and °F using buttons in the bottom-right
4. **View Details** - See current weather, 5-day forecast, and hourly predictions

## API Integration

Uses **OpenWeatherMap API** (Free tier):
- Current weather endpoint
- 5-day forecast
- Geolocation support
- 60 calls/minute limit
- 1 million calls/month free

## Customization

### Change API Key
Open `app.js` and update:
```javascript
const API_KEY = 'your-api-key';
```

### Change Default City
In `app.js`, modify the initialization call:
```javascript
searchWeather('Paris'); // Change to your preferred city
```

### Customize Colors
Edit CSS variables in `app-styles.css`:
```css
:root {
    --primary: #667eea;
    --secondary: #764ba2;
    --bg: #0f172a;
}
```

## Technologies

- HTML5
- CSS3 (Flexbox, Grid, Gradients)
- Vanilla JavaScript (ES6+)
- OpenWeatherMap API
- Font Awesome Icons

## Browser Support

✅ Chrome/Chromium  
✅ Firefox  
✅ Safari  
✅ Edge  
✅ Mobile browsers  

## Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: Below 768px

## Features Demo

### Current Weather Display
- City name and country
- Weather description
- Temperature
- Weather icon
- Humidity
- Wind speed
- Pressure

### Forecasts
- 5-day daily forecast
- Hourly forecast (8 hours)
- Temperature trends
- Weather condition icons

## Keyboard Shortcuts

- `Enter` - Submit search

## Privacy & Data

- No personal data stored (except local searches)
- Weather data from OpenWeatherMap
- Geolocation only when you click the button
- All data is HTTPS encrypted

## Future Enhancements

- [ ] Air Quality Index (AQI)
- [ ] UV Index
- [ ] Sunrise/Sunset times
- [ ] Weather alerts
- [ ] Multiple city comparison
- [ ] Service worker for offline support

## Troubleshooting

**City not found?**
- Check spelling
- Try with country code (e.g., "Paris, FR")

**No weather data?**
- Check internet connection
- Verify API key is valid
- Check browser console for errors

**Location not working?**
- Allow browser geolocation permission
- Use HTTPS or localhost
- Try searching for a city instead

## Links

- OpenWeatherMap: https://openweathermap.org
- API Documentation: https://openweathermap.org/api
- Font Awesome: https://fontawesome.com

## License

MIT License - Feel free to use and modify

---

**Enjoy checking the weather! 🌈**