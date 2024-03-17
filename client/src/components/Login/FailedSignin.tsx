import { Link } from 'react-router-dom';

function FailedSignin () {

  return (
    <>
      <h1>This account doesn't exist or can't be found</h1>
      <p>Please try again!</p>
      <br />
      <button>
        <Link to="/">
          Click to try again
        </Link>
      </button>
      <button>
        <Link to="/signup">
          Click to sign up
        </Link>
      </button>
    </>
  )
}

export default FailedSignin;