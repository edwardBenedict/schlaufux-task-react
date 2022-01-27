import { Card, Result as Res } from "antd";
import React from "react";

const Result = ({ check, answer }) => {
  if (check === "true") {
    return (
      <Card>
        <Res status="success" title="Congrats" />
      </Card>
    );
  } else if (check === "not selected") {
    return (
      <Card style={{ margin: 20 }}>
        <Res title="You should choose an option." />
      </Card>
    );
  } else if (check === "false") {
    return (
      <Card style={{ margin: 20 }}>
        <Res
          status="error"
          title="Keep trying!"
          subTitle={`The correct answer is ${answer}.`}
        />
      </Card>
    );
  } else {
    return null;
  }
};

export default Result;
