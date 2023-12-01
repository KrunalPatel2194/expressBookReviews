const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let isAuthenticatedUser = require('./auth_users').isAuthenticatedUser;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  console.log(req.body.username, req.body.password)
  // if(isAuthenticatedUser(req.body.username, req.body.password)){
  //   return res.status(200).send("User Already exists");
  // }else{
  //   users.push({username: req.body.username, password: req.body.password});
  //   return res.status(200).json(users);
  // }
  //Write your code here
  return res.status(300).json({"message" : "Customer registered successfuly"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.status(300).json(books);
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json(books[req.params.isbn]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  // console.log(books , typeof(books))
  // let result = books.
  for (const [key, value] of Object.entries(books)) {
    if(value.author == req.params.author){
      return res.status(300).json(value);

    }
  }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  for (const [key, value] of Object.entries(books)) {
    if(value.title == req.params.title){
      return res.status(300).json(value);

    }
  }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json(books[req.params.isbn].reviews);
});

module.exports.general = public_users;
