// .eleventy.js (루트)
const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
  // 기존 사이트 정적
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "images": "images" });
  eleventyConfig.addPassthroughCopy({ "favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "sitemap.xml": "sitemap.xml" });
  eleventyConfig.addPassthroughCopy({ "dangerous": "dangerous" });
eleventyConfig.addPassthroughCopy({ "assets/css/main.css": "assets/main.css" });
eleventyConfig.addPassthroughCopy({ "assets/css/noscript.css": "assets/noscript.css" });
eleventyConfig.addPassthroughCopy({ "assets/js": "assets/js" }); // js도 확실히

  // 블로그 정적 (blog/* 기준)
  eleventyConfig.addPassthroughCopy({ "blog/static/style.css": "blog/style.css" });
  eleventyConfig.addPassthroughCopy({ "blog/images": "blog/images" });
  eleventyConfig.addPassthroughCopy({ "blog/admin": "blog/admin" });
  eleventyConfig.ignores.add("blog/admin/**");

  eleventyConfig.addFilter("date", d => DateTime.fromJSDate(d).toFormat("yyyy-MM-dd"));
  eleventyConfig.addCollection("posts", col => col.getFilteredByGlob("blog/content/blog/*.md"));

  // ★ 레이아웃 폴더를 blog/layouts 로 지정
  return { dir: { input: ".", includes: "blog/layouts", output: "_site" },
           markdownTemplateEngine: "njk", htmlTemplateEngine: "njk",
           templateFormats: ["md","njk","html"] };
};
