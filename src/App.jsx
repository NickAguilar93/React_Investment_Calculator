import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
function App() {
  const [userInput, setUserInput] = useState({
    initalInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(newInput, propName) {
    setUserInput((prevInput) => {
      return { ...prevInput, [propName]: newInput };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results />
    </>
  );
}

export default App;
