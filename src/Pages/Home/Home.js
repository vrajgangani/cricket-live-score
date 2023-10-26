import React, { useState } from "react";
import { Layout, Menu, Col } from "antd";
import "../../CSS/Home.css";
import { Typography } from "antd";
import { MatchShceduleData as matches } from "../../Assets/MatchData/MatchSchedule";
import { TeamLogos as teamLogos } from "../../Assets/MatchData/MatchSchedule";
import MatchCard from "../../Components/Cards/MatchCard";
const { Text } = Typography;

const { Header, Content } = Layout;

export const Home = () => {
  const [selectedTab, setSelectedTab] = useState("live");

  // Function to filter matches based on the selected tab
  const filterMatches = (tab) => {
    const currentDate = new Date().toISOString().split("T")[0];

    return matches.filter((match) => {
      if (tab === "live") {
        return match.date === currentDate;
      } else if (tab === "upcoming") {
        return match.date > currentDate;
      } else if (tab === "finished") {
        return match.date < currentDate;
      }
      return true;
    });
  };

  const selectedMatches = filterMatches(selectedTab);

  matches.forEach((match) => {
    match.team1Logo = teamLogos[match.team1];
    match.team2Logo = teamLogos[match.team2];
  });

  return (
      <Layout >
        <Header style={{ position: "sticky", top: "0" }}>
          <div className="logo" />
          <Menu mode="horizontal" selectedKeys={[selectedTab]}>
            <Menu.Item key="live" onClick={() => setSelectedTab("live")}>
              Live
            </Menu.Item>
            <Menu.Item
              key="upcoming"
              onClick={() => setSelectedTab("upcoming")}
            >
              Upcoming
            </Menu.Item>
            <Menu.Item
              key="finished"
              onClick={() => setSelectedTab("finished")}
            >
              Finished
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "12px" }}>
          <div className="site-layout-content">
            {selectedMatches.length === 0 ? (
              <Text>No matches found for this category.</Text>
            ) : (
              selectedMatches.map((match, index) => (
                <Col span={24} key={index}>
                  <MatchCard match={match} />
                </Col>
              ))
            )}
          </div>
        </Content>
      </Layout>
  );
};
