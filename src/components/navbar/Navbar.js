import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Card, Steps } from "antd";
import questions from "../../utils/questions";

const { Step } = Steps;

const Navbar = ({ questionIndex, results }) => {
  const [current, setCurrent] = useState(questionIndex);

  const handleChange = (curr) => {
    console.log("onChange:", curr);
    setCurrent(curr);
  };

  return (
    <Card style={{ margin: 10 }}>
      <nav style={{ display: "flex", alignItems: "center" }}>
        <div>
          <CloseOutlined style={{ fontSize: "24px", marginRight: 10 }} />
        </div>
        <Steps current={questionIndex} type="navigation" size="small">
          {questions?.map((question, index) => (
            <Step
              key={question.id}
              title={question.topic}
              status={
                results[index] === true
                  ? "finish"
                  : results[index] === false
                  ? "error"
                  : "wait"
              }
              //   description={}
            />
          ))}
        </Steps>
      </nav>
    </Card>
  );
};

export default Navbar;
