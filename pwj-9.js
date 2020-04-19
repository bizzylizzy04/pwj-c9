// ***Challenge 9: Sort by Biggest Numbers
function sortBestRatingsFirst(numbers) {
    // Run length - 1
    // Start loop at index 1
    // Find max from remaining list
    // Find new max & know its location
    // sortBestRatingsFirst([5, 8, 2, 9, 3, 10])

    // find max
    for (let j = 0; j < numbers.length - 1; j++) {

        max_num = numbers[j];
        max_location = j;

        for (let i = j; i < numbers.length; i++) {
            if (numbers[i] > max_num) {
                // Know max & its index (location)
                max_num = numbers[i];
                max_location = i;
            }
        }

        // swap the first & last
        numbers[max_location] = numbers[j]; // --> 10
        numbers[j] = max_num;
    }

    return numbers;
}

console.log(sortBestRatingsFirst([5, 8, 2, 9, 3, 10]));
console.log(sortBestRatingsFirst([9, 8, 1, 12, 3, 10]));
console.log(sortBestRatingsFirst([5, 9, 8, 1, 12, 3, 10]));