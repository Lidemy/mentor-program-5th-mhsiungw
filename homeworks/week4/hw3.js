const request = require('request')

const index2 = process.argv[2]

if (index2) {
  findCountry(index2)
}

function findCountry(str) {
  request(`https://restcountries.eu/rest/v2/name/${str}`, (err, req, body) => {
    const data = JSON.parse(body)
    for (let i = 0; i < data.length; i++) {
      console.log(
        '============\n' +
        `國家：${data[i].name}\n` +
        `首都：${data[i].capital}\n` +
        `貨幣：${data[i].currencies.code}\n` +
        `國碼：${data[i].callingCodes}`
      )
    }
  }
  )
}
