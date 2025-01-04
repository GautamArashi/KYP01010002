import { useState } from 'react';
import Button from '../components/shared/Button';
import Quiz from '../components/quiz/Quiz';

const Practice = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const subjects = ['Mathematics', 'Physics', 'Chemistry'];

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  const endQuiz = () => {
    setIsQuizStarted(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Practice Tests</h1>
      
      {!isQuizStarted ? (
        <>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Select Subject</h2>
            <div className="flex space-x-4">
              {subjects.map((subject) => (
                <Button
                  key={subject}
                  variant={selectedSubject === subject ? 'primary' : 'outline'}
                  onClick={() => setSelectedSubject(subject)}
                >
                  {subject}
                </Button>
              ))}
            </div>
          </div>

          {selectedSubject && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Available Tests for {selectedSubject}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Chapter 1 Test</h4>
                  <p className="text-gray-600 mb-4">20 questions • 30 minutes</p>
                  <Button variant="primary" onClick={startQuiz}>Start Test</Button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <Quiz subject={selectedSubject} onClose={endQuiz} />
      )}
    </div>
  );
};

export default Practice;