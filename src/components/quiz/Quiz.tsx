import { useEffect, useState } from 'react';
import { Question } from '../../types/quiz';
import { fetchQuestions } from '../../services/mockQuizApi';
import { useQuiz } from '../../hooks/useQuiz';
import Timer from './Timer';
import QuestionCard from './QuestionCard';
import QuizResults from './QuizResults';

interface QuizProps {
  subject: string;
  onClose: () => void;
}

const Quiz = ({ subject, onClose }: QuizProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const { state, submitAnswer, currentQuestion } = useQuiz(questions);

  useEffect(() => {
    const loadQuestions = async () => {
      const fetchedQuestions = await fetchQuestions(subject);
      setQuestions(fetchedQuestions);
      setLoading(false);
    };
    loadQuestions();
  }, [subject]);

  if (loading) {
    return <div className="text-center">Loading quiz...</div>;
  }

  if (state.isComplete) {
    return (
      <QuizResults
        score={state.score}
        totalQuestions={questions.length}
        onRetry={onClose}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-lg">
          Question {state.currentQuestion + 1} of {questions.length}
        </div>
        <Timer timeRemaining={state.timeRemaining} />
      </div>
      <QuestionCard
        question={currentQuestion}
        onAnswer={submitAnswer}
      />
    </div>
  );
};

export default Quiz;