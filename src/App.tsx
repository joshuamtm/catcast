import { useState } from 'react';
import Hero from './components/Hero';
import BehaviorSelector from './components/BehaviorSelector';
import PersonalitySelector from './components/PersonalitySelector';
import LoadingAnalysis from './components/LoadingAnalysis';
import Results from './components/Results';
import { fetchWeatherData } from './services/weather';
import { generateCatAnalysis } from './catLogic';
import { WeatherData, UserSelections } from './types';

type AppStep = 'hero' | 'behavior' | 'personality' | 'loading' | 'results';

function App() {
  const [step, setStep] = useState<AppStep>('hero');
  const [selections, setSelections] = useState<UserSelections>({
    zipCode: '',
    behavior: '',
    personality: '',
  });
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [analysis, setAnalysis] = useState({
    headline: '',
    analysis: '',
    weatherInterpretation: '',
  });
  const [error, setError] = useState('');

  const handleZipCode = (zipCode: string) => {
    setSelections({ ...selections, zipCode });
    setStep('behavior');
  };

  const handleBehavior = (behavior: string) => {
    setSelections({ ...selections, behavior });
    setStep('personality');
  };

  const handlePersonality = async (personality: string) => {
    setSelections({ ...selections, personality });
    setStep('loading');

    try {
      // Simulate loading for dramatic effect (minimum 3 seconds)
      const [weather] = await Promise.all([
        fetchWeatherData(selections.zipCode),
        new Promise((resolve) => setTimeout(resolve, 3000)),
      ]);

      setWeatherData(weather);

      // Generate cat analysis
      const catAnalysis = generateCatAnalysis(
        selections.behavior,
        personality,
        weather.conditions,
        weather.temp
      );

      setAnalysis(catAnalysis);
      setError('');
      setStep('results');
    } catch (err) {
      setError(
        'Your cat is giving us mixed signals. Please check your zip code and try again.'
      );
      setStep('hero');
    }
  };

  const handleReset = () => {
    setStep('hero');
    setSelections({ zipCode: '', behavior: '', personality: '' });
    setWeatherData(null);
    setError('');
  };

  return (
    <div className="min-h-screen">
      {error && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-100 border-2 border-red-400 text-red-700 px-6 py-3 rounded-xl shadow-lg z-50">
          {error}
        </div>
      )}

      {step === 'hero' && <Hero onStart={handleZipCode} />}

      {step === 'behavior' && (
        <BehaviorSelector
          onSelect={handleBehavior}
          onBack={() => setStep('hero')}
        />
      )}

      {step === 'personality' && (
        <PersonalitySelector
          onSelect={handlePersonality}
          onBack={() => setStep('behavior')}
        />
      )}

      {step === 'loading' && <LoadingAnalysis />}

      {step === 'results' && weatherData && (
        <Results
          weatherData={weatherData}
          headline={analysis.headline}
          analysis={analysis.analysis}
          weatherInterpretation={analysis.weatherInterpretation}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default App;
