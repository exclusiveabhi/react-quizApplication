import React from "react";

const ResultPage = ({ results = [] }) => {
  const correctAnswers = results.filter(result => result.isCorrect).length;
  const totalQuestions = results.length;

  return (
    <div className="result-page-container">
      <style>{`
        .result-page-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
          padding: 20px;
        }

        .result-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          width: 100%;
          text-align: center;
        }

        .result-card h2 {
          margin-bottom: 20px;
        }

        .result-card ul {
          list-style-type: none;
          padding: 0;
        }

        .result-card li {
          background: #f9f9f9;
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 4px;
          text-align: left;
        }

        .result-card p {
          margin: 5px 0;
        }

        @media (max-width: 600px) {
          .result-card {
            padding: 15px;
          }

          .result-card li {
            padding: 8px;
          }
        }
      `}</style>
      <div className="result-card">
        <h2>Quiz Results</h2>
        <p>
          You scored {correctAnswers} out of 15
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <p>
                <strong>Question:</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: result.question }}></span>
              </p>
              <p>
                <strong>Your Answer:</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: result.userAnswer }}></span>
              </p>
              <p>
                <strong>Correct Answer:</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: result.correctAnswer }}></span>
              </p>
              <p>{result.isCorrect ? "✅ Correct" : "❌ Incorrect"}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultPage;