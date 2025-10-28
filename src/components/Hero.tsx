import { useState } from 'react';

interface HeroProps {
  onStart: (zipCode: string) => void;
}

export default function Hero({ onStart }: HeroProps) {
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // US zip code validation
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(zipCode)) {
      setError('Please enter a valid 5-digit US zip code');
      return;
    }

    setError('');
    onStart(zipCode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        {/* Cat Emoji Animation */}
        <div className="text-9xl mb-8 animate-bounce-slow">
          🐱
        </div>

        {/* Hero Headline */}
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Your cat is a meteorologist.
        </h1>
        <p className="font-heading text-2xl md:text-3xl text-gray-600 mb-12">
          They just haven't told you yet.
        </p>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-12 max-w-xl mx-auto">
          Unlock the ancient feline wisdom hidden in your cat's mysterious behavior.
          Discover what they <em>really</em> know about today's weather.
        </p>

        {/* Zip Code Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Enter your zip code"
              className="flex-1 px-6 py-4 text-lg rounded-2xl border-2 border-primary-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
              maxLength={5}
            />
            <button
              type="submit"
              className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-heading font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Consult Your Cat
            </button>
          </div>
          {error && (
            <p className="mt-3 text-red-600 text-sm font-medium">{error}</p>
          )}
        </form>

        {/* Footer Note */}
        <p className="mt-8 text-sm text-gray-500">
          Warning: Results may be 100% accurate or completely absurd.
          Consult your cat for confirmation.
        </p>
      </div>
    </div>
  );
}
