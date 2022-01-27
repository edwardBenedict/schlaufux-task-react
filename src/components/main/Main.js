import React, { useState } from "react";
import { Badge, Button, Card } from "antd";

const Main = ({ question, handleNextQuestion, handleCheckQuestion, check }) => {
  const [choose, setChoose] = useState();

  return (
    <Badge.Ribbon text={question?.topic} color="cyan">
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            minHeight: "35vh",
          }}
        >
          <div style={{ width: "100%", textAlign: "center" }}>
            <div>Which is the correct option?</div>
            <Card style={{ fontSize: "2rem" }}>{question?.question}</Card>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {question?.options?.map((option, index) => (
              <Card
                key={option}
                style={{
                  width: "150px",
                  margin: "20px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  textAlign: "center",
                  border:
                    choose === index ? "4px solid #9E0059" : "4px solid #ccc",
                }}
                onClick={() => setChoose(index)}
              >
                {option}
              </Card>
            ))}
          </div>
        </div>
      </Card>
      <div style={{ width: "100%" }}>
        {check === "true" || check === "false" ? (
          <Button
            style={{ width: "100%", fontWeight: "bold", marginTop: 20 }}
            shape="round"
            onClick={() => {
              setChoose(undefined);
              handleNextQuestion();
            }}
            type="primary"
          >
            Next
          </Button>
        ) : (
          <Button
            style={{ width: "100%", fontWeight: "bold", marginTop: 20 }}
            shape="round"
            onClick={() => {
              handleCheckQuestion(choose, question?.answerIndex);
            }}
            type="primary"
          >
            Check
          </Button>
        )}
      </div>
    </Badge.Ribbon>
  );
};

export default Main;
