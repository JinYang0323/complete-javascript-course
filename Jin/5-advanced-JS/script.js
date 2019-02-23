/*
function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log("Hello " + name + ", what do you do?");
    }
  };
}

interviewQuestion("designer")("Jin");

*/

(function() {
  var randomIndex, selectedQuestion, input;

  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  var question1 = new Question("What's your name?", ["Jin", "Lalala"], 0);
  var question2 = new Question("How r u?", ["Great", "Fantastic"], 1);
  var question3 = new Question(
    "R u happy?",
    ["I don't know", "Maybe", "Of course!"],
    2
  );

  var questions = [question1, question2, question3];

  Question.prototype.logQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };
  Question.prototype.isAnswerCorrect = function(input, callback) {
    var result = input === this.correctAnswer;
    if (result) {
      console.log("Congratulations!");
      sc = callback(true);
    } else {
      console.log("Wrong Answer!");
      sc = callback(false);
    }
    this.displayScore(sc);
  };
  Question.prototype.displayScore = function(score) {
    console.log("score: " + score);
  };

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();
  startNewGame();

  function startNewGame() {
    randomIndex = Math.floor(Math.random() * questions.length);
    selectedQuestion = questions[randomIndex];
    selectedQuestion.logQuestion();
    input = window.prompt("Please input your answer: ");
    if (input !== "exit") {
      selectedQuestion.isAnswerCorrect(parseInt(input), keepScore);
      console.log("----------------");
      startNewGame();
    }
  }
})();
