import Request from "request";
import Endpoints from "../endpoints";

export default function() {
  Request.get(Endpoints.start, (err, res, body) => {
    let json = JSON.parse(body);
    if (err) {
      this.emit(ERROR);
    } else if (json.dead) {
      this.emit("DefeatIntent");
    } else if (json.fight_finished) {
      this.emit("VictoryIntent");
    } else if (json.no_current_fight) {
      this.response.speak("You need to meet a pirate before you battle");
      this.emit(":responseReady");
    } else {
      this.response.speak(
        'the pirate says, <prosody pitch="low">' + json.insult + "</prosody>"
      );
      this.response.listen("make your retort");
      this.emit(":responseReady");
    }
  });
}
