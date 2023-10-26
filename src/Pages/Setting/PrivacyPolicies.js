import React from "react";
import { Typography } from "antd";
import { appName } from "../../Assets/AboutApp/appName";
const { Title, Text } = Typography;

const PrivacyPolicies = () => {
  const containerStyle = {
    padding: "20px", // Add padding to the container
  };

  return (
    <div style={containerStyle}>
      <Title level={4}>Privacy Policy </Title>
      <Text>Last updated: 26/10/2023</Text>

      <Title level={4}>1. Introduction</Title>
      <Text>
        Welcome to <Text strong>{appName}</Text>! At [Your Company Name], we are committed to
        protecting your privacy and providing a secure and enjoyable experience
        while using our cricket live score app. This Privacy Policy outlines how
        we collect, use, and safeguard your personal information.
      </Text>

      <Title level={4}>2. Information We Collect</Title>
      <Text>
        <Text strong>2.1. Information you provide:</Text> We may collect
        personal information that you provide directly to us when using our app.
        This may include your name, email address, and other contact
        information.
      </Text>
      <Text>
        <Text strong>2.2. Usage data:</Text> We may automatically collect
        information about your interactions with our app, such as your device
        type, operating system, IP address, and other technical information.
      </Text>

      <Title level={4}>3. How We Use Your Information</Title>
      <Text>
        We may use the information we collect for the following purposes:
      </Text>
      <Text>
        <Text strong>3.1. To provide the services:</Text> We use your
        information to deliver live cricket scores, upcoming match information,
        and other related content to enhance your user experience.
      </Text>
      <Text>
        <Text strong>3.2. Communication:</Text> We may use your contact
        information to send you notifications, updates, and important
        information related to the app.
      </Text>

      <Title level={4}>4. Information Sharing</Title>
      <Text>
        We do not sell, trade, or otherwise transfer your personal information
        to third parties without your consent, except in the following
        circumstances:
      </Text>
      <Text>
        <Text strong>4.1. Service Providers:</Text> We may share your
        information with third-party service providers who help us operate and
        maintain the app.
      </Text>
      <Text>
        <Text strong>4.2. Legal Compliance:</Text> We may disclose your
        information in response to a lawful request from government authorities
        or to comply with applicable laws or regulations.
      </Text>

      <Title level={4}>5. Data Security</Title>
      <Text>
        We take data security seriously and have implemented reasonable security
        measures to protect your information from unauthorized access,
        disclosure, alteration, or destruction.
      </Text>

      <Title level={4}>6. Your Choices</Title>
      <Text>
        You can choose not to provide certain information, but this may limit
        your ability to use some features of the app. You may also have the
        right to request access to, correct, or delete your personal
        information. Please contact us at [contact email] to exercise these
        rights.
      </Text>

      <Title level={4}>7. Updates to this Privacy Policy</Title>
      <Text>
        We may update this Privacy Policy to reflect changes to our information
        practices. We will notify you of any significant changes via email or
        within the app.
      </Text>

      <Title level={4}>8. Contact Us</Title>
      <Text>
        If you have any questions or concerns regarding this Privacy Policy or
        our data practices, please contact us at [contact email].
      </Text>

      <Title level={4}>9. Consent</Title>
      <Text>
        By using our app, you consent to the terms of this Privacy Policy.
      </Text>
    </div>
  );
};

export default PrivacyPolicies;
