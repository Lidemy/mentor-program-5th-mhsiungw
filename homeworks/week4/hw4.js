const request = require('request')

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'mecfjqvqezvv1sa9zk3b2rgqpbun6u'
  }
}

function callback(err, res, body) {
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
  }

  for (const game of data.top) {
    console.log(game.viewers, game.game.name)
  }
}

request(options, callback)
