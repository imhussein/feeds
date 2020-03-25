const fs = require("fs");

function readData(filename, callback) {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) return console.log(err);
    callback(data);
  });
}

function getPosts(filename, callback) {
  readData(filename, data => {
    const parsedData = JSON.parse(data);
    return callback(parsedData);
  });
}

function getPostById(filename, id, callback) {
  readData(filename, data => {
    const parsedData = JSON.parse(data);
    const postIndex = parsedData.findIndex(post => (post.id = id));
    const post = parsedData[postIndex];
    return callback(post);
  });
}

module.exports = {
  getPosts,
  getPostById
};
