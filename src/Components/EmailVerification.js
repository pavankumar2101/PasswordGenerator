import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const sendOTP = async () => {
    // Generate OTP
    const generatedOTP = Math.floor(100000 + Math.random() * 900000);
    setOtp(generatedOTP);

    // Send email with OTP
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        { to_email: email, otp: generatedOTP },
        'YOUR_USER_ID'
      );
      setVerificationStatus('OTP sent. Please check your email.');
    } catch (error) {
      console.error('Error sending OTP:', error);
      setVerificationStatus('Error sending OTP. Please try again.');
    }
  };

  const verifyOTP = () => {
    if (otp === parseInt(enteredOTP)) {
      setVerificationStatus('OTP Verified!');
    } else {
      setVerificationStatus('Invalid OTP');
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={sendOTP}>Send OTP</button>
      
      <input type="text" placeholder="Enter OTP" value={enteredOTP} onChange={(e) => setEnteredOTP(e.target.value)} />
      <button onClick={verifyOTP}>Verify OTP</button>
      
      <p>{verificationStatus}</p>
    </div>
  );
};

export default EmailVerification;
