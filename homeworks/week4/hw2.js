const request = require('request')

const action = process.argv[2]
const param2 = process.argv[3]
const param3 = process.argv[4]
const baseUrl = 'https://lidemy-book-store.herokuapp.com/'

switch (action) {
  case 'list':
    listBooks()
    break
  case 'read':
    openBook(param2)
    break
  case 'delete':
    deletebooks(param2)
    break
  case 'create':
    addbooks(param2)
    break
  case 'update':
    updateInfo(param2, param3)
}

function listBooks() {
  request(`${baseUrl}books?_limit=20`, (err, res, body) => {
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
}

function openBook(id) {
  request(`${baseUrl}books/${id}`, (err, res, body) => {
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
    console.log(data.id, data.name)
  }
  )
}

function addbooks(str) {
  request.post({
    url: `${baseUrl}books`,
    form: { name: str }
  }, (err, res, body) => {
    if (res.statusCode >= 400) {
      console.log('statusCode:', res.statusCode)
      console.log('發生錯誤')
      return
    }

    if (!str) {
      console.log('請輸入正確格式的書名')
      return
    }

    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }
    console.log(`StatusCode:${res.statusCode}`)
    console.log(`Name:${data.name}`)
    console.log(`ID:${data.id}`)
  }
  )
}

function deletebooks(id) {
  request.delete(`${baseUrl}books/${id}`, (err, res, body) => {
    if (res.statusCode >= 400) {
      console.log('statusCode:', res.statusCode)
      console.log('刪除失敗')
    } else {
      console.log('statusCode:', res.statusCode)
      console.log('刪除成功')
    }
  }
  )
}

function updateInfo(id, newName) {
  request.patch({
    url: `${baseUrl}books/${id}`,
    form: { name: newName }
  }, (err, res, body) => {
    if (res.statusCode >= 400) {
      console.log('statusCode:', res.statusCode)
      console.log('發生錯誤')
      return
    }

    if (!newName) {
      console.log('請輸入正確格式的書名')
      return
    }

    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }

    console.log(`StatusCode:${res.statusCode}`)
    console.log(`Name:${data.name}`)
    console.log(`ID:${data.id}`)
  }
  )
}
