const { log } = console;
// import { threeSum2 } from './src/string/three_sum.js';
import { insertionSort } from './algorithm/sort/insertion_sort.js';
const arr1 = [-1, 0, 1, 2, -1, -4],
	arr2 = [1, 2, -2, -1],
	arr4 = [0, 0, 0, 0],
	arr5 = [-1, 0, 1, 2, -1, -4],
	arr6 = [4, 5, 3, 2, 1, 0],
	arr7 = [0, 1, 2, 3, 4],
	arr3 = [1, 2, -2, -1];

// [[-2,-1,3],[-2,0,2],[-1,0,1]]
insertionSort(arr6);

import { Stack } from './data_structure/stack_array.js';
const stack = new Stack(1, 2, 3);
stack.push(4);
stack.pop();
stack.peek();
log(stack.toString());
