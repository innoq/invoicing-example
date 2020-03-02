import { createElement } from "complate-stream";

export default function TableToggler({ labelExpand, labelCollapse, expanded }) {
  return (
    <button
      is="tabelle-toggler"
      hidden
      aria-expanded={expanded ? "true" : "false"}
    >
      <span class="expand" title={labelExpand}>
        <span class="sr-only">{labelExpand}</span>
      </span>
      <span class="collapse" title={labelCollapse}>
        <span class="sr-only">{labelCollapse}</span>
      </span>
    </button>
  );
}
