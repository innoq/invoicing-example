title: Amount
description: Styling for showing an amount

This is an atom which provides styling for an amount.
This component doesn't have a default color, but rather inherits the color from the parent component.

```jsx
import { createElement } from "complate-stream";
import Amount from "./app/components/amount";

<Amount>2.575,00</Amount>
```

It can also format a number as a currency. You need to provide both a currency (for example `JPY`) as well as a locale (for example `ja-JP`)):

```jsx
import { createElement } from "complate-stream";
import Amount from "./app/components/amount";

<Amount currency="JPY" locale="ja-JP">{2575.50}</Amount>
```
