# dweet-runtime

This is a browser runtime for [dweets](https://www.dwitter.net). You can include it from JavaScript playgrounds like [CodePen](https://codepen.io/) or [jsFiddle](https://jsfiddle.net/) as a third-party library. Useful for embedding dweets in an article.

## Usage

Add this library as a third-party JS library, either directly from GitHub or by using a CDN provider:

* https://raw.githubusercontent.com/atesgoral/dweet-runtime/1.0.0/lib/index.js
* https://cdn.jsdelivr.net/gh/atesgoral/dweet-runtime@1.0.0/lib/index.js
* https://cdn.rawgit.com/atesgoral/dweet-runtime/1.0.0/lib/index.js

(Change the version (1.0.0) to the latest tagged release.)

Create a `<canvas>` element with id "c":

```html
<canvas id="c"></canvas>
```

Optionally, style the canvas to a certain size or to fit the display area:

```css
body { padding: 0; margin: 0; background: #fff }
#c { width: 192px; height: 108px; zoom: 3 }
```

Then, simply define your `u` function and you're good to go:

```js
function u(t) {
  c.width|=0
  x.fillRect(50+C(t)*25,50+S(t)*25,50,50)
}
```
