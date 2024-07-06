/*
380. Insert Delete GetRandom O(1)

Implement the RandomizedSet class:

    RandomizedSet() Initializes the RandomizedSet object.
    bool insert(int val) Inserts an item val into the set if not present. 
    Returns true if the item was not present, false otherwise.
    bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
    int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). 
    Each element must have the same probability of being returned.

You must implement the functions of the class such that each function works in average O(1) time complexity.

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

Constraints:

    -231 <= val <= 231 - 1
    At most 2 * 105 calls will be made to insert, remove, and getRandom.
    There will be at least one element in the data structure when getRandom is called.


*/

var RandomizedSet = function() {
  // Инициализация объекта и массива
  // Initialize the object and array
  this.dict = {};
  this.arr = [];
};

/**
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  // Если значение уже присутствует, возвращаем false
  // If the value is already present, return false
  if (this.dict[val] !== undefined) return false;

  // Иначе добавляем значение в объект и массив, затем возвращаем true
  // Otherwise, add the value to the object and array, then return true
  this.arr.push(val);
  this.dict[val] = this.arr.length - 1;
  return true;
};

/**
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  // Если значение отсутствует, возвращаем false
  // If the value is not present, return false
  if (this.dict[val] === undefined) return false;

  // Иначе удаляем значение из объекта и массива, затем возвращаем true
  // Otherwise, remove the value from the object and array, then return true
  let index = this.dict[val];
  let lastElement = this.arr[this.arr.length - 1];
  this.arr[index] = lastElement;
  this.dict[lastElement] = index;
  this.arr.pop();
  delete this.dict[val];
  return true;
};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  // Возвращаем случайный элемент из массива
  // Return a random element from the array
  let randomIndex = Math.floor(Math.random() * this.arr.length);
  return this.arr[randomIndex];
};