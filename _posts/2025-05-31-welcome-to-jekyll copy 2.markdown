---
layout: post
title:  Breathe
date:   2025-05-31 12:09:08 +0800
categories: jekyll update
---
![Looping gif](/assets/images/output.gif){: style="position: fixed; top:0; left:0; width:100%; height:100%; z-index:-1; object-fit: cover;" }
<h3 style="color: #ffffff;">Sometimes, its good to take a breather, so lets count together!
Clear your mind, and lets go!!</h3>

<style>
body {
  margin: 0;
  font-family: Consolas, monospace;
}
.scroll-zone {
  height: 450vh; /* Makes the page scrollable */
  color: white;

}
.counter-wrapper {
  position: sticky;
  top: 40vh;
  text-align: center;
}
#scroll-counter {
  font-size: 6em;
  font-weight: bold;
  color: white;
  transition: all 0.3s ease;
}
#progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 9999;
}
#progress-bar {
  height: 100%;
  width: 0%;
  background: #00ffff;
  transition: width 0.1s ease-out;
}
</style>

<div class="scroll-zone">
  <div class="counter-wrapper">
    <div id="scroll-counter">0</div>
  </div>
</div>

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
document.addEventListener("DOMContentLoaded", () => {
  const counterEl = document.getElementById("scroll-counter");
  const progressBar = document.getElementById("progress-bar");
  let hasCelebrated = false; // To prevent repeated triggers

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollTop / maxScroll, 1);
    const value = Math.floor(progress * 10);

    // Update counter
    counterEl.textContent = value;

    // Update progress bar
    progressBar.style.width = `${progress * 100}%`;

    // Celebrate when reaching 10 (only once)
    if (value === 10 && !hasCelebrated) {
      hasCelebrated = true;
      counterEl.textContent = "Well done, keep it up! 🎉";
      counterEl.style.color = "#ffffff";
      
      
    } 
    // Reset if scrolling back up
    else if (value < 10 && hasCelebrated) {
      hasCelebrated = false;
      counterEl.style.color = "white";
    }
  });
});
</script>