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
