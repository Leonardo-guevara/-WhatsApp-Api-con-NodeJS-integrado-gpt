const express = require("express");
const apiruta = require("./routes/ruta");

const app = express();
// port
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api",apiruta);

app.listen(PORT,() => {
    console.log("El puerto es :" + PORT);
})

