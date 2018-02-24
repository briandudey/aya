const express = require('express');

const app = express();

//app(express App to register this route handler with), get(watch for incoming http requests with this SPECIFIC (get, post, put, delete) method),
//"/" (is the route portion of the handler), req (request), res(response), res.send({hi: 'there'})(json object that we are responding with)
app.get('/', (rec, res) => {
  res.send({'aya says': 'hello'})
});


//express is telling node to look for any traffic coming from this route.
app.listen(5000);