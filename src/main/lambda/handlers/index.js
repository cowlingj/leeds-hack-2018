import Amazon from './amazon'
import Retort from './retort'
import Launch from './launch'

export default {
  'LaunchRequest' : Launch,
  'AMAZON.HelpIntent': Amazon.helpIntent,
  'AMAZON.CancelIntent': Amazon.cancelIntent,
  'AMAZON.StopIntent': Amazon.stopIntent,
  'RetortIntent': Retort,
}