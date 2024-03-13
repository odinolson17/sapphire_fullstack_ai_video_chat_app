import { useState } from 'react';

function InputAI () {
  const [answer, setAnswer] = useState<string>("");

  const sendQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    const inputMessage = (document.getElementById("input") as HTMLInputElement | null);
    const questionAsked: Response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: inputMessage
      })
    });
    const response = await questionAsked.json();
    setAnswer(response) // edit this to work
  }
  return (
    <>
      {answer}
      <br />
      <input onClick={sendQuestion} id="inputQuestion" />
      <button>Ask Question</button>
    </>
  )
}

export default InputAI;