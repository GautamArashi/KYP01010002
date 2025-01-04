import { useState, useEffect } from 'react';
import { Question, QuizState } from '../types/quiz';

const QUIZ_DURATION = 300; // 5 minutes in seconds

export const useQuiz = (questions: Question[]) => {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    isComplete: false,
    timeRemaining: QUIZ_DURATION
  });

  useEffect(() => {
    if (!state.isComplete && state.timeRemaining > 0) {
      const timer = setInterval(() => {
        setState(prev => ({
          ...prev,
          timeRemaining: prev.timeRemaining - 1,
          isComplete: prev.timeRemaining <= 1
        }));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [state.isComplete, state.timeRemaining]);

  const submitAnswer = (answerIndex: number) => {
    const currentQuestion = questions[state.currentQuestion];
    const isCorrect = currentQuestion.correctAnswer === answerIndex;

    setState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, answerIndex],
      currentQuestion: prev.currentQuestion + 1,
      isComplete: prev.currentQuestion + 1 >= questions.length
    }));
  };

  return {
    state,
    submitAnswer,
    currentQuestion: questions[state.currentQuestion]
  };
};