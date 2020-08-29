#  inRange(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[min, max], <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num<br>): boolean

Checks if `num` is within range of  `[min,  max]`.   


## Examples:
```js
inRange([2.5, 8.5], 8.6); // --> false

inRange([0, 200], 100); // --> true

inRange([-10, 0], -10); // --> true

inRange([-10, 0], -11); // --> false

// Be careful if the numbers are strings.
// This triggers error because in string comparison '20' is greater than '100'
inRange(['20', '100'], 1);
// "Error: In the range array, the first number must be less than or 
// equal to the second number"

```

## Installation
`npm i  @writetome51/in-range`

## Loading
```js
import { inRange} from '@writetome51/in-range';
```
