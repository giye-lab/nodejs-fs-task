//  Fetch data from http://jsonplaceholder.typicode.com/posts and write the json data into posts.json in result directory
//  Author: @Giye
//  Date:17-04-2021

//Required Nodules
const fs = require("fs");
const http = require("http");

const dataHost = "http://jsonplaceholder.typicode.com/posts";

//Fetch data from Placeholder ''

http.get(dataHost, (response) => {
  let posts = "";

  //Handle a chunk
  response.on("data", (chunk) => {
    posts += chunk;
  });

  //Handle End
  response.on("end", () => {
    //Check if Result directory exists
    if (!fs.existsSync("./result")) {
      fs.mkdir("./result", () => {
        console.log("Result directory created");
      });
    } else {
      console.log("Result directory exists");
    }

    //No matter the outcome writeFile posts.json
    fs.writeFile("./result/posts.json", posts, () => {
      console.log("Posts.json has been created with json data");
    });
  });
});
