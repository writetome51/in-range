export function inRange(range, num) {
	if (range.length !== 2) throw new Error(`The range array must have exactly 2 numbers`);
	let [min, max] = range;

	if (min > max) {
		throw new Error('In the range array, the first number must be less than or' +
			' equal to the second number');
	}
	return ((num >= min) && (num <= max));
}
