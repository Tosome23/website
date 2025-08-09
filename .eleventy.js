// .eleventy.js (repo 루트에 위치)
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // 정적 자산을 최종 /blog 경로로 복사
  eleventyConfig.addPassthroughCopy({
    "website/blog/static/style.css": "blog/style.css"
  });
  eleventyConfig.addPassthroughCopy({
    "website/blog/images": "blog/images"
  });

  // 날짜 필터
  eleventyConfig.addFilter("date", d =>
    DateTime.fromJSDate(d).toFormat("yyyy-MM-dd")
  );

  // 포스트 수집 (website 기준 경로)
  eleventyConfig.addCollection("posts", (col) =>
    col.getFilteredByGlob("website/blog/content/blog/*.md")
  );

return {
  dir: { input: ".", includes: "blog/layouts", output: "_site" },
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  templateFormats: ["md","njk","html"]
};
};
