import { nameFormatting } from '../../functions/nameFormatting';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { userStore, userEmailStore } from '../../store/user/userStore';
import { useState } from 'react';
import './styles/signup.css';

function Signup () {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secondPassword, setSecondPassword] = useState<string>("");
  // holds the store
  const [, setCurrentUser] = useRecoilState(userStore);
  const [, setCurrentUsersEmail] = useRecoilState(userEmailStore);

  const createUser = (e: React.FormEvent) => {
    e.preventDefault();

    const creatingUser = async () => {
      try {
        const request = await fetch("api/loginRouter/createUser", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name.toLowerCase().trim(),
            email: email.trim(),
            password: password
          })
        });
        const response = await request.json();
        // success
        if (response) {
          const insertName = nameFormatting(name.toLowerCase().trim());
          setCurrentUser(insertName);
          setCurrentUsersEmail(email.trim());
          navigate('/home');
        }
        // failed
        else {
          navigate('/failedsignup');
        }
      } catch {
        // failed
        navigate('/failedsignup');
      }
    }

    // conditional to see if the function above will run
    if (password === secondPassword) {
      // if the two passwords are entered are the same, function called
      creatingUser();
    } else {
      // passwords are different, do not call function
      navigate('/failedsignup');
    }
  };

  return (
    <>
      <div className='to-the-left'>
            <h1 className='logo'>SAPPHIRE</h1>
      </div>
      <div className='center-content'>
        <div className='sign-up'>
          <div>
            <h2>Create Account</h2>
          </div>
          <div>
            <form onSubmit={createUser}>
              <div className='underline'>
                <label>Display Name:</label>
                <input 
                  className="signininput"
                  value={name}
                  autoComplete='on'
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                  maxLength={20}
                />
              </div>
              <br />
              <div className='underline'>
                <label>Email:</label>
                <input 
                  className="signininput"
                  type="email"
                  value={email}
                  autoComplete='on'
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                />
              </div>
              <br />
              <div>
                <div className='underline'>
                  <label>Password:</label>
                  <input 
                    className="signininput"
                    type="password"
                    value={password}
                    minLength={8}
                    autoComplete='on'
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                  />
                </div>
                <br />
                <label className='littletext'>Must be eight characters or more</label>
              </div>
              <br />
              <div className='underline'>
                <label>Confirm Password:</label>
                <input
                  className="signininput" 
                  type="password"
                  minLength={8}
                  value={secondPassword}
                  autoComplete='on'
                  onChange={(e) => setSecondPassword(e.target.value)}
                  required={true}
                />
              </div>
              <br/>
              <div className='to-the-right'>
                <button className="signinbutton">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;