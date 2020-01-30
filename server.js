const express = require("express");
const {getPosts, getPostById} = require("./db");
const app = express();
const port = 8003;

app.use(express.static('build'));

app.get('/posts/:id', (req, res) => {
    getPostById(
        req.params.id,
        (data) => {
            res.json(data)
        }, () => {
            res.status(404).send("Post not found!!")
        }
    );
});

app.get('/posts', (req, res) => {
    getPosts(
        (data) => {
            res.json(data)
        }, () => {
            res.status(500).send("Something went wrong!!")
        }
    );
});

app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
});