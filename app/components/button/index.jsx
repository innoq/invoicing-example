import { createElement } from "complate-stream";

/* 
We have two separate Macros for an HTML <button> and an <a> tag.
These can use the same CSS classes for styling, but this avoids conditionals
within the component itself.
Some html attributes only make sense for `<a>` tags and someonly for `<button>`.
*/

export default function Button(
  { modifier = "primary", type = "submit" },
  ...children
) {
  return (
    <button class={`button ${modifier}`} type={type}>
      {children}
    </button>
  );
}

export function ButtonLink({ href, modifier = "primary" }, ...children) {
  return (
    <a class={`button ${modifier}`} href={href}>
      {children}
    </a>
  );
}
