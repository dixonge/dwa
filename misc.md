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
   <li><a href="../img/misc/{{ filename }}">
   <picture>
     <source srcset="../img/misc/{{ filename }}?nf_resize=fit&w=320" media="(max-width: 320px)">
     <source srcset="../img/misc/{{ filename }}?nf_resize=fit&w=375" media="(max-width: 375px)">
     <source srcset="../img/misc/{{ filename }}?nf_resize=fit&w=414" media="(max-width: 414px)">
     <source srcset="../img/misc/{{ filename }}?nf_resize=fit&w=756" media="(min-width: 755px)">
     <img src="../img/misc/{{ filename }}?nf_resize=fit&w=756" alt="${alt}" />
   </picture>
   </a></li>
  {% endfor %}
</ul>