// PART 1: Start ke 5 Questions (Different Answers)

// Q1. Create a full name message using variables.
let firstName = "Affan";
let lastName = "Khurram";
let fullName = firstName + " " + lastName;
alert("My full name is " + fullName);
// Yahan pe maine do alag variables banaye — first name aur last name. Unko + se joda aur alert mein full name dikhaya.


// Q2. What will be the output of this code?
let a = "5";
let b = 2;
let result = a + b;
console.log(result); // Output: "52"
// "5" string hai, aur jab string aur number ko + se jodte hain, to dono string ban jate hain. Isliye result "52" aaya.


// Q3. Guess the output and explain:
let a1 = 10;
let b1 = 5;
let c = ++a1 + b1-- + --b1;
console.log(c); // Output: 19
// ++a1 → 11, b1-- → 5 (baad mein 4), --b1 → 3 → total 11 + 5 + 3 = 19


// Q4. Convert string '20' to number and multiply with 3
let str = "20";
let num = Number(str);
console.log(num * 3); // Output: 60
// "20" string ko Number() function se number banaya, phir 3 se multiply kiya.


// Q5. Write an expression that gives remainder 1 when divided by 3
let num2 = 10;
console.log(num2 % 3); // Output: 1
// 10 ko 3 se divide karne pe remainder 1 bachta hai, isliye output 1 hai.


// PART 2: End ke 5 Questions (Same Questions, Answers Different)

// Q6. Alert message using variables
let student = "Hassan";
let score = 88;
alert(student + " got " + score + " marks in JavaScript!");
// Simple do variables banaye — ek naam ka aur ek score ka — dono ko message mein alert kiya.


// Q7. Combine pre/post increment in one expression
let x = 5;
let y = x++ + ++x - --x;
console.log(y); // Output: 6
// x++ se pehle 5 use hua, ++x se x 7 ho gaya, phir --x se 6. Total: 5 + 7 - 6 = 6


// Q8. Illegal variable names and correct ones

// let 1user; x
// let my name; x
// let @data; x
// let const; x
// let user-age; x

//  let user1;  right
//  let my_name;  right
//  let dataValue;  right
//  let myConst;   right
//  let userAge;   right

// Jo variables galat the wo ya to number se start ho rahe the, ya space, ya symbols ya JS ke reserved words use kar rahe the. Maine unko sahi kar diya.


// Q9. Perfume price calculation
let perfumePrice = 2500;
let totalPerfumes = 4;
let bill = perfumePrice * totalPerfumes;
alert("Total bill is " + bill + " PKR");
// Ek perfume ki price ko 4 se multiply kiya, aur total bill ko alert mein dikhaya.

// Q10. Math expression using 3 operators
let n = 5;
let results = (n + 3) * 2 - 1;
console.log("Results is:", results); // Output: 15
// Pehle number mein 3 add kiya, phir usko 2 se multiply kiya, aur end mein 1 minus kiya. Final result 15 aaya.


