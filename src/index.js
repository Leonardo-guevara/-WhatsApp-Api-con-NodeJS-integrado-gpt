const express = require("express");
const apiruta = require("./routes/ruta");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/",apiruta);

app.listen(PORT,() => {
    console.log("El puerto es : https://jellyfish-app-knjdc.ondigitalocean.app/api");
})

