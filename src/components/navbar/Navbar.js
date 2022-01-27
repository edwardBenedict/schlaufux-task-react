import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Badge, Card, Steps } from "antd";
import questions from "../../utils/questions";

const { Step } = Steps;

const Navbar = ({ questionIndex, results, point }) => {
  return (
    <div style={{ margin: 20 }}>
      <Badge.Ribbon
        text={results.length === 0 ? "Good luck" : `Total Point: ${point}`}
        color="green"
      >
        <Card>
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
                />
              ))}
            </Steps>
          </nav>
        </Card>
      </Badge.Ribbon>
    </div>
  );
};

export default Navbar;
