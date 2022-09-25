const express = require("express");
const PORT = 41000;

const app = express();

app.get("*", (req, res)=> {
    res.send("Hellooooo!!!");
})

app.listen(PORT, "localhost", () => {
  console.log("App listening on " + PORT);
});
