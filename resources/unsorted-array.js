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

/**
 * Returns an unsorted array of 100,000 numbers, possibly with duplicates.
 * @returns {number[]}
 */
export function getUnsortedArrayWithDuplicates() {
	const arr = [];
	for (let i = 0; i < 100000; i++) {
		// Pick a random number between 1 and 100,000 (inclusive)
		arr.push(Math.floor(Math.random() * 100000) + 1);
	}
	// Fisher-Yates shuffle (optional, but keeps it unsorted)
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}