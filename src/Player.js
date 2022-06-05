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
    this.videoElement.autoplay = true;
    // https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#best_practices
    this.videoElement.playsinline = true;
    this.videoElement.muted = true;
    setInterval(() => this.pressPlay(), 5000); // keep trying to play
  }
  this.videoElementWrapper.appendChild(this.videoElement);
};

Player.prototype.pressPlay = function () {
  if (
    // video has stopped
    this.videoElement.currentTime > 0
    && !this.videoElement.paused
    && !this.videoElement.ended
    && this.videoElement.readyState > 2
  ) {
    this.videoElement.play();
  }
};

export { Player };
