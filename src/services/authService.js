const authService = {
    async sendOTP(email) {
      // Simulated API call to send OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`OTP sent to ${email}`);
    },
    
    async verifyOTP(email, otp) {
      // Simulated API call to verify OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (otp === '123456') {
        console.log(`OTP ${otp} for ${email} is verified.`);
      } else {
        throw new Error('Invalid OTP');
      }
    }
  };
  
  export default authService;
  