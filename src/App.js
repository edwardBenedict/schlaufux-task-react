import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import questions from "./utils/questions";
import Main from "./components/main/Main";
import { Card } from "antd";
import Result from "./components/result/Result";

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    setSelectedQuestion(questions[questionIndex]);
  }, [questionIndex]);

  const handleCheckQuestion = (index, answer) => {
    console.log("index, answer", index, answer);
    setResult(
      index == undefined ? "not selected" : index == answer ? "true" : "false"
    );
    console.log(
      "clg",
      !index ? "not selected" : index == answer ? "true" : "false"
    );
    setResults([...results, index == answer]);
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
      <Navbar questionIndex={questionIndex} results={results} />
      <Card>
        <Main
          question={selectedQuestion}
          handleNextQuestion={handleNextQuestion}
          handleCheckQuestion={handleCheckQuestion}
          check={result}
        />
      </Card>
      <Result check={result} />
    </Card>
  );
}

export default App;
