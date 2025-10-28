import type { WeatherData } from '../types';
import { useEffect, useState } from 'react';
import { fetchCatGif } from '../services/weather';

interface ResultsProps {
  weatherData: WeatherData;
  headline: string;
  analysis: string;
  weatherInterpretation: string;
  onReset: () => void;
}

export default function Results({
  weatherData,
  headline,
  analysis,
  weatherInterpretation,
  onReset,
}: ResultsProps) {
  const [catGif, setCatGif] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fetch a cat GIF based on weather conditions
    fetchCatGif(weatherData.conditions.toLowerCase()).then(setCatGif);
  }, [weatherData.conditions]);

  const handleShare = async () => {
    const shareText = `🐱 CatCast Prediction: ${headline}\n\n${analysis}\n\nActual weather in ${weatherData.location}: ${weatherData.temp}°F, ${weatherData.description}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CatCast - Feline Weather Prediction',
          text: shareText,
        });
      } catch (error) {
        // User cancelled share
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        {/* Results Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Cat Image or Emoji Fallback */}
          <div className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center">
            {catGif ? (
              <img
                src={catGif}
                alt="Cat"
                className="w-full h-64 object-cover"
              />
            ) : (
              <div className="text-9xl py-8 animate-bounce-slow">
                🐱
              </div>
            )}
          </div>

          {/* Headline */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🔮</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {headline}
            </h2>
          </div>

          {/* Analysis */}
          <div className="bg-primary-50 rounded-2xl p-6 mb-8">
            <h3 className="font-heading font-bold text-lg text-primary-900 mb-3">
              Advanced Felinological Analysis:
            </h3>
            <p className="text-gray-700 leading-relaxed">{analysis}</p>
          </div>

          {/* Actual Weather Data */}
          <div className="bg-accent-50 rounded-2xl p-6 mb-8">
            <h3 className="font-heading font-bold text-lg text-accent-900 mb-4">
              Actual Weather in {weatherData.location}:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600">
                  {weatherData.temp}°F
                </div>
                <div className="text-sm text-gray-600">Temperature</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600">
                  {weatherData.humidity}%
                </div>
                <div className="text-sm text-gray-600">Humidity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600">
                  {weatherData.windSpeed}
                </div>
                <div className="text-sm text-gray-600">mph Wind</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600 capitalize">
                  {weatherData.conditions}
                </div>
                <div className="text-sm text-gray-600">Conditions</div>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-4 italic">
              {weatherInterpretation}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onReset}
              className="flex-1 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-heading font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              🐱 Consult Your Cat Again
            </button>
            <button
              onClick={handleShare}
              className="flex-1 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-heading font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {copied ? '✓ Copied!' : '📤 Share Results'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-sm text-gray-600">
          Disclaimer: Your cat is neither a licensed meteorologist nor legally responsible
          for weather predictions. Consult actual weather services for important decisions.
        </p>
      </div>
    </div>
  );
}
