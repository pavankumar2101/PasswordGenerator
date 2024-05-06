//import { useState } from 'react';
// import './App.css';
// import LoggedIn from './Components/LoggedIn'
// import NotLoggedIn from './Components/NotLoggedIn'
// import LoginForm from './Components/LoginForm';
// import Video from './Components/Video';
// import APIcalls from './Components/APIcalls';

// function App() {

// const [loggedIn,setLoggedIn] = useState(false);

//   return <>
//         {/* {
//           loggedIn ? <LoggedIn/> : <NotLoggedIn loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
//         } */}
//         {/* <LoginForm/> */}
//         {/* <div className="App">
//       <header className="App-header">
//         <LoginForm />
//       </header>
//     </div> */}
//     {/* <Video/> */}
//     <APIcalls/>
//     </>

// }

// export default App;

// function App() {

//   const [loggedIn,setLoggedIn] = useState(false);

//   return <>
//         {
//           loggedIn ? <LoggedIn/> : <NotLoggedIn loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
//         }
//     </>

// }

// import React from 'react'
// import PasswordGenerator from './Components/PasswordGenerator';
// import TextToSpeech from './Components/TextToSpeech';
// import SpeechToText from './Components/SpeechToText';
// import EmailVerification from './Components/EmailVerification';
// // import { EmailVerificationForm } from "./Components/components
// import { EmailVerificationResult } from './Components/components/EmailVerification/EmailVerificationResult';

// const App = () => {
//   // const arrayData = [1, 2, 3, 4, 5];
//   return (
//     <div>

//        {/* <TextToSpeech/>  */}
//       {/* <SpeechToText/> */}
//        {/* <PasswordGenerator/>   */}
//        <EmailVerificationForm />
//     </div>
//   )
// }

// export default App

// import React from 'react';
// import EmailVerification from './Components/EmailVerification';

// const App = () => {
//   return (
//     <div className="App">
//       <EmailVerification />
//     </div>
//   );
// };

// export default App;

// App.js

// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import otpGenerator from 'otp-generator';
// import CryptoJS from 'crypto-js';

// const App = () => {
//   const [email, setEmail] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');

//   const handleSendOTP = () => {
//     const OTP = otpGenerator.generate(6, { upperCase: false, specialChars: false });
//     const hashedOTP = CryptoJS.MD5(OTP).toString(); // Using MD5 hashing

//     const templateParams = {
//       to_email: email,
//       otp: hashedOTP
//     };

//     emailjs.send('<YOUR_SERVICE_ID>', '<YOUR_TEMPLATE_ID>', templateParams, '<YOUR_USER_ID>')
//       .then(() => {
//         console.log('Email sent successfully');
//         setOtp(OTP);
//         setOtpSent(true);
//       })
//       .catch(error => {
//         console.error('Email sending failed:', error);
//         setError('Failed to send OTP. Please try again.');
//       });
//   };

//   const handleVerifyOTP = (enteredOTP) => {
//     const hashedEnteredOTP = CryptoJS.MD5(enteredOTP).toString(); // Using MD5 hashing

//     if (hashedEnteredOTP === otp) {
//       setOtpVerified(true);
//       setError('');
//     } else {
//       setError('Invalid OTP. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Email OTP Verification</h1>
//       {!otpSent && (
//         <div>
//           <input 
//             type="email" 
//             placeholder="Enter your email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//           />
//           <button onClick={handleSendOTP}>Send OTP</button>
//         </div>
//       )}
//       {otpSent && !otpVerified && (
//         <div>
//           <input 
//             type="text" 
//             placeholder="Enter OTP" 
//             value={otp} 
//             onChange={(e) => setOtp(e.target.value)} 
//           />
//           <button onClick={() => handleVerifyOTP(otp)}>Verify OTP</button>
//         </div>
//       )}
//       {otpVerified && <div>OTP Verified Successfully!</div>}
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//     </div>
//   );
// };

// export default App;


// import React from 'react'
// import display from './display'

// const App = () => {
//   return (
//     <div>
//       <display/>
//     </div>
//   )
// }

// export default App

// import React ,{useState,useEffect} from "react";

// function App() {

//   const [data,setData] = useState([])
//   const getData = ()=>{
//     fetch('product.json',{headers : {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }}).then((response)=>{
//       return response.json()
//     }).then((myjson)=>{
//      // console.log(myjson)
//       setData(myjson)
//     })
    
//   }

//   useEffect(()=>{
//     getData()

//   },[])

//   return (
//     // <div>
//     // {
//     //     data && data.length > 0 &&  data.map((productData)=>{
//     //       return (
//     //         <h1>{productData.cat_name}</h1>
//     //       )
//     //     })
//     // }
//     // </div>
//     <div>
//         {
//         data && data.length > 0 && data.map((item,i)=>{
//             return(
//                 <p key={i}>{item.cat_name}</p>
//             )
//         })}
//     </div>
//   )
// }

// export default App

import React from 'react'
import TextToSpeech from "./Components/TextToSpeech"

const App = () => {
  return (
    <div>
      <TextToSpeech/>
    </div>
  )
}

export default App





// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('../public/product.json');
//         const jsonData = await response.json();

//         const dataArray = Object.entries(jsonData).map(([key, value]) => ({ key, value }));
//         console.log(dataArray[0].value[0])

//         setData(dataArray);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setData([]); 
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>

//     </div>
//   );
// }

// export default App;
