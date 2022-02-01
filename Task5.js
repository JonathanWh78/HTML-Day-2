//1
let strictA = true;
let strictB = 1;
console.log(strictA == strictB);
console.log(strictA === strictB);

//2
console.log(strictA != strictB);
console.log(strictA !== strictB);

//3
let age = 25;

if ((age >=18) && (age<65))
{
    console.log("They are between 18 and 65");
}
else if(age <18)
{
    console.log("Underage");
}
else
{
    console.log("Over 65");
}

//4
age > 50 ? console.log("Over 50"):console.log("Under 50");