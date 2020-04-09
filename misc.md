---
title: Miscellaneous
author: Philip Dixon
layout: layouts/home.njk
images:
  - boat-w.jpg
  - emily-w.jpg
  - emmitt-new-w.jpg
  - mountainman-w.jpg
  - native-american-woman-w.jpg
  - venice-new-w.jpg
---
# Miscellaneous

<ul class="grid grid-cols-3 gap-4">
  {% for filename in images %}
   <li><a href="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto/dwa/misc/{{ filename }}">
   <picture>
     <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_320/dwa/misc/{{ filename }}" media="(max-width: 320px)">
     <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_375/dwa/misc/{{ filename }}" media="(max-width: 375px)">
     <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_414/dwa/misc/{{ filename }}" media="(max-width: 414px)">
     <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_755/dwa/misc/{{ filename }}" media="(min-width: 755px)">
     <img src="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_756/dwa/misc/{{ filename }}" alt="${alt}" />
   </picture>
   </a></li>
  {% endfor %}
</ul>