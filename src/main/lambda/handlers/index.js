import Amazon from "./amazon";
import Retort from "./retort";
import Launch from "./launch";
import Insult from "./insult";
import Victory from "./victory";
import Defeat from "./defeat";
import Options from "./options";

export default {
  LaunchRequest: Launch,
  "AMAZON.HelpIntent": Amazon.helpIntent,
  "AMAZON.CancelIntent": Amazon.cancelIntent,
  "AMAZON.StopIntent": Amazon.stopIntent,
  InsultIntent: Insult,
  RetortIntent: Retort,
  VictoryIntent: Victory,
  DefeatIntent: Defeat,
  OptionsIntent: Options,
  SessionEndedRequest: Amazon.stopIntent
};
