import Request from 'request'
import Endpoints from '../endpoints'

export default () => {
  self = this

  Request.get(Endpoints.start, (err, res, body) => {
    if (err) {
      self.emit(ERROR)
    } else if (body.end){
      self.emit('AMAZON.StopIntent')
    } else {
      console.log(JSON.stringify(res, null, 2))
      console.log(JSON.stringify(body, null, 2))
      self.response.speak(body.insult)
      self.response.cardRender("Reply", body.comebacks)
      // TODO: speak options
      self.emit('RetortIntent')
    }
  })

}