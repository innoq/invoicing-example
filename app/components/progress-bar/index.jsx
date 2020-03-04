import { createElement } from "complate-stream";

export default function ProgressBar({ modifier, value, max }, ...children) {
  let label = children.length === 0 ? `${value} / ${max}` : children;

  return (
    <label class={`progress-bar ${modifier}`}>
      <progress value={value} max={max} />
      {label}
    </label>
  );
}
