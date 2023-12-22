module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets/css/styles.css");

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: "_includes",
      layouts: '_layouts',
      data: "_data",
      output: '_site',
    },
  };
};