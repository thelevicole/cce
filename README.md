
# Custom cursors made simple
*A jQuery plugin.*

This plugin was originally created to meet the needs of a client job I was working on a while back. It has since gathered a fair bit of interest on [CodePen.io](https://codepen.io/thelevicole/pen/RMGJaJ) so figured I'd give it it's own place on GitHub.

## Quick start

**1.** Include the plugin via jsDelivr CDN
```html
<script src=“https://cdn.jsdelivr.net/gh/thelevicole/cce/dist/cce.min.js”></script>
```

**2.** Create a DOM element
```html
<div class="cursor-item"></div>
```

**3.** Give it some styles
```css
.cursor-item {
	width: 40px;
	height: 40px;
	background: rgba(0, 0, 0, 0.7);
	border-radius: 50%;
	border-top-left-radius: 0;
	border: 2px solid #fff;
	box-shadow: 2px 4px 15px -5px #000;
}
```

**4.** Initiate the plugin
```javascript
$('.cursor-item').cursorElement();
```

## Options
The plugin also accepts the following options
|Name|Default|Description|
|--|--|--|
|offset_x|`0`|Offset the element horizontally by *nth* number of pixels|
|offset_y|`0`|Offset the element vertically by *nth* number of pixels|
|preserve_cursor|`false`|When set to `true`, show the browsers default cursor with the custom element.|

## Advanced styling

**Mouse over element with ID `#element-1`**
```css
.cursor-item {
    transition: background 0.4s;
}
.cursor-item[data-id="example-1"] {
    background: rgba(255, 0, 0, 0.8);
}
```

**Mouse over element with ID `#element-2`**
```css
.cursor-item {
    transition: border-radius 0.4s;
}
.cursor-item[data-id="example-2"] {
    border-radius: 0;
}
```

**On event: `click`**
```css
.cursor-item {
    transition: transform 0.4s;
}
.cursor-item[data-event="click"] {
    transform: scale(0.8);
}
```

**Mouse over element with tag `<a>`**
```css
.cursor-item {
    transition: transform 0.4s;
    transform-origin: top left;
}
.cursor-item[data-el="a"] {
    transform: rotate(45deg);
}
```