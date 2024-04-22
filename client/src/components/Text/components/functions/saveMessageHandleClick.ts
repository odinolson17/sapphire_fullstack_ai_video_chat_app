import { MessageDataObj } from "../ChatBox";

const formateMessageResponse = async (response: any, room: string) => {
  const textchats = response.textchats;
    for (let i = 0; i < textchats.length; i++) {
    if (textchats[i].roomid === room) {
      return textchats[i].chats;
    }
  }
};

export const saveMessageHandleClick = async (props: MessageDataObj, email: string): Promise<MessageDataObj[]> => {
  const request = await fetch("api/userRouter/addToMessagesArray", {
    method: "PATCH",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      roomid: props.room,
      name: props.name,
      message: props.message,
      time: props.time,
      chatid: props.chatid,
      email: email
    })
  });
  const response = await request.json();
  const returnValue = await formateMessageResponse(response, props.room);
  return returnValue;
};