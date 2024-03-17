import { useState } from 'react';

function InputAI () {
  const [answer, setAnswer] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>();

  const sendQuestion = async (e: React.FormEvent) => {
    e.preventDefault();

    // const inputMessage = (document.getElementById("inputQuestion") as HTMLInputElement).value;
    const inputMessage = inputValue;

    console.log(inputMessage);
    setAnswer("Change the request back on!");
    // commented out to save money!

    // const questionAsked: Response = await fetch("/api/aiRouter/createMessage", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     message: inputMessage
    //   })
    // });
    // const response = await questionAsked.json();
    // setAnswer(response.choices[0].message.content);

    // to clear the input space
    setInputValue("");
  }
  return (
    <>
      {answer.length > 0 ? answer : "Waiting for Response"}
      <br />
      <input 
        id="inputQuestion" value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={sendQuestion}>Ask Question</button>
    </>
  )
}

export default InputAI;