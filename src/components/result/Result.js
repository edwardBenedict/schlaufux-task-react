import { Card, Result as Res } from "antd";
import finalPng from "../../assets/final.png";

const Result = ({ check, answer, point }) => {
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
          </Card>
        </div>
      ) : check === "true" ? (
        <Res status="success" title="Congrats" />
      ) : check === "not selected" ? (
        <Res
          status="error"
          title="Keep trying!"
          subTitle={`The correct answer is ${answer}.`}
        />
      ) : check === "false" ? (
        <Res
          status="error"
          title="Keep trying!"
          subTitle={`The correct answer is ${answer}.`}
        />
      ) : null}
    </Card>
  );
};

export default Result;
