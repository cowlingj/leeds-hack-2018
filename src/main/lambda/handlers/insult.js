import Request from 'request'
import Endpoints from '../endpoints'

export default function () {

  Request.get(Endpoints.start, (err, res, body) => {
    if (err) {
      this.emit(ERROR)
    } else if (body.end){
      this.emit('AMAZON.StopIntent')
    } else {
      //console.log(JSON.stringify(res, null, 2))
      //console.log(JSON.stringify(JSON.parse(body).insult, null, 2))
      this.response.speak(JSON.parse(body).insult)
      this.response.listen()
      this.emit(':responseReady')
      //this.response.cardRender("Reply", body.comebacks)
      // TODO: speak options
      //this.emit('RetortIntent')
    }
  })

}