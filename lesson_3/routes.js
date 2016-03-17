module.exports = {
  "get": {
    "/users": require("./controllers/UserController").get
  },

  "post": {
    "/users": require("./controllers/UserController").post
  }
};
