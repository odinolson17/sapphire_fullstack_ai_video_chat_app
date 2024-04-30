import { whoToCall } from "../whoToCall";

describe('Testing the who to call function', () => {

  it('Testing the values in the return object', () => {
    const name = 'Marie';
    const email = 'marie@gmail.com';
    const roomid = '123432382942839';
    const actual = whoToCall(name, email, roomid);
    expect(actual).toEqual({
      name: name,
      email: email,
      roomid: roomid
    });
  })
});