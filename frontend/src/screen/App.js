import React, { useEffect, useState } from "react"
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import '../styles/App.css';
import { motion } from "framer-motion";
import HomePage from "../pages/HomePage";
import ThankYou from "../components/thankyou";
function App() {
  // States
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const initialLoad = sessionStorage.getItem("initialLoad"); // Check session storage
    if (!initialLoad) {
      setLoading(true);
      sessionStorage.setItem("initialLoad", "true"); // Mark as loaded
      setTimeout(() => setLoading(false), 3000); // Simulate loading time
    } else {
      setLoading(false); // Skip loader for subsequent navigation
    }
  }, []);

  const loadText = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition:{
        duration: 1
      }
    }
  }


  return (
    loading ? 
    <div className="loader">
      <div className="svg-wrapper">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="60" width="200" />
        </svg>        
        <motion.p variants={loadText} initial='hidden' animate='visible' className="text">Ameer khan</motion.p>
      </div>
    </div>
    :
    <div className="App">
      <Router>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/thank-you" element={<ThankYou />} /> {/* Route for ThankYou */}
            </Routes>
          </Router>
    </div>
  );
}

export default App;