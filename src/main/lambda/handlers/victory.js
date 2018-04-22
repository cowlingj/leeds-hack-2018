export default function() {
  this.response.speak('great job! you win!!!');
  this.emit(':responseReady');
}