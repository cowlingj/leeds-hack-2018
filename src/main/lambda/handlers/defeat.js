const response = `<prosody pitch="low">
<prosody rate="x-slow" pitch="x-low" volume="x-loud">argh!</prosody> i got ye.</prosody>`;

export default function() {
  this.response.speak(response);
  this.emit(":responseReady");
}
