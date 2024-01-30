import f from "fs";

// //creating file
// const cs = f.createWriteStream("newfile.txt");
// cs.write("Hi, Nodejs Developers\n");
// cs.write("Well done.");
// cs.end();

//reading file
f.readFile("newfile.txt", { encoding: "utf8" }, (err, data) => {
  if (err) throw new Error(err.message);
  console.log(data);
});
