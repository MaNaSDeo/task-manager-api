const express = require("express");
const app = express();

//Routes
app.get("/hello", (request, response) => {
  response.send("Task Manager App");
});

const PORT = 3000;

app.listen(PORT, console.log(`server is listening on port ${PORT}...`));
