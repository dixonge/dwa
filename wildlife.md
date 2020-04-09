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
   <li><a href="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto/dwa/wildlife/{{ filename }}">
  <picture>
    <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_320/dwa/wildlife/{{ filename }}" media="(max-width: 320px)">
    <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_375/dwa/wildlife/{{ filename }}" media="(max-width: 375px)">
    <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_414/dwa/wildlife/{{ filename }}" media="(max-width: 414px)">
    <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_755/dwa/wildlife/{{ filename }}" media="(min-width: 755px)">
    <img src="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_756/dwa/wildlife/{{ filename }}" alt="${alt}" />
  </picture>
   </a></li>
  {% endfor %}
  </ul>