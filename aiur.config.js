module.exports = {
  title: "Example",
  language: "en",
  description: "An example for our workshop",

  pages: {
    "": "./app/components/README.md",
    colors: "./app/components/colors.md",
    atoms: {
      file: "./app/components/ATOMS.md",
      children: {
        amount: "./app/components/amount/README.md",
        button: "./app/components/button/README.md",
        flash: "./app/components/flash/README.md",
        page_category: "./app/components/page-category/README.md"
      }
    },
    molecules: {
      file: "./app/components/MOLECULES.md",
      children: {
        button_group: "./app/components/button-group/README.md"
      }
    },
    organisms: {
      file: "./app/components/ORGANISMS.md",
      children: {
        navbar: "./app/components/navbar/README.md",
        table: {
          file: "./app/components/table/README.md",
          children: {
            tabelle: "./app/components/tabelle/README.md",
            responsive: "./app/components/table-responsive/README.md"
          }
        },
        main_layout: "./app/components/main-layout/README.md"
      }
    },
    pages: {
      file: "./app/components/PAGES.md",
      children: {
        invoices: "./app/components/pages/invoices.md"
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
