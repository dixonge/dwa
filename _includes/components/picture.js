
module.exports = (url, alt = "Missing alt text") => {
  return `<picture class="ml-auto mr-auto">
  <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_320/dwa/${url}" media="(max-width: 320px)">
  <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_375/dwa/${url}" media="(max-width: 375px)">
  <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_414/dwa/${url}" media="(max-width: 414px)">
  <source srcset="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_992/dwa/${url}" media="(min-width: 755px)">
  <img src="https://res.cloudinary.com/donblanco/image/upload/f_auto,q_auto,w_992/dwa/${url}" alt="${alt}" />
</picture>`;
};