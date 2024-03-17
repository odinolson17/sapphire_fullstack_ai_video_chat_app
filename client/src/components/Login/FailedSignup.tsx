import { Link } from 'react-router-dom';

function FailedSignup () {
  return (
    <>
      <h1>Wrong Password Entered</h1>
      <p>Please try again</p>
      <button>
        <Link to="/signup">
          Click Me!
        </Link>
      </button>
    </>
  )
}

export default FailedSignup;