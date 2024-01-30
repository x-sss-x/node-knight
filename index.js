// import f from "fs";

// // //creating file
// // const cs = f.createWriteStream("newfile.txt");
// // cs.write("Hi, Nodejs Developers\n");
// // cs.write("Well done.");
// // cs.end();

// //reading file
// f.readFile("newfile.txt", { encoding: "utf8" }, (err, data) => {
//   if (err) throw new Error(err.message);
//   console.log(data);
// });

import Express from "express";
import fs from "fs";

const app = Express();
const port = 8000;

app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/todo.get", (req, res) => {
  const data = fs.readFileSync("data.json", { encoding: "utf8" });
  res.json(JSON.parse(data));
});

app.post("/todo.post", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;

  //get existing todos in data.json
  const data = fs.readFileSync("data.json", { encoding: "utf8" });
  const todos = JSON.parse(data);

  //add new todo to existing todo list
  todos.todos.push({ id, title });
  const ws = fs.createWriteStream("data.json");
  ws.write(JSON.stringify(todos));
  ws.end();

  res.status(201).json({
    id: id,
    title: title,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
