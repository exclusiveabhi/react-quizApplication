import React, { useState, useEffect } from "react";
import axios from "axios";
import EmailForm from "../components/EmailForm";
import QuizCard from "../components/QuizCard";
import Timer from "../components/Timer";

const QuizPage = () => {
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (email) {
      const fetchQuestions = async () => {
        const res = await axios.get("https://quiz-app-75so.onrender.com/api/quiz/questions");
        setQuestions(res.data);
      };
      fetchQuestions();
    }
  }, [email]);

  const handleAnswer = (userAnswer) => {
    const answerObj = {
      question: questions[currentIndex].question,
      userAnswer,
      correctAnswer: questions[currentIndex].correctAnswer,
    };
    setAnswers([...answers, answerObj]);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      axios.post("https://quiz-app-75so.onrender.com/api/quiz/submit", {
        email,
        answers,
      });
      window.location.href = "/result";
    }
  };

  if (!email) {
    return <EmailForm onEmailSubmit={setEmail} />;
  }

  return (
    <div>
      <Timer />
      {questions.length > 0 && (
        <QuizCard
          question={questions[currentIndex]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default QuizPage;