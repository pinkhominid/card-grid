<h1 align="center">
  <br>
  <img width="600" src="https://raw.githubusercontent.com/pinkhominid/card-grid/master/demo/demo.png" alt="Card Grid">
  <br>
  <br>
  <br>
</h1>

> Pure and simple card grid Web Component inspired by [Google Web Fundamentals](https://developers.google.com/web/fundamentals/web-components/) and [Templates the Hard Way](https://github.com/matthewp/templates-the-hard-way).

## Install
```sh
npm install card-grid
```

## Import
```javascript
import './node_modules/card-grid/dist-web/index.js';
```
OR
```html
<script type="module" src="./node_modules/card-grid/dist-web/index.min.js"></script>
```

## CDN Import
You can also just import from CDN without installing
```javascript
import 'https://unpkg.com/card-grid@^0.1/dist-web/index.min.js';
```
OR
```html
<script type="module" src="https://unpkg.com/card-grid@^0.1/dist-web/index.min.js"></script>
```

## Use
```html
<card-grid>
  <card-item>
    <h1>Card Item</h1>
    <div class=rating>★ ★ ★ ★ ★</div>
  </card-item>
  <card-item>
    <h1>Card Item</h1>
    <div class=rating>★ ★ ★ ★ ★</div>
  </card-item>
</card-grid>
```
See /demo and /src for finer points.

## License
MIT