title: Table
description: Styling for tables

Adding the `.table` class to a `table` element will add the default styling for the table.
You can also use the `Table` Macro to get this behavior.

This example uses the default 

```jsx
import { createElement } from "complate-stream";
import Table from "./app/components/table";

<div style="background-color: var(--background-color); padding: 1rem;">
  <Table>
    <thead>
      <tr>
        <th>
          Fruit
        </th>
        <th>
          Number
        </th>
        <th>
          Animal
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Apple</td><td>251</td><td>Ardvark</td>
      </tr>
      <tr>
        <td>Banana</td><td>211</td><td>Baboon</td>
      </tr>
      <tr>
        <td>Cranberry</td><td>291</td><td>Chimpanzee</td>
      </tr>
    </tbody>
  </Table>
</div>
```