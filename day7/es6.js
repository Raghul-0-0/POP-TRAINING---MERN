//ES -> ECMA Script

// 1. function
function testFunction() {
    console.log("This is test Function");
}

testFunction();

//2.Arrow Function

var testArrowFunction = () => {
    console.log("This is test arrow function");
}

testArrowFunction();

//3.Scoping function

var a = 10;
console.log(a);

{
    let b = 20;
    console.log(b);
    let a = 30;
    console.log(a);
    var c = 40;
    console.log(40);
    console.log(a);
    d = 50;
}
console.log(c);
console.log(a);
console.log(d);

//4.Ternary Operator

a=10
console.log((a%2)?"Odd":"Even")




//8. Hoisting 
                                    