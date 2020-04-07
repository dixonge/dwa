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
   <li><a href="../img/wildlife/{{ filename }}"><img src="../img/wildlife/{{ filename }}">`</a></li>
  {% endfor %}
  </ul>