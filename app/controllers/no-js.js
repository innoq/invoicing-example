let Invoice = require("../models/invoice");

let validParameters = [
  "saleorder_number",
  "cost_centre_name",
  "customer_name",
  "principal_name",
  "approvals",
  "approvals_needed",
  "status",
  "total_net_price"
];

let validOrders = ["asc", "desc"];

exports.index = (req, res) => {
  let sortParameter;
  let order;

  if (req.query.sort) {
    sortParameter = req.query.sort.slice(0, req.query.sort.lastIndexOf("_"));
    if (!validParameters.includes(sortParameter)) {
      sortParameter = null;
    }
    order = req.query.sort.slice(req.query.sort.lastIndexOf("_") + 1) || "asc";
    if (!validOrders.includes(order)) {
      order = null;
    }
  }

  let filter = validParameters
    .filter(parameter => req.query[parameter])
    .map(parameter => ({ parameter, includes: req.query[parameter] }));

  res.complate("InvoicesIndex", {
    title: "Rechnungen",
    invoices: Invoice.query({
      sortParameter,
      order,
      filter
    }),
    query: req.query,
    sortParameter,
    order,
    // not sure why this is necessary
    assetURL: req.app.locals.assetURL,
    action: "/no-js",
    javascript: false
  });
};
