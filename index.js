const express = require(`express`);
const app = express();          // execute the express

app.get('', (req, res)=>{
    res.send(`
    <h1>Welcome to Home Page</h1>
    <a href="/about"> Go to about page</a>
    `);

});

app.get('/about', (req, res)=>{
    res.send(`
    <input type="text" placeholder="user name" />
    <br>
    <button> Click me </button>
    <br>
    <a href="/"> Go to Home page</a>
    `);
});

app.listen(5001);
