// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function ThankYouPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate("/");
//     }, 30000);
//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <div style={styles.icon}>✔</div>
//         <h1 style={styles.heading}>Thank You!</h1>
//         <p style={styles.text}>
//           Your form has been submitted successfully. Redirecting to homepage...
//         </p>
//         <button style={styles.button} onClick={() => navigate("/")}>
//           Go Back Now
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#f8f8f8",
//     padding: "20px",
//   },
//   card: {
//     background: "white",
//     padding: "30px",
//     maxWidth: "400px",
//     width: "100%",
//     textAlign: "center",
//     borderRadius: "15px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   },
//   icon: {
//     fontSize: "50px",
//     color: "green",
//     marginBottom: "10px",
//   },
//   heading: {
//     fontSize: "28px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//   },
//   text: {
//     fontSize: "16px",
//     color: "#555",
//     marginBottom: "20px",
//   },
//   button: {
//     background: "#222",
//     color: "white",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
// };

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);
  const pageStyle = {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
  };

  const spinnerStyle = {
    border: "4px solid rgba(0, 0, 0, .1)",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    borderLeftColor: "#007bff",
    animation: "spin 1s ease infinite",
    margin: "20px auto",
  };

  const spinKeyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={pageStyle}>
      <style>{spinKeyframes}</style>
      <h1>🎉 Thank You!</h1>
      <p>
        Your details have been successfully submitted. We will be in touch
        shortly!
      </p>

      <div style={spinnerStyle}></div>

      <p>Returning to the **homepage** in **{countdown}** seconds...</p>

      <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Click here to return immediately
      </button>
    </div>
  );
};

export default ThankYouPage;
