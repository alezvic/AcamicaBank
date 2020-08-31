var userInfo = [
    {
        user: "Jaime",
        password: "baileninja234",
        mail: "jaimecontodo@este2020.com"
    }
];

const express = require('express');
let app = express();

var server = app.listen(3000, listening);

function listening() {
    console.log("listening...");
}

app.get('/registro/:user/:password/:mail', registrarUsuario);
function registrarUsuario(request, response) {
    var data = request.params;
    var user = data.user;
    var password = data.password;
    var mail = data.mail;
    var combo = {
        user: user,
        password: password,
        mail: mail
    }

   userInfo.push(combo);

    var reply = userInfo;
    response.send(reply);
}