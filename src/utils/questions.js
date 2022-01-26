const questions = [
  {
    topic: "Math",
    id: "01.01",
    question: "2*5+4",
    options: [18, 11, 14],
    answerIndex: 2,
    point: 4,
  },
  {
    topic: "Math",
    id: "01.02",
    question: "12*12",
    options: [144, 24, 120],
    answerIndex: 0,
    point: 10,
  },
  {
    topic: "Math",
    id: "01.03",
    question: "(2+3)*12",
    options: [50, 60, 72, 25],
    answerIndex: 1,
    point: 5,
  },
  {
    topic: "Geography",
    id: "02.01",
    question: "What is the capital of Louxembourg?",
    options: ["Vaduz", "Luxemburg", "Bern"],
    answerIndex: 1,
    point: 5,
  },
  {
    topic: "Geography",
    id: "02.02",
    question: "Which is the northernmost capital in the world?",
    options: ["Reykjavík", "Berlin", "Moscow"],
    answerIndex: 0,
    point: 6,
  },
];

export default questions;
/*
  ["topic",	"id",	"question",	"answerOptions"	,"answerIndex"	score]
  
  
  
  Geography	02.03	In which country lies South America's highest peak?	Peru;Brazil;Uruguay;Argentina	3	10
  English	03.01	Can you swim?	In a pool;Yes, I can;Very good	1	3
  English	03.02	In which voice is the following sentence: "The money was stolen."	active;passive	1	6
  English	03.03	The verb "lie" can mean various things. Which of the options is not a synonym of "to lie"? 	to recline;to tell a falsehood;to place something	2	7
  */
