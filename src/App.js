import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/navTab";
import AboutMe from "./components/aboutMe";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div>
        <NavTabs /> {/* Render your NavTabs component */}
        <Routes>
          <Route exact path="/" element={<AboutMe />} /><Route exact path="/footer" element={<Footer />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
         </Routes>
        </div>
      <Footer/>
    </Router>
  );
}

// export default App;

// import React from "react";
// import NavBar from "./components/navbar";
// import AboutMe from "./components/aboutMe";
// import Portfolio from "./components/portfolio";
// import Contact from "./components/contact";
// import Resume from "./components/resume";
// import Footer from "./components/footer";

// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <AboutMe />
//       <Portfolio />
//       <Contact />
//       <Resume />
//       <Footer />
//     </div>
//   );
// };

export default App;
