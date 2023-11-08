var express = require('express');
var router = express.Router();

const { poolPromise, sql } = require('./database'); // Adjust the path if necessary


/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .query('SELECT TOP(10) * FROM [dbo].[All Marketplaces]'); // Adjust your SQL query as needed

    res.json(result.recordset); // Sends the results as a JSON response
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
}
);

module.exports = router;
