const { Client } = require('discord-rpc')
const { app, settings } = require('./config')

const rpc = new Client({ transport: app.transport })

rpc.on('ready', () => {
  makeControls()
  .then(() => {
    console.log('RPC ready!')
    setActivity(app.details, app.state, app.largeImageKey, app.largeImageText, app.smallImageKey, app.smallImageText)
  })
})

async function setActivity(details, state, largeImageKey, largeImageText, smallImageKey, smallImageText) {
  console.log('Setting RPC...')
  makeControls()
  .then(() => {
    rpc.setActivity({ details, state, largeImageKey, largeImageText, smallImageKey, smallImageText })
    .then(() => {
      console.log('RPC is 👌')
    })
  })
  setTimeout(() => {
    setActivity(app.details, app.state, app.largeImageKey, app.largeImageText, app.smallImageKey, app.smallImageText)
  }, settings.delay)
}

async function makeControls() {
  if (settings.delay < 60000) throw 'Minimum delay: 60000'
  if (app.id === undefined || app.transport === undefined || app.details === undefined) throw 'Missing variable(s)'
  if (app.largeImageKey === undefined || app.largeImageText === undefined || app.smallImageKey === undefined || app.smallImageText === undefined) throw 'Missing variable(s)'
}

rpc.login(app.id).catch(err => { throw err.message })
