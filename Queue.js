class Queue {
  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  };

  enqueue(element) {
    this.collection.push(element)
  };

  dequeue() {
    return this.collection.shift();
  };

  front() {
    return this.collection[0];
  };

  size() {
    return this.collection.length;
  };

  isEmpty = function() {
    return (this.collection.length === 0);
  };
};


// let a = new Queue();
// a.enqueue('a');
// a.enqueue('b');
// console.log(a.front());
// console.log(a.dequeue());
// console.log(a.front());
// console.log(a.dequeue());
// console.log(a.size());
// console.log(a.isEmpty());


class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  
  printCollection() {
    console.log(this.collection);
  };

  enqueue(element) {
    if(this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length;     ) {
        if(element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
    
      if(!added) {
        this.collection.push(element);
      }
    }
  };

  dequeue() {
    let value = this.collection.shift();
    return value[0];
  };

  front() {
    return this.collection[0];
  };

  size() {
    return this.collection.length;
  };

  isEmpty() {
    return (this.collection.length === 0);
  };
};


let b = new PriorityQueue();
b.enqueue(['Beau Carnes', 2]);
b.enqueue(['Jean MacArthur', 3]);
b.enqueue(['Helcio Itiyama', 1]);

b.printCollection();
b.dequeue();
b.printCollection();
console.log(b.front());