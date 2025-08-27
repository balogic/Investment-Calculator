import Header from "./Header";
import { UserInput } from "./UserInput";
import { Results } from "./Results";

import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    intialInvestment: 10000,
    annualInvestment: 100000,
    expectedReturn: 12,
    duration: 15,
  });
  const handleChange = (inputIdentifier, newValue) => {
    console.log(inputIdentifier, newValue);
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
