title: Invoices
description: List all of the different invoices

Putting all of the pieces together for the Invoices view.

```jsx
import { createElement } from "complate-stream";
import Table, { TBody, THead, Tr, Td, CollapserTh, CollapserTd } from "./app/components/table-responsive";
import TabelleToggler from "./app/components/tabelle-toggler";
import Tabelle, { TabelleHeader } from "./app/components/tabelle";
import Navbar, { NavbarLayout, NavbarItem } from "./app/components/navbar";
import Button from "./app/components/button";
import PageCategory from "./app/components/page-category";
import ButtonGroup from "./app/components/button-group";
import MainLayout from "./app/components/main-layout";

<NavbarLayout>
  <Navbar>
    <NavbarItem href="#">
      <span>A</span>
      <span>Apricots</span>
    </NavbarItem>
    <NavbarItem href="#">
      <span>B</span>
      <span>Buttons</span>
    </NavbarItem>
    <NavbarItem href="#">
      <span>C</span>
      <span>Cookies</span>
    </NavbarItem>
    <NavbarItem href="#">
      <span>D</span>
      <span>Dogs</span>
    </NavbarItem>
  </Navbar>
  <MainLayout>
    <PageCategory>Rechnungserstellung</PageCategory>
    <h1>Keine freizugebenden Leistungen</h1>
    <ButtonGroup>
      <Button modifier="tertiary">Faule erinnern</Button>
      <Button>Neue Rechnung</Button>
    </ButtonGroup>
    <Table>
      <THead>
        <Tr>
          <CollapserTh label="Einträge auf/zuklappen" />
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
          <CollapserTd labelExpand="Auftrag D19.10.2273 aufklappen"
            labelCollapse="Auftrag D19.10.2273 zuklappen" />
          <Td column="Auftragnr." modifier="emphasized">D19.10.2273</Td>
          <Td column="Sale Order Name">Quality-focused bandwidth-monitored parallelism</Td>
          <Td column="Kunde" modifier="muted">Stiedemann, Wolff and Pachocha</Td>
          <Td column="Principal" modifier="muted">Jörg Müller</Td>
          <Td column="Freigaben" modifier="muted">2 / 3</Td>
          <Td column="Status" modifier="muted">1 / 5</Td>
          <Td column="Nettopreis">2.575,00 €</Td>
        </Tr>)}
      </TBody>
    </Table>
  </MainLayout>
</NavbarLayout>
```
