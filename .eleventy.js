const Image = require("@11ty/eleventy-img");
const path = require("path");
const imagesData = require("./src/_data/images.json");

function filenameFormat(id, srcPath, width, format) {
  const base = path.basename(srcPath, path.extname(srcPath));
  return `${base}-${width}w.${format}`;
}

async function processImage(src) {
  const inputPath = path.join(__dirname, "src/images", src);
  return Image(inputPath, {
    widths: [400, 800, 1200, 1600],
    formats: ["webp", "jpeg"],
    outputDir: path.join(__dirname, "_site/img"),
    urlPath: "/img/",
    filenameFormat,
    sharpJpegOptions: { quality: 80 },
    sharpWebpOptions: { quality: 78 },
  });
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });

  // Pre-generate every responsive image variant once, up front, before any
  // template renders. This avoids calling async image-processing shortcodes
  // from inside Nunjucks macros/loops (unreliable — see project notes),
  // and means every template can just read precomputed URLs from images.json.
  eleventyConfig.on("eleventy.before", async () => {
    for (const img of imagesData) {
      await processImage(img.file);
    }
  });

  eleventyConfig.addFilter("findImage", function (images, id) {
    const found = images.find((img) => img.id === id);
    if (!found) {
      throw new Error(`Image id not found in manifest: ${id}`);
    }
    return found;
  });

  eleventyConfig.addFilter("imageByFile", function (images, file) {
    const found = images.find((img) => img.file === file);
    if (!found) {
      throw new Error(`Image file not found in manifest: ${file}`);
    }
    return found;
  });

  eleventyConfig.addFilter("byCategory", function (images, category) {
    return images.filter((img) => img.category === category);
  });

  // Build a srcset string for one format from an image manifest entry.
  // e.g. srcset(img, "webp") -> "/img/id-400w.webp 400w, /img/id-800w.webp 800w"
  eleventyConfig.addFilter("srcset", function (img, format) {
    return img.widths
      .map((w) => `/img/${img.id}-${w}w.${format} ${w}w`)
      .join(", ");
  });

  eleventyConfig.addFilter("smallestUrl", function (img, format) {
    const w = Math.min(...img.widths);
    return `/img/${img.id}-${w}w.${format}`;
  });

  eleventyConfig.setServerOptions({ port: 8080 });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
  };
};
