import React, { useState } from 'react';

const questions = [
  { id: 1, text: "What's your preferred color palette?", options: ["Bright and bold", "Neutral and earthy", "Pastel and soft", "Dark and moody"] },
  { id: 2, text: "How would you describe your ideal outfit?", options: ["Comfortable and casual", "Elegant and sophisticated", "Trendy and fashionable", "Unique and expressive"] },
  { id: 3, text: "What's your body type?", options: ["Hourglass", "Pear", "Apple", "Rectangle", "Inverted triangle"] },
  { id: 4, text: "Which describes your personality best?", options: ["Outgoing and energetic", "Calm and reserved", "Creative and artistic", "Practical and organized"] },
  // Add more questions as needed
];

const StyleTest: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Test completed, you can handle the result here
      console.log("Test completed", answers);
      // TODO: Implement result analysis and recommendation logic
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Discover Your Style</h1>
      {currentQuestion < questions.length ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].text}</h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="w-full text-left p-3 border rounded hover:bg-indigo-50 transition duration-200"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Thank you for completing the style test!</h2>
          <p>We're analyzing your results to provide personalized recommendations.</p>
          {/* Add a loading spinner or redirect to results page */}
        </div>
      )}
    </div>
  );
};

export default StyleTest;