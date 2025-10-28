import { CAT_PERSONALITIES } from '../catLogic';

interface PersonalitySelectorProps {
  onSelect: (personality: string) => void;
  onBack: () => void;
}

export default function PersonalitySelector({ onSelect, onBack }: PersonalitySelectorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">😺</div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What's your cat's personality?
          </h2>
          <p className="text-lg text-gray-600">
            Choose wisely. They're watching you choose.
          </p>
        </div>

        {/* Personality Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {CAT_PERSONALITIES.map((personality) => (
            <button
              key={personality.id}
              onClick={() => onSelect(personality.id)}
              className="p-6 bg-white rounded-2xl border-2 border-accent-200 hover:border-accent-500 hover:shadow-lg transform hover:scale-105 transition-all text-left group"
            >
              <div className="font-heading font-bold text-xl text-gray-800 mb-2 group-hover:text-accent-600 transition-colors">
                {personality.label}
              </div>
              <div className="text-sm text-gray-600">
                {personality.description}
              </div>
            </button>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-gray-800 font-medium underline"
          >
            ← Back to behavior
          </button>
        </div>
      </div>
    </div>
  );
}
