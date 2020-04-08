---
title: Wildlife
author: Philip Dixon
layout: layouts/home.njk
images:
  - bighorn-w.jpg
  - buck-sold-w.jpg
  - buckanddoe-w.jpg
  - coyote-in-the-mist-w.jpg
  - elk-at-sunrise.jpg
  - elkmorning-w.jpg
  - foggy-morning-w.jpg
  - horse-lady-sold-w.jpg
  - hunter-w.jpg
  - lone-bison-w.jpg
  - moose-sold-w.jpg
  - mountain-trapper-w.jpg
  - rams-w.jpg
  - thankful-at-dusk-w.jpg
  - tracker-w.jpg
  - tracking-2-w.jpg
---
# Wildlife

<ul class="grid grid-cols-3 gap-4">
  {% for filename in images %}
   <li><a href="../img/wildlife/{{ filename }}">
  <picture>
    <source srcset="../img/wildlife/{{ filename }}?nf_resize=fit&w=320" media="(max-width: 320px)">
    <source srcset="../img/wildlife/{{ filename }}?nf_resize=fit&w=375" media="(max-width: 375px)">
    <source srcset="../img/wildlife/{{ filename }}?nf_resize=fit&w=414" media="(max-width: 414px)">
    <source srcset="../img/wildlife/{{ filename }}?nf_resize=fit&w=756" media="(min-width: 755px)">
    <img src="../img/wildlife/{{ filename }}?nf_resize=fit&w=756" alt="${alt}" />
  </picture>
   </a></li>
  {% endfor %}
  </ul>