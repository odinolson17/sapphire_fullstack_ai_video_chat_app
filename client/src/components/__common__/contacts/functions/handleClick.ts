interface ReturnValue {
  friendsname: string;
  friendsemail: string;
  roomid: string;
  _id: string;
  chats: []
}

export const handleClick = async (email: string): Promise<ReturnValue> => {
  const request = await fetch("api/loginRouter/findUser", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email
    })
  });
  const response = await request.json();
  const texts = response.textchats;
  return texts;
};