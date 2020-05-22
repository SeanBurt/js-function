// ---1
// judge type: typeof instanceof Object.prototype.toString.call()
var o = {
  a: 1,
  f: function () {
    console.log("f");
  },
};
console.log(typeof o.a, typeof o.f, typeof o.b, typeof o, typeof null);

// ---2
// function parameter passing
var a = 3;
function func(a) {
  a = 10;
  console.log(a);
}
func();
console.log(a);

var o = {};
function func1(o) {
  o.name = "mr li";
}
console.log(o.name);
func1(o);
console.log(o.name);

var o1 = {};
function func2(o) {
  o.name = "mr li";
  o = new Object();
  o.name = "mr lee";
}
console.log(o1.name);
func2(o1);
console.log(o1.name);

// ---3
// judge object type
const obj = {
  i: 0,
  toString: function () {
    return this.i++;
  },
};
obj.i++;
if (obj == 1 && obj == 2 && obj == 3) {
  console.log(obj.i);
}

// ---4
// map and parseInt
["1", "2", "3"].map(parseInt);

// ---5
// prototype and constructor
function SuperType() {
  this.value = true;
}
SuperType.prototype.getSuperTypeValue = function () {
  return this.value;
};
function SubType() {
  this.subValue = true;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubTypeValue = function () {
  return this.subValue;
};
let instance = new SubType();
instance instanceof SubType;
instance instanceof SuperType;
instance.constructor === SubType;
instance.constructor === SuperType;

// ---6
// temporal dead zone
let x = 10;
function func() {
  console.log(x);
  let x = 20;
  return x * x;
}
func();

// ---7
// NaN null undefined
null == undefined;
null === undefined;
null == NaN;
NaN == NaN;
NaN === NaN;

// ---8
// about this (not strict pattern)
var name = "the window";
var obj = {
  name: "the object",
  getName: function () {
    return function () {
      return this.name;
    };
  },
};
console.log(obj.getName()());

var name = "the window";
var obj = {
  name: "the object",
  getName: function () {
    var that = this;
    return function () {
      return that.name;
    };
  },
};
console.log(obj.getName()());

var name = "the window";
var obj = {
  name: "the object",
  getName: function () {
    return this.name;
  },
};
console.log(obj.getName());
console.log(obj.getName());
console.log((obj.getName = obj.getName)());

// ---9
// recursion
var i = 0;
function fn() {
  i++;
  if (i < 10) {
    fn();
  } else {
    return i;
  }
}
var result = fn();
console.log(result);

// ---10
// basic packaging type
let str = "some text";
str.color = "red";
console.log(str.color);

// ---11
// distinct array
Array.prototype.distinct = function () {
  let ary = this;
  let result = [];
  for (let i = 0, l = ary.length; i < l; i++) {
    for (let x = i + 1; x < l; x++) {
      if (ary[i] === ary[x]) {
        j = ++i;
      }
    }
    result.push(ary[i]);
  }
  return result;
};
const arra = [1, 2, 3, 4, 4, 1, 1, 2, 1, 1, 1];
arra.distinct();

Array.prototype.distinct1 = function () {
  let arr = this;
  let obj = {};
  let result = [];
  for (let i = 0, l = arr.length; i < l; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      result.push(arr[i]);
    }
  }
  return result;
};
var a = [1, 2, 3, 4, 5, 6, 5, 3, 2, 4, 56, 4, 1, 2, 1, 1, 1, 1, 1, 1];
var b = a.distinct1();
console.log(b.toString());

let arr = [1, 2, 3, 3];
let resultarr = [...new Set(arr)];
console.log(resultarr);
