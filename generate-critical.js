import { generate } from "critical";
import path from "path";

const distDir = path.resolve("dist");

(async () => {
  try {
    await generate({
      base: distDir,
      src: "index.html",
      target: {
        html: "index.html",
        css: "critical.css",
      },
      inline: true,
      width: 1920,
      height: 1080,
    });
    console.log("Critical CSS generated successfully!");
  } catch (error) {
    console.error("Error generating critical CSS:", error);
  }
})();
