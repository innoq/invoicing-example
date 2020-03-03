import { createElement } from "complate-stream";

import TabelleToggler from "../tabelle-toggler";

export function THead(_params, ...children) {
  return <thead role="rowgroup">{children}</thead>;
}

export function TBody(_params, ...children) {
  return <tbody role="rowgroup">{children}</tbody>;
}

export function Tr(_params, ...children) {
  return <tr role="row">{children}</tr>;
}

export function CollapserTh({ label }) {
  return (
    <th class="table-toggler-cell" scope="col" role="columnheader">
      <span class="sr-only">{label}</span>
    </th>
  );
}

export function CollapserTd({ labelExpand, labelCollapse }) {
  return (
    <td class="table-toggler-cell" role="cell">
      <TabelleToggler labelExpand={labelExpand} labelCollapse={labelCollapse} />
    </td>
  );
}

export function Td({ column, modifier }, ...children) {
  return (
    <td role="cell" data-column={column} class={modifier}>
      {children}
    </td>
  );
}

export default function Table(_params, ...children) {
  return (
    <table role="table" class="table table-responsive">
      {children}
    </table>
  );
}
