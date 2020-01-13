import { createElement } from "complate-stream";

export default function Flash({ message, type }) {
  return (
    <div class="flash">
      {type}: {message}
    </div>
  );
}
