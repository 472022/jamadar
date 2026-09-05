---
layout: layouts/page.njk
title: "छायाचित्र दालन"
description: "अ. मि. जमादार कौटुंबिक संग्रहातील सर्व ४७ छायाचित्रे — अल्बमची पाने, वृत्तपत्र कात्रणे व मूळ छायाचित्रे — विभागानुसार पाहता येतील."
lang: mr
slug: "gallery/"
ogType: article
heroImage: "leaders-and-dignitaries/aiptf-10th-session-indira-gandhi-nov1975-pg244.jpg"
heroAlt: "अखिल भारतीय प्राथमिक शिक्षक महासंघ, १० वे अधिवेशन, २२-२४ नोव्हेंबर १९७५ — इंदिरा गांधी प्रचंड शिक्षक-मेळाव्यास संबोधित करताना."
heroCompact: true
subtitle: "उपलब्ध कौटुंबिक संग्रहातील प्रत्येक छायाचित्र, एकाच ठिकाणी. मोठ्या आकारात पाहण्यासाठी कोणत्याही छायाचित्रावर क्लिक करा."
---

<div class="gallery-filter" role="group" aria-label="विभागानुसार गाळणी">
  <button type="button" data-gallery-filter="all" class="is-active">सर्व (४७)</button>
  <button type="button" data-gallery-filter="career-union">कारकीर्द व संघटन</button>
  <button type="button" data-gallery-filter="leaders-and-dignitaries">मान्यवरांच्या भेटी</button>
  <button type="button" data-gallery-filter="international-delegations">आंतरराष्ट्रीय संबंध</button>
  <button type="button" data-gallery-filter="awards-and-honors">पुरस्कार व सन्मान</button>
  <button type="button" data-gallery-filter="press-clippings">वृत्तपत्र कात्रणे</button>
  <button type="button" data-gallery-filter="early-life">प्रारंभिक जीवन</button>
</div>

{% from "partials/gallery-macros.njk" import galleryGrid %}
{{ galleryGrid(images, "mr") }}
