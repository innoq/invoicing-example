title: Progress Bar
description: Show the progress that a user has made.

This is a component shows the progress that the user has made.
It takes the current `value` as well as the `max` number of steps that the user has made.
Content passed into the macro is shown underneath the ProgressBar.

```jsx
import { createElement } from "complate-stream";
import ProgressBar from "./app/components/progress-bar";

<ProgressBar value="2" max="3">Progress</ProgressBar>
```

Optionally, if you do not pass any values into the ProgressBar, a label with the values that you specified will be generated.

```jsx
import { createElement } from "complate-stream";
import ProgressBar from "./app/components/progress-bar";

<ProgressBar value="2" max="3" />
```

## Green Progress Bars

There are also progress bars in a green variant.

```jsx
import { createElement } from "complate-stream";
import ProgressBar from "./app/components/progress-bar";

<ProgressBar modifier="green" value="1" max="5">Progress</ProgressBar>
```

```jsx
import { createElement } from "complate-stream";
import ProgressBar from "./app/components/progress-bar";

<ProgressBar modifier="green" value="1" max="5" />
```