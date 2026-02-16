import { useState } from "react";

function QuizController({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex(prev =>
      prev < questions.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(prev =>
      prev > 0 ? prev - 1 : prev
    );
  };

  return (
    <div>
      <h2>
        Question {currentIndex + 1} of {questions.length}
      </h2>

      <p>{questions[currentIndex]}</p>

      <button
        onClick={handlePrevious}
        disabled={currentIndex === 0}
      >
        Previous
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === questions.length - 1}
      >
        Next
      </button>
    </div>
  )
}

export default QuizController