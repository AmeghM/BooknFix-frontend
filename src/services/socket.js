import { io } from "socket.io-client";

const BackSERVER_URL = "http://localhost:3000";
const socket = io(BackSERVER_URL, {
  autoConnect: true,
});

export default socket;
