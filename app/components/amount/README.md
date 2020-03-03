title: Amount
description: Styling for showing an amount

This is an atom which provides styling for an amount.
This component doesn't have a default color, but rather inherits the color from the parent component.

```jsx
import { createElement } from "complate-stream";
import Amount from "./app/components/amount";

<Amount>2.575,00 €</Amount>
```