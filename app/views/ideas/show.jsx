/* global rails */
import { createElement } from "complate-stream";

export default function IdeasShow({ idea }) {
  return (
    <div>
      <p>
        <strong>Title:</strong>
        {idea.title}
      </p>

      <p>
        <strong>Content:</strong>
        {idea.content}
      </p>

      {rails.link_to("Edit", rails.edit_idea_path(idea))}
      {rails.link_to("Back", rails.ideas_path())}
    </div>
  );
}
