title: Invoices
description: List all of the different invoices

Putting all of the pieces together for the Invoices view.

```jsx
import { createElement } from "complate-stream";
import Table, { TBody, THead, Tr, Td, CollapserTh, CollapserTd } from "./app/components/table-responsive";
import TabelleToggler from "./app/components/tabelle-toggler";
import Tabelle, { TabelleHeader } from "./app/components/tabelle";
import Navbar, { NavbarLayout, NavbarItem, SecondaryNavbar, NavbarBrand } from "./app/components/navbar";
import Button from "./app/components/button";
import PageCategory from "./app/components/page-category";
import ButtonGroup from "./app/components/button-group";
import MainLayout from "./app/components/main-layout";
import Amount from "./app/components/amount";
import ProgressBar from "./app/components/progress-bar";
import Icon from "./app/components/icon";

<NavbarLayout>
  <Navbar>
    <NavbarBrand href="#">
      <Icon symbol="INNOQ" />
      Zur Rechnologe Hauptseite
    </NavbarBrand>
    <NavbarItem href="#" current>
      <Icon symbol="list-bulleted" />
      Meine Aufgaben
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="upload" />
      Rechnungserstellung
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="download" />
      Zahlungseingang
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="alarm" />
      Zahlungserinnerungen
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="dots" />
      Mehr
    </NavbarItem>
  </Navbar>
  <SecondaryNavbar>
    <NavbarItem current>
      <Icon symbol="snooze" />
      Abwarten
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="bolt" />
      Nachhacken
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="pencil" />
      Nachhacken
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="crown" />
      Freigeben lassen
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="plane" />
      Versenden
    </NavbarItem>
  </SecondaryNavbar>
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
          <Td column="Freigaben" modifier="muted">
            <ProgressBar value="2" max="3" />
          </Td>
          <Td column="Status" modifier="muted">
            <ProgressBar modifier="green" value="1" max="5" />
          </Td>
          <Td column="Nettopreis">
            <Amount>2.575,00 €</Amount>
          </Td>
        </Tr>)}
      </TBody>
    </Table>
  </MainLayout>
</NavbarLayout>
```
