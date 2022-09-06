// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.
let todos: number[] = [1,1,2,2,3,3,4,4,5,5,6,6,7,8,8,9,9];

var losRepetidos = todos.filter((Element, index, array) => array.indexOf(Element) !== index);

function getDifference(a: number[], b: number[]): number[] {
  return a.filter((element) => {
    return !b.includes(element);
  });
}


const diferencia = getDifference(todos, losRepetidos);

console.log(diferencia); 

