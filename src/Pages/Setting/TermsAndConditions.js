import React from 'react';
import { Typography } from 'antd';
import { appName } from '../../Assets/AboutApp/appName';
import { Email } from '../../Assets/AboutApp/appName';
const { Title, Text } = Typography;

const TermsAndConditions = () => {
  const containerStyle = {
    padding: '20px', // Add padding to the container
  };


  return (
    <div style={containerStyle}>
      <Title level={4}>Terms and Conditions</Title>
      <Text>Last updated: 26/10/2023</Text>

      <Title level={4}>1. Acceptance of Terms</Title>
      <Text>
        By accessing or using {appName}, you agree to comply with and be bound by these Terms and Conditions. These terms govern your use of the app, so please read them carefully. If you do not agree to these terms, please do not use the app.
      </Text>

      <Title level={4}>2. Use of the App</Title>
      <Text>
        <Text strong>2.1. Registration:</Text> Some features of the app may require you to register an account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to provide accurate and complete information when registering and to update your information as necessary.
      </Text>
      <Text>
        <Text strong>2.2. Content:</Text> You agree not to upload, post, or transmit any content that violates applicable laws, infringes on the rights of others, or is harmful, defamatory, or offensive. We may remove or disable any content that violates these terms.
      </Text>

      <Title level={4}>3. Privacy</Title>
      <Text>
        Your use of the app is also governed by our Privacy Policy. Please review the Privacy Policy to understand how we collect, use, and protect your personal information. We take your privacy seriously and are committed to safeguarding your data.
      </Text>

      <Title level={4}>4. Termination</Title>
      <Text>
        We reserve the right to terminate or suspend your account and access to the app for violations of these Terms and Conditions, unauthorized or fraudulent activity, or any other reason we deem necessary. You may also terminate your account by ceasing to use the app. In the event of termination, the provisions of these terms shall still apply to any obligations or rights that continue beyond termination.
      </Text>

      <Title level={4}>5. Changes to the Terms</Title>
      <Text>
        We may modify these Terms and Conditions at any time to reflect changes in our services, legal requirements, or for other reasons. We will notify you of significant changes via email or within the app. Your continued use of the app after the changes will constitute your acceptance of the modified terms.
      </Text>

      <Title level={4}>6. Limitation of Liability</Title>
      <Text>
        We do not guarantee the accuracy, completeness, or reliability of the information provided in the app. Your use of the app is at your own risk, and we are not liable for any damages, losses, or injuries resulting from your use of the app. Our liability is limited to the maximum extent permitted by applicable law.
      </Text>

      <Title level={4}>7. Contact Us</Title>
      <Text>
        If you have any questions or concerns regarding these Terms and Conditions, please contact us at {Email}. We are here to assist you and address any inquiries or issues you may have.
      </Text>
    </div>
  );
};

export default TermsAndConditions;
