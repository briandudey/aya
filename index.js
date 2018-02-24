const express = require('express');

const app = express();

//app(express App to register this route handler with), get(watch for incoming http requests with this SPECIFIC (get, post, put, delete) method),
//"/" (is the route portion of the handler), req (request), res(response), res.send({hi: 'there'})(json object that we are responding with)
app.get('/', (rec, res) => {
  res.send({'aya says': 'I said, good day, sir'});
});


//dynamically decide what port we are listening to (i.e. look at the underlying environment to determine the port - heroku determines this || we use 5000 (<-development))
const PORT = process.env.PORT ||5000;

//express is telling node to look for any traffic coming from this route.
app.listen(5000);