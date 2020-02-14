title: Colors
description: The colors that are available to use in CSS and SCSS

The colors listed here can be used either as an SCSS Variable or a CSS custom property.
By convention, color names have the name of the color followed by a `-` and then a number providing the relative darkness of the color from 0 - 900
(with `0` being the lightest and `900` the darkest).


## Blue

SCSS Variable `$blue-{VALUE}`
CSS Custom Property: `--blue-{VALUE}`

```html
<my-color value="100" style="background-color: var(--blue-100);"></my-color>
<my-color value="500" style="background-color: var(--blue-500);"></my-color>
<my-color value="700" style="background-color: var(--blue-700);"></my-color>
```