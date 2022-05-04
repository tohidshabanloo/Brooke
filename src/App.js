import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.js";
import Section1 from "./components/Section1/Section1.js";
import Section2 from "./components/Section2/Section2.js";
import Section3 from "./components/Section3/Section3.js";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default App;
