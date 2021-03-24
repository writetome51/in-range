#  inRange(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[min, max], <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num<br>): boolean

Checks if `num` is within range of  `[min,  max]`.   
`min`,`max`, and `num` must all be type "number".


## Examples:
```js
inRange([2.5, 8.5], 8.6); // --> false

inRange([0, 200], 100); // --> true

inRange([-10, 0], -10); // --> true

inRange([-10, 0], -11); // --> false

// The numbers cannot be strings, because this gives unpredictable results.
// For instance, in string comparison, '30' is greater than both '20' and '100'
inRange(['20', '100'], '30');
// 'Error: Input must be of type "number"'

```

## Installation
`npm i  @writetome51/in-range`

## Loading
```js
import { inRange} from '@writetome51/in-range';
```
