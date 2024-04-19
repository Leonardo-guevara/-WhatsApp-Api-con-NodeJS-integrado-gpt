const express = require("express");
const apiruta = require("./routes/ruta");

const app = express();
// port


const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api",apiruta);


app.listen(PORT,() => {
    console.log("El puerto es : https://jellyfish-app-knjdc.ondigitalocean.app/:" + PORT+'/api');
})

