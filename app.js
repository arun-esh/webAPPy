const fs = require(`fs`);
const express = require(`express`);

const app = express();

app.use(express.json());

// this cannot be inside the event loop function.
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/data/sample-data.json`)
);

const getAllProducts = (req, res) => {
  res.status(200).json({
    status: `success`,
    results: products.length,
    data: {
      products,
    },
  });
};

const getOneProduct = (req, res) => {
  const id = req.params.id * 1;

  const product = products.find((el) => el.id === id);

  if (!product) {
    return res.status(404).json({
      status: 'denied',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};

const createProduct = (req, res) => {
  const newId = products[products.length - 1].id + 1;
  const newProduct = Object.assign({ id: newId }, req.body);

  products.push(newProduct);

  fs.writeFile(
    `${__dirname}/data/sample-data.json`,
    JSON.stringify(products),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          product: newProduct,
        },
      });
    }
  );
};

const updateProduct = (req, res) => {
  if (req.params.id * 1 > products.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid Id',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<We will Update Product here>',
    },
  });
};

const deleteProduct = (req, res) => {
  if (req.params.id * 1 > products.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    message: 'We will delete the product here',
  });
};

app.route(`/api/v1/products`).get(getAllProducts).post(createProduct);

app
  .route(`/api/v1/products/:id`)
  .get(getOneProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

// Port number

const port = 5001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
