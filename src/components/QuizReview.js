import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './QuizReview.css';

const QuizReview = () => {
  const questions = useSelector(state => state.quiz.questions);
  const score = useSelector(state => state.quiz.score);

  // Calculate score out of 10
  const scoreOutOfTen = ((score / questions.length) * 10).toFixed(1); // Fixed to 1 decimal place

  return (
    <div className="quiz-review-container">
      <h1>Quiz Review</h1>
      <h2>Your Score: {score} / {questions.length}</h2>
      <h2>Score (out of 10): {scoreOutOfTen} / 10</h2>
      <div className="summary-container">
        {questions.map((question, index) => (
          <div key={question.id} className={`review-question ${question.selectedAnswer === question.correctAnswer ? 'correct' : 'incorrect'}`}>
            <h3>Q{index + 1}. {question.question}</h3>
            <div className="options-container">
              {question.options.map(option => (
                <label
                  key={option}
                  className={`option ${question.selectedAnswer === option ? 'selected' : ''}`}
                >
                  <input type="radio" value={option} disabled checked={question.selectedAnswer === option} />
                  {option}
                </label>
              ))}
            </div>
            <p className="answer-feedback">Right answer is: <strong>{question.correctAnswer}</strong></p>
          </div>
        ))}
      </div>

      {/* Return Button */}
      <div className="return-buttons">
        <Link to="/" className="return-button">Return to Quiz</Link>
      </div>
    </div>
  );
};

export default QuizReview;
