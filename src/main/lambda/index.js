import Alexa from 'alexa-sdk'
import handlers from './handlers'

export function handler (event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.APP_ID = process.env.APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
