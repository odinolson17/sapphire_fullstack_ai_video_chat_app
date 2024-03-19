import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/signin.css';

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
          const usersName: string = response.name;
          if (response.password === enteredPassword) {
              navigate('/home', { state: usersName });
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
      <div className='to-the-left'>
          <h1 className='logo'>SAPPHIRE</h1>
      </div>
      <div className='center-content'>
        <br />
        <div className='sign-in'>
          <div className='left-side'>
            <form>
              <div className="underline">
                <label>Email:</label>
                <input 
                  className="signininput"
                  value={enteredEmail}
                  autoComplete='on'
                  onChange={(e) => setEnteredEmail(e.target.value)}
                />
              </div>
              <br />
              <div className="underline">
                <label>Password:</label>
                <input 
                  className="signininput"
                  type="password"
                  autoComplete='on'
                  value={enteredPassword}
                  onChange={(e) => setEnteredPassword(e.target.value)}
                />
              </div>
              <br />
              <div className="to-the-right">
                <Link to="/signup"><button className='signupbutton'>Sign Up</button></Link>
              </div>
            </form>
          </div>
          <div className='right-side'>
            <label>Sign In With:</label>
            <br />
            <div className='to-the-right'>
              <button>Google</button>
              <button>Microsoft</button>
            </div>
          </div>
        </div>
        <br /><br />
        <button
          onClick={attemptSignin}
          className="signinbutton">Sign In</button>
      </div>
    </>
  )
}

export default Signin;