import socketIOClient from "socket.io-client";

/////////////////////////////////////////////////

export const io = () => {
    return socketIOClient(window.BASE_API_URL  ?  "https://mikhailcoapi.herokuapp.com" : "http://localhost:5000");
}

/////////////////////////////////////////////////