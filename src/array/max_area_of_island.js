const { log } = console;
/**
 * 岛屿的最大面积
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid = []) {
	let res = 0;
	if (grid.length <= 2) return res;
	if (grid[0].length <= 2) return res;
	let i = 0,
		j = 0;

	while (i < grid[0].length) {
		while (j < grid.length) {
			res = Math.max(dfs(grid, i, j), res);
			j++;
		}
		j = 1;
		i++;
	}
}
function dfs(grid = [], i, j) {
	if (
		i < 0 ||
		j < 0 ||
		i === grid.length ||
		j == grid[0].length ||
		grid[i][j] !== 1
	) {
		return 0;
	}

	grid[i][j] = 0;
	let ans = 1;

	return ans;
}
function bfsSearch(grid = []) {
	const res = [];
	const task = [];
	let i = 0;
	let j = 0;
	if (i < grid.length - 1 && j < grid[0].length - 1) {
		if (grid[i][j] !== -1) {
			task.push(grid[i][j]);
		}
		if (grid[i + 1][j] !== -1) {
			task.push(grid[i + 1][j]);
		}
		if (grid[i][j + 1] !== -1) {
			task.push(grid[i][j + 1]);
		}
	}
	log(task);
	return bfs(grid, i + 1, j);
}
function bfs(grid = [], i, j) {}
module.exports = { maxAreaOfIsland, bfsSearch };
