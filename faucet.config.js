module.exports = {
  js: [
    {
      source: "./app/assets/javascripts/application.js",
      target: "./public/assets/javascripts/application.js"
    }
  ],
  sass: [
    {
      source: "./app/assets/stylesheets/application.scss",
      target: "./public/assets/stylesheets/application.css"
    }],
  static: [
    {
      source: "./app/assets/images",
      target: "./public/assets/images"
    }
  ],
  manifest: {
    target: "./public/assets/manifest.json",
    key: "short",
    webRoot: "./public"
  },
  watchDirs: ["./app/assets"]
};
