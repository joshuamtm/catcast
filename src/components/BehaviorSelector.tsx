import { CAT_BEHAVIORS } from '../catLogic';

interface BehaviorSelectorProps {
  onSelect: (behavior: string) => void;
  onBack: () => void;
}

export default function BehaviorSelector({ onSelect, onBack }: BehaviorSelectorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What is your cat doing right now?
          </h2>
          <p className="text-lg text-gray-600">
            Be honest. They know if you're lying.
          </p>
        </div>

        {/* Behavior Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {CAT_BEHAVIORS.map((behavior) => (
            <button
              key={behavior.id}
              onClick={() => onSelect(behavior.id)}
              className="p-6 bg-white rounded-2xl border-2 border-primary-200 hover:border-primary-500 hover:shadow-lg transform hover:scale-105 transition-all text-left group"
            >
              <div className="font-heading font-bold text-lg text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                {behavior.label}
              </div>
              <div className="text-sm text-gray-600">
                {behavior.prediction}
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
            ← Back to zip code
          </button>
        </div>
      </div>
    </div>
  );
}
