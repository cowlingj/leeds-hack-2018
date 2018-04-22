import Amazon from './amazon'
import Retort from './retort'
import Launch from './launch'
import Insult from './insult'

export default {
  'LaunchRequest' : Launch,
  'AMAZON.HelpIntent': Amazon.helpIntent,
  'AMAZON.CancelIntent': Amazon.cancelIntent,
  'AMAZON.StopIntent': Amazon.stopIntent,
  'InsultIntent': Insult,
  'RetortIntent': Retort,
  'SessionEndedRequest': Amazon.stopIntent,
}