title: Button
description: All of the Button variants

A Button always has many variants.

## Usability: Should I use a link or a button?

In the application, it is a best practice to use a Link style to represent a link when really linking between static resources.
However, when the link is actually a _call-to-action_ and by clicking on the link the user will perform an action in the next step,
this is a good time to use a `Button` style on the link itself.

## Button

Your base button is here.
This Macro produces a semantic `button` element.
By default, this Button is of type submit, but this value can be passed into the M

### Buttons of type "submit"

The primary variant:

```jsx
import { createElement } from "complate-stream";
import Button from "./app/components/button";

<Button>Submit a form</Button>
```

The secondary variant:

```jsx
import { createElement } from "complate-stream";
import Button from "./app/components/button";

<Button modifier="secondary">Submit a form</Button>
```

The tertiary variant:

```jsx
import { createElement } from "complate-stream";
import Button from "./app/components/button";

<Button modifier="tertiary">Submit a form</Button>
```


### Buttons of type "button"

The primary variant:

```jsx
import { createElement } from "complate-stream";
import Button from "./app/components/button";

<Button type="button">Perform a custom action</Button>
```

The secondary variant:

```jsx
import { createElement } from "complate-stream";
import Button from "./app/components/button";

<Button type="button" modifier="secondary">Perform a custom action</Button>
```

The tertiary variant:

```jsx
import { createElement } from "complate-stream";
import Button from "./app/components/button";

<Button type="button" modifier="tertiary">Perform a custom action</Button>
```

## LinkButton

Here we can use the `LinkButton` component to create a button which is actually a link to another resource.
Below the CSS this is a normal `a` tag.
This accepts an `href` as a parameter.



### Variant 'primary'

```jsx
import { createElement } from "complate-stream";
import { ButtonLink } from "./app/components/button";

<ButtonLink href="#">Go somewhere special!</ButtonLink>
```

### Variant 'secondary'

```jsx
import { createElement } from "complate-stream";
import { ButtonLink } from "./app/components/button";

<ButtonLink href="#" modifier="secondary">
  Go somewhere not so special!
</ButtonLink>
```

### Variant 'tertiary'

```jsx
import { createElement } from "complate-stream";
import { ButtonLink } from "./app/components/button";

<ButtonLink href="#" modifier="tertiary">
  Go somewhere else!
</ButtonLink>
```
