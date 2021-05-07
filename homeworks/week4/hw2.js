const request = require('request')

const action = process.argv[2]
const Index3 = process.argv[3]
const Index4 = process.argv[4]

switch (action) {
  case 'list':
    listBooks()
    break
  case 'read':
    openSpecificBook(Index3)
    break
  case 'delete':
    deletebooks(Index3)
    break
  case 'create':
    addbooks(Index3)
    break
  case 'update':
    updateInfo(Index3, Index4)
}

function listBooks() {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20', (err, req, body) => {
    const data = JSON.parse(body)
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id, data[i].name)
    }
  }
  )
}

function openSpecificBook(number) {
  request(`https://lidemy-book-store.herokuapp.com/books/${number}`, (err, req, body) => {
    const data = JSON.parse(body)
    console.log(data.id, data.name)
  }
  )
}

function addbooks(str) {
  request.post({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    form: { name: str }
  }, (err, res, body) => {
    const data = JSON.parse(body)
    console.log(`StatusCode:${res.statusCode}\nName:${data.name}\nID:${data.id}`)
  }
  )
}

function deletebooks(whichId) {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${whichId}`, (err, res, body) => {
    console.log('StatusCode:', res.statusCode)
  }
  )
}

function updateInfo(whichId, newName) {
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${whichId}`,
    form: { name: newName }
  }, (err, res, body) => {
    const data = JSON.parse(body)
    console.log(`StatusCode:${res.statusCode}\nName:${data.name}\nID:${data.id}`)
  }
  )
}
