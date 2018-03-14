console.log("Hello world");

var name = "Joe";

function greeting(myName) {
  console.log("Hi my name is " + myName);
}

greeting(name);

function addUp(one, two){
  return one + two;
}

function evenOrOdd(number){
  if(number % 2 == 0){
    console.log(number + " is even!");
  } else {
    console.log(number + " is odd!");
  }
}

console.log("Adding 2 and 8 is " + addUp(2,8));
