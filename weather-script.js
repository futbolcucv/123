#!/bin/bash

# Weather Dashboard Setup Script

echo "🌤️  Weather Dashboard Setup"
echo "=============================="
echo ""

# Check if files exist
echo "Checking project files..."

files=("weather-dashboard.html" "weather-styles.css" "weather-script.js")

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file found"
    else
        echo "❌ $file not found"
    fi
done

echo ""
echo "✨ Setup complete!"
echo ""
echo "🚀 To run the dashboard:"
echo "1. Open weather-dashboard.html in your browser"
echo "2. Or use a local server: python -m http.server 8000"
echo ""
echo "📌 Features:"
echo "✓ Real-time weather data from OpenWeatherMap API"
echo "✓ Search for any city worldwide"
echo "✓ Current weather with detailed metrics"
echo "✓ 5-day forecast"
echo "✓ Hourly forecast (next 8 hours)"
echo "✓ Temperature unit toggle (°C/°F)"
echo "✓ Geolocation support"
echo "✓ Recent searches history"
echo ""
