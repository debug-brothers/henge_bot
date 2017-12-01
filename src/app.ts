import { configs } from './constants/'
import * as restify from 'restify'
import * as dialogs from './dialogs'

import * as bb from 'botbuilder'

const server = restify.createServer()
server.listen(configs.PORT, () => {
  console.log('%s listening to %s', server.name, server.url)
})
server.get('/echo/:name', (req, res, next) => {
  res.send(req.params)
})

const connector = new bb.ChatConnector({
  appId: configs.MICROSOFT_APP_ID,
  appPassword: configs.MICROSOFT_APP_PASSWORD
})
server.post('/api/messages', connector.listen());