//? 1. Chaining Calls
//* Modify the Bag methods so you can chain additions in the following fashion:
/*
const b = new Bag();
b.add("Home").add("Home");
b.add("SWEET").add("SWEET").add("HOME")
*/
//* You should also be able to chain removals and other operations, such as the following, taht would remove two values
//* and then test wether the bag becomes empty
// b.remove("NO").remove("HOME").isEmpty();

export class Bag {
  count = 0;
  data = {};

  isEmpty() {
    return this.count === 0;
  }

  find(value) {
    return value in this.data;
  }

  greatest() {
    return this.isEmpty() ? undefined : Object.keys(this.data).sort().pop();
  }

  add(value) {
    this.count++;

    if (this.find(value)) {
      this.data[value]++;
    } else {
      this.data[value] = 1;
    }
    return this;
  }

  remove(value) {
    if (this.find(value)) {
      this.count--;

      if (this.data[value] > 1) {
        this.data[value]--;
      } else {
        delete this.data[value];
      }
    }
    return this;
  }
}

//? 2. Array, not objects
//* Can you implement the bag ADT using arrays instead of objects? You could represent
//* the bag with an ordered array to make the greatest() function implementation really
//* speedy. Of course, add() should take care of maintaining the order of the array.

const newBag = () => [];

const isEmpty = (bag) => bag.length === 0;

const find = (bag, value) => bag.includes(value);

const greatest = (bag) => (isEmpty(bag) ? undefined : bag[bag.length - 1]);

const add = (bag, value) => {
  bag.push(value);
  bag.sort();
  return bag;
};

const remove = (bag, value) => {
  const pos = bag.indexOf(value);
  if (pos !== -1) {
    bag.splice(pos);
  }
  return bag;
};

//? 3. Extra operations
//* Only a few extra operations for a bag were described in this chapter, but for some
//* applications, you might need added or changed operations; can you think of any?

/*
Operation			Signature														Description
Count all			bag -> integer											Given a bag, return how many values it contains.
	Count value		bag x value -> integer						Given a bag and a value, return how many times it’s in the bag.
	Add many			bag x value x integer -> bag			Given a new value and a count, add so many copies of the value to the bag.
	Remove all		bag x value -> bag								Given a bag and a value, remove all the value’s instances from the bag.
	Find next			bag x value -> value | undefined	Given a bag and value, find the closest higher value to the value in the bag.
*/
