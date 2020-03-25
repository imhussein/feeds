let io;

module.exports = {
  init: htttpServer => {
    io = require("socket.io")(htttpServer);
    if (io) {
      return io;
    }
  },
  getIO: () => {
    if (!io) {
      throw new Error("Socket Not Initalized");
    }
    return io;
  }
};
