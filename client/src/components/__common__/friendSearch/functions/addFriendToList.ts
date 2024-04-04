export const addFriendToList = async (friendEmail: string, friendName: string, currUser: string, roomid: string) => {
  await fetch("api/userRouter/addFriendToList", {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      friendsname: friendName,
      friendsemail: friendEmail,
      roomid: roomid,
      currentUser: currUser
    })
  });
};