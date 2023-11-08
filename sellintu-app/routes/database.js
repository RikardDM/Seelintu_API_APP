const sql = require('mssql');

const config = {
  user: 'adm',
  password: 'Carbonara92@',
  database: 'marketplaces', // You can use a domain name or IP address.
  server: 'sellintumarketplaces.database.windows.net',
  options: {
    encrypt: true // Use this if you're on Windows Azure
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => console.error('Database Connection Failed! Bad Config:', err));

module.exports = {
  sql, poolPromise
};