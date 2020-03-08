title: Spacers
description: these spacing variables are available in Sass.

In you SCSS file, import the following:

    @use "../../assets/stylesheets/spacers" as spacings;

Then you can use the spacing variables in your SCSS as in the following example:

    .my-css-rule {
      margin-top: spacings.$spacer-xs;
    }

```html
<dl class="spacers">
  <dt>$spacer-xxs</dt>
  <dd style="height: var(--spacer-xxs);"></dd>
  <dt>$spacer-xs</dt>
  <dd style="height: var(--spacer-xs);"></dd>
  <dt>$spacer-sm</dt>
  <dd style="height: var(--spacer-sm);"></dd>
  <dt>$spacer-md</dt>
  <dd style="height: var(--spacer-md);"></dd>
  <dt>$spacer-base</dt>
  <dd style="height: var(--spacer-base);"></dd>
  <dt>$spacer-lg</dt>
  <dd style="height: var(--spacer-lg);"></dd>
  <dt>$spacer-xl</dt>
  <dd style="height: var(--spacer-xl);"></dd>
  <dt>$spacer-xxl</dt>
  <dd style="height: var(--spacer-xxl);"></dd>
</dl>
```