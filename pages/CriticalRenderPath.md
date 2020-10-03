# Critical Rendering Path

1. DOM
2. CSSOM
3. CSSOM
4. Render Tree
5. Layout
6. Paint

Layout being the most expensive of them all as it needs to compute the actual physical position of all the boxes to render in the page.
This is why appending to the DOM should happen at the last moment so as to prevent the `layout` step from happening over and over again.
