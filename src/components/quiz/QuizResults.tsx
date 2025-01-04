interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

const QuizResults = ({ score, totalQuestions, onRetry }: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
      <p className="text-xl mb-4">
        Your Score: {score} out of {totalQuestions} ({percentage}%)
      </p>
      <button
        onClick={onRetry}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
};

export default QuizResults;