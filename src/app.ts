import * as restify from 'restify'
import * as dialogs from './dialogs'
import { configs, TEMPLATES } from './constants'

import * as builder from 'botbuilder'

const server = restify.createServer()
server.listen(configs.PORT, () => {
  console.log('%s listening to %s', server.name, server.url)
})
server.get('/echo/:name', (req, res, next) => {
  res.send(req.params)
})

const connector = new builder.ChatConnector({
  appId: configs.MICROSOFT_APP_ID,
  appPassword: configs.MICROSOFT_APP_PASSWORD
})
server.post('/api/messages', connector.listen());

const bot = new builder.UniversalBot(connector)
const recognizer = new builder.LuisRecognizer(configs.LUIS_MODEL_URL)
bot.recognizer(recognizer)
bot.use({
  receive: (event: any, next) => {
    if (event.text.includes(configs.BOT_USERNAME)) {
      next()
    }
  }
})

// Dialogs
bot.dialog('/', (session) => {
  session.endDialog(TEMPLATES.greeting())
})

bot.dialog(dialogs.INTRODUCTION_DIALOG, dialogs.introductionDialog).triggerAction({matches: 'introduction'})