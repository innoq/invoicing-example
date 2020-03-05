"use strict";

let express = require("express");
let complate = require("complate-express");
let path = require("path");
let faucet = require("faucet-pipeline-express");

// our fake database
let invoices = require("../db/invoices.json");

const HOST = "0.0.0.0";
const PORT = 3000;

let app = express();
app.use(complate(path.resolve(__dirname, "../dist/views.js")));
app.use(
  faucet.middleware(path.resolve(__dirname, "../public/assets/manifest.json"))
);
app.use(express.static(path.resolve(__dirname, "../public")));

app.get("/", (req, res) => {
  res.complate("InvoicesIndex", {
    title: "Rechnungen",
    invoices,
    // not sure why this is necessary
    assetURL: req.app.locals.assetURL
  });
});

let server = app.listen(PORT, HOST, () => {
  let { address, port } = server.address();
  console.log(`→ http://${address}:${port}`);
});
