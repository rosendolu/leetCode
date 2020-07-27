/* eslint-disable no-unused-vars */
const { log } = console;

var arr1 = [1, 3, 5, 4, 7],
	arr2 = [1, 2, 3, 0, 4, 9, 0],
	arr4 = [0, 0, 0, 0],
	arr5 = [-1, 0, 1, 2, -1, -4],
	arr6 = [4, 5, 3, 2, 1, 0],
	arr7 = [0, 1, 2, 3, 4],
	arr8 = [0, 5, 2, 1, 6, 3],
	arr3 = [1, 2, 3, 4];
// 4
// 4 3 2 1

var grid = [
	[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
	[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
];

var grid2 = [
	[0, 2, 5, 8, 11],
	[1, 4, 7, 10, 13],
	[3, 6, 9, 12, 14],
];

var grid3 = [
	[0, 5, 6],
	[1, 5, 7],
	[2, 3, 4],
];
// const { maxAreaOfIsland, bfs, dfs } = require('./src/graph/max_area_of_island');
// bfs(grid2);
// dfs(grid3);
// maxAreaOfIsland(grid);

// const { findLengthOfLCIS } = require('./src/array/findLengthOfLCIS');
// findLengthOfLCIS([2, 2, 2, 2, 2]);

const { findKthLargest } = require('./src/array/findKthLargest');
log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
