const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
if(username !== null && username !== ''){
  return true;
}else{
  return false;
}
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
console.log("username")
  users.map(user => {
    if(user.username === username && user.password === password){
      return true
    }else{
      false
    }
  })
  return false
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  // Simulated user authentication (replace with your authentication logic)
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!authenticatedUser(username,password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate an access token and send it as the response
  const accessToken = generateAccessToken(user);
  res.json({ accessToken });
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
module.exports.isAuthenticatedUser = authenticatedUser;