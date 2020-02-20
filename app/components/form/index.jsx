/* global rails */
import { createElement } from "complate-stream";

/* TODO:
It would be cool if we could have access to the complate context in aiur,
so that we could mock the rails helper for the templates.
*/
function railsHelper() {
  if (typeof rails === "undefined") {
    return {
      form_authenticity_token: () => "mocked"
    };
  }
  return rails;
}

export default function Form({ action, method = "get" }, ...children) {
  let _method;
  if (!(method === "get" || method === "post")) {
    _method = method;
    method = "post";
  }

  return (
    <form action={action} accept-charset="UTF-8" method={method}>
      {_method ? <input type="hidden" name="_method" value="patch" /> : null}
      {method !== "get" ? (
        <input
          type="hidden"
          name="authenticity_token"
          value={railsHelper().form_authenticity_token()}
        />
      ) : null}
      {children}
    </form>
  );
}
