// .eleventy.js (루트)
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // ▶ 기존 홈페이지 정적 자산도 복사
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });     // CSS/JS
  eleventyConfig.addPassthroughCopy({ "images": "images" });     // 이미지
  eleventyConfig.addPassthroughCopy({ "favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "sitemap.xml": "sitemap.xml" });

  // ▶ 블로그 자산
  eleventyConfig.addPassthroughCopy({ "website/blog/static/style.css": "blog/style.css" });
  eleventyConfig.addPassthroughCopy({ "website/blog/images": "blog/images" });
  eleventyConfig.addPassthroughCopy({ "website/blog/admin": "blog/admin" });
  eleventyConfig.ignores.add("website/blog/admin/**");

  // 날짜/컬렉션 (그대로)
  eleventyConfig.addFilter("date", d => DateTime.fromJSDate(d).toFormat("yyyy-MM-dd"));
  eleventyConfig.addCollection("posts", col =>
    col.getFilteredByGlob("website/blog/content/blog/*.md")
  );

  return {
    dir: { input: ".", includes: "website/blog/layouts", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md","njk","html"]
  };
};
