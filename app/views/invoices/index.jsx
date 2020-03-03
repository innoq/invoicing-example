import { createElement } from "complate-stream";
import {
  human_model_name,
  human_attribute_name,
  human_enum_name
} from "../helpers";

export default function InvoicesIndex({ invoices }) {
  return (
    <div>
      <h1>{human_model_name("invoice", { count: invoices.length })}</h1>
      <table>
        <thead>
          <tr>
            <th>{human_attribute_name("invoice", "saleorder_number")}</th>
            <th>{human_attribute_name("invoice", "cost_centre_name")}</th>
            <th>{human_attribute_name("invoice", "customer_name")}</th>
            <th>{human_attribute_name("invoice", "principal_name")}</th>
            <th>{human_attribute_name("invoice", "approvals")}</th>
            <th>{human_attribute_name("invoice", "status")}</th>
            <th>{human_attribute_name("invoice", "total_net_price")}</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map(invoice => (
            <tr>
              <td>{invoice.saleorder_number}</td>
              <td>{invoice.cost_centre_name}</td>
              <td>{invoice.customer_name}</td>
              <td>{invoice.principal_name}</td>
              <td>
                {invoice.approvals} / {invoice.approvals_needed}
              </td>
              <td>{human_enum_name("invoice", "status", invoice.status)}</td>
              <td>{invoice.formatted_total_net_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
