import * as restify from 'restify'
import * as dialogs from './dialogs'
import { configs } from './constants'

import * as botbuilder from 'botbuilder'

const server = restify.createServer()
server.listen(configs.PORT, () => {
  console.log('%s listening to %s', server.name, server.url)
})
server.get('/echo/:name', (req, res, next) => {
  res.send(req.params)
})

const connector = new botbuilder.ChatConnector({
  appId: configs.MICROSOFT_APP_ID,
  appPassword: configs.MICROSOFT_APP_PASSWORD
})
server.post('/api/messages', connector.listen());

const bot = new botbuilder.UniversalBot(connector)
const recognizer = new botbuilder.LuisRecognizer(configs.LUIS_MODEL_URL)
bot.recognizer(recognizer)

// Dialogs
bot.dialog('/', (session) => {
  session.send('我是亨哥！')
})

bot.dialog(dialogs.INTRODUCTION_DIALOG, dialogs.introductionDialog).triggerAction({matches: 'introduction'})