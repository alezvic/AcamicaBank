const sequelize = require('./conexion.js')
const cors = require('cors');



var userInfo = [
    {
        user: "Jaime",
        password: "baileninja234",
        mail: "jaimecontodo@este2020.com"
    }
];

const express = require('express');
let app = express();
app.use(cors());

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

    sequelize.query('INSERT INTO usuarios (nombre,email,password,dinero,rol_id) VALUES (?,?,?,?,?)', {
        replacements: [user, mail, password, 0, 1]
    })

    response.send(combo);
}


app.post('/transfer/:user1/:user2/:monto', transfer);

function transfer(request, response) {
    var data = request.params;
    var user1 = data.user1;
    var user2 = data.user2;
    var monto = data.monto;
   

    sequelize.query('SELECT dinero FROM usuarios WHERE id =?',
        {
            replacements: [user1], type: sequelize.QueryTypes.SELECT


        })
        .then(function(resultado){
            if(resultado[0].dinero>=monto){
                sequelize.query('INSERT INTO operaciones (destID,remitID,monto,tipo_operacion_id) VALUES (?,?,?,?)', {
                    replacements: [user1, user2, monto, 1]

                })
                    sequelize.query('UPDATE usuarios SET dinero = dinero-? WHERE id = ?', {
                    replacements: [monto, user1]
                    
                })
                sequelize.query('UPDATE usuarios SET dinero = dinero+? WHERE id = ?', {
                    replacements: [monto, user2]
                    
                })

            }
            

        })
   

    response.send(data);
}