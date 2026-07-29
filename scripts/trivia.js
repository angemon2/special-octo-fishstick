document.addEventListener('DOMContentLoaded', () => {
  nextButton.classList.add('hide') // initially hide next button
});

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

const questions = [
  {
    question: 'Which of these are NOT written by Fanon?',
    answers: [
      { text: 'Black Skins, White Masks', correct: false },
      { text: 'The Wretched of the Earth', correct: false },
      { text: 'The Pedagody of the Oppressed', correct: true },
      { text: 'A Dying Colonialism', correct: false}
    ]
  }
  // add more here
]

startButton.addEventListener('click', startGame);

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct; //set it to true
    }
    button.addEventListener('click', () => selectAnswer(button));
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(selectedButton) {
  Array.from(answerButtonsElement.children).forEach(button => {
      button.disabled = true;
      setStatusClass(button, button.dataset.correct);
  });

  const correct = selectedButton.dataset.correct;
  setStatusClass(selectedButton, correct);

  // Delay revealing the "Next" button to allow users to review their choice
  setTimeout(() => {
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
          nextButton.classList.remove('hide');
      }
  }, 1000); // Adjust delay as needed
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
      element.classList.add('correct');
  } else {
      element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
