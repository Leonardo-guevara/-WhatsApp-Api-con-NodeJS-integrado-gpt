const enviarmensaje = require("../service/apiservice");

const verificar = (req, res) => {
    try{
        const VERIFY_TOKEN = "facebook"

        const mode      = request.query['hub.mode']
        const token     = request.query['hub.verify_token']
        const challenge = request.query['hub.challenge']
      
        if(mode && token) {
          if(mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('WEBHOOK_VERIFIED')
            response.status(200).send(challenge)
          } else {
            response.sendStatus(403)
          }
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