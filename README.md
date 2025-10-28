# 🐱 CatCast - The Feline Meteorologist

> Your cat is a meteorologist. They just haven't told you yet.

A delightfully silly web app that "predicts" weather based on your cat's current behavior, because clearly cats know things we don't.

🌐 **[Live Demo](https://catcast.netlify.app)** (coming soon)

## What is This?

CatCast is a fun, interactive weather app that combines:
- Your cat's mysterious behavior
- Their enigmatic personality type
- Actual real-time weather data
- Pseudo-scientific "analysis" that's 100% cat-approved

The result? Weather predictions that are either surprisingly accurate or hilariously absurd. Your cat won't tell you which.

## Features

✨ **8 Cat Behaviors** including zoomies, loafing, and staring intensely at nothing
😺 **6 Personality Types** from The Chonk to The Chaos Gremlin
🔬 **Advanced Felinological Analysis** (not a real science, but should be)
🌤️ **Real Weather Data** via OpenWeather API
🎭 **Cat GIFs** for maximum entertainment
📤 **Share Results** to prove your cat's meteorological prowess
📱 **Mobile First** design for on-the-go cat consulting

## Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing fast builds
- **Tailwind CSS** for styling
- **Open-Meteo API** for weather data (free, no key required!)
- **The Cat API** for cat images (free, no key required!)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- That's it! No API keys required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/catcast.git
   cd catcast
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` and consult your cat!

## Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy!

Build settings:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

That's it! No environment variables or API keys needed.

### Other Platforms

CatCast works on any static hosting platform:
- Vercel
- Cloudflare Pages
- GitHub Pages
- AWS S3 + CloudFront

Deploy and forget - no configuration required!

## How It Works

1. **User enters their zip code** (US only for MVP)
2. **Selects their cat's current behavior** (sleeping, zoomies, loafing, etc.)
3. **Chooses their cat's personality type** (The Chonk, The Drama Queen, etc.)
4. **Magic happens:**
   - Converts zip code to coordinates using Nominatim (OpenStreetMap)
   - Fetches real weather data from Open-Meteo API (free, no key!)
   - Generates pseudo-scientific "analysis" connecting behavior + personality to weather
   - Fetches a cat image from The Cat API (free, no key!)
5. **Results displayed** with actual weather data and cat-themed interpretation

## Project Structure

```
catcast/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx         # Landing page with zip input
│   │   ├── BehaviorSelector.tsx
│   │   ├── PersonalitySelector.tsx
│   │   ├── LoadingAnalysis.tsx
│   │   └── Results.tsx      # Final weather results
│   ├── services/
│   │   └── weather.ts       # API integrations
│   ├── catLogic.ts          # The "science" behind it all
│   ├── types.ts             # TypeScript interfaces
│   ├── App.tsx              # Main app component
│   └── index.css            # Tailwind styles
├── public/                  # Static assets
└── README.md
```

## APIs Used (All Free, No Keys Required!)

### Open-Meteo Weather API
- **Completely free** - no API key needed
- **No rate limits** for reasonable usage
- **Endpoint:** Current weather with temperature, humidity, wind speed
- **Documentation:** https://open-meteo.com/

### Nominatim (OpenStreetMap)
- **Completely free** - no API key needed
- **Purpose:** Converts US zip codes to coordinates
- **Documentation:** https://nominatim.org/

### The Cat API
- **Free tier** - no API key needed for basic usage
- **Purpose:** Fetches random cat images
- **Fallback:** Adorable cat emoji if API fails
- **Documentation:** https://thecatapi.com/

## Future Enhancements

Ideas for v2.0+:
- 🌍 International support (city names, not just US zip codes)
- 📸 Upload your actual cat's photo
- 📊 Track your cat's "accuracy" over time
- 🐈‍⬛ Multi-cat household support
- 🔮 5-day forecast predictions
- 🤖 AI-generated cat images matching personality + weather

## Contributing

This is a fun side project, but contributions are welcome!

Please note: All contributions must maintain the delightfully absurd tone. Serious meteorological accuracy is frowned upon.

## License

MIT License - Use this to build your own silly weather apps!

## Credits

- Weather data by [Open-Meteo](https://open-meteo.com/)
- Geocoding by [Nominatim/OpenStreetMap](https://nominatim.org/)
- Cat images by [The Cat API](https://thecatapi.com/)
- Pseudo-science by cats everywhere
- Built with ☕ and 😹

## Disclaimer

Your cat is neither a licensed meteorologist nor legally responsible for weather predictions. The creators of CatCast are not liable for:
- Wet socks from unexpected rain
- Sunburns on allegedly cloudy days
- Any judgmental stares from your cat for misrepresenting their meteorological expertise

For actual weather decisions, please consult real meteorologists (the human kind).

---

**Built for maximum silliness and minimum sense.**

If this made you smile, share it with a fellow cat owner! 🐱✨
