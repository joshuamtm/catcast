import { useEffect, useState } from 'react';

const LOADING_MESSAGES = [
  'Consulting your feline meteorologist...',
  'Analyzing whisker angles...',
  'Measuring toe bean temperature...',
  'Calculating purr frequency variations...',
  'Interpreting tail swish patterns...',
  'Detecting ear rotation anomalies...',
  'Processing feline atmospheric data...',
  'Consulting the ancient cat prophecies...',
];

export default function LoadingAnalysis() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Animated Cat */}
        <div className="text-9xl mb-8 animate-wiggle">
          🐱
        </div>

        {/* Loading Text */}
        <h2 className="font-heading text-3xl font-bold text-gray-800 mb-4">
          {LOADING_MESSAGES[messageIndex]}
        </h2>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-accent-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        <p className="text-gray-600">
          This highly scientific process takes approximately 3 seconds.
        </p>
      </div>
    </div>
  );
}
