import { useRecoilState } from "recoil";
import { userStore, userEmailStore, userProfilePicStore } from '../../store/user/userStore';

function SignOut () {
  const [, setCurrentUser] = useRecoilState(userStore);
  const [, setCurrentUsersEmail] = useRecoilState(userEmailStore);
  const [, setProfilePic] = useRecoilState(userProfilePicStore);

  const handleClick = () => {
    setCurrentUser('mock-user');
    setCurrentUsersEmail('mock-email');
    setProfilePic('NONE');
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