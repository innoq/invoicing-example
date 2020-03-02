module.exports = {
  title: "Example",
  language: "en",
  description: "An example for our workshop",

  pages: {
    "": "./app/components/README.md",
    colors: "./app/components/colors.md",
    flash: "./app/components/flash/README.md",
    navbar: "./app/components/navbar/README.md",
    table: {
      file: "./app/components/table/README.md",
      children: {
        tabelle: "./app/components/tabelle/README.md",
        responsive: "./app/components/table/RESPONSIVE.md"
      }
    }
  },

  snippetAssets: {
    js: [{
      source: "./app/assets/javascripts/application.js",
      target: "./application.js"
    }],
    sass: [
      {
        source: "./app/assets/stylesheets/application.scss",
        target: "./application.css"
      },
      {
        source: "./app/assets/stylesheets/styleguide.scss",
        target: "./styleguide.css"
      }
    ],
    static: [
      {
        source: "./app/assets/images",
        target: "./images"
      }
    ]
  },

  watchDirs: ["./app/assets", "./app/components"]
};
