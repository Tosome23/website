const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // /blog 정적 자산 복사
  eleventyConfig.addPassthroughCopy({ "blog/static/style.css": "blog/style.css" });
  eleventyConfig.addPassthroughCopy({ "blog/images": "blog/images" });

  // 날짜 필터
  eleventyConfig.addFilter("date", d =>
    DateTime.fromJSDate(d).toFormat("yyyy-MM-dd")
  );

  // 블로그 포스트 컬렉션
  eleventyConfig.addCollection("posts", (col) =>
    col.getFilteredByGlob("blog/content/blog/*.md")
  );

  return {
 module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: ".",
      includes: "blog/layouts",
      output: "_site"
    }
  };
};
