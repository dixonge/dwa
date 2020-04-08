---
title: Feathers
author: Philip Dixon
layout: layouts/home.njk
images:
  - cowboy-close-up-new-w.jpg
  - cowboy-featured-w.jpg
  - cowboy-framed-w.jpg
  - cowboy-w.jpg
  - deer-featured-w.jpg
  - deer-new-framed-w.jpg
  - deer-new-w.jpg
  - deer-thugs-deer-w.jpg
  - deer-thugs-featured-w.jpg
  - deer-thugs-framed-w.jpg
  - deer-thugs-new-w.jpg
  - deer-thugs-w.jpg
  - deer-w.jpg
  - deer2-w.jpg
  - doe-close-up-new-w.jpg
  - doe-new-w.jpg
  - eagleflag-w.jpg
  - elk-new-close-up-w.jpg
  - elk-new-framed-w.jpg
  - feathers.txt
  - heart-of-texas-featured-w.jpg
  - heart-of-texas-framed-w.jpg
  - heart-of-texas-new-close-up-w.jpg
  - hunter-w1.jpg
  - rainbow-trout-new-close-up-w.jpg
  - rainbow-trout-new-framed-w.jpg
  - trout-w.jpg
  - turkey-w.jpg
  - turkeyhoriz-w.jpg
  - turkeyhorizclose-w.jpg
  - twoturkeys-featured-w.jpg
  - twoturkeys-w.jpg
---
# Feathers

<ul class="grid grid-cols-3 gap-4">
  {% for filename in images %}
   <li><a href="../img/feathers/{{ filename }}">
   <picture>
    <source srcset="../img/feathers/{{ filename }}?nf_resize=fit&w=320" media="(max-width: 320px)">
    <source srcset="../img/feathers/{{ filename }}?nf_resize=fit&w=375" media="(max-width: 375px)">
    <source srcset="../img/feathers/{{ filename }}?nf_resize=fit&w=414" media="(max-width: 414px)">
    <source srcset="../img/feathers/{{ filename }}?nf_resize=fit&w=756" media="(min-width: 755px)">
    <img src="../img/feathers/{{ filename }}?nf_resize=fit&w=756" alt="${alt}" />
  </picture>
   </a></li>
  {% endfor %}
  </ul>