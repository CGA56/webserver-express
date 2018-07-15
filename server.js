let express = require('express');
let app = express();
let hbs = require('hbs');
require('./hbs/helpers/helpers');

// Obtener el puerto que nos presta heroku
const port = process.env.Port || 8080;


//midleware filtra cualquier tipo de dato , callback que se ejecute simpre que se ejecute el documento
/// Todo debe estar en la carpeta public
app.use(express.static(__dirname + '/public'));
// Express hbs Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');




// web service que envia un objeto
// app.get('/', (req, res) => {
//     // res.send('Hello World')
//     let salida = {
//         nombre: 'cristopher',
//         edad: 20,
//         url: req.url
//     };
//     res.send(salida);
// });

/// web service enviando vistas . Del tipo hbs en views

// app.get('/', (req, res) => {

//     res.render('home');
// });

/// web service enviando vistas . Del tipo hbs en views +  argumentos

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Cristopher',

    });
});

app.get('/about', (req, res) => {

    res.render('about');
});





// web service que envia un mensaje
// app.get('/data', (req, res) => {
//     // res.send('Hello World')
//     res.send(`Hola data`);
// });

// pUERTO LOCAL DE PRUEBA
// app.listen(8080, () => {
//     console.log("Escuchando peticiones en el puerto 8080");
// });

// Puerto para heroku

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});