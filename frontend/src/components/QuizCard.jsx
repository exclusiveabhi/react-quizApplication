import React from "react";

const QuizCard = ({ question, handleAnswer }) => {
  return (
    <div className="quiz-card-container">
      <style jsx>{`
        .quiz-card-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
          padding: 20px;
        }

        .quiz-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
          text-align: center;
        }

        .quiz-card h2 {
          margin-bottom: 20px;
        }

        .options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .options button {
          padding: 10px;
          border: none;
          border-radius: 4px;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .options button:hover {
          background-color: #0056b3;
        }

        @media (max-width: 600px) {
          .quiz-card {
            padding: 15px;
          }

          .options button {
            padding: 8px;
          }
        }
      `}</style>
      <div className="quiz-card">
        <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              dangerouslySetInnerHTML={{ __html: `${index + 1}. ${option}` }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;