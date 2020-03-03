/* global rails */
import { createElement } from "complate-stream";

export default function InvoicesIndex({ invoices }) {
  return (
    <div>
      <h1>Invoices</h1>
      <table>
        <thead>
          <tr>
            <th>Auftragsnr.</th>
            <th>Sale Order Name</th>
            <th>Kunde</th>
            <th>Principal</th>
            <th>Freigaben</th>
            <th>Status</th>
            <th>Nettopreis</th>
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
              <td>{invoice.status}</td>
              <td>{invoice.formatted_total_net_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
