const enviarmensaje = require("../service/apiservice");

const verificar = (req, res) => {
    try{
        var tokenfibocode = "FIBONODEJSAPIMETA";

        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];
        res.send(req);
        if (challenge != null && token != null && token == tokenfibocode){
            res.send(challenge);
        }else{
            res.send('challenge');
            res.status(400).send();
        }

    }catch(e){
        res.status(400).send();x``
    }

}

const recibir = (req, res) => {
    // res.send('recibir');
    try{
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var objetoMensaje = value["messages"];

        if (typeof objetoMensaje != "undefined"){
            var messages = objetoMensaje[0];
            var texto = messages["text"]["body"];
            var numero = messages["from"];
            enviarmensaje.EnviarMensajeWhastpapp(texto,numero);
        }
        res.send("EVENT_RECEIVED");
    }catch(e){
        console.log(e);
        res.send("EVENT_RECEIVED");
    }
}

module.exports = {
    verificar,
    recibir
}