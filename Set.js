class MySet {
  constructor() {
    this.collection = [];
  }

  //Check the presence of an element and return true or false
  has(element) {
    return(this.collection.indexOf(element) !== -1);
  };

  //Return all the values in the Set
  values() {
    return this.collection;
  };

  //Add an element to the Set
  add(element) {
    if(!this.has(element)) {
      this.collection.push(element);
      return true;
    }

    return false;
  };

  //Remove an element to the Set
  remove(element) {
    if(this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
     return true;
    }

    return false;
  };

  //Return the size of the collection
  size() {
    return this.collection.length;
  };

  //Return the Union of two sets;
  union(otherSet) {
    let unionSet = new MySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach(elem => unionSet.add(elem));
    secondSet.forEach(elem => unionSet.add(elem));

    return unionSet;
  };

  //Return the Intersection of two sets;
  intersection(otherSet) {
    let intersectionSet = new MySet();
    let firstSet = this.values();
    
    firstSet.forEach(elem => {
      if(otherSet.has(elem)) {
        intersectionSet.add(elem);
      }
    });

    return intersectionSet;
  };

  //Return the difference of two sets;
  difference(otherSet) {
    let differenceSet = new MySet();
    let firstSet = this.values();

    firstSet.forEach(elem => {
      if(!otherSet.has(elem)) {
        differenceSet.add(elem);
      }
    });

    return differenceSet;
  };

  //Test if the set is a subset of a different set;
  subset(otherSet) {
    let firstSet = this.values();
    return firstSet.every(elem => otherSet.has(elem));
  };
};


let SetA = new MySet();
let SetB = new MySet();

SetA.add('a');
SetB.add('a');
SetB.add('b');
SetB.add('c');

console.log(SetA.subset(SetB));
console.log(SetA.intersection(SetB).values());
console.log(SetA.union(SetB).values());
console.log(SetB.difference(SetA).values());