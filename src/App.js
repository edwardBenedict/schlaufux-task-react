import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import questions from "./utils/questions";
import Main from "./components/main/Main";
import { Card } from "antd";
import Result from "./components/result/Result";
import { getRandomeIndexFromArray } from "./utils/functions";

const randomQuestionArray = [0, 1, 2, 3, 4];

function App() {
  const [randomQuestion, setRandomQuestion] = useState({
    index: undefined,
    array: randomQuestionArray,
  });
  const [selectedQuestion, setSelectedQuestion] = useState();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState({ point: 0, results: [] });
  const [result, setResult] = useState({ check: undefined, answer: undefined });

  useEffect(() => {
    const { index, array } = getRandomeIndexFromArray(randomQuestion.array);
    setSelectedQuestion(questions[index]);
    setRandomQuestion({ index, array });
  }, [questionIndex]);

  const handleCheckQuestion = (index, answer) => {
    setResult({
      ...result,
      answer: selectedQuestion?.answerIndex,
      check:
        index === undefined
          ? "not selected"
          : index === answer
          ? "true"
          : "false",
    });

    setResults({
      ...results,
      point: results.point + index === answer ? selectedQuestion?.point : 0,
      results: [...results.results, index === answer],
    });
  };

  const handleNextQuestion = () => {
    setQuestionIndex((prev) => prev + 1);
    setResult(undefined);
  };

  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        // alignItems: "space-between",
        height: "100vh",
      }}
    >
      <Navbar
        questionIndex={questionIndex}
        results={results?.results}
        point={results?.point}
      />
      <Card>
        <Main
          question={selectedQuestion}
          handleNextQuestion={handleNextQuestion}
          handleCheckQuestion={handleCheckQuestion}
          check={result?.check}
        />
      </Card>
      <Result check={result?.check} answer={result?.answer} />
    </Card>
  );
}

export default App;
