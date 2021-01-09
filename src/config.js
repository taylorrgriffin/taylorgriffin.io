const https = require("https");

module.exports = {
  apiBaseUrl: 'https://api.taylorgriffin.io/api',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
}