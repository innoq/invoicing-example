"use strict";

let express = require("express");
let complate = require("complate-express");
let path = require("path");
let faucet = require("faucet-pipeline-express");

const HOST = "0.0.0.0";
const PORT = 3000;

let app = express();
app.use(complate(path.resolve(__dirname, "../dist/views.js")));
app.use(
  faucet.middleware(path.resolve(__dirname, "../public/assets/manifest.json"))
);
app.use(express.static(path.resolve(__dirname, "../public")));

app.get("/", require("./controllers/invoices").index);

let server = app.listen(PORT, HOST, () => {
  let { address, port } = server.address();
  console.log(`→ http://${address}:${port}`);
});
