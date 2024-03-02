function unroll(grid) {
    let unrolled = [];
    while (grid.length > 0) {
        // Unroll top row
        unrolled = unrolled.concat(grid.shift());

        // Unroll right column
        for (let i = 0; i < grid.length; i++) {
            unrolled.push(grid[i].pop());
        }

        // Unroll bottom row (reversed)
        if (grid.length > 0) {
            unrolled = unrolled.concat(grid.pop().reverse());
        }

        // Unroll left column (reversed)
        for (let i = grid.length - 1; i >= 0; i--) {
            unrolled.push(grid[i].shift());
        }
    }
    return unrolled;
}

// Example usage:
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(unroll(grid));

module.exports = unroll;
