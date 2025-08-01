let express = require("express");

let app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send(`
    <form action="/answer" method="POST">
    <p>What color is the sky on a clear and sunny day?</p>
    <input type="text" name="skyColor" autocomplete="off" />
    <button>Submit Answer</button>
    </form>
    `);
});

app.post("/answer", function (req, res) {
  if (req.body.skyColor == "blue") {
    res.send(`<p>That's the correct answer!</p> 
      <a href="/">Back to home page!</a>
      `);
  } else {
    res.send(`<p>That's incorrect!</p> 
      <a href="/">Back to home page!</a>
      `);
  }
});

// app.get("/answer", function (req, res) {
//   res.send("Are you lost?");
// });

app.listen(3000);
