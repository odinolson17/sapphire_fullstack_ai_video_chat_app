import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup () {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secondPassword, setSecondPassword] = useState<string>("");

  const createUser = (e: React.FormEvent) => {
    e.preventDefault();

    const creatingUser = async () => {
      try {
        const request = await fetch("api/loginRouter/createUser", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password
          })
        });
        const response = await request.json();
        if (response) navigate('/home');
        else navigate('/failedsignup');
      } catch {
        navigate('/failedsignup');
      }
    }
    if (password === secondPassword) {
      creatingUser();
    } else {
      navigate('/failedsignup');
    }
  };

  return (
    <>
      <form onSubmit={createUser}>
        <input 
          placeholder="Your name"
          value={name}
          autoComplete='on'
          onChange={(e) => setName(e.target.value)}
          required={true}
        />
        <input 
          placeholder="Email"
          type="email"
          value={email}
          autoComplete='on'
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <input 
          placeholder="Password"
          type="password"
          value={password}
          autoComplete='on'
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
        <input 
          placeholder="Enter your password again"
          type="password"
          value={secondPassword}
          autoComplete='on'
          onChange={(e) =>  setSecondPassword(e.target.value)}
          required={true}
        />
        <button>
        Create
        </button>
      </form>
    </>
  )
}

export default Signup;