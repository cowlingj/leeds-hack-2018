export default function() {
    this.response.speak('Better luck next time');
    this.emit(':responseReady');
}