import { createElement } from "complate-stream";
import Table, {
  TBody,
  THead,
  Tr,
  Td,
  CollapserTh,
  CollapserTd
} from "../../components/table-responsive";
import { TabelleHeader } from "../../components/tabelle";
import Navbar, { NavbarLayout, NavbarItem } from "../../components/navbar";
import Button from "../../components/button";
import PageCategory from "../../components/page-category";
import ButtonGroup from "../../components/button-group";
import MainLayout from "../../components/main-layout";

export function InvoicesIndex({ title, invoices, assetURL }) {
  return (
    <html>
      <head>
        <title>{title || "Demo"}</title>
        <link href={assetURL("application.css")} rel="stylesheet" media="all" />
      </head>
      <body>
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
                  <TabelleHeader
                    name="auftragsnr"
                    label="Auftragsnr."
                    shortLabel="Auftrag"
                    sorted="asc"
                  />
                  <TabelleHeader
                    name="saleorder"
                    label="Sale Order Name"
                    shortLabel="Order"
                    sorted="asc"
                  />
                  <TabelleHeader name="kunde" label="Kunde" sorted="asc" />
                  <TabelleHeader
                    name="principal"
                    label="Principal"
                    shortLabel="Prinz"
                    sorted="asc"
                  />
                  <TabelleHeader
                    name="freigaben"
                    label="Freigaben"
                    sorted="asc"
                  />
                  <TabelleHeader name="status" label="Status" sorted="asc" />
                  <TabelleHeader
                    name="netto"
                    label="Nettopreis"
                    shortLabel="Netto"
                    sorted="asc"
                  />
                </Tr>
              </THead>
              <TBody>
                {invoices.map(invoice => (
                  <Tr>
                    <CollapserTd
                      labelExpand="Auftrag D19.10.2273 aufklappen"
                      labelCollapse="Auftrag D19.10.2273 zuklappen"
                    />
                    <Td column="Auftragnr." modifier="emphasized">
                      {invoice.saleorder_number}
                    </Td>
                    <Td column="Sale Order Name">{invoice.cost_centre_name}</Td>
                    <Td column="Kunde" modifier="muted">
                      {invoice.customer_name}
                    </Td>
                    <Td column="Principal" modifier="muted">
                      {invoice.principal_name}
                    </Td>
                    <Td column="Freigaben" modifier="muted">
                      {invoice.approvals} / {invoice.approvals_needed}
                    </Td>
                    <Td column="Status" modifier="muted">
                      1 / 5
                    </Td>
                    <Td column="Nettopreis">{invoice.total_net_price} €</Td>
                  </Tr>
                ))}
              </TBody>
            </Table>
          </MainLayout>
        </NavbarLayout>
        <script src={assetURL("application.js")} />
      </body>
    </html>
  );
}
