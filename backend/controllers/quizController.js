const axios = require("axios");
const QuizResult = require("../models/QuizResult");

// Fetch questions from OpenTDB
const getQuestions = async (req, res) => {
  try {
    const response = await axios.get("https://opentdb.com/api.php?amount=15");
    const questions = response.data.results.map((question) => ({
      question: question.question,
      options: [question.correct_answer, ...question.incorrect_answers].sort(),
      correctAnswer: question.correct_answer,
    }));
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch questions" });
  }
};

// Submit quiz results
const submitQuiz = async (req, res) => {
  try {
    const { email, answers } = req.body;

    const results = answers.map((answer) => ({
      question: answer.question,
      userAnswer: answer.userAnswer,
      correctAnswer: answer.correctAnswer,
      isCorrect: answer.userAnswer === answer.correctAnswer,
    }));

    const score = results.filter((result) => result.isCorrect).length;

    const quizResult = new QuizResult({ email, results, score });
    await quizResult.save();

    res.status(201).json({ message: "Quiz submitted successfully", score, results });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit quiz" });
  }
};

module.exports = { getQuestions, submitQuiz };