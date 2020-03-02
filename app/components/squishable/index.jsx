import { createElement } from "complate-stream";

export default function Squishable({ squishAt, label, short }) {
  let squish = squishAt || `${label.length}ch`;
  return (
    <span
      class="squishable"
      aria-label={label}
      data-short={short}
      style={`--squish-at: ${squish};`}
    />
  );
}
