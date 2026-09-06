---
layout: layouts/page.njk
title: "श्रद्धांजली व आठवणी"
description: "अ. मि. जमादार यांचे सहकारी, विद्यार्थी व मित्र यांच्या आठवणींचे सार्वजनिक व्यासपीठ. येथे प्रसिद्ध होण्यापूर्वी प्रत्येक नोंद कुटुंबियांकडून तपासली जाते."
lang: mr
slug: "tributes/"
ogType: article
subtitle: "त्यांना ओळखणाऱ्यांच्या आठवणी — येथे दिसण्यापूर्वी कुटुंबियांकडून तपासल्या जातात."
---

<div class="prose">

आपण त्यांचे विद्यार्थी असाल, शिक्षक चळवळीत त्यांच्यासोबत काम केले असेल, किंवा त्यांना नुसतेच ओळखत असाल, तरी येथे आपली आठवण नोंदवू शकता. प्रसिद्ध होण्यापूर्वी प्रत्येक नोंद कुटुंबिय वाचतात, त्यामुळे ती दिसायला थोडा वेळ लागू शकतो.

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
<p class="lede">अद्याप कोणतीही आठवण प्रसिद्ध झालेली नाही — खालील फॉर्मद्वारे सर्वप्रथम आपली आठवण नोंदवा.</p>
</div>
{% endif %}

<div class="prose">

## आपली आठवण शेअर करा

<form name="tribute" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/mr/thank-you/" class="site-form">
  <input type="hidden" name="form-name" value="tribute">
  <p class="site-form__honeypot"><label>आपण मानव असल्यास हे भरू नका: <input name="bot-field"></label></p>
  <div class="site-form__field">
    <label for="tribute-name-mr">आपले नाव</label>
    <input type="text" id="tribute-name-mr" name="name" required>
  </div>
  <div class="site-form__field">
    <label for="tribute-relationship-mr">आपण त्यांना कसे ओळखत होता?</label>
    <input type="text" id="tribute-relationship-mr" name="relationship" placeholder="उदा. माजी विद्यार्थी, सहकारी शिक्षक, शेजारी">
  </div>
  <div class="site-form__field">
    <label for="tribute-message-mr">आपली आठवण</label>
    <textarea id="tribute-message-mr" name="message" rows="6" required></textarea>
  </div>
  <button type="submit" class="btn btn--primary">तपासणीसाठी सादर करा</button>
</form>

</div>
