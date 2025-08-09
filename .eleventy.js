// .eleventy.js (repo 루트)
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // 블로그 정적자산 복사 (/blog 경로로 출력)
  eleventyConfig.addPassthroughCopy({
    "website/blog/static/style.css": "blog/style.css",
  });
  eleventyConfig.addPassthroughCopy({
    "website/blog/images": "blog/images",
  });
  eleventyConfig.addPassthroughCopy({
    "website/blog/admin": "blog/admin",
  });
  // admin은 렌더 대상에서 제외(그대로 복사만)
  eleventyConfig.ignores.add("website/blog/admin/**");

  // 날짜 필터
  eleventyConfig.addFilter("date", d =>
    DateTime.fromJSDate(d).toFormat("yyyy-MM-dd")
  );

  // 포스트 수집
  eleventyConfig.addCollection("posts", col =>
    col.getFilteredByGlob("website/blog/content/blog/*.md")
  );

  return {
    dir: {
      input: ".",
      // 레이아웃 폴더도 website/blog/layouts 로 지정!
      includes: "website/blog/layouts",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md","njk","html"],
  };
};
