import Request from 'request'
import Endpoints from '../endpoints'

export default function () {
  console.log(JSON.stringify(this, null, 2))
  let self = this
  Request.post(Endpoints.retort, {
    body: self.event.request.intent.slots.RETORT.value
  }, (err, res, body) => {
    console.log(JSON.stringify(res), null, 2)
    let json = JSON.parse(body)
    if (err) {
      this.emit('error')
    } else if (json.dead || json.fight_finished){
      this.emit('AMAZON.StopIntent')
    } else {
      console.log(Object.keys(json), null, 2)
      this.response.speak(json.insult)
      //this.response.cardRender("Reply", body.comebacks)
      this.response.listen()
      this.emit(':responseReady')
    }
  })
}