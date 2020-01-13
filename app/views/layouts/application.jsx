/* global rails */
import { createElement } from "complate-stream";
import Flash from "../../components/flash";

export default function ApplicationLayout({ title, content }, ...children) {
  let flash = rails.flash().to_h();

  return (
    <html>
      <head>
        <title>{title || "Demo"}</title>
        {rails.csrf_meta_tags()}
        {rails.csp_meta_tag()}
        {rails.stylesheet_link_tag("application", { media: "all" })}
      </head>

      <body>
        {Object.keys(flash).map(type => (
          <Flash message={flash[type]} type={type} />
        ))}
        {content}
        {children}
      </body>
      {rails.javascript_include_tag("application")}
    </html>
  );
}
