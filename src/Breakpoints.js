// breakpoints.js
export const breakpoints = {
  "xs-phone": "20em", // 320px
  "f-phone": "28.125em", // 450px
  "m-phone": "32.5em", // 520px
  "s-phone": "37.5em", // 600px
  "tab-port": "56.25em", // 900px
  "tab-land": "75em", // 1200px
  "big-desktop": "112.5em", // 1800px
};

/**
 * Функция для медиазапросов
 * @param {string} breakpoint - ключ из breakpoints
 * @param {"max"|"min"} type - тип медиазапроса (max-width или min-width)
 * @returns {string} - строка медиазапроса для styled-components
 */
export const respond = (breakpoint, type = "max") => {
  const value = breakpoints[breakpoint];
  if (!value) return "";

  switch (type) {
    case "max":
      return `@media (max-width: ${value})`;
    case "min":
      return `@media (min-width: ${value})`;
    default:
      return "";
  }
};
