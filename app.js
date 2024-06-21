// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
const array2 = array.map(item => item.name )
console.log(array2)
// result: ["apple", "banana", "watermelon"]