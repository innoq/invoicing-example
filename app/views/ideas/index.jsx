/* global rails */
import { createElement } from "complate-stream";

export default function IdeasIndex({ ideas }) {
  return (
    <div>
      <h1>Ideas</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th colSpan="3"></th>
          </tr>
        </thead>

        <tbody>
          {ideas.map(idea => (
            <tr>
              <td>{idea.title}</td>
              <td>{rails.link_to("Show", idea)}</td>
              <td>{rails.link_to("Edit", rails.edit_idea_path(idea))}</td>
              <td>{rails.button_to("Destroy", idea, { method: "delete" })}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {rails.link_to("New idea", rails.new_idea_path())}
    </div>
  );
}
