const quizQuestions = [
  {
    id: 1,
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "London" },
      { answerText: "New York" },
      { answerText: "Paris" },
      { answerText: "Madrid" },
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos" },
      { answerText: "Elon Musk" },
      { answerText: "Bill Gates" },
      { answerText: "Tony Stark" },
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple" },
      { answerText: "Intel" },
      { answerText: "Amazon" },
      { answerText: "Microsoft" },
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1" },
      { answerText: "4" },
      { answerText: "6" },
      { answerText: "7" },
    ],
    correctAnswer: 4,
  },
  {
    id: 5,
    questionText: "How long is an Olympic swimming pool (in meters)?",
    answerOptions: [
      { answerText: "33" },
      { answerText: "45" },
      { answerText: "50" },
      { answerText: "55" },
    ],
    correctAnswer: 3,
  },
  {
    id: 6,
    questionText:
      "What countries made up the original Axis powers in World War II?",
    answerOptions: [
      { answerText: "Germany, Italy, and Japan" },
      { answerText: "Germany, China and Japan" },
      { answerText: "Germany, China and Italy" },
      { answerText: "Italy, China and Japan" },
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    questionText:
      "Which country do cities of Perth, Adelade & Brisbane belong to?",
    answerOptions: [
      { answerText: "USA" },
      { answerText: "United Kingdom" },
      { answerText: "South Africa" },
      { answerText: "Australia" },
    ],
    correctAnswer: 4,
  },
  {
    id: 8,
    questionText: "What is 'cynophobia'?",
    answerOptions: [
      { answerText: "Fear od cats" },
      { answerText: "Fear of dogs" },
      { answerText: "Fear of birds" },
      { answerText: "Fear of ducks" },
    ],
    correctAnswer: 3,
  },
  {
    id: 9,
    questionText:
      "What is the name of the biggest technology company in South Korea?",
    answerOptions: [
      { answerText: "Samsung" },
      { answerText: "Sony" },
      { answerText: "Phillips" },
      { answerText: "Toyota" },
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    questionText: "What is the name of the man who launched eBay back in 1995?",
    answerOptions: [
      { answerText: "Elon Musk" },
      { answerText: "Pierre Omidyar" },
      { answerText: "Bill Gates" },
      { answerText: "Mark Zuckenberg" },
    ],
    correctAnswer: 2,
  },
  // {
  //   id: 11,
  //   questionText: "Which animal can be seen on the Porsche logo?",
  //   answerOptions: [
  //     { answerText: "Jaguar" },
  //     { answerText: "Horse" },
  //     { answerText: "Panther" },
  //     { answerText: "Tiger" },
  //   ],
  //   correctAnswer: 2,
  // },
  // {
  //   id: 12,
  //   questionText: "What is the name of the largest ocean on earth?",
  //   answerOptions: [
  //     { answerText: "The Atlantic Ocean" },
  //     { answerText: "The Pacific Ocean" },
  //     { answerText: "The Indian" },
  //     { answerText: "The Arctic Ocean" },
  //   ],
  //   correctAnswer: 2,
  // },
  // {
  //   id: 13,
  //   questionText: "Which country consumes the most chocolate per capita?",
  //   answerOptions: [
  //     { answerText: "Switzerland" },
  //     { answerText: "France" },
  //     { answerText: "USA" },
  //     { answerText: "United Kingdom" },
  //   ],
  //   correctAnswer: 1,
  // },
  // {
  //   id: 14,
  //   questionText: "What is the most consumed manufactured drink in the world?",
  //   answerOptions: [
  //     { answerText: "Coffee" },
  //     { answerText: "Coca-Cola" },
  //     { answerText: "Pepsi" },
  //     { answerText: "Tea" },
  //   ],
  //   correctAnswer: 4,
  // },
  // {
  //   id: 15,
  //   questionText: "From which country does Gouda cheese originate?",
  //   answerOptions: [
  //     { answerText: "Netherlands" },
  //     { answerText: "Belgium" },
  //     { answerText: "Germany" },
  //     { answerText: "Austria" },
  //   ],
  //   correctAnswer: 1,
  // },
  // {
  //   id: 16,
  //   questionText: "Which country invented ice cream?",
  //   answerOptions: [
  //     { answerText: "Italy" },
  //     { answerText: "France" },
  //     { answerText: "China" },
  //     { answerText: "Japan" },
  //   ],
  //   correctAnswer: 3,
  // },
  // {
  //   id: 17,
  //   questionText: "Which member of the Beatles married Yoko Ono?",
  //   answerOptions: [
  //     { answerText: "George Harrison" },
  //     { answerText: "Ringo Starr" },
  //     { answerText: "John Lennon" },
  //     { answerText: "Paul McCartney" },
  //   ],
  //   correctAnswer: 3,
  // },
  // {
  //   id: 18,
  //   questionText: "What sport is dubbed the 'king of sports'?",
  //   answerOptions: [
  //     { answerText: "Football" },
  //     { answerText: "Basketball" },
  //     { answerText: "Tennis" },
  //     { answerText: "Volleyball" },
  //   ],
  //   correctAnswer: 1,
  // },
  // {
  //   id: 19,
  //   questionText: "In little red riding hood, who does the wolf dress up as?",
  //   answerOptions: [
  //     { answerText: "Grandfather" },
  //     { answerText: "Father" },
  //     { answerText: "Mother" },
  //     { answerText: "Grandmother" },
  //   ],
  //   correctAnswer: 4,
  // },
  // {
  //   id: 20,
  //   questionText:
  //     ";Stars and Stripes; is the nickname of the flag of which country?",
  //   answerOptions: [
  //     { answerText: "United Kingdom" },
  //     { answerText: "USA" },
  //     { answerText: "France" },
  //     { answerText: "Canada" },
  //   ],
  //   correctAnswer: 2,
  // },
];

export default quizQuestions;
