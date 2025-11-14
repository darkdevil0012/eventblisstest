// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Header from "./components/Header";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <>
//       <Home />

//     </>
//   );
// }

// export default App;

// App.js (Example using React Router v6)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThankYouPage from "./pages/Thankyou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* The route the form submits to/redirects to */}
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
