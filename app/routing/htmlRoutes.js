// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var userData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // Below code handles when a user submits a form and thus submits data to the server.
  // Below code handles when a user submits a form and thus submits data to the server.
  app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/home.html"));
});
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/survey.html"));
});
app.get("/api", function(req, res) {
 console.log("got request");
  res.json(userData);
});


  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
