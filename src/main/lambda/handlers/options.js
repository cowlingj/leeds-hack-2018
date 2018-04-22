import Request from "request";
import Endpoints from "../endpoints";

export default function() {
  Request.get(Endpoints.start, (err, res, body) => {
    let json = JSON.parse(body);
    if (err) {
      this.emit("error");
    } else if (json.dead) {
      this.emit("DefeatIntent");
    } else if (json.fight_finished) {
      this.emit("VictoryIntent");
    } else {
      this.response.speak(
        json.comebacks.reduce((acc, cur) => {
          if (acc === "") {
            return cur;
          }
          return acc + "\n" + cur;
        }, "")
      );
      this.response.listen("make your retort");
      this.emit(":responseReady");
    }
  });
}
