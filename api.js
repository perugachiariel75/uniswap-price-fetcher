const express = require('express');
const { getTokenPrice } = require('./service');

const app = express();
const port = process.env.PORT || 3000;

app.get('/price/:symbol', async (req, res) => {
  try {
    const symbol = req.params.symbol.toUpperCase();
    const price = await getTokenPrice(symbol);
    res.json({ symbol, price });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
