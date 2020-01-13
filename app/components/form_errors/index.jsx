/* global rails */
import { createElement } from "complate-stream";

// TODO: This is not generic, as it contains text
export default function FormErrors({ errors }) {
  if (errors.count > 0) {
    return (
      <div id="error_explanation">
        <h2>
          {rails.pluralize(errors.count, "error")} prohibited this idea from
          being saved:
        </h2>
        <ul>
          {errors.full_messages.map(message => (
            <li>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}
