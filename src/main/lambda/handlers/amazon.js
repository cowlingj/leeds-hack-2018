export default {
  helpIntent() {
    this.response.speak(HELP_MESSAGE).listen(HELP_REPROMPT);
    this.emit(':responseReady');
  },
  cancelIntent() {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
  stopIntent() {
    this.response.speak('Goodbye!');
    this.emit(':responseReady');
  },
}