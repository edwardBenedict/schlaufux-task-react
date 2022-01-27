import { Button, Card, Result as Res } from "antd";
import finalPng from "../../assets/final.png";

const Result = ({ check, answer, point, handleReset }) => {
  return (
    <Card style={{ marginTop: 10 }}>
      {check === "final" ? (
        <div style={{ textAlign: "center" }}>
          <img src={finalPng} alt="" width="500px" />
          <Card>
            <h1>
              You have got
              <span style={{ fontSize: "2rem", color: "#40a9ff" }}>
                {" "}
                {point}
              </span>{" "}
              points.
            </h1>
            <Button
              size="large"
              type="primary"
              shape="round"
              onClick={handleReset}
            >
              Try again!
            </Button>
          </Card>
        </div>
      ) : check === "true" ? (
        <Res style={{ padding: 0 }} status="success" title="Congrats" />
      ) : check === "not selected" ? (
        <Res style={{ padding: 0 }} title="Select an option!!" />
      ) : check === "false" ? (
        <Res
          style={{ padding: 0 }}
          status="error"
          title="Select an option!!"
          subTitle={`The correct answer is ${answer}.`}
        />
      ) : null}
    </Card>
  );
};

export default Result;
