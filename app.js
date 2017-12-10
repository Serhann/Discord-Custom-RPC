const { Client } = require('discord-rpc')
const { app } = require('./config.json')

const rpc = new Client({ transport: app.transport })

rpc.on('ready', () => {
  console.log('RPC ready!')

  rpc.setActivity({
    details: app.details,
    state: app.state,
    largeImageKey: app.largeImageKey,
    largeImageText: app.largeImageText,
    smallImageKey: app.smallImageKey,
    smallImageText: app.smallImageText
  })
})

rpc.login(app.id).catch(console.error)
