// //your JS code here. If required.

//  const student = {
// 	name: "john",
// 	age: "20",
// 	city: "delhi"
// }

// function getKeys(obj){
// 	return Object.keys(obj);
// }


Object.prototype.getKeys = function () {
  return Object.keys(this);
}
 
// Create student object
const student = {
  name: "John"
};