import Request from "request";
import Endpoints from "../endpoints";

export default function() {
  let self = this;
  Request.post(
    Endpoints.retort,
    {
      body: self.event.request.intent.slots.RETORT.value
    },
    (err, res, body) => {
      let json = JSON.parse(body);
      if (err) {
        this.emit("error");
      } else if (json.dead) {
        this.emit("DefeatIntent");
      } else if (json.fight_finished) {
        this.emit("VictoryIntent");
      } else {
        console.log(Object.keys(json), null, 2);
        this.response.speak(json.insult);
        this.response.listen("make your retort");
        this.emit(":responseReady");
      }
    }
  );
}
