const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // 블로그 정적파일 복사(블로그 출력폴더로 들어감: /blog/style.css, /blog/images/*)
  eleventyConfig.addPassthroughCopy({ "blog/static/style.css": "style.css" });
  eleventyConfig.addPassthroughCopy({ "blog/images": "images" });

  // 날짜 필터
  eleventyConfig.addFilter("date", d =>
    DateTime.fromJSDate(d).toFormat("yyyy-MM-dd")
  );

  // 포스트 컬렉션
  eleventyConfig.addCollection("posts", (col) =>
    col.getFilteredByGlob("blog/content/blog/*.md")
  );
};
