import { Question } from '../../types/quiz';
import Button from '../shared/Button';

interface QuestionCardProps {
  question: Question;
  onAnswer: (index: number) => void;
}

const QuestionCard = ({ question, onAnswer }: QuestionCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full text-left"
            onClick={() => onAnswer(index)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;