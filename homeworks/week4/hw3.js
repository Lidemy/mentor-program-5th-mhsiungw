const request = require('request')

const param = process.argv[2]

if (param) {
  findCountry(param)
} else if (!param) {
  console.log('請輸入欲搜尋的國家名稱')
}

function findCountry(name) {
  request(`https://restcountries.eu/rest/v2/name/${name}`, (err, res, body) => {
    if (res.statusCode >= 400) {
      console.log('找不到國家資訊')
      return
    }

    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.log(err)
    }

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
