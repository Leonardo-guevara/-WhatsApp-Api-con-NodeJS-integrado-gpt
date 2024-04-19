// const enviarmensaje = require("../service/apiservice");

const verificar = (req, res) => {
  try {
    const VERIFY_TOKEN = "FIBONODEJSAPIMETA";

    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    console.log('VERIFY_TOKEN'.VERIFY_TOKEN);
    console.log('token'.token);
    console.log('challenge'.challenge);

    if (challenge != null && token != null && token == VERIFY_TOKEN ){
        console.log('Se ha envido');
        res.status(200).send(challenge);

    }else{
        console.log('error de validacion');
        res.status(403).send();
    }

  } catch (e) {
    console.log('No existe ')
    res.status(400).send();
  }
};

const recibir = (req, res) => {
  res.send("recibir");
  // try{
  //     var entry = (req.body["entry"])[0];
  //     var changes = (entry["changes"])[0];
  //     var value = changes["value"];
  //     var objetoMensaje = value["messages"];

  //     if (typeof objetoMensaje != "undefined"){
  //         var messages = objetoMensaje[0];
  //         var texto = messages["text"]["body"];
  //         var numero = messages["from"];
  //         enviarmensaje.EnviarMensajeWhastpapp(texto,numero);
  //     }
  //     res.send("EVENT_RECEIVED");
  // }catch(e){
  //     console.log(e);
  //     res.status(400).send();
  // }
};

module.exports = {
  verificar,
  recibir,
};
