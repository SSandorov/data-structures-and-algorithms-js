/**
 * Returns an unsorted array of 100,000 unique numbers.
 * @returns {number[]}
 */
export function getUnsortedArray() {
	const arr = Array.from({ length: 100000 }, (_, i) => i + 1);
	// Fisher-Yates shuffle
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}