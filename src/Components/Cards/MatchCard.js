import React from "react";
import { Card, Row, Image } from "antd";
import { Typography } from "antd";

const { Text } = Typography;

const MatchCard = ({ match }) => {
  return (
    <Card
      title={`${match.match}`}
      style={{
        marginBottom: 16,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Image width={50} src={match.team1Logo} />
        <Image width={50} src={match.team2Logo} />
      </Row>
      <Row
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0px 10px 0px",
        }}
      >
        <Text strong>Date: {match.date}</Text>
        <Text strong>Venue: {match.venue}</Text>
      </Row>
    </Card>
  );
};

export default MatchCard;