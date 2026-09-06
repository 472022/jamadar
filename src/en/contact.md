---
layout: layouts/page.njk
title: "Contact"
description: "Get in touch with the family of A. M. Jamadar, or contribute a photo, document, or correction to this archive — an initiative led by his son Nihal, with his grandson Shaan."
lang: en
slug: "contact/"
ogType: article
subtitle: "Reach the family, or help this archive grow."
---

<div class="prose">

This archive is an initiative led by **Nihal**, A. M. Jamadar's son, with his grandson **Shaan** helping build it. If you knew A. M. Jamadar, worked alongside him, or have a photograph, document, newspaper clipping, or correction that belongs in this record, the family would genuinely like to hear from you.

<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/en/thank-you/" class="site-form">
  <input type="hidden" name="form-name" value="contact">
  <p class="site-form__honeypot"><label>Don't fill this out if you're human: <input name="bot-field"></label></p>
  <div class="site-form__field">
    <label for="contact-name">Your name</label>
    <input type="text" id="contact-name" name="name" required>
  </div>
  <div class="site-form__field">
    <label for="contact-email">Your email</label>
    <input type="email" id="contact-email" name="email" required>
  </div>
  <div class="site-form__field">
    <label for="contact-reason">What's this about?</label>
    <select id="contact-reason" name="reason">
      <option value="General inquiry">General inquiry</option>
      <option value="I have a photo or document to contribute">I have a photo or document to contribute</option>
      <option value="I'd like to suggest a correction">I'd like to suggest a correction</option>
      <option value="I knew him and want to share something">I knew him and want to share something</option>
      <option value="Other">Other</option>
    </select>
  </div>
  <div class="site-form__field">
    <label for="contact-message">Your message</label>
    <textarea id="contact-message" name="message" rows="6" required></textarea>
  </div>
  <button type="submit" class="btn btn--primary">Send</button>
</form>

If you'd rather leave a public memory instead of a private message, visit [Tributes & Stories](/en/tributes/).

</div>
