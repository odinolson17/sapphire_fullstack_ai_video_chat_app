import { useRecoilState } from "recoil";
import { userStore, userEmailStore } from '../../store/user/userStore';

function SignOut () {
  const [, setCurrentUser] = useRecoilState(userStore);
  const [, setCurrentUsersEmail] = useRecoilState(userEmailStore);

  const handleClick = () => {
    setCurrentUser('mock-user');
    setCurrentUsersEmail('mock-email');
  };

  return (
    <>
      <button onClick={handleClick}>
        Sign Out (Works!)
      </button>
    </>
  )
}

export default SignOut;