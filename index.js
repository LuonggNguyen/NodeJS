const express = require("express");
const  app = express();
const port = 3000;

app.get('/', (req,res) => {
    return res.send("ASM NodeJs PD04303");
});
app.listen(port, () => console.log("ASM App listening at http://localhost:"+port));
