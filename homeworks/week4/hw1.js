const request = require('request')

request.get('https://lidemy-book-store.herokuapp.com/books?_limit=10', (err, res, body) => {
  if (res.statusCode >= 400) {
    console.log('statusCode:', res.statusCode)
    console.log('發生錯誤')
    return
  }

  let data
  try {
    data = JSON.parse(body)
  } catch (err) {
    console.log(err)
    return
  }

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].id, data[i].name)
  }
}
)
