//? Implementing ADT using classes

class Bag {
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

        if( this.find(value) ) {
            this.data[value]++;
        } else {
            this.data[value] = 1;
        }
    }

    remove(value) {
        if ( this.find(value) ) {
            this.count--;

            if( this.data[value] > 1 ) {
                this.data[value]--;
            } else {
                delete this.data[value];
            }
        }
    }
}

console.log('ADT with Classes');

const b = new Bag();

console.log(b.isEmpty());

b.add("HOME");
b.add("HOME");
b.add("SWEET");
b.add("SWEET");
b.add("HOME");

b.add("THERE'S");
b.add("NO");
b.add("PLACE");
b.add("LIKE");
b.add("HOME");

console.log(b.isEmpty());   // false

console.log(b.find("YES")); // false
console.log(b.find("NO"));  // true

console.log(b.greatest());  // THERE'S
b.remove("THERE'S");
console.log(b.greatest());  // SWEET

//? Implementing ADT with mutable functions

const newBag = () => ({count: 0, data: {}});

const isEmpty = (bag) => bag.count === 0;

const find = (bag, value) => value in bag.data;

const greatest = (bag) =>
    isEmpty(bag)
        ? undefined
        : Object.keys(bag.data).sort().pop();

const add = (bag, value) => {
    bag.count++;
    if( find(bag, value) ) {
        bag.data[value]++;
    } else {
        bag.data[value] = 1;
    }
    return bag;
}

const remove = (bag, value) => {
    if( find(bag, value) ) {
        bag.count--;
        if (bag.data[value] > 1) {
            bag.data[value]--;
        } else {
            delete bag.data[value];
        }
    }
    return bag;
}

console.log('ADT with mutable functions');

let bag2 = newBag();
console.log(isEmpty(bag2));     // true

bag2 = add(bag2, "HOME");
bag2 = add(bag2, "HOME");
bag2 = add(bag2, "SWEET");
bag2 = add(bag2, "SWEET");
bag2 = add(bag2, "HOME");

bag2 = add(bag2, "THERE'S");
bag2 = add(bag2, "NO");
bag2 = add(bag2, "PLACE");
bag2 = add(bag2, "LIKE");
bag2 = add(bag2, "HOME");

console.log(isEmpty(bag2));     // false

console.log(greatest(bag2));    // THERE'S
console.log(find(bag2, "YES")); // false
console.log(find(bag2, "NO"));  // true

bag2 = remove(bag2, "THERE'S");
console.log(greatest(bag2));