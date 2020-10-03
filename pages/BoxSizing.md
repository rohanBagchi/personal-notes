# Box Sizing Property

- box-sizing: content-box;
- box-sizing: border-box;

By default Width of any element is the sum of the provided width (content-box) + padding + border.
This causes issues in creating layouts and as such, there is another way to configure it: border-box.

With `border-box`, the provided width of the element will be the actual width. The content-box will absorb the variations caused by the padding and border
