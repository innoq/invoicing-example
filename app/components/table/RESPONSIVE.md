title: Responsive Tables
description: Responsive Behavior for HTML Tables

On this page, we want to put together all of the data that we will be showing in our application,
so that we can see how all of the components work together.

This implementation triggers the responsive behavior of the table using the `responsive` parameter on the Macro.

It also uses the `shortLabel` option for the `TabelleHeader`,
which uses `Squishable` under the hood in order for an abbreviation of the column to be shown when there is not enough space.

```jsx
import { createElement } from "complate-stream";
import Table from "./app/components/table";
import TabelleToggler from "./app/components/tabelle-toggler";
import Tabelle, { TabelleHeader } from "./app/components/tabelle";

<div style="background-color: var(--background-color); padding: 1rem;">
  <Table responsive>
    <thead>
      <tr>
        <th class="table-toggler-cell"></th>
        <th>
          <TabelleHeader name="auftragsnr" label="Auftragsnr."  
            shortLabel="Auftrag" sorted="asc" />
        </th>
        <th>
          <TabelleHeader name="saleorder" label="Sale Order Name"    
            shortLabel="Order" sorted="asc" />
        </th>
        <th>
          <TabelleHeader name="kunde" label="Kunde" sorted="asc" />
        </th>
        <th>
          <TabelleHeader name="principal" label="Principal"
            shortLabel="Prinz" sorted="asc" />
        </th>
        <th>
          <TabelleHeader name="freigaben" label="Freigaben" sorted="asc" />
        </th>
        <th>
          <TabelleHeader name="status" label="Status" sorted="asc" />
        </th>
        <th>
          <TabelleHeader name="netto" label="Nettopreis"
            shortLabel="Netto" sorted="asc" />
        </th>
      </tr>
    </thead>
    <tbody>
      {Array(5).fill().map(() => <tr>
        <td class="table-toggler-cell">
          <TabelleToggler labelExpand="Auftrag aufklappen" labelCollapse="Auftrag zuklappen" />
        </td>
        <td data-column="Auftragnr.">D19.10.2273</td>
        <td data-column="Sale Order Name">GermanPersonnel AWS Cognito Support</td>
        <td data-column="Kunde">GermanPersonnel e-search GmbH, Jürgen Posterz</td>
        <td data-column="Principal">Jörg Müller</td>
        <td data-column="Freigaben">2 / 3</td>
        <td data-column="Status">1 / 5</td>
        <td data-column="Nettopreis">2.575,00 €</td>
      </tr>)}
    </tbody>
  </Table>
</div>
```
