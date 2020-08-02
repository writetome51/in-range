#  inRange(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;range: [number, number], <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num<br>): boolean

Checks if `num` is within `range`.   
`range` holds 2 numbers:  [min,  max]


## Examples:
```js
inRange([2.5, 8.5], 8.6); // --> false

inRange([0, 200], 100); // --> true

inRange([-10, 0], -10); // --> true

inRange([-10, 0], -11); // --> false
```

## Installation
`npm i  @writetome51/in-range`

## Loading
```js
import { inRange} from '@writetome51/in-range';
```
