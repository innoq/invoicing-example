let invoices = require("../../db/invoices.json");
let { sortBy } = require("lodash");

exports.query = ({ sortParameter, order, filter }) => {
  let result = invoices.slice();

  if (filter) {
    result = result.filter(invoice => {
      return filter.every(({ parameter, includes }) =>
        invoice[parameter]
          .toString()
          .toLowerCase()
          .includes(includes.toString().toLowerCase())
      );
    });
  }

  if (sortParameter) {
    result = sortBy(result, sortParameter);
  }

  if (order === "desc") {
    result = result.reverse();
  }

  return result;
};
