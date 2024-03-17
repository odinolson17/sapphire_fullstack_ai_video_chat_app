import mongoose, { Schema } from 'mongoose';

interface contacts {
  name: string;
  email: string;
}

interface favsongs {
  artist: string;
  title: string;
}

interface videochats {
  friendsname: string;
  friendsemail: string;
  chats: [{
    name: string;
    time: string;
    message: string;
  }];
  roomid: string;
}

interface textchats {
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
  textchats?: textchats[];
  videochats?: videochats[];
  favsongs?: favsongs[];
  contacts?: contacts[];
}

const userSchema: Schema = new Schema<User>({
  name: {
    required: true
  },
  email: {
    required: true,
    unique: true
  },
  password: {
    required: true
  },
  profilepic: {
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
      unique: true
    },
    title: String
  }],
  contacts: [{
    name: String,
    email: String
  }]
});

const User = mongoose.model("User", userSchema);

export { User };