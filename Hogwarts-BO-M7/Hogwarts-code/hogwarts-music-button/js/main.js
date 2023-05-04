class VolumeControl {
    constructor(sourceUrl) {
      this.container = document.createElement("div");
      this.container.classList.add("volume-control");
  
      this.volumeButton = document.createElement("button");
      this.volumeButton.classList.add("volume-button");
      this.volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  
      this.slider = document.createElement("input");
      this.slider.type = "range";
      this.slider.min = "0";
      this.slider.max = "100";
      this.slider.value = "50";
      this.slider.classList.add("volume-slider");
  
      this.audio = document.createElement("audio");
      this.audio.src = sourceUrl;
  
      // Attach event listener to the volume button to toggle the slider and button
      this.volumeButton.addEventListener("click", () => {
        if (this.slider.classList.contains("active")) {
          this.slider.classList.remove("active");
          this.volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
          this.audio.pause();
          this.sliderThumb.style.marginTop = "-0.375rem"; // reset margin top value
        } else {
          this.slider.classList.add("active");
          this.volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
          this.audio.play();
          this.sliderThumb.style.marginTop = "-0.1875rem"; // set margin top value when active
        }
      });
  
      // Attach event listener to the slider to set the volume of the audio element
      this.slider.addEventListener("input", () => {
        const volume = parseInt(this.slider.value);
        this.audio.volume = volume / 100;
  
        if (volume <= 33) {
          this.volumeButton.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
        } else {
          this.volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
      });
  
      // Add the volume button and slider to the container
      this.container.appendChild(this.volumeButton);
      this.container.appendChild(this.slider);
  
      // Hide the slider on load
      this.slider.classList.remove("roll-out");
  
      // Get the slider thumb element
      this.sliderThumb = this.slider.querySelector("::-webkit-slider-thumb");
  
      // Append the audio element to the body
      document.body.appendChild(this.audio);
    }
  
    // Get the current volume level from the slider
    getVolume() {
      return parseInt(this.slider.value);
    }
  
    // Set the volume level on the slider
    setVolume(volume) {
      this.slider.value = volume.toString();
      this.audio.volume = volume / 100;
    }
  
    // Set the music state to playing or not
    setPlaying(playing) {
      if (playing) {
        this.slider.style.display = "block";
        this.volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        this.audio.play();
      } else {
        this.slider.style.display = "none";
        this.volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        this.audio.pause();
      }
    }
  }
  
  // Usage example:
  const volumeControl = new VolumeControl("/music/");
  document.body.appendChild(volumeControl.container);
  
  // Set
  