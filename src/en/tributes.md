---
layout: layouts/page.njk
title: "Tributes & Stories"
description: "A public wall of memories from colleagues, students, and friends of A. M. Jamadar. Entries are reviewed by the family before appearing here."
lang: en
slug: "tributes/"
ogType: article
subtitle: "Memories from those who knew him — reviewed by the family before they appear here."
---

<div class="prose">

If you were taught by him, worked alongside him in the teachers' movement, or simply knew him, this is a place to leave a memory of your own. Every entry is read by the family before it's published here, so it may take a little while to appear.

</div>

{% if tributes.length %}
<div class="tribute-wall">
  {% for t in tributes %}
  <article class="tribute-card">
    <p class="tribute-card__message">"{{ t.message }}"</p>
    <p class="tribute-card__meta">— {{ t.name }}{% if t.relationship %}, {{ t.relationship }}{% endif %}</p>
  </article>
  {% endfor %}
</div>
{% else %}
<div class="prose">
<p class="lede">No memories have been published yet — be the first to share one below.</p>
</div>
{% endif %}

<div class="prose">

## Share your memory

<form name="tribute" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/en/thank-you/" class="site-form">
  <input type="hidden" name="form-name" value="tribute">
  <p class="site-form__honeypot"><label>Don't fill this out if you're human: <input name="bot-field"></label></p>
  <div class="site-form__field">
    <label for="tribute-name">Your name</label>
    <input type="text" id="tribute-name" name="name" required>
  </div>
  <div class="site-form__field">
    <label for="tribute-relationship">How did you know him?</label>
    <input type="text" id="tribute-relationship" name="relationship" placeholder="e.g. former student, fellow teacher, neighbour">
  </div>
  <div class="site-form__field">
    <label for="tribute-message">Your memory</label>
    <textarea id="tribute-message" name="message" rows="6" required></textarea>
  </div>
  <button type="submit" class="btn btn--primary">Submit for review</button>
</form>

</div>
