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
- **OpenWeather API** for actual weather data
- **Giphy API** for cat GIF excellence

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- OpenWeather API key ([get one free](https://openweathermap.org/api))
- Giphy API key ([get one free](https://developers.giphy.com/))

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

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

   Then add your API keys to `.env`:
   ```env
   VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
   VITE_GIPHY_API_KEY=your_giphy_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

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
3. Add environment variables in Netlify dashboard:
   - `VITE_OPENWEATHER_API_KEY`
   - `VITE_GIPHY_API_KEY`
4. Deploy!

Build settings:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Other Platforms

CatCast works on any static hosting platform:
- Vercel
- Cloudflare Pages
- GitHub Pages
- AWS S3 + CloudFront

Just remember to set your environment variables!

## How It Works

1. **User enters their zip code** (US only for MVP)
2. **Selects their cat's current behavior** (sleeping, zoomies, loafing, etc.)
3. **Chooses their cat's personality type** (The Chonk, The Drama Queen, etc.)
4. **Magic happens:**
   - Fetches real weather data from OpenWeather API
   - Generates pseudo-scientific "analysis" connecting behavior + personality to weather
   - Finds a relevant cat GIF from Giphy
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
├── .env.example             # Environment variables template
└── README.md
```

## API Usage

### OpenWeather API
- **Free tier:** 1,000 calls/day
- **Rate limiting:** Implemented (5-minute cache per zip code)
- **Endpoint:** Current Weather Data

### Giphy API
- **Free tier:** Generous limits
- **Content rating:** G-rated cat GIFs only
- **Fallback:** Random cat GIF if search fails

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

- Weather data by [OpenWeather](https://openweathermap.org/)
- Cat GIFs by [Giphy](https://giphy.com/)
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
