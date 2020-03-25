const http = require("http");
const { getPostById, getPosts } = require("./functions");
const io = require("./socket");

const server = http.createServer(() => {});

const port = 5000;
server.listen(port, "127.0.0.1", () => {
  const socket = io.init(server);

  socket.on("connection", () => {
    console.log("Socket IO Connected");
  });

  getPosts("data.json", data => {
    io.getIO()
      .of("/")
      .on("connection", function(socket) {
        socket.emit("posts", { posts: data });
      });
  });

  console.log(`Server Connected On Port ${port}`);
});
