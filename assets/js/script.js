// DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");

// Game variables
let currentQuestionIndex = 0;
let score = 0;
let timer;

// Questions array
const questions = [
  {
    question: "What movie do we find the character Aragorn in?",
    answers: [
      { text: "Game of Thrones", correct: false },
      { text: "Lord of the Rings", correct: true },
      { text: "Eragon", correct: false },
      { text: "My Little Pony", correct: false },
    ],
  },
  {
    question: "What movie did not Quentin Tarantino direct?",
    answers: [
      { text: "Pulp Fiction", correct: false },
      { text: "The Hateful Eight", correct: false },
      { text: "Django Unchained", correct: false },
      { text: "John Wick", correct: true },
    ],
  },
  {
    question: "What movie did Samuel L. Jackson not star in?",
    answers: [
      { text: "Captain Marvel", correct: false },
      { text: "Star Wars", correct: false },
      { text: "The Lighthouse", correct: true },
      { text: "Kong: Skull Island", correct: false },
    ],
  },
  {
    question: "What Hollywood movie star plays himself in Zombieland?",
    answers: [
      { text: "Bill Murray", correct: true },
      { text: "Brad Pitt", correct: false },
      { text: "The Rock", correct: false },
      { text: "Emma Watson", correct: false },
    ],
  },
  {
    question: "Which movie features Leonardo DiCaprio and Kate Winslet as the main characters?",
    answers: [
      { text: "Titanic", correct: true },
      { text: "The Notebook", correct: false },
      { text: "Eternal Sunshine of the Spotless Mind", correct: false },
      { text: "Romeo + Juliet", correct: false },
    ],
  },
  {
    question: "Which movie is famous for the quote 'May the Force be with you'?",
    answers: [
      { text: "Star Trek", correct: false },
      { text: "Star Wars", correct: true },
      { text: "The Matrix", correct: false },
      { text: "Blade Runner", correct: false },
    ],
  },
  {
    question: "In which movie does Tom Hanks play the character Forrest Gump?",
    answers: [
      { text: "Saving Private Ryan", correct: false },
      { text: "Forrest Gump", correct: true },
      { text: "The Green Mile", correct: false },
      { text: "Apollo 13", correct: false },
    ],
  },
  {
    question: "Which movie won the Academy Award for Best Picture in 2020?",
    answers: [
      { text: "Parasite", correct: true },
      { text: "1917", correct: false },
      { text: "Joker", correct: false },
      { text: "Once Upon a Time in Hollywood", correct: false },
    ],
  },
  {
    question: "Which movie features the character Tony Stark as Iron Man?",
    answers: [
      { text: "Captain America: Civil War", correct: false },
      { text: "The Avengers", correct: true },
      { text: "Guardians of the Galaxy", correct: false },
      { text: "Thor: Ragnarok", correct: false }
    ]
  },
  {
    question: "In which movie does Johnny Depp portray the character Jack Sparrow?",
    answers: [
      { text: "Pirates of the Caribbean", correct: true },
      { text: "The Great Gatsby", correct: false },
      { text: "Alice in Wonderland", correct: false },
      { text: "Sweeney Todd: The Demon Barber of Fleet Street", correct: false },
    ],
  },
];