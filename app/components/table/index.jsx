import { createElement } from "complate-stream";

export function Td({ modifier }, ...children) {
  return <td class={modifier}>{children}</td>;
}

export default function Table({ responsive }, ...children) {
  return (
    <table class={`table ${responsive ? "table-responsive" : ""}`} role="table">
      {children}
    </table>
  );
}
