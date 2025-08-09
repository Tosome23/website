const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // 블로그 정적 파일을 /blog/* 로 출력
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

  // 입력은 루트(.), 레이아웃 폴더는 blog/layouts, 출력은 _site
  return {
    dir: { input: ".", includes: "blog/layouts", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md","njk","html"]
  };
};
