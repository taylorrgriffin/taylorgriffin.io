const https = require("https");

module.exports = {
  apiBaseUrl: 'https://localhost:9000/api',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
}