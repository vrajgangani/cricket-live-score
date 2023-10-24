import React from "react";
import { Card, List, Typography } from "antd";
import { Link } from "react-router-dom";
import "../../CSS/Setting.css";

const { Title } = Typography;

const Setting = () => {
  const settingsOptions = [
    { label: "Rate App", action: "rateApp" },
    { label: "Share App", action: "shareApp" },
    { label: "Privacy Policies", action: "privacyPolicies" },
    { label: "Terms and Conditions", action: "termsAndConditions" },
  ];

  return (
    <div className="settings-page">
       <Title level={2}>Settings</Title>
    <Card>
      <List
        itemLayout="horizontal"
          dataSource={settingsOptions}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={`/${item.action}`} className="custom-link">{item.label}</Link>}
            />
          </List.Item>
        )}
      />
    </Card>
    </div>
  );
};

export default Setting;
