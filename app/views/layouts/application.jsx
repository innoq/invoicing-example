/* global rails */
import { createElement } from "complate-stream";

export default function ApplicationLayout({ title, content }, ...children) {
  return (
    <html>
      <head>
        <title>{title || "Demo"}</title>
        {rails.csrf_meta_tags()}
        {rails.csp_meta_tag()}
        {rails.stylesheet_link_tag("application", { media: "all" })}
      </head>

      <body>
        {content}
        {children}
      </body>
      {rails.javascript_include_tag("application")}
    </html>
  );
}
