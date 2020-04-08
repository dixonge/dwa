module.exports = (url, alt = "Missing alt text") => {
    return `<picture>
    <source srcset="${url}?nf_resize=fit&w=320" media="(max-width: 320px)">
    <source srcset="${url}?nf_resize=fit&w=375" media="(max-width: 375px)">
    <source srcset="${url}?nf_resize=fit&w=414" media="(max-width: 414px)">
    <source srcset="${url}?nf_resize=fit&w=756" media="(min-width: 755px)">
    <img src="${url}?nf_resize=fit&w=756" alt="${alt}" />
  </picture>`;
  };