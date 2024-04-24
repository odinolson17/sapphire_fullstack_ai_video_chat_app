const sendOnlyChats = async (response: any, roomid: string) => {
  const textchats = response.textchats;
  for (let i = 0; i < textchats.length; i++) {
  if (textchats[i].roomid === roomid) {
    return textchats[i].chats;
  }
}
};

export const grabCurrentMessages = async (roomid: string, email: string) => {
  const grabMessagesRequest = await fetch("api/userRouter/grabMessages", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      roomid: roomid,
      email: email
    })
  });
  const messagesResponse = await grabMessagesRequest.json();
  const result = await sendOnlyChats(messagesResponse, roomid);
  return result;
};