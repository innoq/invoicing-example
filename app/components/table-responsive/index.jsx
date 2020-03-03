import { createElement } from "complate-stream";

export function THead(_params, ...children) {
  return <thead role="rowgroup">{children}</thead>;
}

export function TBody(_params, ...children) {
  return <tbody role="rowgroup">{children}</tbody>;
}

export function Tr(_params, ...children) {
  return <tr role="row">{children}</tr>;
}

export default function Table(_params, ...children) {
  return (
    <table role="table" class="table table-responsive">
      {children}
    </table>
  );
}
