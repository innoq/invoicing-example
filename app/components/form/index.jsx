/* global rails */
import { createElement } from "complate-stream";

export default function Form({ action, method }, ...children) {
  let _method;
  if (!(method === "get" || method === "post")) {
    _method = method;
    method = "post";
  }

  return (
    <form action={action} accept-charset="UTF-8" method={method}>
      {_method ? <input type="hidden" name="_method" value="patch" /> : null}
      <input
        type="hidden"
        name="authenticity_token"
        value={rails.form_authenticity_token()}
      />
      {children}
    </form>
  );
}
