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
   <li><a href="../img/misc/{{ filename }}"><img src="../img/misc/{{ filename }}">`</a></li>
  {% endfor %}
  </ul>