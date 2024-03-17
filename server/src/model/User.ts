import mongoose, { Schema } from 'mongoose';

interface Contacts {
  name: string;
  email: string;
}

interface Favsongs {
  artist: string;
  title: string;
}

interface Videochats {
  friendsname: string;
  friendsemail: string;
  chats: [{
    name: string;
    time: string;
    message: string;
  }];
  roomid: string;
}

interface Textchats {
  friendsname: string;
  friendsemail: string;
  chats: [{
    name: string;
    time: string;
    message: string;
  }];
  roomid: string;
}

interface User {
  name: string;
  email: string;
  password: string;
  profilepic?: string;
  textchats?: Textchats[];
  videochats?: Videochats[];
  favsongs?: Favsongs[];
  contacts?: Contacts[];
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
    default: undefined
  },
  textchats: [{
    friendsname: String,
    friendsemail: String,
    chats: [{
      name: String,
      time: String,
      message: String
    }],
    roomid: String
  }],
  videochats: [{
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
    artist: {
      type: String,
      unique: true
    },
    title: String
  }],
  contacts: [{
    name: String,
    email: String
  }]
});

const User = mongoose.model("User", UserSchema);

export { User };