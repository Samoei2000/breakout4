let price = 150;
let product = "bread";
let isAvailable = true;
console.log(typeof price);
console.log(typeof product);
console.log(typeof isAvailable);

let numbers = [30,40,50];
const car = {
    make: "ford",
    model: "mustang",
    year: 1964
};
car.year = 2020;
console.log(car);

let a = 5;
let b = "5";
let example1 = (a == b);
let example2 = (a === b);
console.log(example1);
console.log(example2);
//example1 checks if the values are equal after converting them to a common type.example2 checks if the values and data types are equal.

let str1 = "Ian";
let str2 = "mwenda";
let result = str1 < str2;
console.log(result);

let age =21;
if (age < 13){
    console.log("child");
}else if (age >= 13 && age <= 19){
  console.log("teenager");  
}else{
    console.log("adult");
}


let score =30;
if (score >= 90){
    console.log("A");
}else if (score >= 80){
  console.log("B");  
}else if(score >=70){
    console.log("C");
}else if (score >= 60){
    console.log("D");  
}else{
    console.log("F");
}

function checkEven(num){
    if (num > 0 && num % 2 == 0){
      console.log("the number is positive and even");  
    }else{
        console.log("the number is not positive and even");
    }
}
checkEven(7);

let admin = false;
let subscription = false;
if(admin || subscription){
    console.log("access granted");
}else{
    console.log("access denied");
}

for(let i = 1; i <= 20; i++){
    if(i % 3 !== 0){
        console.log(i)
    }
}

let dayNumber = 3;
switch(dayNumber) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number!");
        break;
}

let n = 30;
let sum = 0;
let i = 1;
while(i <= n){
    sum += 1
    i++
}
console.log(sum);

