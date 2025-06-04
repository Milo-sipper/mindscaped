---
layout: post
title:  Journal
date:   2025-05-31 12:09:08 +0800
categories: jekyll update
---
![Looping gif](/assets/images/output.gif){: style="position: fixed; top:0; left:0; width:100%; height:100%; z-index:-1; object-fit: cover;" }
Whenever you feel down, lets jorunal! Jorunalling helps with reacting & acknowledging your feelings, rather than throwing them away! To journal, click the topright button which says "Click here to journal!". In the meantime, you can ask our friendly AI any questions you have!


</script>
<link rel="stylesheet" href="/assets/css/style.css">

<h2>Ask AI Anything:</h2>
<textarea id="prompt" rows="4" cols="60" placeholder="Enter a prompt..."></textarea><br>
<button onclick="sendPrompt()">Submit</button>

<pre id="output"></pre>

<script>
  async function sendPrompt() {
    const prompt = document.getElementById('prompt').value;

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    document.getElementById('output').textContent = data.text || 'No response';
  }
</script>
