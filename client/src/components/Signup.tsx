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
    }
    if (password === secondPassword) {
      creatingUser();
    } else {
      navigate('/failedsignup');
    }
  };

  return (
    <>
      <input 
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input 
        placeholder="Enter your password again"
        type="password"
        value={secondPassword}
        onChange={(e) => setSecondPassword(e.target.value)}
      />
      <button onClick={createUser}>
        Create
      </button>
    </>
  )
}

export default Signup;