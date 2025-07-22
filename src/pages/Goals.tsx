
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FloatingAIButton from "@/components/FloatingAIButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Goals = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  // Auto-enable AI assistant by default
  useEffect(() => {
    const aiSetting = localStorage.getItem("aiAssistant");
    if (aiSetting === null) {
      localStorage.setItem("aiAssistant", "true");
    }
  }, []);

  const goals = [
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'business', label: 'Small Business', icon: '🏪' },
    { id: 'emergency', label: 'Emergency', icon: '⚠️' }
  ];

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleContinue = () => {
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="p-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">SheSaves</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 space-y-3">
            <h1 className="text-3xl font-bold text-gray-900">What are you saving for?</h1>
            <p className="text-gray-600">Choose a goal to get started</p>
          </div>

          <div className="space-y-4 mb-8">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => toggleGoal(goal.id)}
                className={`w-full p-4 rounded-lg border-2 transition-colors flex items-center gap-4 ${
                  selectedGoals.includes(goal.id)
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <span className="text-2xl">{goal.icon}</span>
                <span className="text-lg font-medium text-gray-900">{goal.label}</span>
              </button>
            ))}
          </div>

          <Button 
            onClick={handleContinue}
            disabled={selectedGoals.length === 0}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg rounded-lg disabled:bg-gray-300"
          >
            Continue
          </Button>
        </div>
      </main>

      <FloatingAIButton />
    </div>
  );
};

export default Goals;
