import { useState } from 'react';

function InputAI () {
  const [answer, setAnswer] = useState<string>("");

  const sendQuestion = async (e: React.FormEvent) => {
    e.preventDefault();

    let inputMessage = (document.getElementById("inputQuestion") as HTMLInputElement).value;

    const questionAsked: Response = await fetch("api/aiRouter/createMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: inputMessage
      })
    });
    const response = await questionAsked.json();
    setAnswer(response.choices[0].message.content)

    // to clear the input space
    inputMessage = "";
  }
  return (
    <>
      {answer.length > 0 ? answer : "Waiting for Response"}
      <br />
      <input id="inputQuestion" />
      <button onClick={sendQuestion}>Ask Question</button>
    </>
  )
}

export default InputAI;