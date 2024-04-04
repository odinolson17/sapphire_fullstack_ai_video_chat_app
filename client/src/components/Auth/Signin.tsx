import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { userStore, userEmailStore } from '../../store/user/userStore';
import { useState } from 'react';
import './styles/signin.css';

function Signin () {
  const navigate = useNavigate();

  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  // holds the store
  const [, setCurrentUser] = useRecoilState(userStore);
  const [, setCurrentUsersEmail] = useRecoilState(userEmailStore);

  const attemptSignin = (e: React.FormEvent) => {
    // so the form doesn't refresh itself
    e.preventDefault();
    // checking that the fields are not empty
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
          const usersEmail: string = response.email;
          if (response.password === enteredPassword) {
            // adding the user to the store
            setCurrentUser(usersName);
            setCurrentUsersEmail(usersEmail);
            // redirect
            navigate('/home');
          } else {
              // something went wrong
              navigate('/failedsignin');
            }
        } catch {
          // something went wrong
          navigate('/failedsignin');
        }
      }
      // calls the function 
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
                <Link to="/signup">
                  <button className='signupbutton'>Sign Up</button>
                </Link>
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
          className="signinbutton">
            Sign In
        </button>
      </div>
    </>
  )
}

export default Signin;