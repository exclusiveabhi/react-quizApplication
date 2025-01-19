const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema({
  email: { type: String, required: true },
  results: [
    {
      question: { type: String, required: true },
      userAnswer: { type: String, required: true },
      correctAnswer: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
  score: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("QuizResult", quizResultSchema);