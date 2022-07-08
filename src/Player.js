function Player(videoElementWrapperId, opts) {
  this.videoElementWrapperId = videoElementWrapperId;
  this.opts = opts;
  this.videoElement = null;
  this.videoElementWrapper = null;
}

Player.prototype.build = function () {
  this.videoElementWrapper = document.getElementById(this.videoElementWrapperId);
  this.videoElement = document.createElement('video');
  this.videoElement.src = this.opts.src;
  if (this.opts.controls) {
    this.videoElement.controls = true;
  }
  if (this.opts.loop) {
    this.videoElement.loop = true;
  }
  if (this.opts.autoplay) {
    this.videoElement.muted = true;
    this.videoElement.setAttributeNode(document.createAttribute("muted"));
    this.videoElement.autoplay = true;
    this.videoElement.playsinline = true;
    setInterval(() => this.pressPlay(), 3000); // keep trying to play
  }
  this.videoElementWrapper.appendChild(this.videoElement);
};

Player.prototype.pressPlay = async function () {
  // TODO: Prevent this running on a page where Player doesn't exist.
  if (this.videoElement.readyState > 2) {
    try {
      await this.videoElement.play();
    } catch (err) {
      console.log(err);
    }
  }
};

export { Player };
