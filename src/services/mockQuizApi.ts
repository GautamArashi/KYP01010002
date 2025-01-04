import { Question } from '../types/quiz';

const mockQuestions: Record<string, Question[]> = {
  Mathematics: [
    {
      id: 1,
      question: "What is the value of π (pi) to two decimal places?",
      options: ["3.14", "3.16", "3.12", "3.18"],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Solve for x: 2x + 5 = 13",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1
    }
  ],
  Physics: [
    {
      id: 1,
      question: "What is the SI unit of force?",
      options: ["Watt", "Newton", "Joule", "Pascal"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "What is the speed of light in vacuum?",
      options: ["3×10⁸ m/s", "2×10⁸ m/s", "3×10⁷ m/s", "2×10⁷ m/s"],
      correctAnswer: 0
    }
  ]
};

export const fetchQuestions = async (subject: string): Promise<Question[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockQuestions[subject] || [];
};