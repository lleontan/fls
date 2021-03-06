const express = require('express');
const app = express();
const port = process.env.ALT_PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  console.log("Express backend fetch request");
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
