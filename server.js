const express = require("express");
const app = express();
const port = 8003;

app.use(express.static('build'));

app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
});