import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { selectAnswer, checkAnswers, resetQuiz } from '../features/quiz/quizSlice';
import './Quiz.css';

const Quiz = () => {
  const questions = useSelector(state => state.quiz.questions);
  const dispatch = useDispatch();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate(); // Get navigate function

  const handleAnswerClick = (answer) => {
    const questionId = questions[currentQuestionIndex].id;
    dispatch(selectAnswer({ questionId, answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFirst = () => {
    setCurrentQuestionIndex(0);
  };

  const handleLast = () => {
    setCurrentQuestionIndex(questions.length - 1);
  };

  const handleSubmit = () => {
    dispatch(checkAnswers());
    navigate('/quiz-review'); // Navigate to Quiz Review after submitting
  };

  const handleReset = () => {
    dispatch(resetQuiz());
    setCurrentQuestionIndex(0);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">Home</Link>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">News</a>
          <a href="#" className="nav-link">Quiz</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Quiz Container */}
      <div className="quiz-container">
        <h1 className="quiz-title">JavaScript Quiz</h1>
        <div className="question-container">
          <h3>Q{currentQuestionIndex + 1}. {currentQuestion.question}</h3>
          <div className="options-grid">
            {currentQuestion.options.map(option => (
              <label
                key={option}
                className={`option-container ${currentQuestion.selectedAnswer === option ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option}
                  checked={currentQuestion.selectedAnswer === option}
                  onChange={() => handleAnswerClick(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <div className="navigation-buttons">
          <button onClick={handleFirst} disabled={currentQuestionIndex === 0}>First</button>
          <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>Prev</button>
          <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
          <button onClick={handleLast} disabled={currentQuestionIndex === questions.length - 1}>Last</button>
        </div>
        <div className="action-buttons">
          <button onClick={handleSubmit} className="submit-button">Submit</button>
          <Link to="/quiz-review" className="review-button">Quiz Review</Link>
          <button onClick={handleReset} className="reset-button">Reset Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
