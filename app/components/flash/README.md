title: Flash
description: Show the Rails flash

This is how we show a flash message:

```jsx
import { createElement } from "complate-stream";
import Flash from "./app/components/flash";

<Flash message="Foo" type="warn"/>
```

We can get the flash from Rails via `rails.flash()`. We then need to
convert it to a regular JS object via `to_h()`. We can then iterate
over the flash with `Object.keys(flash).map(type => ...)`.
