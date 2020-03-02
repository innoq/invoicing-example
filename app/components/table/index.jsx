import { createElement } from "complate-stream";

function TableCell({ modifier }, ...children) {
  return <td class={modifier}>{children}</td>;
}

export function MutedTableCell(_params, ...children) {
  return <TableCell modifier="muted">{children}</TableCell>;
}

export function EmphasizedTableCell(_params, ...children) {
  return <TableCell modifier="emphasized">{children}</TableCell>;
}

export default function Table(_params, ...children) {
  return <table class="table">{children}</table>;
}
