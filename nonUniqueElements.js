/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */

export default function nonUniqueElements(data) {
  // your solution goes here
  let uniqueElements = [];
  let nonUniqueElements = [];
  for (let index in data)
  {
    let filteredDataForLength = data.filter(item => item == data[index]);
    if (filteredDataForLength.length > 1)
      nonUniqueElements.push(data[index]);
    else
      uniqueElements.push(data[index]);
  }
  data = nonUniqueElements;
  return data
}

/*
  функции были созданы еще до первого коммита в мастер,
  поэтому в pull_request видимо не отображались изменения
*/
