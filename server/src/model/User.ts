import mongoose, { Schema } from 'mongoose';

interface Contacts {
  name: string;
  email: string;
}

interface Favsongs {
  artist: string;
  title: string;
}

interface Groupchats {
  friendsname: [string];
  friendsemail: [string];
  chats?: [{
    name: string;
    time: string;
    message: string;
    chatid: string;
  }];
  roomid: string;
}

interface Textchats {
  friendsname: string;
  friendsemail: string;
  chats?: [{
    name: string;
    time: string;
    message: string;
    chatid: string;
  }];
  roomid: string;
}

interface User {
  name: string;
  email: string;
  password: string;
  profilepic?: string;
  textchats?: Textchats[];
  groupchats?: Groupchats[];
  favsongs?: Favsongs[];
}

const UserSchema: Schema = new Schema<User>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilepic: {
    type: String,
    default: 'NONE'
  },
  textchats: [{
    friendsname: String,
    friendsemail: String,
    chats: [{
      name: String,
      time: String,
      message: String,
      chatid: String
    }],
    roomid: String
  }],
  groupchats: [{
    friendsname: String,
    friendsemail: String,
    chats: [{
      name: String,
      time: String,
      message: String
    }],
    roomid: String
  }],
  favsongs: [{
    artist: String,
    title: String
  }],
});

const User = mongoose.model("User", UserSchema);

export { User };