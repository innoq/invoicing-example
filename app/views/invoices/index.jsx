import { createElement } from "complate-stream";
import Table, {
  TBody,
  THead,
  Tr,
  Td,
  CollapserTh,
  CollapserTd
} from "../../components/table-responsive";
import Tabelle, { TabelleHeader } from "../../components/tabelle";
import Navbar, {
  NavbarLayout,
  NavbarItem,
  SecondaryNavbar,
  NavbarBrand
} from "../../components/navbar";
import Button from "../../components/button";
import PageCategory from "../../components/page-category";
import ButtonGroup from "../../components/button-group";
import MainLayout from "../../components/main-layout";
import Amount from "../../components/amount";
import ProgressBar from "../../components/progress-bar";
import Icon from "../../components/icon";

export function InvoicesIndex({
  title,
  invoices,
  assetURL,
  query,
  sortParameter,
  order
}) {
  return (
    <html>
      <head>
        <title>{title || "Demo"}</title>
        <link href={assetURL("application.css")} rel="stylesheet" media="all" />
      </head>
      <body>
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
            <Tabelle action="/">
              <Table>
                <THead>
                  <Tr>
                    <CollapserTh label="Einträge auf/zuklappen" />
                    <TabelleHeader
                      name="saleorder_number"
                      label="Auftragsnr."
                      shortLabel="Auftrag"
                      sorted={
                        sortParameter === "saleorder_number" ? order : null
                      }
                      value={query.saleorder_number}
                    />
                    <TabelleHeader
                      name="cost_centre_name"
                      label="Sale Order Name"
                      shortLabel="Order"
                      sorted={
                        sortParameter === "cost_centre_name" ? order : null
                      }
                      value={query.cost_centre_name}
                    />
                    <TabelleHeader
                      name="customer_name"
                      label="Kunde"
                      sorted={sortParameter === "customer_name" ? order : null}
                      value={query.customer_name}
                    />
                    <TabelleHeader
                      name="principal_name"
                      label="Principal"
                      shortLabel="Prinz"
                      sorted={sortParameter === "principal_name" ? order : null}
                      value={query.principal_name}
                    />
                    <TabelleHeader
                      name="approvals"
                      label="Freigaben"
                      sorted={sortParameter === "approvals" ? order : null}
                      value={query.approvals}
                    />
                    <TabelleHeader
                      name="status"
                      label="Status"
                      sorted={sortParameter === "status" ? order : null}
                      value={query.status}
                    />
                    <TabelleHeader
                      name="total_net_price"
                      label="Nettopreis"
                      shortLabel="Netto"
                      sorted={
                        sortParameter === "total_net_price" ? order : null
                      }
                      value={query.total_net_price}
                    />
                  </Tr>
                </THead>
                <TBody>
                  {invoices.map(invoice => (
                    <Tr>
                      <CollapserTd
                        labelExpand={`Auftrag ${invoice.saleorder_number} aufklappen`}
                        labelCollapse={`Auftrag ${invoice.saleorder_number} zuklappen`}
                      />
                      <Td column="Auftragnr." modifier="emphasized">
                        {invoice.saleorder_number}
                      </Td>
                      <Td column="Sale Order Name">
                        {invoice.cost_centre_name}
                      </Td>
                      <Td column="Kunde" modifier="muted">
                        {invoice.customer_name}
                      </Td>
                      <Td column="Principal" modifier="muted">
                        {invoice.principal_name}
                      </Td>
                      <Td column="Freigaben" modifier="muted">
                        <ProgressBar
                          value={invoice.approvals}
                          max={invoice.approvals_needed}
                        />
                      </Td>
                      <Td column="Status" modifier="muted">
                        <ProgressBar modifier="green" value="1" max="5" />
                      </Td>
                      <Td column="Nettopreis">
                        <Amount currency="EUR" locale="en-US">
                          {invoice.total_net_price}
                        </Amount>
                      </Td>
                    </Tr>
                  ))}
                </TBody>
              </Table>
            </Tabelle>
          </MainLayout>
        </NavbarLayout>
        <script src={assetURL("application.js")} />
      </body>
    </html>
  );
}
