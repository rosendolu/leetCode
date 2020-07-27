/**
 * 岛屿的最大面积
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid = []) {
	let res = 0;
	let i = 0;
	let j = 0;

	while (i < grid.length) {
		while (j < grid[0].length) {
			if (grid[i][j]) {
				res = Math.max(dfs(grid, i, j), res);
			}
			j++;
		}
		j = 0;
		i++;
	}
	console.log(res);
	return res;
}
/**
 *  adjacent matrix
 * @param {*} graph
 * @param {*} i
 * @param {*} j
 */
function dfs(graph = [], i = 0, j = 0) {
	if (
		i < 0 ||
		i >= graph.length ||
		j < 0 ||
		j >= graph[0].length ||
		graph[i][j] == 0
	) {
		return 0;
	}
	graph[i][j] = 0;
	let count = 1;
	count += dfs(graph, i + 1, j);
	count += dfs(graph, i - 1, j);
	count += dfs(graph, i, j + 1);
	count += dfs(graph, i, j - 1);
	return count;
}

/**
 * adjacent matrix
 * @param {*}
 */
function bfs(graph = [], i = 0, j = 0) {
	const queue = [];
	queue.push([i, j]);
	const row = graph.length;
	const column = graph[0].length;

	while (queue.length > 0) {
		let index = queue.shift();
		console.log(graph[index[0]][index[1]]);
		// 边界判断
		if (index[0] + 1 < row) {
			if (graph[index[0] + 1][j] !== -1) {
				queue.push([index[0] + 1, j]);
			}
		}
		if (index[1] + 1 < column) {
			if (graph[index[0]][index[1] + 1] !== -1) {
				queue.push([index[0], index[1] + 1]);
			}
		}
		// 访问过的标记为 -1 不再入队
		graph[index[0]][index[1]] = -1;
	}
	// bfs(graph, i, j + 1);
}

module.exports = { maxAreaOfIsland, bfs, dfs };
