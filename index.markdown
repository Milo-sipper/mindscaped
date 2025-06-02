---
layout: default
title: 
---
![Looping gif](/assets/images/output.gif){: style="position: fixed; top:0; left:0; width:100%; height:100%; z-index:-1; object-fit: cover;" }
<h3>sup, ye of little faith</h3> 

<h1><span id="typed"></span></h1>

<p>Get to know our cast!</p>

<!-- Blog Posts -->
<div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 40px;">
  {% for post in site.posts %}
    <div style="border: 1px solid #ccc; border-radius: 10px; padding: 20px; width: 300px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
      <h3><a href="{{ post.url }}" style="text-decoration: none; color: black;">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 100 }}</p>
      <a href="{{ post.url }}" style="color: #0066cc;">Read more →</a>
    </div>
  {% endfor %}
</div>

<!-- Typing animation scripts -->
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('#typed', {
      strings: [
        '<span style="color: white;">Interact.</span>',
        '<span style="color: cyan;">Journal.</span>',
        '<span style="color: red;">Breathe.</span>'
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      html: true
    });
  });
</script>
<link rel="stylesheet" href="/assets/css/style.css">

