const request = require('request')

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'mecfjqvqezvv1sa9zk3b2rgqpbun6u'
  }
}

function callback(err, req, body) {
  const data = JSON.parse(body)
  for (const game of data.top) {
    console.log(game.viewers, game.game.name)
  }
}

request(options, callback)
