/* global rails */
import { createElement } from "complate-stream";
import Form from "../../components/form";
import FormErrors from "../../components/form_errors";

export default function IdeasEdit({ idea }) {
  return (
    <div>
      <h1>Edit Idea</h1>
      <Form action={rails.idea_path(idea)} method="patch">
        <FormErrors errors={idea.errors} />

        <div class="field">
          <label for="idea_title">Title</label>
          <input
            type="text"
            name="idea[title]"
            id="idea_title"
            value={idea.title}
          />
        </div>

        <div class="field">
          <label for="idea_content">Content</label>
          <textarea name="idea[content]" id="idea_content">
            {idea.content}
          </textarea>
        </div>

        <div class="actions">
          <input type="submit" value="Update Idea" />
        </div>
      </Form>

      {rails.link_to("Back", rails.ideas_path)}
    </div>
  );
}
