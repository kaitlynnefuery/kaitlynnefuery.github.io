

function Model(param1){
  //console.log(param1.name, param1.company, param1.attr3)

  //this.param1 = ;
  //this.param2 = ;

  this.get = function (args) {
    // console.log('args: ', args);
    // console.log('this: ', this);
    // console.log('param1: ', param1);
    // return param1.name;
    if (param1 === undefined) {
      return undefined
    }
    else {
      // console.log(args)
      // param1.name, param['name']
      return param1[args];
    }
  }
}

// Write code above here

var person = new Model();
var person2 = new Model({
  name: 'Maja',
  company: 'Airbnb',
  attr1: 1,
  attr2: 2,
  attr3: 3
});

// var car = new Model({
//   make: 'mazda',
//   model: 'protege',
// });

console.log(person.get('name')); // undefined
console.log(person2.get('company')); // Maja

// person.set('name', 'Kaitlynne');

// console.log(person.get('name')); // Kaitlynne
