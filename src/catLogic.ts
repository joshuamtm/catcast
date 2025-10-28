export interface CatBehavior {
  id: string;
  label: string;
  prediction: string;
  science: string;
}

export interface CatPersonality {
  id: string;
  label: string;
  description: string;
  modifier: string;
}

export const CAT_BEHAVIORS: CatBehavior[] = [
  {
    id: 'sleeping-sunny-spot',
    label: 'Sleeping in a sunny spot',
    prediction: 'Clear skies detected',
    science: 'Cats are solar-powered and only enter full sun-sleep mode when UV index is optimal for maximum laziness absorption.',
  },
  {
    id: 'zoomies',
    label: 'Zooming around like a maniac (zoomies)',
    prediction: 'Incoming storm system',
    science: 'Sudden bursts of feline energy indicate rapid barometric pressure changes. Your cat is essentially a furry meteorological alarm system.',
  },
  {
    id: 'hiding',
    label: 'Hiding under furniture',
    prediction: 'Severe weather or just dramatic',
    science: 'Cats retreat to safe spaces when sensing atmospheric disturbances (or the vacuum cleaner). Their whiskers detect pressure changes invisible to human instruments.',
  },
  {
    id: 'staring',
    label: 'Staring intensely at nothing',
    prediction: 'Atmospheric anomaly detected',
    science: 'What appears to be "nothing" to humans is actually your cat analyzing subtle air current patterns and possibly communicating with weather spirits.',
  },
  {
    id: 'loafing',
    label: 'Loafing (sitting in loaf position)',
    prediction: 'Stable atmospheric pressure',
    science: 'The ancient "loaf" position indicates optimal weather stability. Your cat has tucked all extremities to conserve heat, suggesting comfortable ambient conditions.',
  },
  {
    id: 'grooming',
    label: 'Grooming obsessively',
    prediction: 'Humidity fluctuations incoming',
    science: 'Excessive grooming correlates with changing humidity levels. Your cat is pre-treating their fur for optimal moisture management.',
  },
  {
    id: 'yelling',
    label: 'Yelling at you for no reason',
    prediction: 'Weather chaos imminent',
    science: 'Feline vocalizations increase in frequency and volume when atmospheric conditions are about to shift dramatically. They\'re warning you. You\'re just not listening.',
  },
  {
    id: 'keyboard-sitting',
    label: 'Sitting on your keyboard/laptop',
    prediction: 'Indoor climate priority',
    science: 'Your cat has determined that the outdoor weather is irrelevant. The warm laptop represents the superior microclimate, and they are the meteorologist now.',
  },
];

export const CAT_PERSONALITIES: CatPersonality[] = [
  {
    id: 'chonk',
    label: 'The Chonk',
    description: 'Lazy and dignified',
    modifier: 'with maximum laziness efficiency',
  },
  {
    id: 'chaos-gremlin',
    label: 'The Chaos Gremlin',
    description: 'Pure energy',
    modifier: 'but make it chaotic',
  },
  {
    id: 'judgy',
    label: 'The Judgy Observer',
    description: 'Always watching, always judging',
    modifier: 'and they\'re judging your life choices about it',
  },
  {
    id: 'velcro',
    label: 'The Velcro Cat',
    description: 'Must be touching you',
    modifier: 'while maintaining constant physical contact with you',
  },
  {
    id: 'cryptid',
    label: 'The Cryptid',
    description: 'Rarely seen, mysterious',
    modifier: 'from their secret interdimensional observation post',
  },
  {
    id: 'drama-queen',
    label: 'The Drama Queen/King',
    description: 'Everything is a crisis',
    modifier: 'with theatrical flair that would shame a soap opera',
  },
];

export const WEATHER_INTERPRETATIONS: Record<string, string> = {
  Clear: 'Perfect conditions for judging you from the window',
  Clouds: 'Overcast skies match your cat\'s mood perfectly',
  Rain: 'Your cat predicted this and is disappointed in you for not knowing',
  Drizzle: 'Light precipitation detected by whiskers',
  Snow: 'Definitely not going outside today - cat approved',
  Thunderstorm: 'Your cat knew this was coming (see: zoomies)',
  Mist: 'Mysterious atmospheric conditions - very on brand for cats',
  Fog: 'Your cat is one with the mysterious fog',
  Haze: 'Hazy conditions perfect for mysterious cat activities',
};

export function generateCatAnalysis(
  behavior: string,
  personality: string,
  weatherCondition: string,
  temp: number
): { headline: string; analysis: string; weatherInterpretation: string } {
  const behaviorData = CAT_BEHAVIORS.find((b) => b.id === behavior);
  const personalityData = CAT_PERSONALITIES.find((p) => p.id === personality);

  if (!behaviorData || !personalityData) {
    return {
      headline: 'Analysis Error',
      analysis: 'Your cat is giving mixed signals.',
      weatherInterpretation: 'Please try again.',
    };
  }

  const tempInterpretation = getTempInterpretation(temp);
  const weatherInterp = WEATHER_INTERPRETATIONS[weatherCondition] || 'Atmospheric conditions detected';

  const headline = `${behaviorData.prediction} - ${personalityData.label} Edition`;

  const analysis = `Based on advanced felinological analysis: ${behaviorData.science} ${personalityData.modifier}. ${tempInterpretation}`;

  return {
    headline,
    analysis,
    weatherInterpretation: weatherInterp,
  };
}

function getTempInterpretation(temp: number): string {
  if (temp < 32) {
    return 'Temperature: Too cold. Your cat demands blankets and your immediate attention.';
  } else if (temp < 50) {
    return 'Temperature: Chilly. Ideal for loafing on warm laps.';
  } else if (temp < 70) {
    return 'Temperature: Perfect. Your cat has approved these conditions.';
  } else if (temp < 85) {
    return 'Temperature: Warm. Time for strategic napping in cool spots.';
  } else {
    return 'Temperature: Too hot. Your cat is melting into a puddle of judgment.';
  }
}
