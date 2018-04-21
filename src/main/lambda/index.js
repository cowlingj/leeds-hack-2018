import Alexa from 'alexa-sdk'
import handlers from './handlers'

module.exports = (event, context, callback) => {
  const alexa = Alexa.handler(event, context, callback)
  alexa.appId = process.env.APP_ID
  alexa.registerHandlers(handlers)
  alexa.execute()
}
