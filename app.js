const express = require("express");

const app = express();

app.use(express.json());

app.listen(
    8080, 
    () => console.log(`app is running on http://localhost:${8080}`)
)

app.post('/github', (req, res) => {
    console.log('acquired')
    console.log(req.body)
    res.send("Github webhook received")
})