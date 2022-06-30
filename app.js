const express = require(`express`);
const morgan = require(`morgan`);

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === `development`) {
  app.use(morgan(`dev`));
}

// Router
const productRouter = require(`./routes/productRoute`);
const userRouter = require(`./routes/userRoute`);

app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

// static files

app.use(express.static(`public`));

module.exports = app;
