import Request from 'request'
import Endpoints from '../endpoints'

export default () => {
  let self = this
  Request.post(Endpoints.retort, {
    body: this.slots.Retort.value
  }, (err, res, body) => {
    if (err) {
      self.emit(ERROR)
    } else if (body.end){
      self.emit('AMAZON.StopIntent')
    } else {
      self.response.speak(body.insult)
      self.response.cardRender("Reply", body.comebacks)
      self.response.listen()
    }
  })
}