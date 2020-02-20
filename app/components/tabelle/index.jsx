import { createElement, Fragment } from "complate-stream";

import Form from "../form";

function TabelleArrows({ name, label, sorted }) {
  return (
    <Fragment>
      <input
        class="tabelle-arrow"
        id={`${name}_asc`}
        type="radio"
        name="sort"
        value={`${name}_asc`}
        checked={sorted && sorted === "asc"}
      />
      <label class="tabelle-arrow--asc" for={`${name}_asc`}>
        <span class="visually-hidden">Sort {label} Ascending</span>
      </label>

      <input
        class="tabelle-arrow"
        id={`${name}_desc`}
        type="radio"
        name="sort"
        value={`${name}_desc`}
        checked={sorted && sorted === "desc"}
      />
      <label class="tabelle-arrow--desc" for={`${name}_desc`}>
        <span class="visually-hidden">Sort {label} Descending</span>
      </label>
    </Fragment>
  );
}

function TabelleFilter({ name, label, value }) {
  return (
    <input
      class="tabelle-input"
      name={name}
      value={value}
      type="text"
      aria-label={`Filter ${label}`}
    />
  );
}

export function TabelleHeader({ name, label, value, sorted }) {
  return (
    <div class="tabelle-header" role="group" aria-labelledby={`${name}_group`}>
      <span class="header" id={`${name}_group`}>
        {label}
      </span>
      <TabelleArrows name={name} label={label} sorted={sorted} />
      <TabelleFilter name={name} label={label} value={value} />
    </div>
  );
}

/**
 * @param {Object} params - the paramters that we can pass to Tabelle
 * @param {string} params.id - the id of the HTML element that is generated. By default 'tabelleId'
 * @param {string} params.className - Action (required) that will be passed to the form
 * @param {...any} children
 */
export default function Tabelle({ id = "tabelleId", action }, ...children) {
  return (
    <ta-belle id={id} change-uri>
      <Form method="get" action={action}>
        {children}
      </Form>
    </ta-belle>
  );
}
