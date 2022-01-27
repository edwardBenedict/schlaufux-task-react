import { Card, Result as Res } from "antd";

const Result = ({ check, answer }) => {
  return (
    <Card style={{ marginTop: 10 }}>
      {check === "final" ? (
        <Res status="success"></Res>
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
