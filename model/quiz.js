const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: { type: String, default: null },
  answers: {
    varA: { type: String, default: null },
    varB: { type: String, default: null },
    varC: { type: String, default: null },
    varD: { type: String, default: null },
  },

  quizType: { type: String, default: null },
  correct: { type: String, default: null },
});

module.exports = mongoose.model("quiz", quizSchema);
