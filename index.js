export function inRange(range, num) {
	if (range.length !== 2) throw new Error(`The range array must have exactly 2 numbers`);
	let [min, max] = range;

	// If any of the args are strings, this can give unpredictable results.
	errorIfNotAllTypeNumber([min, max, num]);

	if (min > max) {
		throw new Error('In the range array, the first number must be less than or' +
			' equal to the second number');
	}
	return ((num >= min) && (num <= max));


	function errorIfNotAllTypeNumber(items) {
		for (let i=0, length=items.length;  i < length;  ++i) {
			if (typeof items[i] !== 'number') throw new Error('Input must be of type "number"');
		}
	}
}
