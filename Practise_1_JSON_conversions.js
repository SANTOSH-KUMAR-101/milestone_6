// PROBLEM STATEMENT
//  How to Convert object from JSON Object and vice versa

var object1 = {
    name: "santosh",
    code: "JSON"
}

console.log(object1);
console.log(object1.name);

var JSON1 = JSON.stringify(object1);

console.log(JSON1);
console.log(JSON1.name);
var JSON_to_Obj = JSON.parse(JSON1);

console.log(JSON_to_Obj);
console.log(JSON_to_Obj.name);
