
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.setBrowserSyncConfig({
		files: './public/styles/**/*.css'
	});
    return {
      dir: {
        input: "src",
        output: "public",
      },
      passthroughFileCopy: true,
    };
  };


