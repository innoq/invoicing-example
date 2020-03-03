title: Responsive Tables
description: Responsive Behavior for HTML Tables

On this page, we want to put together all of the data that we will be showing in our application,
so that we can see how all of the components work together.

This implementation triggers the responsive behavior of the table using the `responsive` parameter on the Macro.

It also uses the `shortLabel` option for the `TabelleHeader`,
which uses `Squishable` under the hood in order for an abbreviation of the column to be shown when there is not enough space.

```jsx
import { createElement } from "complate-stream";
import Table, { TBody, THead, Tr } from "./app/components/table-responsive";
import TabelleToggler from "./app/components/tabelle-toggler";
import Tabelle, { TabelleHeader } from "./app/components/tabelle";

<div style="background-color: var(--background-color); padding: 1rem;">
  <h1 class="sr-only">Responsive Table</h1>
  <Table responsive>
    <THead>
      <Tr>
        <th class="table-toggler-cell" scope="col" role="columnheader">
          <span class="sr-only">Einträge auf/zuklappen</span>
        </th>
        <TabelleHeader name="auftragsnr" label="Auftragsnr."  
          shortLabel="Auftrag" sorted="asc" />
        <TabelleHeader name="saleorder" label="Sale Order Name"    
          shortLabel="Order" sorted="asc" />
        <TabelleHeader name="kunde" label="Kunde" sorted="asc" />
        <TabelleHeader name="principal" label="Principal"
          shortLabel="Prinz" sorted="asc" />
        <TabelleHeader name="freigaben" label="Freigaben" sorted="asc" />
        <TabelleHeader name="status" label="Status" sorted="asc" />
        <TabelleHeader name="netto" label="Nettopreis"
          shortLabel="Netto" sorted="asc" />
      </Tr>
    </THead>
    <TBody>
      {Array(5).fill().map(() => <Tr>
        <td class="table-toggler-cell" role="cell">
          <TabelleToggler labelExpand="Auftrag aufklappen" labelCollapse="Auftrag zuklappen" />
        </td>
        <td data-column="Auftragnr." role="cell">D19.10.2273</td>
        <td data-column="Sale Order Name" role="cell">Quality-focused bandwidth-monitored parallelism</td>
        <td data-column="Kunde" role="cell">Stiedemann, Wolff and Pachocha</td>
        <td data-column="Principal" role="cell">Jörg Müller</td>
        <td data-column="Freigaben" role="cell">2 / 3</td>
        <td data-column="Status" role="cell">1 / 5</td>
        <td data-column="Nettopreis" role="cell">2.575,00 €</td>
      </Tr>)}
    </TBody>
  </Table>
</div>
```
