const express = require("express");

const app = express();

app.use(express.json());

app.listen(
    8080, 
    () => console.log(`app is running on http://localhost:${8080}`)
)

app.get('/github-repo', (req, res, next) =>{
    
    console.log(req.body)
    res.send({response:'Hello World'})
})