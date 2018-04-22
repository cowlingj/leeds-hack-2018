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
        let res = "";
        console.log(
          body +
            "FIGHT: " +
            Object.keys(json) +
            ">" +
            typeof json.fight_steps_successful
        );
        if (json.fight_steps_successful !== undefined) {
          if (
            json.fight_steps_successful[json.fight_steps_successful.length - 1]
          ) {
            res = "nice one! ";
          } else {
            res = "you can do better than that! ";
          }
        }
        console.log(Object.keys(json), null, 2);
        this.response.speak(
          res +
            'the pirate says, <prosody pitch="low">' +
            json.insult +
            "</prosody>"
        );
        this.response.listen("make your retort");
        this.emit(":responseReady");
      }
    }
  );
}
