import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signin () {
  const navigate = useNavigate();

  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");

  const attemptSignin = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredEmail !== "" && enteredPassword !== "") {
      const findUser = async (): Promise<void> => {
        try {
          const request = await fetch("api/loginRouter/findUser", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: enteredEmail
            })
          });
          const response = await request.json();
          if (response.password === enteredPassword) {
              navigate('/home');
          } else {
              navigate('/failedsignin');
            }
        } catch {
          navigate('/failedsignin');
        }
      }
      findUser();
    }
  }

  return (
    <>
      <form onSubmit={attemptSignin}>
        <input 
          placeholder="email"
          value={enteredEmail}
          autoComplete='on'
          onChange={(e) => setEnteredEmail(e.target.value)}
        />
        <input 
          placeholder="password"
          type="password"
          autoComplete='on'
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
        />
        <button>Sign In</button>
      </form>
      <br /> <br />
      <button><Link to="/signup">Sign Up</Link></button>
      <br /> <br /> <br />
      <button>Sign in with Google</button>
      <button>Sign in with Microsoft</button>
    </>
  )
}

export default Signin;