// this is routes

// const getPosts = (req, res) => {
//         res.send("hello world from node js ... !");
// };


// module.exports = {
//     getPosts
// };

// we can export directly 
// exports.getPosts = (req, res) => {
//         res.send("hello world from node js ... !");
// };


// it will be work as a middleware 
// using controllers
const express = require ('express')
const { getPosts, createPost} = require('../controllers/post')
const validator = require('../validator') 

const router = express.Router()

router.get("/", getPosts);
router.post("/post", validator.createPostValidator, createPost);


module.exports = router;