const express = require(`express`);
const app = express(); // execute the express

app.get('', (req, res) => {
  res.send(`
    <h1 style=color:blue;text-align:center;>Welcome to Home Page</h1>
    <a href="/about"> Go to about page</a>

    <br>

   <h1>lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
   <h2>lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
   <h3>lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
   <h4>lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
   <h5>lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
   <h6>lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>

    `);
});

app.get('/about', (req, res) => {
  res.send(`
    <h1 style=color:blue;text-align:center;>About Page</h1>
    <br>

    <br>
    <a style=color:blue; href="/"> Go to home page</a>
    <br>

   <h1>lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
   <h2>lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
   <h3>lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
   <h4>lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
   <h5>lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
   <h6>lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
   
    
    `);
});

app.listen(5001);
