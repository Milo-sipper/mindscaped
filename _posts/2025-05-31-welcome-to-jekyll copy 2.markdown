---
layout: post
title:  Breathe
date:   2025-05-31 12:09:08 +0800
categories: jekyll update
---
![Looping gif](/assets/images/output.gif){: style="position: fixed; top:0; left:0; width:100%; height:100%; z-index:-1; object-fit: cover;" }
<h3 style="color: #D8863B;">Sometimes, its good to take a breather, so lets count together!
Clear your mind, and lets go!!</h3>


<style>
.wind-lines {
  position: relative;
  height: 80px;
  margin-top: 20px;
  overflow: hidden;
}

.wind-line {
  content: "";
  position: absolute;
  width: 120px;
  height: 7px;
  background: rgba(255, 255, 255, 0.2);
  animation: wind-streak 2s linear infinite;
}

.wind-line:nth-child(1) {
  top: 10%;
  animation-delay: 0s;
}

.wind-line:nth-child(2) {
  top: 30%;
  animation-delay: 0.5s;
  width: 80px;
}

.wind-line:nth-child(3) {
  top: 50%;
  animation-delay: 1s;
  width: 100px;
}

.wind-line:nth-child(4) {
  top: 70%;
  animation-delay: 1.5s;
  width: 60px;
}

.wind-line:nth-child(5) {
  top: 90%;
  animation-delay: 2s;
  width: 140px;
}

@keyframes wind-streak {
  0% {
    transform: translateX(-150px);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateX(120vw);
    opacity: 0;
  }
}
</style>

<div class="wind-lines">
  <div class="wind-line"></div>
  <div class="wind-line"></div>
  <div class="wind-line"></div>
  <div class="wind-line"></div>
  <div class="wind-line"></div>
</div>



<style>
body {
  margin: 0;
  font: consolas;
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
}
</style>

<div class="scroll-zone">
  <div class="counter-wrapper">
    <div id="scroll-counter">0</div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
const counterEl = document.getElementById("scroll-counter");
document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  if (scrollTop >= maxScroll) {
    console.log("well done!");
    // You can also show an alert or update the page here
    // alert("well done!");
  }
});

  // Scroll progress (0 to 1)
  const progress = Math.min(scrollTop / maxScroll, 1);

  // Animate from 0 to 10
  const value = Math.floor(progress * 10);

  counterEl.textContent = value;

});
</script>
<style>
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

<div id="progress-container">
  <div id="progress-bar"></div>
</div>

<script>
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});
</script>
