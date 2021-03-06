# js-zip

> Implement zip function of python, used to transform a matrix,such as:

```js
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
```
to:
```js
[
    [1,4,7],
    [2,5,8],
    [3,6,9]
]
```
Each row must be **iteratable object**,such as Array,String
## Installation

> npm i -S js-zip

## Example
- Multi Arrays
```js
const JsZip = require('js-zip');
const a = [1,2,3];
const b = [4,5,6];
const c = [7,8,9];
const matrix = JsZip(a, b, c);
```
output matrix is:
```js
[
    [1,4,7],
    [2,5,8],
    [3,6,9]
]
```
- Matrix
```js
const JsZip = require('js-zip');
const arr = [[1,2,3], [4,5,6], [7,8,9]];
const matrix = JsZip(...arr);
```
output matrix is:
```js
[
    [1,4,7],
    [2,5,8],
    [3,6,9]
]
```
- String List
```js
const JsZip = require('js-zip');
const arr = ['abc', 'def', 'xyz'];
const maxtrix = JsZip(...arr);
```
output matrix is:
```js
 [ 
     [ 'a', 'd', 'x' ], 
     [ 'b', 'e', 'y' ], 
     [ 'c', 'f', 'z' ] 
 ]
 ```
 - Use <script> label
 ```js
<script type="text/javascript" src="../dist/js-zip.min.js"></script>
<script type="text/javascript">
    (function() {
        var a = [1,2,3];
        var b = [4,5,6];
        const maxtrix = JsZip(a,b);
    })();
</script>
 ```
  ## 4. License

MIT@[ZiQiangWang](https://github.com/ZiQiangWang).
