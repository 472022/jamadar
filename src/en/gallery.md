---
layout: layouts/page.njk
title: "Photo Gallery"
description: "All 47 photographs in the A. M. Jamadar family archive — album pages, newspaper clippings, and original prints — browsable by category."
lang: en
slug: "gallery/"
ogType: article
heroImage: "leaders-and-dignitaries/aiptf-10th-session-indira-gandhi-nov1975-pg244.jpg"
heroAlt: "All India Primary Teachers Federation, 10th Session, 22–24 November 1975 — Indira Gandhi addressing a vast outdoor crowd of teachers."
heroCompact: true
subtitle: "Every photograph in the surviving family archive, in one place. Click any photo to view it full-size."
---

<div class="gallery-filter" role="group" aria-label="Filter by category">
  <button type="button" data-gallery-filter="all" class="is-active">All (47)</button>
  <button type="button" data-gallery-filter="career-union">Career &amp; Union Work</button>
  <button type="button" data-gallery-filter="leaders-and-dignitaries">Leaders &amp; Dignitaries</button>
  <button type="button" data-gallery-filter="international-delegations">International Ties</button>
  <button type="button" data-gallery-filter="awards-and-honors">Awards &amp; Honors</button>
  <button type="button" data-gallery-filter="press-clippings">Press Clippings</button>
  <button type="button" data-gallery-filter="early-life">Early Life</button>
</div>

{% from "partials/gallery-macros.njk" import galleryGrid %}
{{ galleryGrid(images, "en") }}
